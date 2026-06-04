---
title: "Pre-Submission SBOM Validation Checklist"
linkTitle: "Validation Checklist"
weight: 4
type: docs
description: >
  Check the essential items before submitting an SBOM to prevent rejection.
---

## Essential Checklist Items

An SBOM that does not pass the checklist below may be automatically rejected by the system.

### 1. File Integrity
- [ ] Is the file extension `.json` or `.xml`? (Not an archive file)
- [ ] Is the file size at least 1KB, and the content not empty?
- [ ] Are there any JSON syntax errors? (Verification with `jq` or similar is recommended)

### 2. Required Data Fields
- [ ] bomFormat: Is `CycloneDX` or `SPDX` specified?
- [ ] Metadata: Are the name and version of the top-level component (the delivered project) accurate?
- [ ] Components: Does the list of included libraries match the actual ones?

### 3. Dependency Completeness Check
Missing transitive dependencies are the most common reason for rejection. Be sure to verify the items below.
- [ ] Are all direct dependencies (libraries explicitly declared by the project) included?
- [ ] Are transitive dependencies (libraries that the direct dependencies use internally) included?
- [ ] Did you complete the build (or package installation) before generating the SBOM? (e.g., `npm install`, `mvn package`, `pip install`)
- [ ] Is the number of components reasonable? (If a project with only a few direct dependencies has fewer than 10 total components, transitive dependencies have likely been omitted)

> Dependency count guideline: A typical web application, including transitive dependencies, contains dozens to hundreds of components. If the component count in your SBOM is significantly lower than expected, treat it with suspicion.

### 4. Identifier (PURL) Check
SK Telecom's system maps vulnerabilities by PURL. This is the most important item.
- [ ] Does every component (`components`) object contain a `purl` field?
- [ ] Does the PURL format follow the standard (`pkg:type/namespace/name@version`)?
- [ ] Are special characters within the PURL correctly encoded?

## Online Validation Tool
*   CycloneDX Validator: [https://cyclonedx.github.io/cyclonedx-web-tool/validate](https://cyclonedx.github.io/cyclonedx-web-tool/validate)

## Related Documents

- [Submission Requirements](../requirements/): Detailed guidance on required data fields and PURL format
- [Submission Process](../submission/): How to submit after passing the checklist
- [SKT SBOM Generator](../skt-scanner/): A tool that generates an SBOM meeting the checklist items
</content>
