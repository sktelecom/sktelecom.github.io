---
title: "Llama 2 Community License Guide"
linkTitle: "Llama 2"
weight: 10
type: docs
description: "The Llama 2 Community License is a license applied to Meta's Llama 2 language model. It permits most uses, but services with 700 million or more monthly active users require a separate license."
---

SPDX Identifier: `Llama-2` (unofficial)

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - **Meta's proprietary license** (not OSI-approved open source)
> - **Scale restriction**: Services with 700 million or more monthly active users (MAU) require a separate license
> - Commercial use: Allowed (within the scale restriction)
> - Notice obligation: Retain the license information
> - **Use restrictions**: Use for illegal or harmful purposes is prohibited
> - Derivative models: State that they are based on Llama 2, and apply the same restrictions

</div>
{{% /alert %}}

{{% alert title="Llama 2 Scale Restriction" color="warning" %}}
To use Llama 2 in a product/service with 700 million or more monthly active users (MAU), you must obtain a separate license from Meta.

- **Fewer than 700 million**: Free to use
- **700 million or more**: A license request to Meta is required

Most companies and services have fewer than 700 million users, so they can use it freely.

When developing a Llama 2-based service, please consult the OSRB.
{{% /alert %}}

## What Is the Llama 2 Community License?

The Llama 2 Community License is a proprietary license that Meta released in 2023 together with the Llama 2 language model.

### Llama Model Lineage

| Version | Release Date | License | Characteristics |
|---------|-------------|---------|-----------------|
| **Llama 1** | 2023.02 | Research only | Commercial use not allowed |
| **Llama 2** | 2023.07 | Llama 2 Community | Commercial use allowed (scale restriction) |
| **Llama 3** | 2024.04 | Llama 3 Community | Similar to Llama 2 (updated) |

### Why a "Community License"?

Meta describes this license as follows:
- **Encouraging community innovation**: Most developers and companies can use it freely
- **Checking large corporations**: Restricting exclusive use by Big Tech
- **Responsible AI**: Preventing harmful use

## 700 Million Scale Restriction

### Definition of MAU (Monthly Active Users)

Monthly active users: the number of unique users who used the product/service in the previous calendar month

**Examples:**

Scenario 1: T phone app (MAU 5 million)  
Since the MAU is fewer than 700 million, it can be used freely.

Scenario 2: Facebook (MAU 3 billion)  
Since the MAU is 700 million or more, a separate license must be requested from Meta.

### Services Exceeding the 700 Million Threshold

Services with 700 million or more MAU worldwide:
- Facebook, Instagram, WhatsApp (Meta)
- YouTube (Google)
- TikTok
- WeChat

**Most companies are not affected**

### When the Scale Restriction Applies

It applies continuously from the time of license agreement and after use begins.

**Important**: What happens if you start below 700 million but later exceed it? At the point of exceeding it, you must notify Meta and negotiate a separate license.

## Permitted Items (MAU Fewer Than 700 Million)

### What You Can Do Freely

1. **Commercial use**
   - Providing paid services
   - Selling APIs
   - Integrating into products

2. **Model modification**
   - Fine-tuning
   - Quantization (4-bit, 8-bit)
   - Model merging

3. **Model distribution**
   - Releasing derivative models
   - Uploading to Hugging Face, etc.
   - Including in open source projects

4. **Use of generated outputs**
   - Commercial use of AI-generated text

## Prohibited Items (Acceptable Use Policy)

Llama 2 cannot be used for the following purposes:

### 1. Illegal Activities
- Supporting criminal acts
- Trading illegal goods
- Terrorist activities

### 2. Child Protection
- Child abuse content
- Child grooming

### 3. Discrimination and Hate
- Generating discriminatory content
- Hate speech
- Harassment

### 4. Violence and Danger
- Inciting violence
- Encouraging self-harm or suicide
- Weapons manufacturing

### 5. Privacy Violations
- Unauthorized collection of personal information
- Stalking, surveillance

### 6. Disinformation
- Intentional fake news
- Fraudulent content

### 7. High-Risk Domains (Sole Decision-Making)
- Medical diagnosis
- Legal advice
- Financial advice
- Emergency services

## Prohibition on Training Competing LLMs with Llama 2

As a distinctive clause, you cannot use Llama 2 to train an LLM that competes with Meta.

**Prohibited examples:**
- Training a new LLM with the outputs of Llama 2
- Distillation using Llama 2 as a teacher model

**Permitted examples:**
- Fine-tuning Llama 2 itself
- Using the outputs of Llama 2 as a dataset (for a specific task)

## Use Scenarios

### Permitted Uses

#### 1. Customer Service Chatbot
Scenario: A telecom customer consultation chatbot  
MAU: 10 million  
Judgment: Allowed (fewer than 700 million)

#### 2. B2B AI Solution
Scenario: An enterprise document summarization solution  
MAU: 100 thousand  
Judgment: Allowed

#### 3. Mobile App AI Feature
Scenario: A photo caption generation app  
MAU: 5 million  
Judgment: Allowed

### Restricted Uses

#### 1. Large-Scale Social Media
Scenario: Integration into social media with 1 billion MAU  
Judgment: A Meta license is required

#### 2. Training a Competing LLM
Scenario: Training a new LLM with Llama 2 outputs  
Judgment: Prohibited

### Requires Review

#### 1. Global Service Expansion
Scenario: Currently 50 million MAU, with a future target of 1 billion  
Judgment: Consultation with Meta is required before reaching 700 million

## Licensing of Derivative Models

### Mandatory Requirements

1. **Attribution**
   - Indicate "Based on Llama 2"
   - State it in the model card

2. **License propagation**
   - Apply the same Acceptable Use Policy
   - Maintain the 700 million scale restriction

3. **Restriction on Meta trademark use**
   - Unauthorized use of the "Llama" trademark is prohibited
   - The expression "Built with Llama 2" is OK

### Derivative Model Examples

**Permitted names:**
- "MyModel (based on Llama 2)"
- "CustomLLM-Llama2-7B"

**Prohibited names:**
- "Llama 2 Pro"
- "Meta Llama Custom"

## Llama 3 Update

Llama 3, released in April 2024, uses an updated license:
- Similar basic structure
- Some improvements to the use restriction clauses
- **The 700 million scale restriction is maintained**

The same guide applies when using Llama 3.

## References

* [Llama 2 Community License Full Text](https://ai.meta.com/llama/license/)
* [Llama 2 Acceptable Use Policy](https://ai.meta.com/llama/use-policy/)
* [Llama 2 Model Card](https://huggingface.co/meta-llama/Llama-2-7b)
* [Meta AI Official Blog](https://ai.meta.com/blog/)
