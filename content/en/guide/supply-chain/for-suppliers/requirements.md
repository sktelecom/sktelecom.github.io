---
title: "SBOM Submission Requirements"
linkTitle: "Submission Requirements"
weight: 1
type: docs
description: >
  Defines in detail the standard SBOM format, required information, and PURL identifier rules under SK Telecom policy.
---

## 1. Standard Data Formats

SK Telecom supports both formats that have become established as global standards. Suppliers may choose and submit the format supported by the tool they use.

| Format | Version | Recommended Use | File Format |
|------|------|----------|-----------| 
| CycloneDX | v1.3, v1.4, v1.5, v1.6 | Application security, vulnerability management focus | JSON (recommended), XML |
| SPDX | v2.2, v2.3 | License compliance focus | JSON, Tag-Value |

> Note: Both formats are recognized equally, but CycloneDX (JSON) format is recommended for internal system interoperability.

## 2. Required Information

The SBOM document you submit must include the following information. Missing information may result in rejection.

### 2.1 Metadata
Information about the document itself and the generation tool.
*   Timestamp: Generation date and time (ISO 8601 format)
*   Tool Info: Vendor, name, and version of the generation tool (e.g., `CycloneDX-Maven-Plugin v2.7.9`)
*   Component Info: Name and version of the top-level software being delivered

#### Generation Tool Specification Format

Generation tool information must be recorded in the following fields depending on the format.

*   **SPDX**: Record the tool name and version in the `creationInfo.creators` field with the `Tool:` prefix
*   **CycloneDX**: Record `vendor`, `name`, and `version` in the `metadata.tools` array

```json
// SPDX creationInfo example
"creationInfo": {
  "created": "2026-04-06T03:22:00Z",
  "creators": ["Tool: Syft-0.98.0", "Organization: VendorName"]
}
```

### 2.2 Components
Information about the individual libraries that make up the software.
*   Name: Component name (e.g., `commons-lang3`)
*   Version: Component version (e.g., `3.12.0`) — **Required**: Vulnerability mapping is impossible without the version
*   PURL (Package URL): [Required] Package identifier

> **Version information must be included.** Each package/component must record its exact version in SPDX's `versionInfo` field or CycloneDX's `version` field. Without a version, mapping to the vulnerability database is impossible, so security analysis cannot be performed.

| Item | Additional Requirement |
|------|-------------|
| Version specification | Required — Vulnerability mapping is impossible without the version |

### 2.3 Dependency Scope

> **Important: Transitive dependencies must be included.**

SK Telecom analyzes vulnerabilities based on the submitted SBOM. An SBOM that includes only direct dependencies may miss hidden vulnerabilities and may therefore be rejected.

| Dependency Type | Description | Inclusion |
|---|---|---|
| Direct | Libraries explicitly declared by the project | Required |
| Transitive | Libraries that the direct dependencies in turn depend on | Required |
| Dev-only | Libraries not included at runtime, such as test and build tools | Inclusion recommended |

**What are transitive dependencies?**

For example, if a project uses `library-A` directly, and `library-A` internally uses `library-B`, then `library-B` is a transitive dependency. Even if `library-B` has a vulnerability, it cannot be detected unless it is included in the SBOM.

```
MyApp
  └─ library-A v1.0 (direct dependency)  ← explicitly declared by the supplier
       └─ library-B v2.3 (transitive dependency)  ← must be included in the SBOM
            └─ library-C v0.9 (transitive dependency)  ← must be included in the SBOM
```

**Prerequisites for generating a correct SBOM**

For transitive dependencies to be included accurately, the SBOM must be generated with the build (or package installation) completed. When only source code is present, transitive dependencies may be omitted.

- Java (Maven): Generate after running `mvn package` or `mvn dependency:resolve`
- Java (Gradle): Generate after running `./gradlew dependencies`
- Python: Generate after `pip install -r requirements.txt` (with the virtual environment activated)
- Node.js: Generate after running `npm install` or `yarn install`
- Go: Generate after running `go mod download`

> For how to include transitive dependencies with each tool, refer to the [Using Open Source Tools](../creation-guide/) guide.

## 3. Package URL (PURL) Compliance

PURL (Package URL) is a standard URL format for uniquely identifying a software package. SK Telecom's vulnerability analysis system operates based on PURL, so a valid PURL must be included for every component.

> **A PURL must be in the standard format beginning with the `pkg:` prefix.** Free text such as `name:version` or `org/repo:tag` is not allowed; in such cases vulnerability mapping is impossible and the SBOM will be rejected.

### PURL Examples by Language

| Ecosystem | PURL Format Example |
| :--- | :--- |
| Java (Maven) | `pkg:maven/org.springframework/spring-core@5.3.20` |
| JavaScript (NPM) | `pkg:npm/express@4.18.2` |
| Python (PyPI) | `pkg:pypi/django@4.1.0` |
| Go | `pkg:golang/github.com/gin-gonic/gin@v1.8.1` |
| .NET (NuGet) | `pkg:nuget/Newtonsoft.Json@13.0.1` |
| Ruby (RubyGems) | `pkg:gem/rails@7.0.4` |
| GitHub (Actions / source hosting) | `pkg:github/actions/checkout@v3` |
| OS package (RPM) | `pkg:rpm/centos/glibc@2.17-317.el7?arch=x86_64` |

### PURL Type Restrictions

The purl must be of a type that can identify the ecosystem.

| Item | Requirement |
|------|---------|
| purl type | **Do not use** `pkg:generic/`. You must use a type that specifies the ecosystem |
| Allowed types | `pkg:rpm/`, `pkg:deb/`, `pkg:apk/`, `pkg:npm/`, `pkg:maven/`, `pkg:pypi/`, `pkg:cargo/`, `pkg:golang/`, `pkg:gem/`, `pkg:nuget/`, `pkg:github/` (source components hosted on GitHub), etc. |

### Correct / Incorrect PURL Examples

| Incorrect | Correct |
|---|---|
| `commons-lang3:3.12.0` | `pkg:maven/org.apache.commons/commons-lang3@3.12.0` |
| `actions/checkout:v3` | `pkg:github/actions/checkout@v3` |
| `lodash@4.17.21` | `pkg:npm/lodash@4.17.21` |
| `pkg:generic/foo@1.0` | (Change to a type appropriate for the ecosystem) |

> For detailed PURL specifications, refer to the [official Package URL spec](https://github.com/package-url/purl-spec).

## 4. Sample Document

### CycloneDX Sample

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.4",
  "version": 1,
  "metadata": {
    "timestamp": "2023-10-15T10:30:00Z",
    "tools": [{
      "vendor": "Example Corp",
      "name": "cyclonedx-maven-plugin",
      "version": "2.7.9"
    }],
    "component": {
      "type": "application",
      "name": "PaymentModule",
      "version": "2.1.0",
      "purl": "pkg:maven/com.example/payment-module@2.1.0"
    }
  },
  "components": [{
    "type": "library",
    "name": "spring-core",
    "version": "5.3.20",
    "purl": "pkg:maven/org.springframework/spring-core@5.3.20",
    "licenses": [{
      "license": {
        "id": "Apache-2.0"
      }
    }]
  }]
}
...
```


## References

- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [Package URL Specification](https://github.com/package-url/purl-spec)

## Related Documents

- [Supplier Guide Home](../)
- [SKT SBOM Generator](../skt-scanner/): The SKT standard tool for generating an SBOM easily
- [Using Open Source Tools](../creation-guide/): Guidance on open source tools such as cdxgen and Syft
- [Validation Checklist](../checklist/): Items to verify before submission
- [Submission Process](../submission/): Submission method and email template
</content>
