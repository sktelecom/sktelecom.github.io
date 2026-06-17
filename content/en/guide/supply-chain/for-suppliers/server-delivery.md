---
title: "Generating a Server (OS + Application) SBOM"
linkTitle: "Server SBOM"
weight: 4
type: docs
description: >
  How to build the SBOM for a delivered server — scan the OS, the application, and the static-link dependencies as three layers, then merge them into one BOM for submission.
---

A delivered server is not a single source tree. It is an operating system, the application installed on top of it, and libraries statically linked into the binaries during the build. Scanning only one of these misses the others, which is a common reason a server SBOM is rejected.

Treat the server as three layers, generate each one separately, then merge them. All three are produced with [BomLens](../skt-scanner/); only the input changes per layer.

## The three layers of a server

| Layer | What it covers | Symptom if omitted |
|-------|----------------|--------------------|
| OS | The OS and its installed packages (e.g. CentOS plus everything in the rpm database) | OS vulnerabilities missing |
| Application | The delivered application and its package-manager dependencies, direct and transitive | Application dependencies missing |
| Static-link | Libraries statically linked or built by hand (e.g. a statically linked openssl, liblfds) | The most common rejection cause |

## Generating each layer

The commands below use BomLens (`scan-sbom.sh`). To use cdxgen/Syft directly, see [Using Open Source Tools](../creation-guide/).

### OS layer

Scan the server's rootfs (the extracted root filesystem) or a container image of it. The package database (rpm/dpkg/apk) is read so every installed package gets a real purl (`pkg:rpm/...`).

```bash
# Target a rootfs directory
scan-sbom.sh --project myserver-os --version 7 --target /path/to/server-rootfs --all --generate-only

# Or, if the server is packaged as a container image
scan-sbom.sh --project myserver-os --version 7 --target myserver:7 --all --generate-only
```

The target must contain the package database. A folder holding only unpacked install files, with no rpm database, yields empty purls and is rejected.

### Application layer

Scan the application source after the build. With a package manager (Maven, npm, pip, Go modules, Conan, and others), transitive dependencies resolve automatically.

```bash
cd /path/to/app-source
scan-sbom.sh --project myserver-app --version 2.0.0 --all --generate-only
```

A pure CMake/Make application with no manifest produces a sparse component list; add `--deep-license` to record the first-party source licenses.

### Static-link layer

Source scanners do not see libraries statically linked into a binary. There is no fully automatic path, so combine two approaches. Analyze the delivered binary for what tooling can find, and for what it still misses, record the source and version by hand from the build script (for example `openssl 1.1.1za`).

```bash
scan-sbom.sh --project myserver-bin --version 2.0.0 --target /path/to/delivered-binary --all --generate-only
```

A precise inventory of statically linked components comes from binary composition analysis (BDBA), which SK Telecom runs as a complementary check.

## Merge into one BOM for submission

SK Telecom's submission system registers one SBOM per product. Merge the per-layer SBOMs with `--merge` into a single BOM and stamp the top-level component with the delivered product name and version. `--merge` dedupes by purl, so a library appearing in more than one layer is counted once.

```bash
scan-sbom.sh --project myserver --version 1.0.0 \
  --merge myserver-os_7_bom.json myserver-app_2.0.0_bom.json myserver-bin_2.0.0_bom.json \
  --generate-only
```

If the whole server is delivered as a single container image, you can scan that image with `--target` to capture the OS and application layers together.

{{% alert title="Keep the per-layer SBOMs for review" color="info" %}}
The official submission is the merged single BOM, but the per-layer SBOMs show at a glance which layer is missing or vulnerable and preserve each layer's transitive-dependency graph. Keep them for your own review and for responding to rejections. The merged BOM also records each component's source layer, so you can still filter by layer.
{{% /alert %}}

## Verify before submitting

Check that components carry real purls in both the per-layer SBOMs and the merged one. The total component count and the PURL-bearing count should be close.

```bash
jq '.components | length' myserver_1.0.0_bom.json
jq '[.components[] | select(.purl)] | length' myserver_1.0.0_bom.json
```

A large gap means many components lack a purl, usually from a raw-directory scan. For the full check, follow the [Validation Checklist](../checklist/).

## Learn more

The detailed procedure and examples for server delivery live in the canonical BomLens documentation.

> [Server delivery guide](https://sktelecom.github.io/sbom-tools/guides/server-delivery/)

## Related Documents

- [BomLens](../skt-scanner/): SK Telecom's SBOM generation tool
- [Using Open Source Tools](../creation-guide/): using cdxgen/Syft directly
- [Submission Requirements](../requirements/): required data fields
- [Validation Checklist](../checklist/): items to verify before submission
