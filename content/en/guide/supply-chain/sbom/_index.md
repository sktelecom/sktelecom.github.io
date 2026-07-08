---
title: "What Is an SBOM?"
linkTitle: "What Is an SBOM?"
weight: 3
type: docs
description: >
  Guides developers and administrators through the full lifecycle of an SBOM, from its core concepts to generation, integration, and management.
---

## Overview

This section is a learning guide for those encountering an SBOM (Software Bill of Materials) for the first time. It covers what an SBOM is, why it is needed, and how the industry-standard formats differ from each other.

## Guide Structure

1. [Concept and Necessity](what-is-sbom/): Explains what an SBOM is and the fundamental reasons why we need it now.
2. [Standards Comparison (SPDX vs CycloneDX)](standards/): Understand the differences between the industry-standard formats so you can choose the format that fits the nature of your project.

For the practical side — actually generating, validating, and submitting an SBOM — see the [Supplier Guide](../for-suppliers/).

Below is the full lifecycle an SBOM flows through, from development to security remediation.

```mermaid
graph TD
    A[Start Development] --> B[Add Dependencies]
    B --> C{Build/Deploy}
    C -->|Automation| D[Generate SBOM]
    D --> E[Upload to Repository]
    E --> F[Vulnerability Analysis]
    F --> G[Security Remediation]

    classDef start fill:#F2F2F2,stroke:#171717,color:#171717,stroke-width:1.5px
    classDef proc fill:#ffffff,stroke:#c8c8c8,color:#171717,stroke-width:1px
    classDef decision fill:#FFF3CD,stroke:#E0A800,color:#5A4100,stroke-width:1.5px
    classDef good fill:#D9F0E4,stroke:#00A651,color:#0A5A32,stroke-width:1.5px

    class A start
    class B,E,F proc
    class C decision
    class D,G good
```
