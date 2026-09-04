---
title: "Generating an SBOM with Open Source Tools"
linkTitle: "How to Generate an SBOM"
weight: 2
type: docs
description: >
  Explains how to generate an SBOM for each environment using general-purpose open source tools.
aliases:
  - /guide/supply-chain/for-suppliers/server-delivery/
---

> If you are not comfortable setting up a tool environment and you have Docker installed, consider reviewing [BomLens](../skt-scanner/) first.

## Tool Selection Guide

```mermaid
graph TD
    A{{"Classify the supplied software"}}

    subgraph G1["Software delivery"]
      direction LR
      T1["Source code / app<br>(e.g., OSS/BSS, portals, middleware)"]
      T2["Executable / library<br>(e.g., .jar, .dll, .so)"]
      T3["Firmware with no OS<br>(e.g., bare-metal / RTOS devices)"]
    end

    subgraph G2["Delivery including an OS (e.g., Linux)"]
      direction LR
      T4["Container image<br>(e.g., CNF, containerized network function)"]
      T5["Server / VM image<br>(e.g., VNF, server appliance)"]
      T6["Firmware with an embedded OS<br>(e.g., base stations, routers, OLT/ONT, set-top boxes)"]
    end

    %% Left: source-code scan with an inner box
    subgraph M1["Scan the source code"]
      M1_Sub["cdxgen or BomLens"]
    end

    %% Right: source + OS image scan with inner boxes (stacked vertically)
    subgraph M2["Scan source + OS image"]
      direction TB
      M2_Top["OS (e.g., Linux) scan<br>(Syft or Trivy)"]
      M2_Bottom["Source code scan<br>(cdxgen or BomLens)"]
    end

    A --> G1
    A --> G2
    
    %% Connect only to the group borders (one arrow per box)
    G1 --> M1
    G2 --> M2
    
    %% Groups flow to the next step
    M1 --> P(["Submit the SBOM"])
    M2 --> P

    classDef start fill:#F2F2F2,stroke:#171717,color:#171717,stroke-width:1.5px
    classDef typebox fill:#ffffff,stroke:#c8c8c8,color:#171717,stroke-width:1px
    classDef submit fill:#F2F2F2,stroke:#171717,color:#171717,stroke-width:1.5px
    
    %% White inner-box styles (left/right border colors)
    classDef subwhite_left fill:#ffffff,stroke:#00A651,color:#171717,stroke-width:1px
    classDef subwhite_right fill:#ffffff,stroke:#68127A,color:#171717,stroke-width:1px

    class A start
    class T1,T2,T3,T4,T5,T6 typebox
    class M1_Sub subwhite_left
    class M2_Top,M2_Bottom subwhite_right
    class P submit

    style G1 fill:#F1FAF5,stroke:#00A651,stroke-width:1px,color:#0A5A32
    style G2 fill:#FAF4FB,stroke:#68127A,stroke-width:1px,color:#4A0D57
    
    %% Outer group boxes keep their fill and border colors
    style M1 fill:#D9F0E4,stroke:#00A651,stroke-width:1px,color:#0A5A32
    style M2 fill:#EEDCF3,stroke:#68127A,stroke-width:1px,color:#4A0D57

```

Source code and apps, executables or libraries, and firmware with no OS are all scanned from the source code you developed with cdxgen or [BomLens](../skt-scanner/). Scanning a finished binary directly yields no package manager metadata, so purls are omitted and the SBOM is rejected.

