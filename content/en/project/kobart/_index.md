---
title: "KoBART"
linkTitle: "KoBART"
weight: 4
type: docs
description: >
  Korean BART Model (Korean BART)
---

KoBART is a BART (Bidirectional and Auto-Regressive Transformers) model specialized in Korean text generation and summarization. Utilizing an Encoder-Decoder architecture, it demonstrates excellent performance across various natural language generation tasks.

![KoBART](bart.png)

## Project Information

* Developer: SK Telecom (SKT-AI)
* License: CC-BY-NC-SA 4.0
* GitHub: [https://github.com/SKT-AI/KoBART](https://github.com/SKT-AI/KoBART)

## Key Features

### 1. Encoder-Decoder Architecture
* Bidirectional encoder and auto-regressive decoder
* Optimized for text generation and transformation tasks
* Balance between context understanding and generation

### 2. Main Application Areas
* Text summarization: Condensing long documents into concise summaries
* Sentence generation: Producing natural Korean language sentences
* Translation: Sentence transformation and paraphrasing
* Dialogue generation: Question-answering systems

### 3. Korean Language Optimization
* Pre-trained on Korean corpus
* Considers Korean grammar and word order
* Supports diverse Korean language domains

## Installation and Usage

### Installation
```bash
pip install transformers torch
```

### Basic Text Summarization
```python
from transformers import PreTrainedTokenizerFast, BartForConditionalGeneration

# Load model and tokenizer
tokenizer = PreTrainedTokenizerFast.from_pretrained('gogamza/kobart-base-v2')
model = BartForConditionalGeneration.from_pretrained('gogamza/kobart-base-v2')

# Summarize long text
text = """
SK Telecom is Korea's leading mobile telecommunications company with 
extensive ICT technology including AI, 5G, and cloud services. Recently, 
it developed the Korean large language model A.X and released it as 
open source, contributing to the development of the domestic AI ecosystem.
"""

# Encode and generate summary
inputs = tokenizer(text, return_tensors='pt', max_length=1024, truncation=True)
summary_ids = model.generate(
    inputs['input_ids'],
    max_length=150,
    num_beams=5,
    early_stopping=True
)

# Decode
summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
print(summary)
```

### Text Generation Example
```python
# Prompt-based text generation
prompt = "With the advancement of artificial intelligence"

inputs = tokenizer(prompt, return_tensors='pt')
outputs = model.generate(
    inputs['input_ids'],
    max_length=100,
    temperature=0.8,
    do_sample=True,
    top_k=50
)

generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(generated_text)
```

## Model Specifications

* Architecture: BART
* Parameters: 123M
* Vocabulary Size: 30,000
* Max Sequence Length: 1,024
* Encoder Layers: 6
* Decoder Layers: 6

## Fine-tuning Guide

```python
from transformers import Trainer, TrainingArguments

# Fine-tuning configuration
training_args = TrainingArguments(
    output_dir='./kobart-finetuned',
    num_train_epochs=3,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    warmup_steps=500,
    weight_decay=0.01,
    logging_dir='./logs',
    evaluation_strategy="epoch"
)

# Create Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset
)

# Start training
trainer.train()
```

## Resources

* GitHub: [https://github.com/SKT-AI/KoBART](https://github.com/SKT-AI/KoBART)
* Hugging Face: [gogamza/kobart-base-v2](https://huggingface.co/gogamza/kobart-base-v2)
