---
title: "A.X LLM Series"
linkTitle: "A.X LLM"
weight: 1
type: docs
github: "https://github.com/SKT-AI"
techs: ["LLM", "AI"]
description: >
  SK텔레콤의 독자 개발 한국어 특화 대규모 언어 모델
---


![A.X LLM](A.X_logo.png)

A.X LLM은 SK텔레콤이 독자 개발한 한국어 특화 대규모 언어 모델(Large Language Model)입니다. A.X K2, A.X K1, A.X 4.0, A.X 3.1 시리즈가 오픈소스로 공개되어 있으며, 학술 연구 및 상업적 용도로 자유롭게 사용할 수 있습니다.


## 프로젝트 정보

* 개발: SK텔레콤
* 라이선스: Apache-2.0
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

## 주요 특징

### A.X K2 시리즈
* 688B-A33B Sparse MoE: 총 688B 파라미터 중 토큰당 33B 파라미터가 활성화되는 대규모 Mixture-of-Experts 모델
* 수학·과학 추론 강화: IMO 2026에서 29/42점으로 금메달 기준에 도달하고, MathArena AIME 2026 리더보드에서 97.1%로 공동 최고점 달성
* Sparse Gated Attention(SGA): 긴 문맥에서 관련성이 높은 정보를 선별해 정확성과 추론 효율 향상
* 긴 컨텍스트 처리: 262,144 토큰(256K) 컨텍스트 길이를 지원
* Native FP8 학습 및 FP8 체크포인트: 별도 사후 양자화 없이 효율적인 FP8 서빙을 지원
* 배포용 체크포인트 공개: GGUF와 NVFP4 양자화 빌드, EAGLE3와 DSpark 고속 추론용 draft 모델을 함께 제공
* 멀티모달 파생 라인업: 독자 기술로 학습한 Vision Encoder(A.X VE)와 음성 이해·생성을 위한 Audio Language Model(A.X K2 ALM)의 모델 카드와 기술 자료도 함께 공개

### A.X K1 시리즈
* 519B-A33B Sparse MoE: 총 519B 파라미터 중 토큰당 33B 파라미터가 활성화되는 대규모 Mixture-of-Experts 모델
* Hybrid Reasoning Control: Think / Non-Think 모드를 통해 작업 성격에 따라 깊은 추론과 낮은 지연 시간을 선택
* 긴 컨텍스트 처리: 131,072 토큰 컨텍스트 길이를 지원
* 다국어 및 코드 토크나이저: 한국어, 영어, 중국어, 일본어, 스페인어와 코드 데이터를 고려한 BBPE 기반 토크나이저 적용

### A.X 4.0 시리즈
* 72B 모델: 대규모 한국어 처리 최적화
* 7B Light Model: 효율적인 경량 모델
* 한국어 토큰 효율성: GPT-4o 대비 약 33% 향상
* 실제 서비스 적용: SK텔레콤 A. 통화 요약 서비스에 사용 중

### A.X 3.1 시리즈
* 34B 모델: 독자 개발 sovereign AI 모델
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
- A.X K2: from-scratch 학습한 688B-A33B 독자 구조 Sparse MoE 모델
- A.X K1: from-scratch 학습한 519B-A33B 독자 구조 Sparse MoE 모델
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

| 모델 | 파라미터 수 | 대표 성능 | 특징 |
|------|------------|-----------|------|
| A.X K2 | 688B-A33B | IMO 2026 29/42 (금메달 기준) / AIME 2026 97.1 | SGA, 256K 컨텍스트 |
| A.X K1 | 519B-A33B | KMMLU 80.2 (Thinking Mode) | Sparse MoE, 긴 컨텍스트 |
| A.X 4.0 | 72B | KMMLU 78.3 | 우수 성능 |
| A.X 3.1 | 34B | KMMLU 69.2 | 독자 개발 |
| A.X 4.0 Light | 7B | - | 효율성 |
| A.X 3.1 Light | - | - | 경량화 |

## 리소스

* A.X K2: [GitHub](https://github.com/SKT-AI/A.X-K2) / [Hugging Face](https://huggingface.co/skt/A.X-K2) / [Collection](https://huggingface.co/collections/skt/ax-k2)
* A.X K2 배포용 체크포인트: [GGUF](https://huggingface.co/skt/A.X-K2-GGUF) / [NVFP4](https://huggingface.co/skt/A.X-K2-NVFP4) / [EAGLE3](https://huggingface.co/skt/A.X-K2-EAGLE3) / [DSpark](https://huggingface.co/skt/A.X-K2-DSpark)
* A.X K2 멀티모달 라인업: [A.X VE](https://huggingface.co/skt/A.X-VE) / [A.X K2 ALM](https://huggingface.co/skt/A.X-K2-ALM)
* A.X K2 Technical Report: [GitHub](https://github.com/SKT-AI/A.X-K2/blob/main/A_X_K2_Tech_Report.pdf)
* A.X K1: [GitHub](https://github.com/SKT-AI/A.X-K1) / [Hugging Face](https://huggingface.co/skt/A.X-K1)
* A.X K1 Technical Report: [arXiv:2601.09200](https://arxiv.org/abs/2601.09200)
* Hugging Face: [SKT-AI Organization](https://huggingface.co/skt)
* GitHub: [SKT-AI](https://github.com/SKT-AI)
* 관련 보도자료: [수학 추론 성능](https://news.sktelecom.com/229153) / [A.X K2 공개](https://news.sktelecom.com/228501) / [선행연구 세미나](https://news.sktelecom.com/226835) / [참여사 확대](https://news.sktelecom.com/227799) / [제조 현장 적용](https://news.sktelecom.com/227025) / [엔비디아 협력](https://news.sktelecom.com/224081)
* 공식 뉴스: [SK텔레콤 뉴스룸](https://news.sktelecom.com/217916)
* 문의: a.x@sk.com
