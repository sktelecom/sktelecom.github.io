---
title: "Supplier SBOM Submission Guide"
linkTitle: "Supplier Guide"
weight: 4
type: docs
description: >
  An SBOM generation and submission guide for partner companies that supply software to SK Telecom.
---

To strengthen the transparency and security of its software supply chain, SK Telecom asks suppliers to submit an SBOM (Software Bill of Materials) for all software components and dependencies they deliver. This guide explains how suppliers can generate and submit an SBOM in a format that meets SK Telecom's security policy.

## Scope of Application

All suppliers (including developers and resellers) that deliver the following types of software are subject to these guidelines.

*   Source code: Applications written in Java, Python, JavaScript, Go, C/C++, etc.
*   Container images: Docker images or OCI-compliant containers
*   Executables: Compiled binaries (.jar, .dll, .so) and libraries
*   Embedded systems: Firmware images, RootFS, device drivers
*   Servers: A system combining an OS (rootfs and installed packages) with an application and statically linked libraries


## SBOM Submission Process

We ask suppliers to follow the procedure below, from the time of contract through final delivery.

```mermaid
flowchart TD
    A[Contract Review] --> B["Software Development/Build"]
    B --> C{Generate SBOM}
    C -->|Use SKT-provided tool| D[Use BomLens]
    C -->|Use your own tool| E["Use open source tools<br>(cdxgen, Syft, etc.)"]
    D --> F["Data Validation (PURL Check)"]
    E --> F
    F --> G["Submit SBOM (Email/Portal)"]
    G --> H[SKT Security Review]
    H -->|Approved| I[Delivery Complete]
    H -->|Rejected| J[Remediate and Resubmit]
    J --> F

    classDef start fill:#F2F2F2,stroke:#171717,color:#171717,stroke-width:1.5px
    classDef proc fill:#ffffff,stroke:#c8c8c8,color:#171717,stroke-width:1px
    classDef decision fill:#FFF3CD,stroke:#E0A800,color:#5A4100,stroke-width:1.5px
    classDef good fill:#D9F0E4,stroke:#00A651,color:#0A5A32,stroke-width:1.5px
    classDef danger fill:#FDE1E7,stroke:#EA002C,color:#8A0019,stroke-width:1.5px

    class A start
    class B,E,F,G proc
    class C,H decision
    class D,I good
    class J danger

```


## Guide Structure

This section is organized as follows.

1. [Submission Requirements](requirements/): Defines the required formats (CycloneDX, SPDX) and data fields that SK Telecom requires.
2. [BomLens](skt-scanner/): Explains how to use SK Telecom's SBOM generation tool.
3. [Using Open Source Tools](creation-guide/): Explains how to generate an SBOM using general-purpose open source tools (cdxgen, Syft, etc.).
4. [Server SBOM](server-delivery/): Explains how to generate the OS, application, and static-link layers separately and merge them into one.
5. [Validation Checklist](checklist/): Provides a checklist of essential items to verify before submission.
6. [Submission Process](submission/): Explains the naming conventions and submission channels for the generated SBOM file.

## Related Documents

- [SK Telecom Supply Chain Security Policy](/en/guide/supply-chain/overview/policy/): Background and principles of the mandatory SBOM submission policy
- [Global Regulatory Trends](/en/guide/supply-chain/overview/regulations/): Domestic and international regulatory landscape related to SBOM
</content>
