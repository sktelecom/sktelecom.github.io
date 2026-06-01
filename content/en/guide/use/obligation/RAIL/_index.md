---
title: "BigScience RAIL Guide"
linkTitle: "BigScience RAIL"
weight: 10
type: docs
description: "BigScience RAIL (Responsible AI License) is a license used for large language models (LLMs) such as BLOOM. It permits free use of the model while including ethical restrictions for responsible AI development."
---

SPDX Identifier: `BigScience-RAIL-1.0`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - **A license dedicated to large language models**
> - Model use, modification, and distribution: Freely allowed (including commercial use)
> - Notice obligation: State the license information and use restrictions
> - **Use restrictions**: Use for illegal, discriminatory, or harmful purposes is prohibited
> - Derivative models: Must apply the same restrictions
> - Generated outputs: User's responsibility (separate from the model license)

</div>
{{% /alert %}}

{{% alert title="BigScience RAIL Caution" color="warning" %}}
BigScience RAIL is similar to CreativeML Open RAIL-M but is specialized for language models:
- Applied to text generation models (LLMs)
- More specific prohibited uses are stated (especially discrimination and disinformation)
- Obligation to provide a Model Card

When developing an LLM-based service, please consult the OSPO.
{{% /alert %}}

## What Is BigScience RAIL?

BigScience RAIL (Responsible AI License) is a license that the BigScience project released in 2022 together with the BLOOM language model.

### The BigScience Project
- **BLOOM**: A 176B-parameter multilingual language model
- **More than 1,000 researchers** participated
- Set **responsible AI development** as a core value

### Two Versions of RAIL

| Version | Target | Characteristics |
|---------|--------|-----------------|
| **RAIL-M** | Model weights | Restrictions on the use of the model itself |
| **RAIL++-M** | Model + code | Includes both the model and the training/inference code |

BigScience uses RAIL-M (applied only to the model)

## Major Projects Using It

### The BLOOM Family
- **BLOOM**: BigScience's 176B model
- **BLOOMZ**: An instruction-following version
- **mT0**: A multilingual zero-shot model

### Other Models Adopting RAIL
- Some open LLM fine-tuned models
- Research language models

## Permitted Items

### What You Can Do Freely

1. **Model use**
   - Text generation
   - Translation, summarization, question answering
   - Building chatbots
   - Providing commercial services

2. **Model modification**
   - Fine-tuning
   - Additional training
   - Lightweighting such as LoRA, QLoRA

3. **Model distribution**
   - Releasing modified models
   - Distributing derivative models
   - Commercial API services

4. **Use of generated outputs**
   - Commercial use of AI-generated text
   - Creating secondary works

## Prohibited Items (Restrictions)

BigScience RAIL cannot be used for the following purposes:

### 1. Illegal Activities
- Supporting the planning or execution of crimes
- Generating illegal content
- Supporting terrorist activities

### 2. Child Protection
- Generating child sexual exploitation material
- Harmful content targeting children
- Supporting child grooming

### 3. Discrimination and Hate
- Discrimination based on race, ethnicity, or religion
- Discrimination based on gender or sexual orientation
- Discrimination based on disability or age
- Generating hate speech

### 4. Disinformation and Manipulation
- Intentionally generating fake news
- Generating deepfake text (for identity theft)
- Content for election manipulation
- Content for fraud

### 5. Privacy Violations
- Unauthorized collection of personal information
- Supporting stalking and harassment
- Use for surveillance purposes

### 6. Medical and Legal
- Replacing professional medical diagnosis
- Replacing legal advice
- Replacing financial advice

### 7. Self-Harm and Violence
- Encouraging suicide or self-harm
- Inciting violence
- Weapons manufacturing information

### 8. High-Risk Decision-Making
- Automated credit scoring (sole decision-making)
- Automated hiring decisions (sole decision-making)
- Criminal justice decisions (sole decision-making)

## Use Scenarios

### Permitted Uses

#### 1. Chatbot Service
Scenario: A customer consultation chatbot  
Method of use: Fine-tuning BLOOM to build a consultation bot  
Judgment: Allowed (commercial use is OK, not a prohibited use)

#### 2. Translation Service
Scenario: Multilingual automatic translation  
Method of use: Leveraging BLOOM's multilingual capability  
Judgment: Allowed

#### 3. Content Generation Tool
Scenario: A marketing copy generation tool  
Method of use: BLOOM-based text generation  
Judgment: Allowed (when not discriminatory/false content)

### Prohibited Uses

#### 1. Fake News Generator
Scenario: An automatic fake news generation tool  
Method of use: Mass generation of disinformation  
Judgment: Prohibited (generating disinformation)

#### 2. Generating Discriminatory Content
Scenario: Generating text that demeans a specific group  
Method of use: Generating hate speech  
Judgment: Prohibited (discrimination and hate)

#### 3. Automated Credit Scoring
Scenario: Automatically determining credit scores with an LLM  
Method of use: Automatic approval/denial of loans  
Judgment: Prohibited (high-risk decision-making)

### Requires Review

#### 1. Educational Chatbot
Scenario: A student counseling chatbot  
Method of use: Career counseling, psychological counseling  
Judgment: At the boundary of medical/psychological advice, expert review required

#### 2. Hiring Assistance Tool
Scenario: Resume screening assistance  
Method of use: A human makes the final decision, but the AI recommends  
Judgment: Depends on the method of use, OSPO review

## Model Card Obligation

BigScience RAIL recommends providing a Model Card.

### Content to Include in the Model Card

1. **Model information**
   - Model architecture, number of parameters
   - Source of training data
   - Training method

2. **Limitations**
   - The model's limitations
   - Known bias
   - Inappropriate use cases

3. **Usage guide**
   - Recommended use cases
   - Prohibited items
   - Ethical considerations

**Example**: [BLOOM Model Card](https://huggingface.co/bigscience/bloom)

## Licensing of Derivative Models

When distributing a derivative model:

### Mandatory Items
- Apply the same use restrictions
- State the license information
- Provide a model card (recommended)

### License Propagation
If you create a custom model by fine-tuning BLOOM, you must apply BigScience RAIL or equivalent restrictions to the custom model as well.

## Responsibility for AI-Generated Outputs

### Important: Responsibility for Generated Text

- **Model provider**: Obligation to state model use restrictions
- **Model user**: Obligation to verify the legality of generated outputs
- **Service provider**: Obligation to take measures to prevent users' misuse


## References

* [BigScience RAIL-1.0 Full Text](https://bigscience.huggingface.co/blog/the-bigscience-rail-license)
* [SPDX License List - BigScience-RAIL-1.0](https://spdx.org/licenses/BigScience-RAIL-1.0.html)
* [BLOOM Model Card](https://huggingface.co/bigscience/bloom)
* [Responsible AI Licenses Initiative](https://www.licenses.ai/)
