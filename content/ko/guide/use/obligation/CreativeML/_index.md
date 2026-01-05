---
title: "CreativeML Open RAIL-M 가이드"
linkTitle: "CreativeML"
weight: 10
type: docs
description: "CreativeML Open RAIL-M은 Stable Diffusion 등 AI 이미지 생성 모델에 사용되는 라이선스로, 모델 사용의 자유와 함께 책임있는 사용을 위한 제한 사항을 포함합니다."
---

SPDX Identifier: `CreativeML-OpenRAIL-M`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - **AI 모델 전용 라이선스** (일반 소프트웨어와 다름)
> - 모델 사용, 수정, 배포: 자유롭게 허용
> - 고지 의무: 라이선스 정보 유지
> - **용도 제한**: 불법적, 유해한 목적 사용 금지
> - 파생 모델: 동일한 제한 사항 적용 (RAIL 조항 유지)
> - 생성된 결과물: 별도 라이선스 (모델 라이선스와 무관)

</div>
{{% /alert %}}

{{% alert title="AI 모델 라이선스 특성" color="info" %}}
CreativeML Open RAIL-M은 일반 소프트웨어 라이선스와 다릅니다:
- **Permissive**: 상업적 사용 포함, 자유롭게 사용 가능
- **Responsible AI**: 특정 용도는 명시적으로 금지
- **생성물과 분리**: AI가 생성한 이미지는 별도 저작권

AI 서비스 개발 시 OSPO에 문의하시기 바랍니다.
{{% /alert %}}

## CreativeML Open RAIL-M이란?

CreativeML Open RAIL-M (Responsible AI License - Model)은 2022년 Stable Diffusion과 함께 공개된 AI 모델 라이선스입니다.

### RAIL (Responsible AI License)의 특징

1. **Open**: 누구나 자유롭게 사용
2. **Responsible**: 책임있는 사용을 위한 제한
3. **Permissive**: Apache-2.0처럼 상업적 사용 허용
4. **Use-Based Restrictions**: 용도 기반 제한

### 일반 오픈소스 라이선스와의 차이

| 구분 | 전통적 라이선스 (MIT, Apache) | RAIL |
|-----|---------------------------|------|
| 대상 | 소프트웨어 코드 | AI 모델 가중치 |
| 용도 제한 | 없음 | 있음 (유해 사용 금지) |
| 자유로운 사용 | 제한 없음 | 책임있는 사용만 |
| 상업적 사용 | 허용 | 허용 (용도 제한 준수 시) |

## 주요 사용 프로젝트

### Stable Diffusion
- **Stable Diffusion v1.x**: CreativeML Open RAIL-M
- **Stable Diffusion v2.x**: CreativeML Open RAIL++-M (개선판)
- **Stable Diffusion XL**: CreativeML Open RAIL++-M

### 기타 이미지 생성 모델
- Waifu Diffusion
- DreamBooth 파인튜닝 모델들

## 허용 사항

### 자유롭게 할 수 있는 것

1. **모델 사용**
   - 이미지 생성
   - 상업적 목적 이미지 생성
   - API 서비스 제공

2. **모델 수정**
   - 파인튜닝 (Fine-tuning)
   - 추가 학습
   - 모델 최적화

3. **모델 배포**
   - 수정된 모델 재배포
   - 파생 모델 공개
   - 상업적 서비스에 통합

4. **생성물 활용**
   - 생성된 이미지의 상업적 사용
   - 생성된 이미지의 판매
   - 생성된 이미지의 2차 저작물 제작

## 금지 사항 (Use-Based Restrictions)

CreativeML Open RAIL-M은 다음 용도로 사용할 수 없습니다:

### 1. 폭력 및 범죄
- 폭력을 조장하거나 미화하는 콘텐츠 생성
- 범죄 계획 또는 실행 지원
- 테러 활동 지원

### 2. 아동 착취
- 아동 성 착취물 (CSAM) 생성
- 미성년자를 성적 대상화하는 콘텐츠

### 3. 개인 프라이버시 침해
- 개인의 동의 없이 딥페이크 생성
- 신원 도용 목적의 이미지 생성
- 허위 정보 유포 목적

