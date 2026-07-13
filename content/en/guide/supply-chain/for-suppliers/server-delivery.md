---
title: "Generating a Server (OS + Application) SBOM"
linkTitle: "Server SBOM"
weight: 4
type: docs
description: >
  How to build the SBOM for a delivered server — scan the OS and the application as two layers, cover statically linked libraries separately as a blind spot, then merge them into one BOM for submission.
---

This document is an advanced guide for suppliers that deliver a server with an application on top of an OS. For an ordinary application delivery, [How to Generate an SBOM](../creation-guide/) is sufficient.

Treat the server as two layers — the OS and the application — generate each separately, then merge them. Both are produced with [BomLens](../skt-scanner/); only the input changes. In addition, statically linked libraries (for example an openssl built into the binary) are a blind spot that neither layer's scan catches, so they are handled separately. Missing them is the most common cause of rejection in server delivery.

## The two layers of a server

| Layer | What it covers | Symptom if omitted |
|-------|----------------|--------------------|
| OS | The OS and its installed packages (e.g. CentOS plus everything in the rpm database) | OS vulnerabilities missing |
| Application | The delivered application and its package-manager dependencies, direct and transitive | Application dependencies missing |

## Generating each layer

The commands below use BomLens's `scan-sbom.sh` script. For installing BomLens and its basics (downloading the script, the options, the web UI, and so on), see [BomLens](../skt-scanner/) first. If you use open source tools directly instead of BomLens, scan the OS layer with Syft (or Trivy) and the application layer with cdxgen; see [Using Open Source Tools](../creation-guide/) for the commands.

### OS layer

Scan the server's rootfs (the extracted root filesystem) or a container image of it. The target must be the delivered, built state — not the base image you started from — because the OS packages installed during the build have to be included. The package database (rpm/dpkg/apk) is read so every installed package gets a real purl (`pkg:rpm/...`).

```bash
# Target a rootfs directory
scan-sbom.sh --project myserver-os --version 7 --target /path/to/server-rootfs --all --generate-only

# Or, if the server is packaged as a container image
scan-sbom.sh --project myserver-os --version 7 --target myserver:7 --all --generate-only
```

The target must contain the package database. A folder holding only unpacked install files, with no rpm database, yields empty purls and is rejected.

### Application layer

Scan the application source after the build. With a package manager (Maven, npm, pip, Go modules, Conan, and others), transitive dependencies resolve automatically.

```bash
cd /path/to/app-source
scan-sbom.sh --project myserver-app --version 2.0.0 --all --generate-only
```

A pure CMake/Make application with no manifest produces a sparse component list; add `--deep-license` to record the first-party source licenses.

### Static-link libraries (a blind spot)

Statically linked libraries are not declared by a package manager and not listed in the OS package database, so neither layer's scan finds them. There is no fully automatic path, so combine two approaches. Analyze the delivered binary for what tooling can find, and for what it still misses, record the source and version by hand from the build script (for example `openssl 1.1.1za`).

```bash
scan-sbom.sh --project myserver-bin --version 2.0.0 --target /path/to/delivered-binary --all --generate-only
```

A precise inventory of statically linked components comes from binary composition analysis (BDBA), which SK Telecom runs as a complementary check.

## Merge into one BOM for submission

SK Telecom's submission system registers one SBOM per product. Merge the per-layer SBOMs with `--merge` into a single BOM and stamp the top-level component with the delivered product name and version. `--merge` dedupes by purl, so a library appearing in more than one layer is counted once.

```bash
scan-sbom.sh --project myserver --version 1.0.0 \
  --merge myserver-os_7_bom.json myserver-app_2.0.0_bom.json myserver-bin_2.0.0_bom.json \
  --generate-only
```

If the whole server is delivered as a single container image, you can scan that image with `--target` to capture the OS and application layers together.

{{% alert title="Keep the per-layer SBOMs for review" color="info" %}}
The official submission is the merged single BOM, but the per-layer SBOMs show at a glance which layer is missing or vulnerable, so they are useful for your own review and for responding to rejections. Keep them.
{{% /alert %}}

## Multi-node clusters

A product in which multiple nodes form one cluster is still submitted as one SBOM per product; you do not need one per node.

*   If every node has the same configuration, generate and merge the layers from one representative node.
*   If the installed software differs by node role (for example, a management node and storage nodes), generate the per-layer SBOMs for each role, then merge everything into a single BOM with `--merge`.

## Verify before submitting

Check that components carry real purls in both the per-layer SBOMs and the merged one. For the verification commands and the full check, follow the [Validation Checklist](../checklist/).

## Learn more

The detailed procedure and examples for server delivery live in the canonical BomLens documentation.

> [Server delivery guide](https://sktelecom.github.io/sbom-tools/guides/server-delivery/)

## Related Documents

- [BomLens](../skt-scanner/): SK Telecom's SBOM generation tool
- [Using Open Source Tools](../creation-guide/): using cdxgen/Syft directly
- [Submission Requirements](../requirements/): required data fields
- [Validation Checklist](../checklist/): items to verify before submission
