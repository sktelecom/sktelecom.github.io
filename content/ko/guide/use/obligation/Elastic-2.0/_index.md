---
title: "Elastic License 2.0 가이드"
linkTitle: "Elastic-2.0"
weight: 10
type: docs
description: "Elastic License 2.0은 Elastic사가 2021년 만든 Source Available 라이선스로, AWS와 같은 클라우드 제공업체의 상업적 서비스 제공을 제한하면서도 SSPL보다는 덜 제한적인 조건을 제공합니다."
---

SPDX Identifier: `Elastic-2.0`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - **Elastic-2.0은 OSI 승인 오픈소스가 아닙니다**
> - **금지된 용도 (Prohibited)**:
>   - 관리형 서비스로 제공 (Managed Service)
>   - 경쟁 제품의 핵심 기능으로 사용
>   - 라이선스/보호 메커니즘 우회
> - **허용된 용도**:
>   - 내부 사용
>   - 자체 서비스/제품에 통합 (경쟁 서비스가 아닌 경우)
>   - 수정 및 재배포 (조건 준수 시)

</div>
{{% /alert %}}

{{% alert title="Elastic-2.0 사용 주의사항" color="warning" %}}
Elastic License 2.0은 세 가지 금지 사항(Limitations)이 있습니다:
1. **관리형 서비스 제공 금지**: Elasticsearch/Kibana를 서비스로 제공 불가
2. **라이선스 우회 금지**: 소프트웨어 보호 메커니즘 제거 금지
3. **상표 사용 제한**: Elastic 상표를 오해 소지 있게 사용 금지

제품/서비스에 포함 전 반드시 OSPO에 문의하시기 바랍니다.
{{% /alert %}}

## Elastic License 2.0이란?

Elastic License 2.0 (ELv2)은 Elastic사가 2021년 Elasticsearch와 Kibana의 라이선스를 Apache-2.0에서 변경하면서 도입한 라이선스입니다.

### 라이선스 변경 배경

**2021년 1월 이전**: Apache-2.0
- AWS가 Elasticsearch를 관리형 서비스로 제공 (Amazon Elasticsearch Service)
- Elastic사의 수익 모델 침해

**2021년 1월 이후**: Elastic License 2.0 + SSPL 듀얼 라이선스
- AWS의 관리형 서비스 제공 제한
- 결과: AWS는 OpenSearch로 포크

## 세 가지 금지 사항 (Limitations)

### 1. 관리형 서비스 제공 금지

**금지:**
제3자에게 소프트웨어의 실질적 기능을 서비스로 제공하는 것

**구체적 예시:**

금지되는 경우:
- "Elasticsearch as a Service" 제공
- "Managed Kibana" 제공
- 고객에게 Elasticsearch 클러스터를 관리형으로 제공

허용되는 경우:
- 자사 서비스의 백엔드로 Elasticsearch 사용
- 내부 검색 기능 구현
- 로그 분석 시스템 구축

### 2. 경쟁 제품의 핵심 기능으로 사용 금지

**금지:**
소프트웨어의 기능을 우회하거나 경쟁 제품을 만드는 것

**구체적 예시:**

금지되는 경우:
- Elasticsearch의 유료 기능 제한을 우회
- X-Pack 기능의 라이선스 체크 제거
- Elastic 상용 기능을 무료로 제공하는 제품 개발

허용되는 경우:
- Elasticsearch를 검색 엔진으로 사용하는 일반 애플리케이션
- 로그 수집 및 분석 도구 개발

### 3. 상표 사용 제한

**금지:**
Elastic 상표를 오해의 소지가 있게 사용

**구체적 예시:**

금지되는 경우:
- "Powered by Elasticsearch" (공식 승인 없이)
- "Elasticsearch Compatible" (오해 소지)

허용되는 경우:
- "Works with Elasticsearch" (사실 기술)
- "Built on Elasticsearch technology" (명확한 사실 관계)

## SK텔레콤에서의 사용 시나리오

### 허용되는 사용

#### 1. 내부 검색 시스템
시나리오: T전화 앱의 통화 기록 검색  
사용 방식: Elasticsearch를 검색 엔진으로 사용  
판단: 허용 (고객에게 Elasticsearch를 서비스로 제공하는 것이 아님)

#### 2. 로그 분석 플랫폼
시나리오: 내부 시스템 로그 수집 및 분석  
사용 방식: ELK Stack (Elasticsearch + Logstash + Kibana)  
판단: 허용 (내부 운영 목적)

#### 3. 자사 서비스의 백엔드
시나리오: AI 서비스의 벡터 검색 기능  
사용 방식: Elasticsearch의 vector search 기능 활용  
판단: 허용 (서비스의 보조 기능)

### 금지되는 사용

#### 1. 관리형 Elasticsearch 서비스
시나리오: "SKT Elasticsearch Cloud" 서비스 출시  
사용 방식: 고객에게 Elasticsearch 클러스터 제공  
판단: 금지 (관리형 서비스 제공)

#### 2. Elasticsearch 기반 경쟁 제품
시나리오: Elastic 상용 기능과 경쟁하는 제품 개발  
사용 방식: X-Pack 기능을 우회하여 무료 제공  
판단: 금지 (라이선스 우회)

### 검토 필요 (OSPO 문의)

#### 1. B2B 솔루션에 포함
시나리오: 엔터프라이즈 고객에게 판매하는 솔루션에 Elasticsearch 포함  
사용 방식: 검색 기능의 일부로 제공  
판단: 상황에 따라 다름, OSPO 문의 필요

#### 2. API로 검색 기능 제공
시나리오: 검색 API를 외부에 제공  
사용 방식: Elasticsearch 기반 검색 API  
판단: API의 성격에 따라 다름, OSPO 문의 필요

## Elastic-2.0 vs 다른 라이선스

| 구분 | Elastic-2.0 | SSPL | Apache-2.0 |
|-----|-------------|------|------------|
| OSI 승인 | 없음 | 없음 | 있음 |
| 관리형 서비스 | 금지 | 사실상 불가 | 허용 |
| 내부 사용 | 허용 | 허용 | 허용 |
| 자사 제품 통합 | 허용 (비경쟁) | 조건부 | 허용 |
| 소스 공개 의무 | 없음 | 있음 | 없음 |

## 대안

Elasticsearch/Kibana 대신 사용 가능한 오픈소스:

### 1. OpenSearch (Apache-2.0)
- AWS가 Elasticsearch 7.10.2에서 포크
- Apache-2.0 라이선스
- Elasticsearch와 거의 호환

### 2. Apache Solr (Apache-2.0)
- Lucene 기반 검색 엔진
- 엔터프라이즈 검색에 적합

### 3. Meilisearch (MIT)
- 현대적인 검색 엔진
- 간단한 API

## 실무 체크리스트

Elastic License 2.0 소프트웨어 사용 전:

- [ ] 사용 목적이 "관리형 서비스 제공"에 해당하는지 확인
- [ ] 경쟁 제품 개발이 아닌지 확인
- [ ] 라이선스 키나 보호 메커니즘을 우회하지 않는지 확인
- [ ] 내부 사용인지, 외부 제공인지 명확히 구분
- [ ] 불확실한 경우 OSPO에 문의

## 참고 자료

* [Elastic License 2.0 원문](https://www.elastic.co/licensing/elastic-license)
* [SPDX License List - Elastic-2.0](https://spdx.org/licenses/Elastic-2.0.html)
* [Elastic License 2.0 FAQ](https://www.elastic.co/licensing/elastic-license/faq)
* [Elastic vs AWS: 라이선스 변경 배경](https://www.elastic.co/blog/why-license-change-aws)