---
title: "AI Model Pre-Release Checklist"
linkTitle: "Pre-Release Checklist"
weight: 10
type: docs
description: >
  Check everything that has to be settled before a model goes public.
---

Read through this when you start writing the model card, not on the day you publish. Some items
here can only be fixed by training again.

## 1. The right to publish

Settle this first. If it fails here, the rest of the preparation is wasted.

- [ ] If you fine-tuned a base model, does its license permit distributing derivatives?
- [ ] Have you identified what the base model license requires of derivatives (naming, license
      inheritance, passing on use restrictions)?
- [ ] Do the licenses of your training datasets permit distributing what was trained on them?
- [ ] If purchased or contracted data is involved, does the contract allow publication?
- [ ] Are there patent filings covering the model or the training method?

{{% alert title="Commonly missed" color="warning" %}}
The model license and the training dataset licenses are separate. Settling on Apache-2.0 for the
weights does not help if a training dataset permits non-commercial use only. Check both.
{{% /alert %}}

## 2. Choosing a license

- [ ] Have you chosen a license for the model weights?
- [ ] If the base model forces a particular license, does your choice honour it?
- [ ] If you need use restrictions, have you documented why? (RAIL-family licenses)
- [ ] If you publish the training dataset too, has it been licensed separately?
- [ ] Does the model card's `license` field carry the exact identifier?

For the characteristics of each license, see
[AI Model Licenses](/guide/use/obligation/#7-ai-model-licenses),
the [Llama 2 guide](/guide/use/obligation/llama-2/) and the [RAIL guide](/guide/use/obligation/rail/).

## 3. Data and sensitive material

- [ ] Have you checked whether the training data contains personal data?
- [ ] If it does, has the privacy team reviewed it?
- [ ] Have you checked whether the training data contains third-party copyrighted works?
- [ ] Is internal documentation or customer data absent from the training set?
- [ ] Have you considered the risk of the model reproducing its training data verbatim?
- [ ] Have you prepared the public summary of training content? (EU AI Act Article 53, on the
      Commission's template)
- [ ] Have you set out your copyright policy? (respecting text and data mining opt-outs, and so on)
- [ ] Are the files you are about to publish free of API keys, internal hostnames and credentials?
      (see the [sensitive information checklist](../../process/scrub-checklist/))

## 4. Model card

For how to write it, see [Model card](../model-card/).

- [ ] Have you filled in all seven sections of the [model card](../model-card/)? (model
      description, intended use, out-of-scope use, limitations and bias, training data, evaluation,
      contact)
- [ ] If there is a base model, is it declared in `base_model`?

## 5. Files and identifiers

- [ ] Does the list of weight files match what you intended to publish (no stray checkpoints)?
- [ ] Do you have a hash (SHA-256) for each weight file?
- [ ] Has the model name passed internal naming rules and a trademark check?
      (see [Choosing a project name](../../process/name/))
- [ ] Have you decided on a versioning scheme?

## 6. Approval and afterwards

- [ ] Have you obtained approval from your organization's executive or leader?
- [ ] Have you requested an OSRB review? (stage A of [the release process](../../process/))
- [ ] Is someone assigned to answer questions after release?
- [ ] Is there a route for reporting vulnerabilities or misuse?
- [ ] Have you decided what would make you withdraw or revise the model?

## Checking it automatically

The model card, license and dataset items above can be checked with a tool. Give BomLens a model
id and it reads the model card, then reports what is missing and how to supply it. Why it matters
and how to run it are both in [AI SBOM](../ai-sbom/).

What a tool can check stops at what the model card and the repository metadata reveal. Whether
personal data ended up in the training set, or whether a contract allows publication, is a
judgement a person has to make.

## Related pages

- [Releasing an AI model](../) — the whole path
- [Model card](../model-card/) — how to write it
- [AI SBOM](../ai-sbom/) — documenting for regulation

## Contact

For items you are unsure about, contact the OSRB (opensource@sktelecom.com).
