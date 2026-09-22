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
- [ ] Are there any JSON syntax errors?

Check with the following command. It passes if this exits without error.

```bash
jq empty sbom.json && echo "OK: valid JSON"
```

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
- [ ] Did you scan a Maven or Gradle project with Syft alone? Syft reads only what `pom.xml` or the build script declares directly, so transitive dependencies are lost. Use cdxgen or a language-specific CycloneDX plugin.
- [ ] Are npm development dependencies missing when you need them? Syft excludes them by default; set `SYFT_JAVASCRIPT_INCLUDE_DEV_DEPENDENCIES=true` to include them.
- [ ] For a server delivery, are the OS packages included? Scanning only the application source drops every installed rpm/dpkg package. See the server delivery section of [How to Generate an SBOM](../creation-guide/#server-delivery) for the procedure.

### 4. Identifier (PURL) Check
SK Telecom's system maps vulnerabilities by PURL. This is the most important item.
- [ ] Does every component (`components`) object contain a `purl` field?
- [ ] Does the number of components with a PURL match (or come close to) the total component count?
- [ ] Does the PURL format follow the standard (`pkg:type/namespace/name@version`)?
- [ ] Is every PURL type one that the Package URL specification defines? A type invented by a tool (for example `pkg:applications/`) passes format validation, but it names no repository to query, so matching fails.
- [ ] For types that require a namespace (`maven`, `golang`, `github`, `composer`, `swift`, `rpm`, `deb`, `apk`, and others), is that slot filled? For Maven the groupId must occupy its own slot, as in `pkg:maven/org.slf4j/jcl-over-slf4j@2.0.15`; joining it to the name, as in `pkg:maven/org.slf4j.jcl-over-slf4j@2.0.15`, is rejected.
- [ ] Is the namespace free of company names and website addresses? A vendor string placed in the groupId slot, as in `pkg:maven/The%2BApache%2BSoftware%2BFoundation/poi@5.4.1`, produces a coordinate that does not exist in the repository.
- [ ] Are special characters within the PURL correctly encoded?
- [ ] Does the PURL point at the same distribution and version as what is actually installed? For example, if a RHEL server is declared as `pkg:deb/debian/...`, the format is valid and matching succeeds, but vulnerabilities are reported for components unrelated to the real system.
- [ ] For rpm/deb/apk packages, is the distribution in the namespace (between the type and the package name)? If it only appears in a query parameter (`?distro=...`), it is not recognized and is rejected the same way as an empty namespace.
- [ ] Did a binary scan produce components with no PURL? Syft's binary catalogers can leave entries with no PURL when the ecosystem cannot be determined. Remove those entries or replace them with the real components.

Use the commands below to check the PURL count directly. The total component count and the PURL-bearing count should be equal.

```bash
# CycloneDX — the two values should be equal
jq '.components | length' sbom.json                      # total component count
jq '[.components[] | select(.purl)] | length' sbom.json  # count with a PURL

# SPDX — number of packages that have a PURL (externalRef)
jq '[.packages[] | select(.externalRefs[]?.referenceType == "purl")] | length' sbom.json

# CycloneDX: count of identifiers whose type requires a namespace but has none (should be 0)
#   catches both a missing rpm/deb/apk distribution and a missing Maven groupId
jq '[.components[] | (.purl // "")
     | select(test("^pkg:(alpm|apk|bitbucket|composer|deb|git|github|golang|huggingface|maven|qpkg|rpm|swift|vscode-extension)/[^/@?#]+([@?#]|$)"))
    ] | length' sbom.json

# CycloneDX: print any type not defined by the spec (nothing should be printed)
curl -sO https://raw.githubusercontent.com/package-url/purl-spec/main/purl-types-index.json
jq -r --slurpfile ok purl-types-index.json '
  [.components[] | (.purl // "") | select(startswith("pkg:")) | capture("^pkg:(?<t>[^/@?#]+)").t]
  | unique - $ok[0] | .[]' sbom.json
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

Run this same check even when you generated the SBOM with BomLens yourself — just feed the SBOM you just created into `--analyze`. Generation and validation are kept as separate steps rather than one, because a freshly generated SBOM grading itself catches fewer mistakes than a separate re-check.

| Check | Checklist Item |
|-------|----------------|
| Spec version range (CycloneDX 1.3–1.7, SPDX 2.2–2.3) | 2. Required Data Fields |
| Creation timestamp, generating tool, top-level component name and version | 2. Required Data Fields |
| Name and version of every component | 2. Required Data Fields |
| Direct and transitive dependencies included | 3. Dependency Completeness Check |
| PURL coverage, standard format (`pkg:type/name@version`), no `pkg:generic`, a type the specification defines, and the namespace for types that require one | 4. Identifier (PURL) Check |
| License and hash coverage (recommended items) | — |

The table above describes the next BomLens release. The automated check in v1.12.0, the current release, treats CycloneDX 1.7 as outside the supported range, covers only OS packages (rpm, deb, apk) in its namespace check, and does not flag a type the specification leaves undefined. If you validate with v1.12.0 and your SBOM is CycloneDX 1.7, or uses maven and other types, check those with the jq commands above as well.

If the result is fail, the report lists which components fall short on which item, so you can fix those parts, regenerate the SBOM, and validate again. The same validation is available in the web UI (run with `--ui` and upload the SBOM).

Before submitting, add `--conformance-profile skt-submission` to the command above to apply the same stricter thresholds SK Telecom's review uses: 100% PURL coverage and no `pkg:generic` identifiers. The web UI's submission-review screen already applies this profile by default, so the flag only matters when you run the CLI directly.

### CycloneDX Validator (Schema Check)

*   CycloneDX Validator: [https://cyclonedx.github.io/cyclonedx-web-tool/validate](https://cyclonedx.github.io/cyclonedx-web-tool/validate)

An online tool that checks whether a CycloneDX file conforms to the standard schema. It is useful for quickly checking JSON syntax and format errors (checklist item 1) without installing anything. However, it performs schema validation only — passing it does not mean items 2 through 4 (required fields, dependency completeness, PURL) are met. It cannot check SPDX files.

## Related Documents

- [Common Rejection Reasons](../rejection-reasons/): Causes and fixes for each rejection reason
- [Submission Requirements](../requirements/): Detailed guidance on required data fields and PURL format, including an example SBOM file that meets the acceptance criteria
- [Submission Process](../submission/): How to submit after passing the checklist
- [BomLens](../skt-scanner/): A tool that generates an SBOM meeting the checklist items
</content>
