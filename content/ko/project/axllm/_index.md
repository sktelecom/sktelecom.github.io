---
title: "A.X LLM Series"
linkTitle: "A.X LLM"
weight: 1
type: docs
description: >
  SK텔레콤의 독자 개발 한국어 특화 대규모 언어 모델
---


![A.X LLM](A.X_logo.png)

A.X LLM은 SK텔레콤이 독자 개발한 한국어 특화 대규모 언어 모델(Large Language Model)입니다. A.X 3.1 시리즈와 A.X 4.0 시리즈가 오픈소스로 공개되어 있으며, 학술 연구 및 상업적 용도로 자유롭게 사용할 수 있습니다.


## 프로젝트 정보

* 개발: SK텔레콤
* 라이선스: Apache-2.0
* GitHub: 
  - [A.X 4.0](https://github.com/SKT-AI/A.X-4.0)
  - [A.X 3.1](https://github.com/SKT-AI/A.X-3)
  - [A.X 4.0-VL-Light](https://github.com/SKT-AI/A.X-4.0-VL-Light)

## 주요 특징

### A.X 4.0 시리즈
* 72B Standard Model: 대규모 한국어 처리 최적화
* 7B Light Model: 효율적인 경량 모델
* 한국어 토큰 효율성: GPT-4o 대비 약 33% 향상
* 실제 서비스 적용: SK텔레콤 A. 통화 요약 서비스에 사용 중

### A.X 3.1 시리즈
* 34B Standard Model: 독자 개발 sovereign AI 모델
* Light Model: 경량화 버전
* 코딩 및 수학적 추론 능력 대폭 향상
* KMMLU 벤치마크: 69.20점 (A.X 4.0 대비 약 88% 성능)

### A.X 4.0-VL-Light
* Vision-Language 모델: 이미지와 텍스트 통합 처리
* 멀티모달 AI: 시각 정보 이해 및 분석 가능

## 기술적 성과

### 한국어 처리 능력
- KMMLU(대규모 한국어 이해 벤치마크)에서 우수한 성능
- 한국어 대화, 문서 이해, 요약에 특화
- 한국 비즈니스 환경에 최적화

### 모델 아키텍처
- A.X 3 시리즈: 처음부터 독자 개발한 sovereign AI
- A.X 4 시리즈: 오픈소스 모델에 대규모 한국어 데이터로 CPT(Continual Pre-Training) 적용

## 활용 사례

### SK텔레콤 내부 서비스
* A. 통화 요약 서비스 (2025년 5월~)
* 고객 상담 챗봇
* 사내 문서 분석 및 검색

### 기대 용도
* 한국어 대화형 AI 서비스
* 텍스트 생성 및 요약
* 번역 및 감성 분석
* 코드 생성 및 수학 문제 해결
* 한국어 콘텐츠 생성

## 벤치마크 성능

| 모델 | 파라미터 수 | KMMLU 점수 | 특징 |
|------|------------|-----------|------|
| A.X 4.0 Standard | 72B | 78.3 | 최고 성능 |
| A.X 3.1 Standard | 34B | 69.2 | 독자 개발 |
| A.X 4.0 Light | 7B | - | 효율성 |
| A.X 3.1 Light | - | - | 경량화 |

## Hugging Face에서 사용하기

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

# A.X 4.0 Standard 모델 로드
model_name = "SKT-AI/A.X-4.0-Standard"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# 텍스트 생성
input_text = "한국어 언어 모델의 발전은"
inputs = tokenizer(input_text, return_tensors="pt")
outputs = model.generate(inputs, max_length=100)
print(tokenizer.decode(outputs[0]))
```


## 리소스

* Hugging Face: [SKT-AI Organization](https://huggingface.co/skt)
* GitHub: [SKT-AI](https://github.com/SKT-AI)
* 공식 뉴스: [SK텔레콤 뉴스룸](https://news.sktelecom.com/217916)
* 문의: a.x@sk.com

