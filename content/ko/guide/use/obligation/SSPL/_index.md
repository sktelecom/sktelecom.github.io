---
title: "SSPL 가이드"
linkTitle: "SSPL"
weight: 10
type: docs
description: "Server Side Public License (SSPL)는 MongoDB가 2018년 만든 Source Available 라이선스입니다. OSI가 승인한 오픈소스 라이선스가 아니며, 상업적 SaaS 제공에 매우 강력한 제한을 가하고 있습니다."
---

SPDX Identifier: `SSPL-1.0`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - **SSPL은 OSI 승인 오픈소스가 아닙니다**
> - 소스 형태로 재배포
>   - 고지 의무: 저작권/라이선스 정보 유지
>   - 수정 시: AGPL-3.0과 동일한 의무
> - 바이너리 형태로 재배포
>   - 고지 의무 + 소스 코드 제공
>   - AGPL-3.0과 동일한 의무
> - **SaaS 제공 시 추가 의무**
>   - SSPL 소프트웨어 + 서비스 운영에 필요한 모든 소프트웨어 공개
>   - 인프라 관리 도구, 운영 스크립트 등도 포함

</div>
{{% /alert %}}

{{% alert title="SSPL 사용 금지" color="danger" %}}
SSPL은 OSI(Open Source Initiative)가 승인하지 않은 "Source Available" 라이선스입니다. 상업적 SaaS 제공 시 사실상 모든 서비스 인프라를 공개해야 하는 의무가 있어, SK텔레콤의 모든 제품과 서비스에서 사용할 수 없습니다.
{{% /alert %}}

## SSPL이란?

SSPL(Server Side Public License)은 MongoDB가 AWS와 같은 클라우드 제공업체가 MongoDB를 상업적 서비스로 제공하는 것을 막기 위해 2018년 만든 라이선스입니다.

### AGPL-3.0과의 차이점

| 항목 | AGPL-3.0 | SSPL |
|-----|----------|------|
| OSI 승인 | 승인됨 | 승인 거부됨 |
| 네트워크 서비스 | AGPL 코드 + 링크된 코드 공개 | 서비스 운영 전체 인프라 공개 |
| 공개 범위 | 애플리케이션 레이어 | 인프라 관리 도구까지 |

SSPL은 AGPL-3.0 Section 13을 수정하여, 서비스 제공 시 다음을 모두 공개하도록 요구합니다:
- SSPL 소프트웨어 자체
- 서비스와 상호작용하는 모든 소프트웨어
- 서비스를 운영하는 데 필요한 관리 소프트웨어
- 인프라 프로비저닝, 모니터링, 백업 도구 등

## 주요 사용 사례

### MongoDB의 라이선스 변경
- **2018년 10월 이전**: AGPL-3.0
- **2018년 10월 이후**: SSPL-1.0

### 기타 SSPL 채택 프로젝트
- Graylog
- 일부 NoSQL 데이터베이스

## 왜 OSI가 승인하지 않았나?

OSI는 2019년 SSPL을 오픈소스로 인정하지 않기로 결정했습니다:

1. **지나치게 광범위한 공개 요구**: "서비스 운영에 필요한 모든 것"의 범위가 불명확
2. **차별 금지 위반**: 특정 사업 모델(SaaS)을 사실상 금지
3. **자유로운 사용 제한**: 상업적 클라우드 서비스 제공 사실상 불가능

## 사용 제한 이유

SSPL 소프트웨어를 사용하여 서비스를 제공하면 다음을 모두 공개해야 합니다:

1. SSPL 소프트웨어의 소스 코드
2. 서비스 애플리케이션 코드
3. Kubernetes 설정
4. Terraform 스크립트
5. 모니터링 도구 (Prometheus, Grafana 등)
6. CI/CD 파이프라인
7. 백업 및 복구 시스템

이는 SK텔레콤의 핵심 인프라 정보를 모두 공개해야 하므로 사용이 불가능합니다.

## 대안

SSPL 소프트웨어를 사용해야 하는 경우 다음 대안을 고려하시기 바랍니다.

### MongoDB
- **MongoDB Community Edition**: SSPL
- **대안 1**: MongoDB Atlas (MongoDB 공식 클라우드 서비스)
- **대안 2**: PostgreSQL + JSON 기능
- **대안 3**: FerretDB (MongoDB 호환 AGPL 프로젝트)

### Graylog
- **Graylog Open Source**: SSPL
- **대안 1**: Elasticsearch + Kibana (Elastic License 2.0, 별도 검토 필요)
- **대안 2**: Grafana Loki (AGPL-3.0)

## 참고 자료

* [SSPL License 원문](https://www.mongodb.com/licensing/server-side-public-license)
* [SPDX License List - SSPL-1.0](https://spdx.org/licenses/SSPL-1.0.html)
* [OSI의 SSPL 거부 결정](https://opensource.org/node/1099)
* [MongoDB 라이선스 변경 발표](https://www.mongodb.com/blog/post/mongodb-now-released-under-the-server-side-public-license)