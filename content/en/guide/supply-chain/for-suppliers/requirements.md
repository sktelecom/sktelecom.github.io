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
| CycloneDX | v1.3, v1.4, v1.5, v1.6, v1.7 | Application security, vulnerability management focus | JSON (recommended), XML |
| SPDX | v2.2, v2.3 | License compliance focus | JSON, Tag-Value |

> Note: Both formats are recognized equally, but CycloneDX (JSON) format is recommended for internal system interoperability.

## Requirement Levels at a Glance

The requirement level of each item. A missing required item leads to rejection. A missing recommended item does not, but including it is encouraged.

| Item | Level | Details |
|---|:---:|---|
| Standard format and version (CycloneDX or SPDX) | Required | 1. Standard Data Formats |
| Metadata (timestamp, generation tool, top-level component) | Required | 2.1 Metadata |
| Component name and version | Required | 2.2 Component Information |
| Direct and transitive dependencies | Required | 2.3 Dependency Scope |
| PURL (Package URL, a standard identifier that points to a software package; `pkg:` form, a type defined by the spec, and no empty namespace where the type requires one) | Required | 3. PURL Compliance |
| Dev-only dependencies | Recommended | 2.3 Dependency Scope |
| License information | Recommended | 4. Sample Documents |

Download the [example SBOM file (CycloneDX 1.6 JSON)](/samples/sbom-example-cyclonedx16.json) that meets the acceptance criteria and compare its structure.

## 2. Required Information

The SBOM document you submit must include the following information. Missing information may result in rejection.

### 2.1 Metadata
Information about the document itself and the generation tool.
*   Timestamp: Generation date and time (ISO 8601 format)
*   Tool Info: Vendor, name, and version of the generation tool (e.g., `CycloneDX-Maven-Plugin v2.7.9`)
*   Component Info: Name and version of the top-level software being delivered

> **The Component Info name must be a unique value that identifies the specific device or product.** An empty value, a meaningless value such as `.`, or a fixed path value that a generation tool fills in automatically (e.g., `/scan`) will collide with a different submission and cause registration to be rejected. SK Telecom treats this value as an identifier that must be unique across all submissions.

#### Matching the File Name

When you submit multiple layers (OS, application, and so on), each layer's top-level component name and version must match the leading part of that SBOM's file name (`{name}_{version}`). For example, if the file name is `myserver-os_1.0.0_bom.json`, `metadata.component.name` (CycloneDX) or `DocumentName` (SPDX) must be `myserver-os` and the version must be `1.0.0`.

Keep this name the same on a resubmission. It is the identity of the scan, so a changed name leaves the previous submission in place and vulnerabilities you have already fixed keep being counted.

Generating with BomLens fills this field in automatically from `--project` and `--version`, so you do not need to edit it by hand. For the per-layer file naming rule, see the "Submit each layer" section of [How to Generate an SBOM](../creation-guide/#submit-each-layer).

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
*   Version: Component version (e.g., `3.12.0`) — required. Record the exact version in SPDX's `versionInfo` field or CycloneDX's `version` field; without a version, vulnerability mapping is impossible.
*   PURL (Package URL): [Required] Package identifier

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

Here, "component" means an entry in the SBOM's `components` list (an individual library or package); it does not apply to the top-level product itself (the component information in the SBOM's metadata).

> **A PURL must be in the standard format beginning with the `pkg:` prefix.** Free text such as `name:version` or `org/repo:tag` is not allowed; in such cases vulnerability mapping is impossible and the SBOM will be rejected.

Some PURLs look well formed and still fail to match. The three rules below are not caught by schema validation, so check them with particular care.

### 3.1 Types Defined by the Spec

