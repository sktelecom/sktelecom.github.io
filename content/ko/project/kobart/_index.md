---
title: "KoBART"
linkTitle: "KoBART"
weight: 4
type: docs
description: >
  한국어 BART 모델 (Korean BART)
---

KoBART는 한국어 텍스트 생성 및 요약에 특화된 BART(Bidirectional and Auto-Regressive Transformers) 모델입니다. Encoder-Decoder 구조를 활용하여 다양한 자연어 생성 태스크에서 우수한 성능을 발휘합니다.

![KoBART](bart.png)

## 프로젝트 정보

* 개발: SK텔레콤 (SKT-AI)
* 라이선스: CC-BY-NC-SA 4.0
* GitHub: [https://github.com/SKT-AI/KoBART](https://github.com/SKT-AI/KoBART)

## 주요 특징

### 1. Encoder-Decoder 아키텍처
* 양방향 인코더와 자동회귀 디코더
* 텍스트 생성 및 변환 작업에 최적화
* 문맥 이해와 생성의 균형

### 2. 주요 활용 분야
* 텍스트 요약: 긴 문서를 짧게 요약
* 문장 생성: 자연스러운 한국어 문장 생성
* 번역: 문장 변환 및 paraphrasing
* 대화 생성: 질문-응답 시스템

### 3. 한국어 최적화
* 한국어 코퍼스로 사전학습
* 한국어 문법 및 어순 고려
* 다양한 한국어 도메인 지원

## 설치 및 사용법

### 설치
```bash
pip install transformers torch
```

### 기본 텍스트 요약
```python
from transformers import PreTrainedTokenizerFast, BartForConditionalGeneration

# 모델 및 토크나이저 로드
tokenizer = PreTrainedTokenizerFast.from_pretrained('gogamza/kobart-base-v2')
model = BartForConditionalGeneration.from_pretrained('gogamza/kobart-base-v2')

# 긴 텍스트 요약
text = """
SK텔레콤은 한국 최대의 이동통신사로, AI, 5G, 클라우드 등 
다양한 ICT 기술을 보유하고 있습니다. 최근에는 한국어 
대규모 언어 모델 A.X를 개발하여 오픈소스로 공개했으며,
이를 통해 국내 AI 생태계 발전에 기여하고 있습니다.
"""

# 인코딩 및 요약 생성
inputs = tokenizer(text, return_tensors='pt', max_length=1024, truncation=True)
summary_ids = model.generate(
    inputs['input_ids'],
    max_length=150,
    num_beams=5,
    early_stopping=True
)

# 디코딩
summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
print(summary)
```

### 문장 생성 예제
```python
# Prompt 기반 텍스트 생성
prompt = "인공지능 기술의 발전으로"

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

## 모델 스펙

* Architecture: BART
* Parameters: 123M
* Vocabulary Size: 30,000
* Max Sequence Length: 1,024
* Encoder Layers: 6
* Decoder Layers: 6

## Fine-tuning 가이드

```python
from transformers import Trainer, TrainingArguments

# Fine-tuning 설정
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

# Trainer 생성
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset
)

# 학습 실행
trainer.train()
```


## 리소스

* GitHub: [https://github.com/SKT-AI/KoBART](https://github.com/SKT-AI/KoBART)
* Hugging Face: [gogamza/kobart-base-v2](https://huggingface.co/gogamza/kobart-base-v2)
