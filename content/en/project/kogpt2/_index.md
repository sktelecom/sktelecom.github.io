---
title: "KoGPT2"
linkTitle: "KoGPT2"
weight: 3
type: docs
description: >
  Korean GPT-2 pre-trained model (Korean GPT-2 pretrained cased)
---

![KoGPT2](kogpt2.png)

KoGPT2 is an open-source based GPT-2 model trained on Korean language. By optimizing OpenAI's GPT-2 architecture for Korean, it can be used in various applications requiring Korean language understanding such as text generation, sentence completion, and chatbots.

## Project Information

* Developer: SK Telecom
* Release Date: 2020 (Korea's first open-source Korean GPT-2)
* License: CC-BY-NC-ND 4.0 (Modification and redistribution allowed for non-commercial use)
* GitHub: [https://github.com/SKT-AI/KoGPT2](https://github.com/SKT-AI/KoGPT2)

## Key Features

### 1. Korean Text Generation
* Natural Korean sentence generation
* Context-aware sentence completion
* Support for creative writing

### 2. Diverse Applications
* Chatbot building: Conversational AI services
* Text sentiment prediction: Emotion analysis
* Response generation: Generating answers to questions
* Sentence completion: Context-based text completion
* Storytelling: Creative writing support

### 3. Developer-Friendly
* Support for various frameworks (PyTorch, ONNX)
* Easy installation and usage
* Abundant example code provided

## Installation and Usage

### Installation

```bash
pip install kogpt2-transformers
```

### Basic Text Generation

```python
import torch
from transformers import GPT2LMHeadModel
from kogpt2_transformers import get_kogpt2_tokenizer

# Load model and tokenizer
tokenizer = get_kogpt2_tokenizer()
model = GPT2LMHeadModel.from_pretrained('skt/kogpt2-base-v2')

# Text generation
text = "The future of artificial intelligence is"
input_ids = tokenizer.encode(text, return_tensors='pt')

# Set generation parameters
gen_ids = model.generate(
    input_ids,
    max_length=128,
    repetition_penalty=2.0,
    pad_token_id=tokenizer.pad_token_id,
    eos_token_id=tokenizer.eos_token_id,
    bos_token_id=tokenizer.bos_token_id,
    use_cache=True
)

# Decode results
generated = tokenizer.decode(gen_ids[0])
print(generated)
```

### Using Hugging Face Transformers

```python
from transformers import pipeline

# Text generation pipeline
generator = pipeline(
    'text-generation',
    model='skt/kogpt2-base-v2',
    tokenizer='skt/kogpt2-base-v2'
)

# Generate text
prompt = "Korean natural language processing technology"
result = generator(
    prompt,
    max_length=100,
    num_return_sequences=3,
    temperature=0.8
)

for i, text in enumerate(result):
    print(f"Result {i+1}: {text['generated_text']}")
```

### Sentiment Analysis Example

```python
from kogpt2_transformers import get_kogpt2_tokenizer
from transformers import GPT2LMHeadModel
import torch

tokenizer = get_kogpt2_tokenizer()
model = GPT2LMHeadModel.from_pretrained('skt/kogpt2-base-v2')

# Reviews for sentiment analysis
reviews = [
    "This movie was really fun",
    "The service was terrible",
    "Great product for the price"
]

for review in reviews:
    # Prompt engineering for positive/negative judgment
    prompt = f"{review} This review is"
    input_ids = tokenizer.encode(prompt, return_tensors='pt')
    
    with torch.no_grad():
        output = model.generate(
            input_ids,
            max_length=len(input_ids[0]) + 10,
            num_return_sequences=1,
            temperature=0.7
        )
    
    result = tokenizer.decode(output[0])
    print(f"Original: {review}")
    print(f"Analysis: {result}\n")
```

### Chatbot Building Example

```python
from kogpt2_transformers import get_kogpt2_tokenizer
from transformers import GPT2LMHeadModel
import torch

tokenizer = get_kogpt2_tokenizer()
model = GPT2LMHeadModel.from_pretrained('skt/kogpt2-base-v2')

def generate_response(user_input, context=""):
    """Generate conversation-based response"""
    prompt = f"{context}\nUser: {user_input}\nAI:"
    
    input_ids = tokenizer.encode(prompt, return_tensors='pt')
    
    with torch.no_grad():
        output = model.generate(
            input_ids,
            max_length=input_ids.shape[1] + 50,
            temperature=0.8,
            top_k=50,
            top_p=0.95,
            repetition_penalty=1.2,
            do_sample=True
        )
    
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    # Extract only the AI response part
    ai_response = response.split("AI:")[-1].strip()
    
    return ai_response

# Chatbot conversation example
context = ""
while True:
    user_input = input("You: ")
    if user_input.lower() in ['quit', 'exit']:
        break
    
    response = generate_response(user_input, context)
    print(f"AI: {response}\n")
    
    # Update context
    context += f"User: {user_input}\nAI: {response}\n"
```

## Model Specifications

* Architecture: GPT-2
* Parameters: 125M
* Vocabulary Size: 50,000
* Context Length: 1,024 tokens
* Training Data: Korean web documents, news, Wikipedia

## Performance Benchmarks

| Task | Dataset | KoGPT2 Score |
|------|---------|--------------|
| Text generation quality | Human evaluation | 4.2/5.0 |
| Sentence completion | Self-evaluation | 85% |
| Conversation naturalness | Self-evaluation | 78% |

## Related Projects

* [KoBERT](../kobert/) - Korean BERT
* [KoBART](../kobart/) - Korean BART
* [A.X LLM](../ax-llm/) - Latest Korean LLM

## Resources

* GitHub: [https://github.com/SKT-AI/KoGPT2](https://github.com/SKT-AI/KoGPT2)
* Hugging Face: [skt/kogpt2-base-v2](https://huggingface.co/skt/kogpt2-base-v2)
* Tutorials: [GitHub Examples](https://github.com/SKT-AI/KoGPT2/tree/master/scripts)
* Issues: [GitHub Issues](https://github.com/SKT-AI/KoGPT2/issues)

## License

CC-BY-NC-ND 4.0 - Non-commercial use, modification and redistribution allowed
