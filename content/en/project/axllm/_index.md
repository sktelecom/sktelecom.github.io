---
title: "A.X LLM Series"
linkTitle: "A.X LLM"
weight: 1
type: docs
description: >
  SK Telecom's proprietary Korean-specialized large language models
---

![A.X LLM](A.X_logo.png)

A.X LLM is a series of Korean-specialized large language models independently developed by SK Telecom. The A.X 3.1 and A.X 4.0 series are publicly available as open source and can be freely used for academic research and commercial purposes.

## Project Information

* Developer: SK Telecom
* License: Apache-2.0
* GitHub: 
  - [A.X 4.0](https://github.com/SKT-AI/A.X-4.0)
  - [A.X 3.1](https://github.com/SKT-AI/A.X-3)
  - [A.X 4.0-VL-Light](https://github.com/SKT-AI/A.X-4.0-VL-Light)

## Key Features

### A.X 4.0 Series
* 72B Standard Model: Optimized for large-scale Korean language processing
* 7B Light Model: Efficient lightweight model
* Korean token efficiency: ~33% improvement over GPT-4o
* Real-world deployment: Used in SK Telecom's A. call summary service

### A.X 3.1 Series
* 34B Standard Model: Independently developed sovereign AI model
* Light Model: Lightweight version
* Significantly enhanced coding and mathematical reasoning capabilities
* KMMLU benchmark: 69.20 points (~88% of A.X 4.0 performance)

### A.X 4.0-VL-Light
* Vision-Language model: Integrated image and text processing
* Multimodal AI: Capable of understanding and analyzing visual information

## Technical Achievements

### Korean Language Processing Capabilities
- Excellent performance on KMMLU (Korean Massive Multitask Language Understanding)
- Specialized in Korean conversation, document understanding, and summarization
- Optimized for Korean business environments

### Model Architecture
- A.X 3 series: Sovereign AI developed from scratch
- A.X 4 series: Open-source models enhanced with CPT (Continual Pre-Training) using large-scale Korean data

## Use Cases

### SK Telecom Internal Services
* A. call summary service (since May 2025)
* Customer service chatbots
* Internal document analysis and search

### Potential Applications
* Korean conversational AI services
* Text generation and summarization
* Translation and sentiment analysis
* Code generation and mathematical problem solving
* Korean content creation

## Benchmark Performance

| Model | Parameters | KMMLU Score | Features |
|-------|-----------|-------------|----------|
| A.X 4.0 Standard | 72B | 78.3 | Highest performance |
| A.X 3.1 Standard | 34B | 69.2 | Independently developed |
| A.X 4.0 Light | 7B | - | Efficiency |
| A.X 3.1 Light | - | - | Lightweight |

## Using on Hugging Face

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

# Load A.X 4.0 Standard model
model_name = "SKT-AI/A.X-4.0-Standard"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# Generate text
input_text = "The advancement of Korean language models"
inputs = tokenizer(input_text, return_tensors="pt")
outputs = model.generate(inputs, max_length=100)
print(tokenizer.decode(outputs[0]))
```

## Resources

* Hugging Face: [SKT-AI Organization](https://huggingface.co/skt)
* GitHub: [SKT-AI](https://github.com/SKT-AI)
* Official News: [SK Telecom Newsroom](https://news.sktelecom.com/217916)
* Contact: [a.x@sk.com](mailto:a.x@sk.com)