### 4. 차별 및 혐오
- 인종, 성별, 종교 등에 대한 차별적 콘텐츠
- 혐오 발언을 조장하는 이미지

### 5. 의료 및 법률 자문
- 전문적 의료 진단 목적
- 법률 자문 대체 목적

### 6. 기타 유해한 사용
- 자살 또는 자해 조장
- 불법 약물 홍보
- 도박 중독 조장

## 사용 시나리오

### 허용되는 사용

#### 1. 마케팅 이미지 생성
시나리오: 광고용 이미지 생성 서비스  
사용 방식: Stable Diffusion으로 제품 이미지 생성  
판단: 허용 (상업적 사용 OK, 금지 용도 아님)

#### 2. 게임 아트 생성
시나리오: 인디 게임 배경 이미지 제작  
사용 방식: 파인튜닝하여 일관된 스타일 생성  
판단: 허용

#### 3. 교육용 콘텐츠
시나리오: 온라인 강의 썸네일 생성  
사용 방식: AI 이미지 생성 API 제공  
판단: 허용

### 금지되는 사용

#### 1. 딥페이크 서비스
시나리오: 타인의 얼굴로 이미지 생성 서비스  
사용 방식: 연예인 얼굴 합성  
판단: 금지 (프라이버시 침해)

#### 2. 가짜 뉴스 생성
시나리오: 정치인의 가짜 사진 생성  
사용 방식: 허위 정보 유포 목적  
판단: 금지 (개인 프라이버시 침해, 허위 정보)

### 검토 필요

#### 1. 소셜 미디어 프로필 생성
시나리오: AI로 생성한 가상 인물 프로필  
사용 방식: 실존하지 않는 인물의 프로필 사진  
판단: 목적에 따라 다름, 악용 가능성 검토

## 파생 모델의 라이선스

CreativeML Open RAIL-M의 중요한 특징은 RAIL 조항 전파입니다.

파생 모델을 배포할 때:
- 동일한 용도 제한 사항 유지 필요
- 라이선스는 변경 가능하지만, Use-Based Restrictions는 유지
- 즉, "책임있는 사용" 조항은 계속 적용

**예시:**
Stable Diffusion → 파인튜닝 → 커스텀 모델 배포  
→ 커스텀 모델도 동일한 금지 용도 적용

## AI 생성물의 저작권

### 중요: 생성된 이미지는 모델 라이선스와 별개입니다

- **모델 라이선스**: CreativeML Open RAIL-M (모델 자체)
- **생성물**: 별도 저작권 (사용자가 소유)

생성된 이미지는:
- 사용자가 저작권 소유 (모델 제공자가 아님)
- 자유롭게 상업적 사용 가능
- 단, 생성 과정에서 금지 용도 위반하면 안 됨

## SK텔레콤에서의 사용 가이드

### 허용 (OSPO 확인 불필요)
- 내부 마케팅 자료 생성
- 교육 콘텐츠 제작
- 제품 디자인 프로토타이핑

### 검토 필요 (OSPO 문의)
- 고객 대상 이미지 생성 서비스 제공
- B2B 이미지 생성 API 제공
- 파인튜닝 모델 재배포

### 금지
- 개인 프라이버시 침해 가능성 있는 서비스
- 허위 정보 생성 도구
- 명백히 금지된 용도

## 실무 체크리스트

CreativeML Open RAIL-M 모델 사용 전:

- [ ] 사용 목적이 금지 용도에 해당하지 않는지 확인
- [ ] 파생 모델 배포 시 동일한 제한 사항 적용 계획
- [ ] 생성물의 저작권 정책 수립
- [ ] 사용자가 금지 용도로 악용할 가능성 검토
- [ ] 불확실한 경우 OSPO에 문의

## 참고 자료

* [CreativeML Open RAIL-M 원문](https://huggingface.co/spaces/CompVis/stable-diffusion-license)
* [SPDX License List - CreativeML-OpenRAIL-M](https://spdx.org/licenses/CreativeML-OpenRAIL-M.html)
* [RAIL Initiative](https://www.licenses.ai/)
* [Stable Diffusion 라이선스 설명](https://stability.ai/license)