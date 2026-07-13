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

Two standards are in wide use today, and both are accepted for submission to SK Telecom. They differ in their origins and primary focus areas.

- SPDX (Software Package Data Exchange): A standard led by the Linux Foundation (ISO/IEC 5962). Developed to exchange open source license information, it expresses license and copyright information in detail and can carry information down to the individual file level.
- CycloneDX: A security-focused standard developed by OWASP (ECMA-424). Designed from the start for vulnerability management, it has a compact structure and integrates well with security tools.

## SPDX vs CycloneDX

| Aspect | SPDX | CycloneDX |
|------|------|-----------|
| Governing body | Linux Foundation | OWASP |
| Standard certification | ISO/IEC 5962 | ECMA-424 |
| Primary purpose | License compliance | Security vulnerability management |
| Structural complexity | High (detailed) | Low (compact) |
| File-level tracking | Supported | Limited |
| Vulnerability information | Optional | Built in |
| Tool ecosystem | Mature | Growing fast |
| File formats | JSON, RDF/XML, YAML, Tag-Value | JSON, XML |
| Typical users | Legal teams, open source program offices | Security teams, DevOps engineers |
| SKT recommendation | When license verification is the main goal | When vulnerability management is the main goal |

Whichever format you use, acceptance is decided by content, not format. Pick the format your generation tool supports and meet the required fields in the [Submission Requirements](/en/guide/supply-chain/for-suppliers/requirements/).

## Converting Between the Two

Conversion tools are available between SPDX and CycloneDX.

### SPDX to CycloneDX

```bash
# Using cyclonedx-cli
cyclonedx convert --input-file sbom.spdx.json \
  --output-file sbom.cdx.json --input-format spdx \
  --output-format json
```

### CycloneDX to SPDX

```bash
# Using spdx-tools
java -jar tools-java-1.1.0-jar-with-dependencies.jar \
  Convert bom.cdx.json bom.spdx.json
```

## Related Documents

- [What Is an SBOM?](../what-is-sbom/): SBOM concepts and why they matter
- [Supplier Submission Requirements](/en/guide/supply-chain/for-suppliers/requirements/): Formats and versions SK Telecom accepts

## References

- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [NTIA SBOM Formats Comparison](https://www.ntia.gov/files/ntia/publications/sbom_formats_survey-version-2021_0.pdf)
