---
title: "BSL 가이드"
linkTitle: "BSL"
weight: 10
type: docs
description: "Business Source License (BSL)는 MariaDB가 만든 Source Available 라이선스로, 일정 기간(보통 3-4년) 후 자동으로 오픈소스 라이선스로 전환되는 특징이 있습니다."
---

SPDX Identifier: `BUSL-1.1` (BSL-1.1이라고도 함)

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - **BSL은 OSI 승인 오픈소스가 아닙니다**
> - **특정 용도(Additional Use Grant에 명시)는 제한**
> - **변경 날짜(Change Date) 이후 자동으로 오픈소스 전환**
> - 비상업적/내부 사용: 일반적으로 허용
> - 상업적 프로덕션 사용: 라이선스 조건 확인 필요
> - 재배포 시: 저작권 및 라이선스 정보 유지

</div>
{{% /alert %}}

{{% alert title="BSL 사용 주의사항" color="warning" %}}
BSL은 프로젝트마다 다른 조건을 가질 수 있습니다:
- **Additional Use Grant**: 어떤 용도가 허용/제한되는지
- **Change Date**: 언제 오픈소스로 전환되는지
- **Change License**: 어떤 오픈소스 라이선스로 전환되는지

각 BSL 프로젝트의 LICENSE 파일을 반드시 확인하고 OSPO에 문의하시기 바랍니다.
{{% /alert %}}

## BSL이란?

BSL(Business Source License)은 MariaDB Corporation이 2013년 만든 라이선스입니다. 핵심 특징은 시간 제한부 라이선스라는 점입니다.

### 동작 원리

1. **초기 기간** (Change Date 이전)
   - 특정 상업적 용도 제한
   - 소스 코드는 공개되어 있음
   - 비상업적/내부 사용은 일반적으로 허용

2. **전환 기간** (Change Date 이후)
   - 자동으로 진짜 오픈소스 라이선스로 전환
   - 보통 Apache-2.0, GPL-2.0, MIT 등으로 전환
   - 모든 제한 해제

## BSL의 세 가지 주요 파라미터

### 1. Additional Use Grant
허용되는 특정 용도를 명시합니다.

예시:
- "연간 사용자 1000명 이하 서비스는 허용"
- "비프로덕션 환경에서는 자유롭게 사용 가능"
- "경쟁 서비스 제공 목적 사용 금지"

### 2. Change Date
오픈소스로 전환되는 날짜입니다. 일반적으로 릴리스 후 3-4년이 지정됩니다.

예: 2024년 1월 1일 릴리스 → 2028년 1월 1일 Change Date

### 3. Change License
전환될 오픈소스 라이선스입니다.

일반적으로:
- Apache-2.0 (가장 흔함)
- GPL-2.0
- MIT

## 주요 BSL 채택 프로젝트

### 데이터베이스
- **MariaDB** (일부 기능): Change License GPL-2.0, Change Date 릴리스 후 4년
- **CockroachDB**: Change License Apache-2.0 또는 MIT, Change Date 릴리스 후 3년

### 기타
- **Ceph** (일부 기능)
- **MinIO** (일부 에디션)
- **Sentry** (일부 기능)
- **Akka** (2.7 이후)

## 사용 가능 여부 판단

### 일반적으로 허용되는 경우

1. **내부 개발/테스트**
   - 사내 개발 환경
   - 테스트 서버
   - 프로토타입 개발

2. **비프로덕션 용도**
   - 학습/연구
   - 벤치마킹
   - 개념 검증 (PoC)

3. **Additional Use Grant에 명시된 경우**

### 제한되는 경우

1. **상업적 프로덕션 사용**
   - 고객에게 제공하는 서비스
   - 제품에 포함하여 판매
   - SaaS로 제공

2. **경쟁 서비스 제공**
   - BSL 소프트웨어와 경쟁하는 서비스 제공

### 확인 필요

프로젝트마다 Additional Use Grant가 다르므로 각 프로젝트의 LICENSE 파일 확인이 필수입니다.

## Change Date 이후 사용

Change Date가 지나면 자동으로 Change License로 전환됩니다.

**예시: CockroachDB v20.1 (2020년 5월 릴리스)**
- Change Date: 2023년 5월 19일
- Change License: Apache-2.0
- **2023년 5월 19일부터는 Apache-2.0로 자유롭게 사용 가능**


## 참고 자료

* [BSL 1.1 원문](https://mariadb.com/bsl11/)
* [SPDX License List - BUSL-1.1](https://spdx.org/licenses/BUSL-1.1.html)
* [MariaDB BSL FAQ](https://mariadb.com/bsl-faq-mariadb/)
* [CockroachDB Licensing FAQs](https://www.cockroachlabs.com/docs/stable/licensing-faqs.html)