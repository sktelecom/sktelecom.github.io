---
title: "Llama 2 Community License 가이드"
linkTitle: "Llama 2"
weight: 10
type: docs
description: "Llama 2 Community License는 Meta의 Llama 2 언어 모델에 적용되는 라이선스로, 대부분의 사용을 허용하지만 월간 활성 사용자 7억 명 이상의 서비스에는 별도 라이선스가 필요합니다."
---

SPDX Identifier: `Llama-2` (비공식)

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - **Meta의 독점 라이선스** (OSI 승인 오픈소스 아님)
> - **규모 제한**: 월간 활성 사용자(MAU) 7억 명 이상 서비스는 별도 라이선스 필요
> - 상업적 사용: 허용 (규모 제한 내)
> - 고지 의무: 라이선스 정보 유지
> - **용도 제한**: 불법적, 유해한 목적 사용 금지
> - 파생 모델: Llama 2 기반임을 명시, 동일한 제한 적용

</div>
{{% /alert %}}

{{% alert title="Llama 2 규모 제한" color="warning" %}}
월간 활성 사용자(MAU) 7억 명 이상의 제품/서비스에서 Llama 2를 사용하려면 Meta로부터 별도 라이선스를 받아야 합니다.

- **7억 명 미만**: 자유롭게 사용 가능
- **7억 명 이상**: Meta에 라이선스 요청 필요

대부분의 기업과 서비스는 7억 명 미만이므로 자유롭게 사용 가능합니다.

Llama 2 기반 서비스 개발 시 OSPO에 문의하시기 바랍니다.
{{% /alert %}}

## Llama 2 Community License란?

Llama 2 Community License는 2023년 Meta가 Llama 2 언어 모델과 함께 공개한 독점 라이선스입니다.

### Llama 모델 계보

| 버전 | 공개 시기 | 라이선스 | 특징 |
|-----|----------|---------|------|
| **Llama 1** | 2023.02 | 연구용만 | 상업적 사용 불가 |
| **Llama 2** | 2023.07 | Llama 2 Community | 상업적 사용 가능 (규모 제한) |
| **Llama 3** | 2024.04 | Llama 3 Community | Llama 2와 유사 (업데이트됨) |

### 왜 "Community License"인가?

Meta는 이 라이선스를 다음과 같이 설명합니다:
- **커뮤니티의 혁신 장려**: 대부분의 개발자와 기업이 자유롭게 사용
- **대기업 견제**: 빅테크의 독점적 사용 제한
- **책임있는 AI**: 유해한 사용 방지

## 7억 명 규모 제한

### MAU (Monthly Active Users) 정의

월간 활성 사용자: 이전 달력월에 제품/서비스를 사용한 고유 사용자 수

**예시:**

시나리오 1: T전화 앱 (MAU 500만)  
→ 7억 미만 → 자유롭게 사용 가능

시나리오 2: Facebook (MAU 30억)  
→ 7억 이상 → Meta에 별도 라이선스 요청 필요

### 7억 명 기준을 넘는 서비스

전 세계적으로 7억 명 이상 MAU를 가진 서비스:
- Facebook, Instagram, WhatsApp (Meta)
- YouTube (Google)
- TikTok
- WeChat

**대부분의 기업은 해당 없음**

### 규모 제한 적용 시점

라이선스 동의 시점 + 사용 시작 이후 계속 적용됩니다.

**중요**: 처음에 7억 미만이었다가 나중에 초과하면?  
→ 초과 시점에 Meta에 통보하고 별도 라이선스 협상

## 허용 사항 (MAU 7억 미만)

### 자유롭게 할 수 있는 것

1. **상업적 사용**
   - 유료 서비스 제공
   - API 판매
   - 제품에 통합

2. **모델 수정**
   - 파인튜닝
   - 양자화 (4-bit, 8-bit)
   - 모델 병합

3. **모델 배포**
   - 파생 모델 공개
   - Hugging Face 등에 업로드
   - 오픈소스 프로젝트 포함

4. **생성물 활용**
   - AI 생성 텍스트의 상업적 사용

## 금지 사항 (Acceptable Use Policy)

Llama 2는 다음 용도로 사용할 수 없습니다:

### 1. 불법 활동
- 범죄 행위 지원
- 불법 물품 거래
- 테러 활동

### 2. 아동 보호
- 아동 학대 콘텐츠
- 아동 그루밍

### 3. 차별 및 혐오
- 차별적 콘텐츠 생성
- 혐오 발언
- 괴롭힘

### 4. 폭력 및 위험
- 폭력 조장
- 자해, 자살 조장
- 무기 제조

### 5. 프라이버시 침해
- 개인정보 무단 수집
- 스토킹, 감시

