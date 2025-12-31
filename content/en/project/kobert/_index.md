---
title: "KoBERT"
linkTitle: "KoBERT"
weight: 2
type: docs
description: >
  Korean BERT pre-trained model (Korean BERT pre-trained cased)
---

![KoBERT](kobert.jpg)

KoBERT is a Korean-specialized BERT model developed by SK Telecom to overcome the limitations of Google's publicly released BERT language model in processing Korean.

## Project Information

* Developer: SK Telecom T-Brain (formerly SKT AI Center)
* License: Apache License 2.0
* GitHub: [https://github.com/SKTBrain/KoBERT](https://github.com/SKTBrain/KoBERT)

## Key Features

### 1. Korean Language Optimization
* Trained on millions of Korean sentences collected from Wikipedia and news sources
* Large-scale Korean language corpus utilization
* Reflects irregular Korean language variation characteristics

### 2. Efficient Tokenization
* Data-driven tokenization technique
* 27% fewer tokens with over 2.6% performance improvement compared to existing methods
* Subword segmentation tailored to Korean language characteristics

### 3. Distributed Learning Technology
* Ring-reduce based distributed learning technique
* Fast training of over a billion sentences across multiple machines
* Efficient processing of large-scale data

### 4. Multi-framework Support
* PyTorch
* TensorFlow
* ONNX
* MXNet

## Applications

### SK Telecom Internal Usage
1. Call center chatbots - Improving customer service efficiency
2. AI legal/patent search service - Document search and analysis
3. Machine Reading Comprehension (MRC) - Extracting accurate answers from marketing materials
4. Context-based document vector generation - Similar document recommendations (patent applications)

### General Use Cases
* Sentiment Analysis
* Named Entity Recognition (NER)
* Text Classification
* Question Answering Systems
* Sentence Similarity Measurement
* Text Embedding Generation

## Installation and Usage

### Installation

```bash
pip install kobert-transformers
pip install transformers
```

### Basic Usage

```python
from kobert_transformers import get_tokenizer
from transformers import BertModel

# Load tokenizer and model
tokenizer = get_tokenizer()
model = BertModel.from_pretrained('skt/kobert-base-v1')

# Tokenize and generate embeddings
text = "Korean natural language processing is fascinating"
inputs = tokenizer(text, return_tensors='pt')
outputs = model(inputs)

# Extract sentence embedding
sentence_embedding = outputs.last_hidden_state[:, 0, :].squeeze()
print(sentence_embedding.shape)  # torch.Size([768])
```

### PyTorch Example

```python
import torch
from kobert_transformers import get_kobert_model, get_tokenizer

# Load model and tokenizer
tokenizer = get_tokenizer()
model = get_kobert_model()

# Process text
text = "KoBERT is specialized in Korean language understanding."
encoded = tokenizer.encode_plus(
    text,
    add_special_tokens=True,
    max_length=128,
    padding='max_length',
    return_attention_mask=True,
    return_tensors='pt'
)

# Model inference
with torch.no_grad():
    outputs = model(
        input_ids=encoded['input_ids'],
        attention_mask=encoded['attention_mask']
    )
    
pooled_output = outputs[1]  # [CLS] token output
print(pooled_output.shape)  # torch.Size([1, 768])
```

## Performance Benchmarks

| Task | Dataset | KoBERT Score | Baseline |
|------|---------|--------------|----------|
| Sentiment Analysis | NSMC | 89.63% | 87.42% |
| NER | Korean NER | 86.11% | 84.13% |
| Sentence Similarity | KorSTS | 81.59% | 77.92% |
| Question Answering | KorQuAD 1.0 | 52.81 (EM) | 48.42 |

## Model Specifications

* Architecture: BERT-base
* Vocabulary Size: 8,002
* Hidden Size: 768
* Number of Layers: 12
* Number of Attention Heads: 12
* Intermediate Size: 3,072
* Max Sequence Length: 512

## Community and Support

### Technical Support
* GitHub Issues: [https://github.com/SKTBrain/KoBERT/issues](https://github.com/SKTBrain/KoBERT/issues)
* Active community contributions
* Continuous model updates

### Related Projects
* [KoGPT2](../kogpt2/) - Korean GPT-2 model
* [KoBART](../kobart/) - Korean BART model
* [A.X LLM](../ax-llm/) - Latest Korean LLM

## Using on Hugging Face

```python
from transformers import AutoModel, AutoTokenizer

# Load directly from Hugging Face Hub
model_name = "skt/kobert-base-v1"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name)

# Inference
text = "KoBERT is the standard for Korean natural language processing"
inputs = tokenizer(text, return_tensors="pt")
outputs = model(inputs)
```

## License

Apache License 2.0 - Commercial use allowed

## Resources

* GitHub: [https://github.com/SKTBrain/KoBERT](https://github.com/SKTBrain/KoBERT)
* Hugging Face: [skt/kobert-base-v1](https://huggingface.co/skt/kobert-base-v1)
* Documentation: [GitHub README](https://github.com/SKTBrain/KoBERT/blob/master/README.md)
* Issues: [GitHub Issues](https://github.com/SKTBrain/KoBERT/issues)
