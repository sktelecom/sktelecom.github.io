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


## 참고 자료

* [Elastic License 2.0 원문](https://www.elastic.co/licensing/elastic-license)
* [SPDX License List - Elastic-2.0](https://spdx.org/licenses/Elastic-2.0.html)
* [Elastic License 2.0 FAQ](https://www.elastic.co/licensing/elastic-license/faq)
* [Elastic vs AWS: 라이선스 변경 배경](https://www.elastic.co/blog/why-license-change-aws)