---
title: "Generating an SBOM with Open Source Tools"
linkTitle: "How to Generate an SBOM"
weight: 3
type: docs
description: >
  Explains how to generate an SBOM for each environment using general-purpose open source tools.
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

    A --> G1
    A --> G2
    G1 --> M1(["Scan the source code<br>cdxgen or BomLens"])
    G2 --> M2(["Scan source + OS image<br>cdxgen/BomLens + Syft/Trivy"])
    M1 --> P(["Submit the SBOM"])
    M2 --> P

    classDef start fill:#F2F2F2,stroke:#171717,color:#171717,stroke-width:1.5px
    classDef typebox fill:#ffffff,stroke:#c8c8c8,color:#171717,stroke-width:1px
    classDef source fill:#D9F0E4,stroke:#00A651,color:#0A5A32,stroke-width:1.5px
    classDef osmerge fill:#EEDCF3,stroke:#68127A,color:#4A0D57,stroke-width:1.5px
    classDef submit fill:#F2F2F2,stroke:#171717,color:#171717,stroke-width:1.5px

    class A start
    class T1,T2,T3,T4,T5,T6 typebox
    class M1 source
    class M2 osmerge
    class P submit

    style G1 fill:#F1FAF5,stroke:#00A651,stroke-width:1px,color:#0A5A32
    style G2 fill:#FAF4FB,stroke:#68127A,stroke-width:1px,color:#4A0D57
```

Regardless of the delivery form, the supplier scans the source code it developed to produce the SBOM. Even when you deliver an executable, a binary, or firmware, scan the source code that produced it, not the finished artifact. Scanning a finished binary directly yields no package manager metadata, so PURLs are omitted, vulnerability matching fails entirely, and the SBOM is rejected.

Source code, an executable or binary, and firmware with no OS are all scanned from the source code with cdxgen or [BomLens](../skt-scanner/). This is the baseline for capturing transitive dependencies accurately.

When you ship an OS or base image as part of the delivery (a container image, a server, or firmware with an embedded OS), split it into two layers. Scan the source for the app layer, scan the image or rootfs as shipped with Syft or Trivy for the OS layer, then merge and submit. The OS-layer scan target is not the original base image you received but the image or rootfs actually delivered after the build, because it must include the OS packages installed during the build. For the full procedure, see [Server SBOM](../server-delivery/).

Statically linked libraries and manually vendored binaries are a blind spot that none of the scans above catch. For how to handle this case, see the statically linked libraries section of [Server SBOM](../server-delivery/).

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

In one real case, a supplier scanned an installation directory with `syft dir:/root/nag_pkg`, and the
submitted SBOM had no PURL on any of its 261 components, so all 251 vulnerability matches failed.

Run Syft against the following targets.

```bash
# Recommended: scan a built image (PURL and ecosystem identified automatically)
syft <image-name>:<tag> -o cyclonedx-json=sbom.json

# Not recommended: scan an installation directory or raw files (rejected due to missing PURL)
syft dir:/root/nag_pkg   # without package manager metadata, PURL count becomes 0
```

Immediately after generation, be sure to check the PURL count. See the [Validation Checklist](../checklist/) for how to verify.
{{% /alert %}}

A server that delivers an application on top of an OS (such as CentOS) is generated as two layers — OS (rootfs/image) and application — with statically linked libraries covered separately, then merged. As the warning above notes, the OS layer must target a rootfs or image that has a package database. For the full procedure, see [Server SBOM](../server-delivery/).

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

## Verifying Transitive Dependency Inclusion

Whichever tool you use, one principle holds: generate the SBOM after the build (package installation) is complete so that transitive dependencies are included. Generating from source code alone can omit transitive dependencies and lead to rejection. When delivering as a Docker image, scanning the built image with Syft can include more complete transitive dependencies than source code analysis.

For the dependency-scope requirements and the per-language build commands to run first, see the dependency scope section of the [Submission Requirements](../requirements/).

## Common Precautions

Verify the following before using a tool.

- Transitive dependency inclusion: Follow the build-first principle above. Missing dependencies are grounds for rejection.
- PURL inclusion: Verify that the generated SBOM includes a `purl` field for every component. SK Telecom's system maps vulnerabilities based on PURL. For the verification commands and the regeneration procedure, see the [Validation Checklist](../checklist/).
- Output format: CycloneDX JSON format is recommended. (Use `-o cyclonedx-json` or an equivalent option)
- Project information: Verify that the metadata accurately records the name and version of the delivered project.

## Related Documents

- [Server SBOM](../server-delivery/): How to generate and merge the layers of a server that combines an OS, an application, and static-link libraries
- [Submission Requirements](../requirements/): The required data fields that must be included in the SBOM
- [Validation Checklist](../checklist/): Items to verify before submission
- [BomLens](../skt-scanner/): SK Telecom's SBOM generation tool
</content>
