---
date: 2026-06-04
title: "onot, the Open Source Notice Generator, Gets a Major Overhaul"
linkTitle: "onot, the Open Source Notice Generator, Gets a Major Overhaul"
description: 
author: Haksung Jang
categories: ["blog"]
tags: ["onot", "compliance", "SBOM", "OSS Notice"]
resources:
- src: "**.{png,jpg}"
  title: "Image #:counter"
  params:
    byline: ""
---

Hello.

[onot](https://github.com/sktelecom/onot), the open source notice generator jointly developed by SK Telecom and Kakao, has been substantially overhauled. onot is a compliance tool that reads an SBOM (Software Bill of Materials) and automatically produces an open source license notice (OSS Notice). This update broadens both the input and output formats, and onot can now be used as a desktop app in addition to the command-line tool.

## What's New

### It reads more SBOM formats

Previously onot accepted only SPDX documents. It can now also read [CycloneDX](https://cyclonedx.org) (JSON, XML) and Excel. For SPDX it supports JSON, YAML, Tag-Value, and RDF. onot detects the input format from the file extension and content, so you do not need to specify the format yourself.

### It generates PDF notices

PDF has been added to the output formats. You can now pick from HTML, Text, Markdown, and PDF and generate them in a single run. You can also choose the notice language between Korean and English.

### It works fully offline

License texts are bundled inside the tool. As a result, you can generate notices in air-gapped environments with no internet access, and the SBOM you analyze never leaves your machine. Only when a license text is missing can you fetch it remotely with the `--online` option.

### It ships a desktop app and a local API

For users who are not comfortable with the command line, onot provides a desktop app for Windows and macOS. After installing, drop in an SBOM file to preview and download a notice. A local API sidecar is also provided for integration with other systems.

![onot desktop app preview](onot-app-preview.png)

## How to Use It

Install the command-line tool from PyPI.

```bash
pip install "onot[spdx,cyclonedx,excel,api]"

# Generate HTML and Markdown notices from an SBOM file
onot generate -i sbom.spdx.json -f html -f markdown --output-dir ./output
```

For the desktop app, download the installer from [Releases](https://github.com/sktelecom/onot/releases) and use it right away. For more details, see the [onot project page](/project/onot/) and the [user guide](https://github.com/sktelecom/onot/blob/main/docs/USER_GUIDE.md).

We hope onot helps with your open source compliance work. If you have feedback or suggestions, please share them anytime on [GitHub](https://github.com/sktelecom/onot).

Thank you.