The type slot may only hold a type defined by the Package URL specification. These are names such as `maven`, `npm`, `pypi` and `rpm` that identify both the ecosystem and the repository to query; the full list is in [purl-types-index.json](https://github.com/package-url/purl-spec/blob/main/purl-types-index.json) in the specification repository.

An invented name (for example `pkg:applications/java@11.0.25`) passes format validation, but there is no way to tell which repository to query, so matching fails. `pkg:generic/`, which identifies no ecosystem, is not allowed for the same reason.

### 3.2 Types That Require a Namespace

The namespace is the slot between the type and the package name. The specification makes it required for these types:

`alpm` `apk` `bitbucket` `composer` `deb` `git` `github` `golang` `huggingface` `maven` `qpkg` `rpm` `swift` `vscode-extension`

When that slot is empty the identifier looks well formed but names no specific package, so matching fails and the SBOM is rejected. The two patterns seen most often in actual intake are these:

*   **Maven**: the groupId belongs in the namespace. `pkg:maven/org.slf4j/jcl-over-slf4j@2.0.15` is the correct form; `pkg:maven/org.slf4j.jcl-over-slf4j@2.0.15`, with the groupId and artifactId joined by a dot, is a coordinate that does not exist in the repository and is rejected.
*   **OS packages (rpm, deb, apk)**: the distribution belongs in the namespace (`pkg:rpm/rhel/bind@9.11.36-16.el8_10.6`).

The distribution value is only recognized in that position (the namespace). Placing it in a query parameter after the question mark (e.g. `?distro=rhel-8.10`) is not accepted; that value is treated as auxiliary information and is not used for matching, so an empty namespace is rejected the same way as above.

### 3.3 What Belongs in the Namespace

The namespace must hold the identifier the repository itself uses. A human-readable company name or a URL is not an identifier. When a generation tool copies the vendor string from a manifest into the groupId slot, the result looks like `pkg:maven/The%2BApache%2BSoftware%2BFoundation/poi@5.4.1` or `pkg:maven/http%3A/www.jboss.org/jbossxts@1.1`; neither coordinate exists in the repository, so neither matches. For Maven, record the real groupId, as in `pkg:maven/org.apache.poi/poi@5.4.1`.

### 3.4 PURL Examples by Language

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

### 3.5 Correct / Incorrect PURL Examples

| Incorrect | Correct |
|---|---|
| `commons-lang3:3.12.0` | `pkg:maven/org.apache.commons/commons-lang3@3.12.0` |
| `actions/checkout:v3` | `pkg:github/actions/checkout@v3` |
| `lodash@4.17.21` | `pkg:npm/lodash@4.17.21` |
| `pkg:generic/foo@1.0` | (Change to a type appropriate for the ecosystem) |
| `pkg:applications/java@11.0.25` | (Change to a type defined by the spec) |
| `pkg:maven/org.slf4j.jcl-over-slf4j@2.0.15` | `pkg:maven/org.slf4j/jcl-over-slf4j@2.0.15` |
| `pkg:maven/The%2BApache%2BSoftware%2BFoundation/poi@5.4.1` | `pkg:maven/org.apache.poi/poi@5.4.1` |
| `pkg:rpm/bind@9.11.36-16.el8_10.6` | `pkg:rpm/rhel/bind@9.11.36-16.el8_10.6` |
| `pkg:rpm/bind@9.11.36-16.el8_10.6?distro=rhel-8.10` | `pkg:rpm/rhel/bind@9.11.36-16.el8_10.6` |

> For detailed PURL specifications, refer to the [official Package URL spec](https://github.com/package-url/purl-spec).

## 4. Sample Document

### CycloneDX Sample

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.6",
  "version": 1,
  "metadata": {
    "timestamp": "2026-04-06T10:30:00Z",
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
```


## References

- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [Package URL Specification](https://github.com/package-url/purl-spec)

## Related Documents

- [Supplier Guide Home](../)
- [BomLens](../skt-scanner/): SK Telecom's SBOM generation tool
- [Using Open Source Tools](../creation-guide/): Guidance on open source tools such as cdxgen and Syft
- [Validation Checklist](../checklist/): Items to verify before submission, plus the validation tools (BomLens automated validation, CycloneDX Validator)
- [Submission Process](../submission/): Submission method and email template
</content>
