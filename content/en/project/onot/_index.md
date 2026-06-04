---
title: "onot"
linkTitle: "onot"
weight: 5
type: docs
github: "https://github.com/sktelecom/onot"
techs: ["Compliance", "Tool"]
description: >
  SBOM-based open source license notice (OSS Notice) generation tool
---

onot is a compliance tool that automatically generates open source license notices from SBOM (Software Bill of Materials) documents. It reads SPDX, CycloneDX, and Excel SBOMs and produces HTML, Text, Markdown, and PDF notices. License texts are bundled, so it runs fully offline (air-gapped) and your SBOM never leaves the machine. It was jointly developed by SK Telecom and Kakao and released as open source.

![onot desktop app preview](onot-app-preview.png)

## Project Information

* Developer: SK Telecom, Kakao (Joint Development)
* License: Apache License 2.0
* GitHub: [https://github.com/sktelecom/onot](https://github.com/sktelecom/onot)

## Key Features

### Multiple SBOM Inputs

* SPDX 2.x support (JSON, YAML, Tag-Value, RDF)
* CycloneDX support (JSON, XML)
* Excel support
* Automatic input-format detection by extension and content

### Multiple Output Formats

* HTML, Text, Markdown, and PDF notices
* Korean and English notices (`--lang`)
* User configuration such as company info (`onot.yaml`)

### Fully Offline Operation and Multiple Form Factors

* Bundled license texts run in air-gapped environments (SBOM never leaves the machine)
* Command-line interface (CLI)
* Desktop app (Windows, macOS)
* Local API sidecar

### Compliance Support

* Automatic organization of license obligations
* Copyright information aggregation
* Indication of source code availability
* Automatic determination of notice requirements

## Installation and Usage

### CLI Installation

```bash
# Install from PyPI (add ,pdf for PDF output)
pip install "onot[spdx,cyclonedx,excel,api]"

# Or install from source
git clone https://github.com/sktelecom/onot.git
cd onot
pip install -e .
```

### Desktop App

No setup required. Download the Windows or macOS installer from [Releases](https://github.com/sktelecom/onot/releases), open the app, and drop in an SBOM file to preview and download a notice.

### Basic Usage

```bash
# Generate HTML and Markdown notices from an SBOM file (input format auto-detected)
onot generate -i sbom.spdx.json -f html -f markdown --output-dir ./output

# List supported output formats
onot formats

# Check the version
onot version
```

Main options

* `-f, --format`: html, text, markdown, pdf (repeatable)
* `--lang`: ko, en
* `--config`: onot.yaml (company info, etc.)
* `--online`: fetch missing license texts remotely (offline by default)
* `--stdout`: write a single text format to standard output

## SBOM Document Example

The following is an SPDX 2.3 JSON example. CycloneDX (JSON, XML) and Excel formats can be supplied the same way, and the input format is detected automatically.

```json
{
  "spdxVersion": "SPDX-2.3",
  "dataLicense": "CC0-1.0",
  "SPDXID": "SPDXRef-DOCUMENT",
  "name": "MyProject",
  "packages": [
    {
      "SPDXID": "SPDXRef-Package-1",
      "name": "express",
      "versionInfo": "4.18.2",
      "licenseConcluded": "MIT",
      "copyrightText": "Copyright (c) 2009-2014 TJ Holowaychuk",
      "downloadLocation": "https://registry.npmjs.org/express/-/express-4.18.2.tgz"
    }
  ]
}
```

## License

Apache License 2.0 - Commercial use allowed

## Resources

* GitHub: [https://github.com/sktelecom/onot](https://github.com/sktelecom/onot)
* User Guide: [USER_GUIDE.md](https://github.com/sktelecom/onot/blob/main/docs/USER_GUIDE.md)
* Desktop App Download: [Releases](https://github.com/sktelecom/onot/releases)
* Issues: [GitHub Issues](https://github.com/sktelecom/onot/issues)
