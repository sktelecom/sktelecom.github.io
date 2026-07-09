---
title: "SBOM Standards"
linkTitle: "SBOM Standards"
weight: 2
type: docs
description: >
  Compares the characteristics of SPDX and CycloneDX, the two leading SBOM standards, and presents criteria for choosing the one that fits your project.
---

{{% alert title="The Practical Takeaway First" color="info" %}}
For SBOMs submitted to SK Telecom, we recommend the CycloneDX (JSON) format. Check the accepted formats and versions in the [Submission Requirements](/en/guide/supply-chain/for-suppliers/requirements/). The rest of this page is a detailed comparison for those who want to understand the two standards in depth.
{{% /alert %}}

## Major SBOM Standards

There are currently two major standard formats that split the market between them. Both formats are widely used, but they differ in their origins and primary focus areas.

- SPDX: Software Package Data Exchange
- CycloneDX: A security-focused SBOM standard led by OWASP


## SPDX (Software Package Data Exchange)

### Overview

SPDX is an open source project led by the Linux Foundation, developed to represent the license and copyright information of software packages in a standardized way. (ISO/IEC 5962:2021)

### Key Characteristics

1. SPDX was originally developed to exchange open source license information, so it expresses license-related information in detail.

- Standardized license identifiers (SPDX License List)
- License expressions (e.g., Apache-2.0 OR MIT)
- Copyright information and per-file licenses

2. It can include not only package-level information but also individual file-level information.

- Per-file hash values
- Per-file licenses
- Per-file copyright information

### SPDX Document Structure

```json
{
  "SPDXID": "SPDXRef-DOCUMENT",
  "spdxVersion": "SPDX-2.3",
  "name": "Example-SBOM",
  "documentNamespace": "https://example.com/sbom-2026-001",
  "creationInfo": {
    "created": "2026-01-15T10:30:00Z",
    "creators": ["Tool: SPDX-Tools-2.3"]
  },
  "packages": [
    {
      "SPDXID": "SPDXRef-Package-1",
      "name": "spring-core",
      "versionInfo": "5.3.20",
      "licenseDeclared": "Apache-2.0",
      "externalRefs": [
        {
          "referenceType": "purl",
          "referenceLocator": "pkg:maven/org.springframework/spring-core@5.3.20"
        }
      ]
    }
  ]
}
```

### Advantages

- Officially recognized as an ISO international standard
- Detailed license information
- Traceable down to the file level
- A mature tooling ecosystem

### Disadvantages

- Security vulnerability information is optional
- The structure is somewhat complex
- May be insufficient for security-focused projects

## CycloneDX

### Overview

CycloneDX is an SBOM standard developed by OWASP (Open Web Application Security Project), with a focus on application security.


### Key Characteristics

1. It was designed from the ground up for security vulnerability management.

- Vulnerabilities
- Security Analysis results
- Threats

2. Compared to SPDX, its structure is concise and easy to understand.

- Focus on essential information
- JSON and XML format support
- Small file size

3. It provides extensions that support a variety of use cases.

- SaaS BOM
- Hardware BOM
- AI/ML BOM
- Cryptography BOM

### CycloneDX Document Structure

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.6",
  "serialNumber": "urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79",
  "version": 1,
  "metadata": {
    "timestamp": "2026-01-15T10:30:00Z",
    "tools": [
      {
        "name": "cyclonedx-maven-plugin",
        "version": "2.7.9"
      }
    ],
    "component": {
      "type": "application",
      "name": "MyApp",
      "version": "1.0.0"
    }
  },
  "components": [
    {
      "type": "library",
      "name": "spring-core",
      "version": "5.3.20",
      "purl": "pkg:maven/org.springframework/spring-core@5.3.20",
      "licenses": [
        {
          "license": {
            "id": "Apache-2.0"
          }
        }
      ]
    }
  ]
}
```

### Advantages

- Includes security vulnerability information by default
- A concise structure that is easy to understand
- Excellent integration with security tools
- An active community and ongoing tool development
- Internationally standardized as ECMA-424 by Ecma International

### Disadvantages

- File-level information is limited
- License expression is simpler than in SPDX

## SPDX vs CycloneDX Comparison

| Category | SPDX | CycloneDX |
|------|------|-----------| 
| Governing body | Linux Foundation | OWASP |
| Standard certification | ISO/IEC 5962 | ECMA-424 |
| Primary purpose | License compliance | Security vulnerability management |
| Structural complexity | High (detailed) | Low (concise) |
| File-level tracking | Supported | Limited |
| Vulnerability information | Optional | Included by default |
| Tooling ecosystem | Mature | Growing rapidly |
| File formats | JSON, RDF/XML, YAML, Tag-Value | JSON, XML |
| Primary users | Legal teams, open source management organizations | Security teams, DevOps engineers |
| SKT recommendation | When license verification is the main goal | When security vulnerability management is the main goal |


## Selection Guide

### When CycloneDX Is the Right Choice

CycloneDX is recommended in the following cases.

- Security first: Vulnerability management is the primary goal
- Quick start: Rapid adoption thanks to a concise structure
- DevSecOps: Automation through integration into CI/CD
- Modern applications: Cloud and container environments

### When SPDX Is the Right Choice

SPDX is recommended in the following cases.

- Emphasis on license compliance: Detailed license information is required
- File-level tracking: Per-source-file information is required
- ISO standard compliance: Official standard certification is required
- Legacy systems: Existing SPDX tools are already in use

### SK Telecom Recommendation

For SK Telecom's internal projects, the CycloneDX (JSON) format is recommended by default. This is because CycloneDX offers better interoperability with the internal vulnerability management system. That said, compatibility is also supported when an external partner submits SPDX.

## Interconversion

Conversion tools are available between SPDX and CycloneDX.

### Converting from SPDX to CycloneDX

```bash
# Using cyclonedx-cli
cyclonedx convert --input-file sbom.spdx.json \
  --output-file sbom.cdx.json --input-format spdx \
  --output-format json
```

### Converting from CycloneDX to SPDX

```bash
# Using spdx-tools
java -jar tools-java-1.1.0-jar-with-dependencies.jar \
  Convert bom.cdx.json bom.spdx.json
```

## Related Documents

- [What Is an SBOM?](../what-is-sbom/): The concept and necessity of an SBOM
- [Supplier Submission Requirements](/en/guide/supply-chain/for-suppliers/requirements/): Formats and versions accepted by SK Telecom

## References

- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [NTIA SBOM Formats Comparison](https://www.ntia.gov/files/ntia/publications/sbom_formats_survey-version-2021_0.pdf)
