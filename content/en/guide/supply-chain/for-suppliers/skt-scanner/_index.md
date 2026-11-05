---
title: "BomLens"
linkTitle: "BomLens"
weight: 2
type: docs
description: >
  Explains how to generate an SBOM that meets SK Telecom policy using BomLens.
---

## BomLens

BomLens is an open source tool that lets suppliers generate deliverables that meet SK Telecom policy in a Docker environment. You do not need to install per-language tools locally; it analyzes multiple languages and produces a CycloneDX (JSON) deliverable.

This page covers only the deliverables and the pre-submission check. For installation, how to run it, the full set of options, and the web UI, the BomLens documentation below is the authoritative source.

> [github.com/sktelecom/bomlens](https://github.com/sktelecom/bomlens)
>
> Bug reports, feature suggestions, and Pull Request contributions are welcome.

## Deliverables Generated

A single run generates the following four deliverables together in a `{project}_{version}/` subfolder (the `--all` option). The open-source risk analysis report can be turned off with `--no-report`; the conformance report is always generated (there is currently no option to turn it off).

| Deliverable | File | Purpose |
|--------|------|------|
| SBOM | `{project}_{version}_bom.json` | CycloneDX 1.6 component specification (the delivery baseline) |
| Open Source Notice | `{project}_{version}_NOTICE.{txt,html}` | Notice document for fulfilling license obligations |
| Open Source Risk Analysis Report | `{project}_{version}_risk-report.{md,html}` | Aggregation of license and vulnerability risks |
| Conformance Report | `{project}_{version}_conformance.{json,md,html}` | Whether the submission quality criteria are met, and what is missing |

The conformance report file is produced on every run, but the web UI's pass/fail screen only appears when an already-generated SBOM is fed back in with `--analyze` (a freshly generated SBOM grading itself is not a meaningful signal for most checks). Add this extra step to self-check before submission.

```bash
./scripts/scan-sbom.sh --analyze myserver_1.0.0_bom.json --project myserver --version 1.0.0 --generate-only
```

## Getting Started

BomLens runs on Docker, so Docker Engine 20.10 or later is required. For installation and your first SBOM, follow [Getting started](https://sktelecom.github.io/bomlens/start/first-scan/); if you are not comfortable with the command line, see [Getting started without the command line](https://sktelecom.github.io/bomlens/start/no-cli/) for the installer app and the web UI. Until you submit, we recommend using the `--generate-only` option so files are created only locally.

## Learn More

The authoritative source for using the tool is the repository documentation.

| Topic | Document |
|------|------|
| Installation, first SBOM, web UI | [Getting started](https://sktelecom.github.io/bomlens/start/first-scan/) |
| Full options, by language, CI/CD | [CLI reference](https://sktelecom.github.io/bomlens/reference/cli/) |
| Scenarios by input form | [Input scenarios](https://sktelecom.github.io/bomlens/guides/by-input/) |
| Notice & security reports | [Reports guide](https://sktelecom.github.io/bomlens/guides/reports/) |
| Server (OS + application) delivery | [Server delivery guide](https://sktelecom.github.io/bomlens/guides/server-delivery/) |

## Next Steps

After generating the SBOM, verify the file with the [Validation Checklist](../checklist/) and submit it following the [Submission Process](../submission/). For the required data fields, see the [Submission Requirements](../requirements/); to use tools such as cdxgen or Syft directly instead of the SKT tool, see [Using Open Source Tools](../creation-guide/).