When you ship an OS or base image as part of the delivery (a container image, a server, or firmware with an embedded OS), split it into two layers, scan each, and submit them together. Scan the image or rootfs as delivered with Syft or Trivy for the OS layer, and the source code (the app layer) with cdxgen or BomLens. The per-layer commands and the file naming rule are in [Server delivery](#server-delivery) below.

Statically linked libraries and manually vendored binaries are a blind spot that none of the scans above catch. How to handle them is in [Statically linked libraries](#statically-linked-libraries) below.

If you supply commercial software or a finished product made by a third party and have no access to the source code, obtain the SBOM from the manufacturer instead of scanning. See [Commercial Software](../commercial-software/).

## Major Tools

### cdxgen (recommended for source code analysis)

Automatically analyzes projects in various languages such as Java, Python, Node.js, and Go, and generates an SBOM in CycloneDX format.

- Official documentation: [https://cdxgen.github.io/cdxgen](https://cdxgen.github.io/cdxgen)
- GitHub: [https://github.com/CycloneDX/cdxgen](https://github.com/CycloneDX/cdxgen)
- Supported languages: Java (Maven/Gradle), Python, Node.js, Go, Ruby, PHP, Rust, .NET, C/C++, etc.

> cdxgen statically parses lockfiles and manifests. For accurate results, run it when dependencies are installed or resolved (a lockfile is present, or after a build). Scanning pure source without resolved dependencies may omit some components or purls.

### Syft (recommended for container image and binary analysis)

Analyzes built container images and build artifacts that include package manager metadata to identify both OS packages and application libraries. Supports CycloneDX and SPDX formats.

- Official documentation: [https://github.com/anchore/syft](https://github.com/anchore/syft)
- Recommended analysis targets: built Docker images, OCI images, tar files

{{% alert title="Warning — Do not scan installation directories or collections of raw files (PURL omission causes full rejection)" color="danger" %}}
If you use `syft dir:` mode to scan an installation directory or a collection of binaries that has no
package manager metadata (`package.json`, `go.mod`, `*.jar`, RPM/DEB package DB, etc.), Syft cannot
identify the ecosystem and produces an **SBOM with empty PURLs**. Because SK Telecom's system maps
vulnerabilities by PURL, such an SBOM fails matching entirely and is rejected.

For a real case rejected this way, see [Common Rejection Reasons](../rejection-reasons/).

Run Syft against the following targets.

```bash
# Recommended: scan a built image (PURL and ecosystem identified automatically)
syft <image-name>:<tag> -o cyclonedx-json=sbom.json

# Not recommended: scan an installation directory or raw files (rejected due to missing PURL)
syft dir:/root/nag_pkg   # without package manager metadata, PURL count becomes 0
```

Immediately after generation, be sure to check the PURL count. See the [Validation Checklist](../checklist/) for how to verify.
{{% /alert %}}

### Trivy (container image analysis)

An all-in-one tool that can perform container image analysis and vulnerability scanning together.

- Official documentation: [https://aquasecurity.github.io/trivy/](https://aquasecurity.github.io/trivy/)
- GitHub: [https://github.com/aquasecurity/trivy](https://github.com/aquasecurity/trivy)

{{% alert title="Security Warning — Trivy Supply Chain Attack Incident (2026)" color="danger" %}}
In March 2026, a supply chain attack occurred in which an attacker re-pointed existing release tags
of `aquasecurity/trivy` to inject malware. **The GitHub release v0.69.4 (3/19) and the DockerHub images
v0.69.5 and v0.69.6 (3/22) have been confirmed as compromised, so please stop using them.**

To use Trivy safely, follow these principles.

- **GitHub Actions**: Use a pinned commit SHA or a verified version tag instead of mutable tags (`@master`, `@latest`, `@v1`, etc.).

  ```yaml
  # Recommended: pin to a verified version
  - uses: aquasecurity/trivy-action@0.35.0
  # Safer: pin to a commit SHA
  - uses: aquasecurity/trivy-action@<commit-sha>
  ```

- **Docker images**: Specify a particular version tag, or pin to an image digest (`@sha256:...`).

  ```bash
  docker run aquasecurity/trivy:<verified-version> image <target-image>
  ```

- **Official channels**: Check the latest security advisories through the [GitHub Security Advisory](https://github.com/aquasecurity/trivy-action/security/advisories).

This incident shows that if you do not pin versions when adopting an open source tool, you can be exposed to a supply chain attack at any time. Always specify the version of every external tool and verify its integrity before use.
{{% /alert %}}

### Language-Specific Dedicated Plugins

Using a build tool plugin lets you extract more accurate dependency information.

| Language/Build Tool | Plugin/Tool | Official Documentation |
|---|---|---|
| Java (Maven) | cyclonedx-maven-plugin | [Link](https://github.com/CycloneDX/cyclonedx-maven-plugin) |
| Java (Gradle) | cyclonedx-gradle-plugin | [Link](https://github.com/CycloneDX/cyclonedx-gradle-plugin) |
| Python | cyclonedx-bom | [Link](https://github.com/CycloneDX/cyclonedx-python) |
| Node.js | @cyclonedx/cyclonedx-npm | [Link](https://github.com/CycloneDX/cyclonedx-node-npm) |
| Go | cyclonedx-gomod | [Link](https://github.com/CycloneDX/cyclonedx-gomod) |

## Server Delivery

This applies only when you deliver a server with an application installed on top of an OS. Generate each of the two layers, cover the statically linked libraries that neither layer catches, and submit them together.

| Layer | Target | Symptom if missing |
|----|------|--------------|
| OS | The operating system and every installed package (for example RHEL and every package in the rpm database) | OS vulnerabilities omitted |
| Application | The delivered application and its package manager dependencies (direct and transitive) | App dependencies omitted |

### Scan the two layers separately

For the OS layer, target the server's rootfs (the extracted root filesystem) or its container image. Syft reads the package database (rpm/dpkg/apk) and identifies every installed package with a real purl (`pkg:rpm/...`). The target must be the state delivered after the build, not the original base image you received, because it must include the OS packages installed during the build. Scanning a folder that only holds unpacked installation files with no package database yields empty purls and is rejected.

The target must be the root of the rootfs. Point Syft at a subdirectory and it still reads the package database, but it cannot determine the distribution. Syft takes the distribution from `/etc/os-release` inside the target and writes it into each purl. A correct result looks like `pkg:rpm/rhel/bind@9.11.36-16.el8_10.6`, with the distribution between the type and the package name. When that slot is empty, the SBOM passes format validation but SK Telecom's system cannot identify the packages, so every OS package fails to match and the submission is rejected. Confirm that this file is present in the target before you scan.

```bash
# First confirm the target carries distribution information
cat /path/to/server-rootfs/etc/os-release

# Against a rootfs directory
syft dir:/path/to/server-rootfs -o cyclonedx-json=myserver_1.0.0_os.json

# If the server is packaged as a container image
syft myserver:7 -o cyclonedx-json=myserver_1.0.0_os.json
```

For the application layer, scan the application source after the build is complete. With a package manager (Maven, npm, pip, Go modules, Conan, and so on), transitive dependencies are resolved automatically.

```bash
cd /path/to/app-source
cdxgen -o myserver_1.0.0_app.json
```

The OS-layer scan sometimes picks up dependencies installed as files, such as Python or Node.js packages. Generate the application layer anyway. A C/C++ application that vendors its libraries into the source is not identified by the OS-layer scan at all.

{{% alert title="Scanning only the application source drops the OS packages entirely" color="warning" %}}
Server deliveries repeatedly arrive with only the application source tree scanned. In that case not a single installed rpm package is included, so upgrading the OS never shows up in the SBOM. Confirm that you generated both layers.
{{% /alert %}}

### Statically linked libraries

Statically linked libraries (an openssl built into the binary, for example) are not declared by any package manager and are not registered in the OS package database, so both layer scans miss them. Missing them is the most common cause of rejection in server delivery.

There is no fully automatic path, so use two approaches together. Analyze the delivered binary for as much as tooling can find, and for the rest, record the source and version directly from the build script (for example `openssl 1.1.1za`).

```bash
syft file:/path/to/delivered-binary -o cyclonedx-json=myserver_1.0.0_static.json
```

Precise identification of statically linked components is the job of binary composition analysis (BDBA), which SK Telecom performs as supplementary verification.

### Submit each layer

Submit the per-layer SBOMs as they are, without merging them. SK Telecom's system registers each SBOM document as one scan unit and treats the documents registered against the same product version as a single combined list. The layers may even use different formats.

Each file needs its own name, and a resubmission must reuse the same name. The SBOM document name is the identity of the scan, so a changed name leaves the previous submission in place and vulnerabilities you have already fixed keep being counted. A suffix naming the layer is safe because it does not change on resubmission, but do not append a sequence number for the submission round.

| Layer | Example file name |
|----|--------------|
| OS | `myserver_1.0.0_os.json` |
| Application | `myserver_1.0.0_app.json` |
| Statically linked supplement | `myserver_1.0.0_static.json` |

Record the same value as the top-level component name (`metadata.component.name` in CycloneDX, `DocumentName` in SPDX). That value is the identifier that must be unique across all submissions. See the metadata section of [Submission Requirements](../requirements/) for details.

For how to decide the submission unit for a product with several nodes, such as a cluster, see the submission unit section of [Submission Procedure](../submission/).

## Common Precautions

Verify the following before using a tool.

- Transitive dependency inclusion: Generate the SBOM after the build (package installation) is complete so that transitive dependencies are included. Missing dependencies are grounds for rejection; for the per-language build commands to run first, see the dependency scope section of the [Submission Requirements](../requirements/).
- PURL inclusion: Verify that the generated SBOM includes a `purl` field for every component. SK Telecom's system maps vulnerabilities based on PURL. For the verification commands and the regeneration procedure, see the [Validation Checklist](../checklist/).
- Output format: CycloneDX JSON format is recommended. (Use `-o cyclonedx-json` or an equivalent option)
- Project information: Verify that the metadata accurately records the name and version of the delivered project.

## Related Documents

- [Submission Requirements](../requirements/): The required data fields that must be included in the SBOM
- [Validation Checklist](../checklist/): Items to verify before submission
- [BomLens](../skt-scanner/): SK Telecom's SBOM generation tool
</content>
