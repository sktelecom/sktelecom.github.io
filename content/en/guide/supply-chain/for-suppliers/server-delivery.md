---
title: "Generating a Server (OS + Application) SBOM"
linkTitle: "Server SBOM"
weight: 4
type: docs
description: >
  How to build the SBOM for a server delivered with an application on top of an OS such as RHEL or CentOS. Scan the delivered state in one pass, then supplement it with dependencies the build tool resolves and with statically linked libraries, and merge everything into one BOM.
---

This document covers only what a server delivery needs in addition. Read [How to Generate an SBOM](../creation-guide/) first for choosing the scan target and using the tools. What follows here is covering statically linked libraries, merging several SBOMs, and the submission unit for a cluster.

The baseline for a server SBOM is a single scan of the rootfs or image as delivered. That one scan captures both the OS packages and the application dependencies installed on top of them. Two things escape it and must be generated separately and merged in: dependencies that the build tool has to resolve (Maven, Gradle, and so on), and statically linked libraries. Missing the statically linked ones is the most common cause of rejection in server delivery.

## What a server SBOM must contain

| Item | Target | Symptom if missing |
|----|------|--------------|
| OS packages | Every package registered in the rpm/dpkg/apk database | OS vulnerabilities omitted |
| Application dependencies | The delivered application and its package manager dependencies (direct and transitive) | App dependencies omitted |
| Statically linked libraries | Libraries built into the binary, such as openssl | Caught by no scan at all |

## Baseline: scan the delivered state in one pass

Scan the server's rootfs (the extracted root filesystem) or its container image with Syft. It reads the package database (rpm/dpkg/apk) and identifies every installed package with a real purl (`pkg:rpm/...`), and the same scan collects the application dependencies as well.

```bash
# Against a rootfs directory
syft dir:/path/to/server-rootfs -o cyclonedx-json=server_bom.json

# If the server is packaged as a container image
syft myserver:7 -o cyclonedx-json=server_bom.json
```

The target must be the state delivered after the build, not the original base image you received, because it must include the OS packages installed during the build.

The target must have a package database. Scanning a folder that only holds unpacked installation files with no rpm database yields empty purls and is rejected.

{{% alert title="Scanning only the application source drops the OS packages entirely" color="warning" %}}
Server deliveries repeatedly arrive with only the application source tree scanned. In that case not a single installed rpm package is included, so upgrading the OS never shows up in the SBOM. Confirm first that the scan target is the rootfs or image as delivered.
{{% /alert %}}

## Cases that need a separate SBOM to merge in

### Dependencies the build tool resolves

For Maven and Gradle, dependencies live in a local repository outside the project, so a rootfs scan or a Syft source scan captures only the directly declared libraries and loses the transitive ones. Generate these separately from the application source with cdxgen.

```bash
cd /path/to/app-source
cdxgen -o app_bom.json
```

A pure CMake/Make application with no manifest yields a sparse component list. Apply the statically linked section below as well in that case.

### Statically linked libraries (the blind spot)

Statically linked libraries are not declared by any package manager and are not registered in the OS package database, so no scan catches them. There is no fully automatic path, so use two approaches together. Analyze the delivered binary for as much as tooling can find, and for the rest, record the source and version directly from the build script (for example `openssl 1.1.1za`).

```bash
syft file:/path/to/delivered-binary -o cyclonedx-json=static_bom.json
```

Precise identification of statically linked components is the job of binary composition analysis (BDBA), which SK Telecom performs as supplementary verification.

## Merge into one and submit

SK Telecom's submission system registers one SBOM per product. If you generated separate SBOMs above, merge them with `cyclonedx-cli` into a single BOM for submission and record the delivered product name and version as the top-level component. During the merge, components sharing a purl are counted once, so a library appearing in more than one file is not duplicated.

```bash
cyclonedx-cli merge \
  --input-files server_bom.json app_bom.json static_bom.json \
  --output-file myserver_1.0.0_bom.json \
  --name myserver --version 1.0.0
```

- [cyclonedx-cli](https://github.com/CycloneDX/cyclonedx-cli): the official CycloneDX command-line tool

{{% alert title="Keep the per-scan SBOMs for your own review" color="info" %}}
The official submission is the merged single BOM, but the SBOMs from before the merge show immediately which part is missing or vulnerable, which helps your own review and any resubmission. Keep them alongside.
{{% /alert %}}

## If the product is a cluster or multi-node configuration

A product where several nodes form one cluster is still submitted as one SBOM per product. You do not need one per node.

*   If all nodes have the same configuration, generate and merge based on a single representative node.
*   If the installed software differs by node role (for example a management node and a storage node), generate per role and merge all of them into one submission.

## Verify before submission

Every SBOM, before and after the merge, must have real purls on its components. Follow the [Validation Checklist](../checklist/) for the verification commands and check items.

## If setting up the tools is a burden

[BomLens](../skt-scanner/), provided by SK Telecom, runs the whole process above one script at a time with only Docker installed. The detailed server delivery procedure and examples live in the canonical document in the BomLens repository.

- [BomLens server delivery guide](https://sktelecom.github.io/bomlens/guides/server-delivery/)

## Related Documents

- [How to Generate an SBOM](../creation-guide/): tool selection and how to use Syft and cdxgen
- [Submission Requirements](../requirements/): the required data fields
- [Validation Checklist](../checklist/): items to verify before submission
- [BomLens](../skt-scanner/): SK Telecom's SBOM generation tool