### 6. 허위 정보
- 고의적 가짜 뉴스
- 사기 콘텐츠

### 7. 고위험 분야 (단독 의사결정)
- 의료 진단
- 법률 자문
- 재무 자문
- 긴급 서비스

## Meta에서 Llama 2로 LLM 학습 금지

특이 조항:
Llama 2를 사용하여 Meta와 경쟁하는 LLM을 학습시킬 수 없음

**금지 예시:**
- Llama 2의 출력으로 새로운 LLM 학습
- Llama 2를 teacher 모델로 사용한 distillation

**허용 예시:**
- Llama 2 자체를 파인튜닝
- Llama 2의 출력을 데이터셋으로 사용 (특정 태스크용)

## 사용 시나리오

### 허용되는 사용

#### 1. 고객 서비스 챗봇
시나리오: 통신사 고객 상담 챗봇  
MAU: 1000만 명  
판단: 허용 (7억 미만)

#### 2. B2B AI 솔루션
시나리오: 기업용 문서 요약 솔루션  
MAU: 10만 명  
판단: 허용

#### 3. 모바일 앱 AI 기능
시나리오: 사진 캡션 생성 앱  
MAU: 500만 명  
판단: 허용

### 제한되는 사용

#### 1. 대규모 소셜 미디어
시나리오: MAU 10억 명의 소셜 미디어에 통합  
판단: Meta 라이선스 필요

#### 2. 경쟁 LLM 학습
시나리오: Llama 2 출력으로 새 LLM 학습  
판단: 금지

### 검토 필요

#### 1. 글로벌 서비스 확장
시나리오: 현재 MAU 5000만, 향후 10억 목표  
판단: 7억 도달 전 Meta와 협의 필요

## 파생 모델의 라이선스

### 필수 요구사항

1. **출처 명시**
   - "Based on Llama 2" 표시
   - 모델 카드에 명시

2. **라이선스 전파**
   - 동일한 Acceptable Use Policy 적용
   - 7억 명 규모 제한 유지

3. **Meta 상표 사용 제한**
   - "Llama" 상표 무단 사용 금지
   - "Built with Llama 2" 표현은 OK

### 파생 모델 예시

**허용되는 이름:**
- "MyModel (based on Llama 2)"
- "CustomLLM-Llama2-7B"

**금지되는 이름:**
- "Llama 2 Pro"
- "Meta Llama Custom"

## SK텔레콤에서의 사용 가이드

### 허용 (OSPO 확인 불필요)
- 내부 업무 자동화
- 고객 서비스 (MAU 7억 미만)
- B2B 솔루션

### 검토 필요 (OSPO 문의)
- 글로벌 서비스 출시 계획
- 파생 모델 공개 배포
- 파트너사와 모델 공유

### 금지
- Llama 2로 경쟁 LLM 학습
- MAU 7억 이상 서비스 (Meta 라이선스 없이)

## Llama 2 vs 다른 라이선스

| 구분 | Llama 2 | BigScience RAIL | GPT-3.5/4 |
|-----|---------|-----------------|-----------|
| 상업적 사용 | 허용 (규모 제한) | 허용 | API만 |
| 모델 수정 | 허용 | 허용 | 불가 |
| 모델 배포 | 허용 | 허용 | 불가 |
| 규모 제한 | MAU 7억 | 없음 | N/A |
| 오픈소스 여부 | 아님 | 아님 | 아님 |

## Llama 3 업데이트

2024년 4월 공개된 Llama 3는 업데이트된 라이선스를 사용합니다:
- 기본 구조 유사
- 용도 제한 조항 일부 개선
- **7억 명 규모 제한 유지**

Llama 3 사용 시에도 동일한 가이드가 적용됩니다.

## 실무 체크리스트

Llama 2 사용 전:

- [ ] 서비스의 MAU가 7억 미만인지 확인
- [ ] 향후 7억 초과 가능성 검토
- [ ] 사용 목적이 Acceptable Use Policy 준수하는지 확인
- [ ] 경쟁 LLM 학습 목적이 아닌지 확인
- [ ] 파생 모델 배포 시 출처 명시 계획
- [ ] 불확실한 경우 OSPO에 문의

## Meta 라이선스 요청 방법

MAU 7억 이상 서비스의 경우:
1. [Meta Llama License Request](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) 방문
2. 회사 정보 및 사용 계획 제출
3. Meta의 검토 및 협상

## 참고 자료

* [Llama 2 Community License 원문](https://ai.meta.com/llama/license/)
* [Llama 2 Acceptable Use Policy](https://ai.meta.com/llama/use-policy/)
* [Llama 2 Model Card](https://huggingface.co/meta-llama/Llama-2-7b)
* [Meta AI 공식 블로그](https://ai.meta.com/blog/)