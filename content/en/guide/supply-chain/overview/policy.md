---
title: "SK Telecom Supply Chain Security Policy"
linkTitle: "Supply Chain Security Policy"
weight: 3
type: docs
description: >
  Describes the supply chain security policy and principles that partners supplying software to SK Telecom must comply with.
---



> ---
> 
> NOTICE.  
> 
> In accordance with internal security and document management policies, this document is a summary that excludes confidential content. Please note that it is written around high-level key points rather than the full content.
> 
> ---


## 1. Purpose of the Policy

The purpose of this policy is to ensure the transparency of all software that SK Telecom adopts, and to identify and eliminate, in advance, the risks of known vulnerabilities and license violations.


## 2. Scope of Application

All suppliers that enter into a software supply contract with SK Telecom are subject to this policy.

## 3. Key Requirements

Suppliers must comply with the following three principles.

### Principle 1: Mandatory SBOM Submission
- For every software delivery, the supplier must submit an SBOM (Software Bill of Materials) corresponding to that version.
- The accepted formats and required data fields are defined in the [Submission Requirements](/en/guide/supply-chain/for-suppliers/requirements/).

### Principle 2: Vulnerability Inspection and Remediation
- Before delivery, the supplier must independently check for the latest security vulnerabilities (CVEs).
- If Critical/High severity vulnerabilities are found, the supplier must patch them or apply mitigation measures before delivery.
- If patching is not possible, the supplier must prove, through a "vulnerability justification statement," that the vulnerability has no actual impact on the service.

### Principle 3: Transparent Change Management
- If the components of the software change during the contract period (updates, patches, etc.), the supplier must immediately submit an updated SBOM.
- The supplier must warrant that it has complied with open source license obligations (notice obligations, source code disclosure obligations, etc.).

## Related Documents

- [Supply Chain Security Overview](../): Concepts and notable cases of software supply chain attacks
- [Global Regulatory Trends](../regulations/): Domestic and international regulatory developments related to SBOM
- [Supplier Guide](/en/guide/supply-chain/for-suppliers/): Detailed guidance on how to generate and submit an SBOM
- [Submission Requirements](/en/guide/supply-chain/for-suppliers/requirements/): SBOM format and required data field definitions
