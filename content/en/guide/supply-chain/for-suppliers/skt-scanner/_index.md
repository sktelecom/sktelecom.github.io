---
title: "SKT SBOM Generator"
linkTitle: "SKT SBOM Generator"
weight: 2
type: docs
description: >
  Explains how to generate an SBOM that meets SK Telecom policy using the SKT SBOM Generator.
---

## SKT SBOM Generator

The SKT SBOM Generator is an open source tool that lets suppliers generate
deliverables that meet SK Telecom policy in a Docker environment.

- **Environment independence**: It runs on a Docker container, so there is no need to install Java, Python, etc. locally.
- **Multi-language support**: It analyzes various languages such as Java, Python, Node.js, Go, Swift/iOS, and Android.
- **Standard compliance**: It generates a CycloneDX (JSON) deliverable that meets SK Telecom policy.

> This page covers only the **quick start**. For installation, the full set of options, language-specific guides, input scenarios, the web UI, and other topics,
> refer to the **official repository documentation** as the authoritative source.
>
> [github.com/sktelecom/sbom-tools](https://github.com/sktelecom/sbom-tools)
>
> Bug reports, feature suggestions, and contributions via Pull Request are welcome.

## Three Delivery Deliverables

A single run generates the following **three deliverables** together (the `--all` option).

| Deliverable | File | Purpose |
|--------|------|------|
| **SBOM** | `{project}_{version}_bom.json` | CycloneDX 1.6 component specification (the deliverable used as the delivery baseline) |
| **Open Source Notice** | `{project}_{version}_NOTICE.{txt,html}` | Notice document for fulfilling license obligations |
| **Open Source Risk Analysis Report** | `{project}_{version}_risk-report.{md,html}` | Aggregation of license and vulnerability risks (response deadlines: Critical 7 days, High 30 days) |

## Prerequisites

The SBOM Generator runs on Docker. Install and run Docker Engine 20.10 or later. On Windows without Docker, we recommend Rancher Desktop, which is free. The first run downloads a scanner image (about 3–4 GB), so it takes roughly 5–15 minutes depending on your network.

## Getting Started on Windows (No Command Line)

If you are not comfortable with the command line, you can generate an SBOM on Windows using only your mouse. Choose one of the two methods below; for full details, see the [Windows quick start guide](https://github.com/sktelecom/sbom-tools/blob/main/docs/notice-quickstart.md).

The simplest method is to download the executable and double-click it.

1. Download `SBOM-Generator-*.exe` from the [latest release](https://github.com/sktelecom/sbom-tools/releases/latest).
2. Double-click the downloaded file to run it.

This executable is not yet code-signed, so Windows SmartScreen may show a protection warning when you run it. If it does, click "More info" and then select "Run anyway".

Alternatively, you can download the whole repository and use it.

1. From the repository's green `Code` button, choose `Download ZIP`, then unzip it.
2. In the unzipped folder, double-click `scripts\sbom-ui.bat`.
3. Once preparation is complete, the browser opens `http://localhost:8080` automatically.

The generated deliverables are saved to the `C:\Users\[username]\sbom-output` folder.

## Quick Start (CLI)

On macOS and Linux, download and run the script from a shell.

```bash
# 1) Download the script
curl -O https://raw.githubusercontent.com/sktelecom/sbom-tools/main/scripts/scan-sbom.sh
chmod +x scan-sbom.sh

# 2) Generate the three deliverables from the source directory
cd /path/to/my-project
/path/to/scan-sbom.sh --project "MyApp" --version "1.0.0" --all --generate-only
```

- Result: `MyApp_1.0.0_bom.json`, `MyApp_1.0.0_NOTICE.{txt,html}`, `MyApp_1.0.0_risk-report.{md,html}`
- For other input forms—such as a GitHub URL, source ZIP, Docker image, existing SBOM, firmware, binary/RootFS—and
  the full set of options, refer to the [Usage Guide](https://github.com/sktelecom/sbom-tools/blob/main/docs/usage-guide.md).
- On Windows, run the same commands through `scripts\scan-sbom.bat`, which forwards them via Git Bash, so Git for Windows must be installed.

> `--generate-only` creates files only locally, without uploading them automatically to the portal. This is recommended until submission.

## Generate via the Web UI (if you are not comfortable with the CLI)

If the command line feels daunting, you can use the browser-based web UI. Run it with a single line from the folder where you want to save the deliverables.

```bash
./scan-sbom.sh --ui     # http://localhost:8080 opens automatically
```

To run without the command line on Windows, see [Getting Started on Windows (No Command Line)](#getting-started-on-windows-no-command-line) above.

On the screen, select the **scan target** (current folder / GitHub URL / ZIP / SBOM / firmware / Docker image),
enter the project name and version, then run; the progress log is displayed in real time.

![SBOM Generator web UI — scan target selection screen](web-ui.png)

When complete, you can view or download the **SBOM, Notice, and Open Source Risk Analysis Report** on the screen.

![SBOM Generator web UI — real-time log and deliverable download](web-ui-scan.png)

> For details on each web UI input and descriptions of the deliverables, refer to the
> [Notice, Security, and UI Guide](https://github.com/sktelecom/sbom-tools/blob/main/docs/notice-security-ui-guide.md).

## Learn More (Official Repository Documentation)

The authoritative source for using the tool is the repository documentation. Find the topic you need below.

| Topic | Document |
|------|------|
| Installation · First SBOM (including web UI) | [getting-started](https://github.com/sktelecom/sbom-tools/blob/main/docs/getting-started.md) |
| Full options · By language · Analysis modes · CI/CD | [usage-guide](https://github.com/sktelecom/sbom-tools/blob/main/docs/usage-guide.md) |
| Scenarios by input form | [scenarios-guide](https://github.com/sktelecom/sbom-tools/blob/main/docs/scenarios-guide.md) |
| Notice · Security · Web UI | [notice-security-ui-guide](https://github.com/sktelecom/sbom-tools/blob/main/docs/notice-security-ui-guide.md) |
| Supplier SBOM analysis (`--analyze`) | [supplier-sbom-analysis](https://github.com/sktelecom/sbom-tools/blob/main/docs/supplier-sbom-analysis.md) |

## Next Steps

After generating the SBOM file:

1. Verify the file with the [Validation Checklist](../checklist/)
2. Submit it to SK Telecom following the [Submission Process](../submission/)

## Related Documents

- [Submission Requirements](../requirements/): The required data fields that must be included in the SBOM
- [Using Open Source Tools](../creation-guide/): For cases where you use open source tools such as cdxgen and Syft directly instead of the SKT tool
- [Validation Checklist](../checklist/): Items to verify before submission
- [Submission Process](../submission/): Submission method and email template
</content>
