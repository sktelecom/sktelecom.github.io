---
title: "A.X LLM Series"
linkTitle: "A.X LLM"
weight: 1
type: docs
github: "https://github.com/SKT-AI"
techs: ["LLM", "AI"]
description: >
  SK Telecom's proprietary Korean-specialized large language models
---

![A.X LLM](A.X_logo.png)

A.X LLM is a series of Korean-specialized large language models independently developed by SK Telecom. A.X K2, A.X K1, A.X 4.0, and A.X 3.1 are publicly available as open source and can be freely used for academic research and commercial purposes.

## Project Information

* Developer: SK Telecom
* License: Apache-2.0
* GitHub: 
  - [A.X K2](https://github.com/SKT-AI/A.X-K2)
  - [A.X K1](https://github.com/SKT-AI/A.X-K1)
  - [A.X 4.0](https://github.com/SKT-AI/A.X-4.0)
  - [A.X 3.1](https://github.com/SKT-AI/A.X-3)
  - [A.X 4.0-VL-Light](https://github.com/SKT-AI/A.X-4.0-VL-Light)
* Hugging Face:
  - [A.X K2 Collection](https://huggingface.co/collections/skt/ax-k2)
  - [A.X K2](https://huggingface.co/skt/A.X-K2)
  - [A.X K1](https://huggingface.co/skt/A.X-K1)
  - [SKT-AI Organization](https://huggingface.co/skt)

## Key Features

### A.X K2 Series
* 688B-A33B Sparse MoE: A large-scale Mixture-of-Experts model with 688B total parameters and 33B active parameters per token
* Mathematical and scientific reasoning: Scored 29/42 on IMO 2026, reaching the gold-medal threshold, and tied for the top score on the MathArena AIME 2026 leaderboard with 97.1%
* Sparse Gated Attention (SGA): Selects the most relevant information in long contexts to improve accuracy and inference efficiency
* Long-context support: Supports a 262,144-token (256K) context length
* Native FP8 training and FP8 checkpoint: Enables efficient FP8 serving without a separate post-hoc quantization step
* Deployment checkpoints: Provides GGUF and NVFP4 quantized builds together with EAGLE3 and DSpark draft models for faster inference
* Multimodal derivative lineup: Also publishes model cards and technical materials for A.X VE, a vision encoder trained from scratch, and A.X K2 ALM, an audio language model for speech understanding and generation

### A.X K1 Series
* 519B-A33B Sparse MoE: A large-scale Mixture-of-Experts model with 519B total parameters and 33B active parameters per token
* Hybrid Reasoning Control: Think / Non-Think modes allow users to choose between deeper reasoning and lower latency
* Long-context support: Supports a 131,072-token context length
* Multilingual and code tokenizer: BBPE-based tokenizer optimized for Korean, English, Chinese, Japanese, Spanish, and code data

### A.X 4.0 Series
* 72B model: Optimized for large-scale Korean language processing
* 7B Light Model: Efficient lightweight model
* Korean token efficiency: ~33% improvement over GPT-4o
* Real-world deployment: Used in SK Telecom's A. call summary service

### A.X 3.1 Series
* 34B model: Independently developed sovereign AI model
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
- A.X K2: A from-scratch 688B-A33B proprietary Sparse MoE model
- A.X K1: A from-scratch 519B-A33B proprietary Sparse MoE model
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

| Model | Parameters | Representative Score | Features |
|-------|-----------|----------------------|----------|
| A.X K2 | 688B-A33B | IMO 2026 29/42 (gold-medal threshold) / AIME 2026 97.1 | SGA, 256K context |
| A.X K1 | 519B-A33B | KMMLU 80.2 (Thinking Mode) | Sparse MoE, long context |
| A.X 4.0 | 72B | KMMLU 78.3 | High performance |
| A.X 3.1 | 34B | KMMLU 69.2 | Independently developed |
| A.X 4.0 Light | 7B | - | Efficiency |
| A.X 3.1 Light | - | - | Lightweight |

## Resources

* A.X K2: [GitHub](https://github.com/SKT-AI/A.X-K2) / [Hugging Face](https://huggingface.co/skt/A.X-K2) / [Collection](https://huggingface.co/collections/skt/ax-k2)
* A.X K2 deployment checkpoints: [GGUF](https://huggingface.co/skt/A.X-K2-GGUF) / [NVFP4](https://huggingface.co/skt/A.X-K2-NVFP4) / [EAGLE3](https://huggingface.co/skt/A.X-K2-EAGLE3) / [DSpark](https://huggingface.co/skt/A.X-K2-DSpark)
* A.X K2 multimodal lineup: [A.X VE](https://huggingface.co/skt/A.X-VE) / [A.X K2 ALM](https://huggingface.co/skt/A.X-K2-ALM)
* A.X K2 Technical Report: [GitHub](https://github.com/SKT-AI/A.X-K2/blob/main/A_X_K2_Tech_Report.pdf)
* A.X K1: [GitHub](https://github.com/SKT-AI/A.X-K1) / [Hugging Face](https://huggingface.co/skt/A.X-K1)
* A.X K1 Technical Report: [arXiv:2601.09200](https://arxiv.org/abs/2601.09200)
* Hugging Face: [SKT-AI Organization](https://huggingface.co/skt)
* GitHub: [SKT-AI](https://github.com/SKT-AI)
* Related press releases: [Mathematical reasoning performance](https://news.sktelecom.com/229153) / [A.X K2 announcement](https://news.sktelecom.com/en/3204) / [Sovereign AI Phase 2](https://news.sktelecom.com/en/2593)
* Official News: [SK Telecom Newsroom](https://news.sktelecom.com/217916)
* Contact: [a.x@sk.com](mailto:a.x@sk.com)
