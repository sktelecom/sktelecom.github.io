---
title: "onot"
linkTitle: "onot"
weight: 5
type: docs
description: >
  SPDX-based open source license notice generation tool
---

onot is a compliance tool that automatically generates open source license notices based on SPDX (Software Package Data Exchange) documents. It was jointly developed by SK Telecom and Kakao and released as open source.

## Project Information

* Developer: SK Telecom & Kakao (Joint Development)
* License: Apache License 2.0
* GitHub: [https://github.com/sktelecom/onot](https://github.com/sktelecom/onot)

## Key Features

### 1. SPDX-based Automation
* SPDX 2.3 standard support
* Support for JSON, RDF, YAML, Tag-Value formats
* Automatic parsing and validation

### 2. Multiple Output Formats
* HTML license notices
* Markdown license notices
* Excel format
* Custom template support

### 3. Compliance Support
* Automatic organization of license obligations
* Copyright information aggregation
* Indication of source code availability
* Automatic determination of notice requirements

## Installation and Usage

### Installation

```bash
# Install from PyPI
pip install onot

# Or install from source
git clone https://github.com/sktelecom/onot.git
cd onot
pip install -e .
```

### Basic Usage

```bash
# Generate HTML license notice from SPDX file
onot -i sbom.spdx.json -o notice.html

# Generate in Markdown format
onot -i sbom.spdx.json -o notice.md -f markdown

# Generate in Excel format
onot -i sbom.spdx.json -o notice.xlsx -f excel
```

## SPDX Document Example

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
* Issues: [GitHub Issues](https://github.com/sktelecom/onot/issues)
