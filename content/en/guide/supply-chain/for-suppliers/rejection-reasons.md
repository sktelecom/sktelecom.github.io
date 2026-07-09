---
title: "Common Rejection Reasons"
linkTitle: "Rejection Reasons"
weight: 7
type: docs
description: >
  The typical reasons a submitted SBOM is rejected, their causes, and how to fix them.
---

Submitted SBOMs go through format validation and vulnerability analysis, and are rejected if they fall short of the criteria. Below are the rejection reasons that come up repeatedly in actual intake. Review them together with the [Validation Checklist](../checklist/) before submitting.

## Rejection Reasons at a Glance

| Rejection reason | Main cause | How to fix |
|---|---|---|
| All PURLs missing | Scanning an installation directory or raw files with no package manager metadata (`syft dir:`, etc.) | Scan a built image or the source code instead. [How to Generate an SBOM](../creation-guide/) |
| Transitive dependencies missing | Scanning source only, before the build (package installation) | Regenerate after the build completes. See the dependency scope section of the [Submission Requirements](../requirements/) |
| `pkg:generic/` PURLs | The tool could not identify the ecosystem | Regenerate with ecosystem-specific types. See the PURL section of the [Submission Requirements](../requirements/) |
| Component versions missing | Incomplete manifests or tool configuration issues | The `version` field is required. [Submission Requirements](../requirements/) |
| Only one layer of a server included | Scanning only the OS layer or only the application layer | Generate per layer and merge. [Server SBOM](../server-delivery/) |
| Unaccepted format or version | Generated in a format outside the supported range | CycloneDX JSON recommended. [Submission Requirements](../requirements/) |
| Top-level component info missing | Delivered product name and version not recorded in the metadata | Record the product name and version in the metadata component. [Submission Requirements](../requirements/) |

## Representative Cases

### Case 1: All PURLs missing from an installation-directory scan

A supplier scanned an installation directory with `syft dir:/root/nag_pkg` and submitted an SBOM in which none of the 261 components had a purl; all 251 vulnerability matches failed and the SBOM was rejected outright. When you scan a location without package manager metadata (`package.json`, `go.mod`, an RPM/DEB package DB, etc.), the tool cannot identify the ecosystem.

Change the scan target to a built image or the source code, and check the purl count right after generation. The verification commands are in the [Validation Checklist](../checklist/).

### Case 2: Transitive dependencies missing from a pre-build scan

If a project has several direct dependencies but the SBOM has fewer than 10 components in total, suspect missing transitive dependencies. A typical web application yields tens to hundreds of components once transitive dependencies are included. Completing the build first (`npm install`, `mvn package`, and the like) and then generating resolves this.

## What a Passing SBOM Looks Like

Download the example file that meets the acceptance criteria and compare its structure. Every component has a purl and a version, and the `dependencies` array captures both direct and transitive relationships.

- [Download the example SBOM (CycloneDX 1.6 JSON)](/samples/sbom-example-cyclonedx16.json)

## Related Documents

- [Validation Checklist](../checklist/): Pre-submission checks and verification commands
- [Submission Requirements](../requirements/): Required data fields and PURL rules
- [Submission Process](../submission/): The remediation and resubmission process after a rejection
