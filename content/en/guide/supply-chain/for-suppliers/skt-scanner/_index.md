---
title: "SKT SBOM Generator (Easy Mode)"
linkTitle: "SKT SBOM Generator"
weight: 2
type: docs
description: >
  Generate the three SK Telecom standard-compliant deliverables instantly with the SKT SBOM Generator, without complex configuration.
---

## SKT SBOM Generator

The SKT SBOM Generator is an open source tool that lets suppliers instantly generate
standard-compliant deliverables that meet SK Telecom policy, using just Docker, without learning a separate tool or configuring an environment.

- **Environment independence**: It runs on a Docker container, so there is no need to install Java, Python, etc. locally.
- **Multi-language support**: It analyzes various languages such as Java, Python, Node.js, Go, Swift/iOS, and Android in a single run.
- **Automatic standard compliance**: It automatically generates a CycloneDX (JSON) deliverable that meets SK Telecom policy.

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

## Quick Start (CLI)

Prerequisite: Install and run **Docker 20.10 or later**. (The first run takes 5–10 minutes to download the image)

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

> `--generate-only` creates files only locally, without uploading them automatically to the portal. This is recommended until submission.

## Generate via the Web UI (if you are not comfortable with the CLI)

If the command line feels daunting, you can use the browser-based web UI. Run it with a single line from the folder where you want to save the deliverables.

```bash
./scan-sbom.sh --ui     # http://localhost:8080 opens automatically
```

On Windows, double-click `scripts\sbom-ui.bat`.

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
