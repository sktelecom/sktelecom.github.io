---
title: "KoBERT"
linkTitle: "KoBERT"
weight: 2
type: docs
description: >
  한국어 BERT 사전 학습 모델 (Korean BERT pre-trained cased)
---

![KoBERT](kobert.jpg)

KoBERT는 구글이 공개한 인공지능(AI) 언어모델 BERT의 한국어 성능 한계를 극복하기 위해 SK텔레콤이 개발한 한국어 특화 BERT 모델입니다.

## 프로젝트 정보

* 개발: SK텔레콤 T-Brain (구 SKT AI Center)
* 라이선스: Apache License 2.0
* GitHub: [https://github.com/SKTBrain/KoBERT](https://github.com/SKTBrain/KoBERT)

## 주요 특징

### 1. 한국어 최적화
* 위키피디아와 뉴스에서 수집한 수백만 개의 한국어 문장으로 학습
* 대규모 한국어 말뭉치(corpus) 활용
* 한국어의 불규칙한 언어 변화 특성 반영

### 2. 효율적인 토큰화
* 데이터 기반 토큰화(Tokenization) 기법 적용
* 기존 대비 27% 적은 토큰으로 2.6% 이상의 성능 향상
* 한국어 특성에 맞는 서브워드 분할

### 3. 분산 학습 기술
* Ring-reduce 기반 분산 학습 기술 사용
* 십억 개 이상의 문장을 다수의 머신에서 빠르게 학습
* 대량 데이터의 효율적 처리

### 4. 다양한 프레임워크 지원
* PyTorch
* TensorFlow
* ONNX
* MXNet

## 활용 분야

### SK텔레콤 내부 활용
1. 콜센터 상담 챗봇 - 상담사 업무 효율화
2. AI 법무/특허 검색 서비스 - 문서 검색 및 분석
3. 기계독해(MRC) - 마케팅 자료에서 정확한 답변 추출
4. 문맥 기반 문서 벡터 생성 - 유사 문서 추천 (특허 출원)

### 일반적인 활용 사례
* 감성 분석 (Sentiment Analysis)
* 개체명 인식 (Named Entity Recognition)
* 문서 분류 (Text Classification)
* 질의응답 시스템 (Question Answering)
* 문장 유사도 측정
* 텍스트 임베딩 생성

## 설치 및 사용법

### 설치

```bash
pip install kobert-transformers
pip install transformers
```

### 기본 사용

```python
from kobert_transformers import get_tokenizer
from transformers import BertModel

# 토크나이저와 모델 로드
tokenizer = get_tokenizer()
model = BertModel.from_pretrained('skt/kobert-base-v1')

# 텍스트 토큰화 및 임베딩 생성
text = "한국어 자연어 처리는 재미있습니다"
inputs = tokenizer(text, return_tensors='pt')
outputs = model(inputs)

# 문장 임베딩 추출
sentence_embedding = outputs.last_hidden_state[:, 0, :].squeeze()
print(sentence_embedding.shape)  # torch.Size([768])
```

### PyTorch 예제

```python
import torch
from kobert_transformers import get_kobert_model, get_tokenizer

# 모델과 토크나이저 가져오기
tokenizer = get_tokenizer()
model = get_kobert_model()

# 텍스트 처리
text = "KoBERT는 한국어 이해에 특화되어 있습니다."
encoded = tokenizer.encode_plus(
    text,
    add_special_tokens=True,
    max_length=128,
    padding='max_length',
    return_attention_mask=True,
    return_tensors='pt'
)

# 모델 추론
with torch.no_grad():
    outputs = model(
        input_ids=encoded['input_ids'],
        attention_mask=encoded['attention_mask']
    )
    
pooled_output = outputs[1]  # [CLS] 토큰의 출력
print(pooled_output.shape)  # torch.Size([1, 768])
```

## 성능 벤치마크

| Task | Dataset | KoBERT Score | Baseline |
|------|---------|--------------|----------|
| 감성 분석 | NSMC | 89.63% | 87.42% |
| NER | Korean NER | 86.11% | 84.13% |
| 문장 유사도 | KorSTS | 81.59% | 77.92% |
| 질의응답 | KorQuAD 1.0 | 52.81 (EM) | 48.42 |

## 모델 스펙

* Architecture: BERT-base
* Vocabulary Size: 8,002
* Hidden Size: 768
* Number of Layers: 12
* Number of Attention Heads: 12
* Intermediate Size: 3,072
* Max Sequence Length: 512


## 커뮤니티 및 지원

### 기술 지원
* GitHub Issues: [https://github.com/SKTBrain/KoBERT/issues](https://github.com/SKTBrain/KoBERT/issues)
* 활발한 커뮤니티 기여
* 지속적인 모델 업데이트

### 관련 프로젝트
* [KoGPT2](../kogpt2/) - 한국어 GPT-2 모델
* [KoBART](../kobart/) - 한국어 BART 모델
* [A.X LLM](../ax-llm/) - 최신 한국어 LLM

## Hugging Face에서 사용

```python
from transformers import AutoModel, AutoTokenizer

# Hugging Face Hub에서 직접 로드
model_name = "skt/kobert-base-v1"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name)

# 추론
text = "KoBERT는 한국어 자연어 처리의 표준입니다"
inputs = tokenizer(text, return_tensors="pt")
outputs = model(inputs)
```


## 라이선스

Apache License 2.0 - 상업적 사용 가능

## 리소스

* GitHub: [https://github.com/SKTBrain/KoBERT](https://github.com/SKTBrain/KoBERT)
* Hugging Face: [skt/kobert-base-v1](https://huggingface.co/skt/kobert-base-v1)
* 문서: [GitHub README](https://github.com/SKTBrain/KoBERT/blob/master/README.md)
* 이슈: [GitHub Issues](https://github.com/SKTBrain/KoBERT/issues)
