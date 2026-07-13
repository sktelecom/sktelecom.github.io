---
title: "Pre-Submission SBOM Validation Checklist"
linkTitle: "Validation Checklist"
weight: 6
type: docs
description: >
  Check the essential items before submitting an SBOM to prevent rejection.
---

## Essential Checklist Items

An SBOM that does not pass the checklist below may be automatically rejected by the system. Items 2 through 4 can be checked at once with BomLens automated validation under [Validation Tools](#validation-tools) below.

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

### 4. Identifier (PURL) Check
SK Telecom's system maps vulnerabilities by PURL. This is the most important item.
- [ ] Does every component (`components`) object contain a `purl` field?
- [ ] Does the number of components with a PURL match (or come close to) the total component count?
- [ ] Does the PURL format follow the standard (`pkg:type/namespace/name@version`)?
- [ ] Are special characters within the PURL correctly encoded?

Use the commands below to check the PURL count directly. The total component count and the PURL-bearing count should be equal.

```bash
# CycloneDX — the two values should be equal
jq '.components | length' sbom.json                      # total component count
jq '[.components[] | select(.purl)] | length' sbom.json  # count with a PURL

# SPDX — number of packages that have a PURL (externalRef)
jq '[.packages[] | select(.externalRefs[]?.referenceType == "purl")] | length' sbom.json
```

> If the PURL-bearing count is 0 or significantly lower than the total component count, do not submit. For the cause and how to regenerate, see [Common Rejection Reasons](../rejection-reasons/).

## Validation Tools

### BomLens Automated Validation (Recommended)

The SBOM analysis feature of [BomLens](../skt-scanner/) automatically checks the [Submission Requirements](../requirements/), covering items 2 through 4 of the checklist above. Version 1.8.0 or later is required.

```bash
./scripts/scan-sbom.sh --project my-app --version 1.0.0 \
  --analyze "./sbom.json" \
  --generate-only
```

Running it produces a conformance report (`my-app_1.0.0_conformance.html`) in the `my-app_1.0.0/` folder. The report automatically verifies the following items.

| Check | Checklist Item |
|-------|----------------|
| Spec version range (CycloneDX 1.3–1.6, SPDX 2.2–2.3) | 2. Required Data Fields |
| Creation timestamp, generating tool, top-level component name and version | 2. Required Data Fields |
| Name and version of every component | 2. Required Data Fields |
| Direct and transitive dependencies included | 3. Dependency Completeness Check |
| PURL coverage, standard format (`pkg:type/name@version`), no `pkg:generic` | 4. Identifier (PURL) Check |
| License and hash coverage (recommended items) | — |

If the result is fail, the report lists which components fall short on which item, so you can fix those parts, regenerate the SBOM, and validate again. The same validation is available in the web UI (run with `--ui` and upload the SBOM).

### CycloneDX Validator (Schema Check)

*   CycloneDX Validator: [https://cyclonedx.github.io/cyclonedx-web-tool/validate](https://cyclonedx.github.io/cyclonedx-web-tool/validate)

An online tool that checks whether a CycloneDX file conforms to the standard schema. It is useful for quickly checking JSON syntax and format errors (checklist item 1) without installing anything. However, it performs schema validation only — passing it does not mean items 2 through 4 (required fields, dependency completeness, PURL) are met. It cannot check SPDX files.

## Related Documents

- [Common Rejection Reasons](../rejection-reasons/): Causes and fixes for each rejection reason
- [Submission Requirements](../requirements/): Detailed guidance on required data fields and PURL format, including an example SBOM file that meets the acceptance criteria
- [Submission Process](../submission/): How to submit after passing the checklist
- [BomLens](../skt-scanner/): A tool that generates an SBOM meeting the checklist items
</content>
