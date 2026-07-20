---
title: "Writing the Model Card"
linkTitle: "Model Card"
weight: 20
type: docs
description: >
  What a model card is and which fields you need to fill in.
---

A model card is not a separate form. It is the `README.md` file in the model repository. The YAML
block at the top is the metadata machines read; the Markdown below it is the description people
read.

It is the first thing users read after release, and it is also where documentation for regulation
starts. Anything absent from it cannot be verified by any tool either.

## File structure

```markdown
---
license: apache-2.0
language:
  - ko
  - en
base_model: meta-llama/Llama-3.1-8B
datasets:
  - HuggingFaceFW/fineweb
pipeline_tag: text-generation
library_name: transformers
---

# Model name

Description, intended use, limitations and evaluation results.
```

## Metadata fields

The YAML block drives search and filtering, and it is what a tool reads when building an AI SBOM.
These four fields matter most.

| Field | Content | If left empty |
|---|---|---|
| `license` | The license identifier for the weights | Users cannot tell on what terms they may use it |
| `datasets` | Hub identifiers of the training datasets | Data provenance cannot be traced, leaving a gap for regulation |
| `base_model` | The original model of a fine-tune, quantization or merge | The derivative relationship and inherited license duties stay hidden |
| `pipeline_tag` | The task the model performs | The intended use is unclear |

For a non-standard license, set `license: other` and give the name and a link.

```yaml
license: other
license_name: License name
license_link: https://example.com/license
```

Declare `datasets` as far as you can even when you are not publishing the data itself. If something
cannot be disclosed, saying so in the body — and why — is better than leaving it blank.

## What belongs in the body

Start from the
[model card template](https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md)
that Hugging Face provides. These sections connect directly to documentation duties, so it is worth
not leaving them empty.

**Model description**
What the model does, how it is built, and roughly how many parameters it has.

**Intended use**
The situations the model was built for. This corresponds to the part of the EU AI Act's technical
documentation that states a system's purpose.

**Out-of-scope use**
Where it should not be used. Naming high-consequence domains explicitly — medical diagnosis, credit
scoring — is more useful than a general disclaimer.

**Limitations and bias**
The performance limits and biases you know about. If an area went unverified, write that it went
unverified. Disclosing a known problem is safer than omitting it.

**Training data**
What you trained on, and how you preprocessed and filtered it. If you filtered out personal data or
copyrighted works, say how.

**Evaluation**
What you measured, against what, and with what result. Name the evaluation datasets and metrics.

## When to write it

Leaving the model card until the end means reconstructing details from training time, which makes it
inaccurate. Recording as you go is far easier.

1. Before training, record the dataset list, provenance and licenses.
2. During training, record hyperparameters and evaluation results.
3. While preparing the release, move these into the model card and add intended use and limitations.
4. Confirm what is left with the [pre-release checklist](../checklist/).

## Related pages

- [Pre-release checklist](../checklist/) — checking model card items
- [AI SBOM](../ai-sbom/) — what gets built from the model card
- [Model Cards](https://huggingface.co/docs/hub/model-cards) — Hugging Face documentation

## Contact

For anything you are unsure about, contact the OSRB (opensource@sktelecom.com).
