---
title: "라이선스 선택"
linkTitle: "라이선스 선택"
weight: 40
type: docs
description: >
  공개할 프로젝트의 오픈소스 라이선스를 고르는 기준
---

## 기본값은 Apache-2.0

SK텔레콤은 기본적으로 Apache-2.0을 적용합니다. 특허 조항을 포함한 permissive 라이선스로, 기업이
공개하는 프로젝트에 무난합니다.

## 다른 라이선스를 고려하는 경우

- 해당 생태계에서 주로 쓰는 라이선스가 있는 경우. 커뮤니티 관례를 따르면 채택이 쉬워집니다.
- GPL 등 copyleft 라이브러리에 종속된 경우. 의존성의 의무를 따라야 할 수 있습니다.

## permissive와 copyleft의 차이

- permissive(예: Apache-2.0, MIT, BSD)는 고지 의무 정도만 요구하고 파생물의 라이선스를 강제하지
  않습니다.
- copyleft(예: GPL, LGPL, MPL)는 파생물이나 결합물에 같은 조건의 공개 의무를 요구할 수 있습니다.
  의무의 범위는 라이선스마다 다릅니다.

## 의존성 호환성 확인

선택한 라이선스가 의존성의 라이선스와 충돌하지 않는지 확인합니다. 예를 들어 강한 copyleft
의존성이 있으면 permissive로 공개하기 어려울 수 있습니다. 라이선스별 의무는 가이드의 [사용하기]
라이선스 의무사항 섹션을 참고하고, 판단이 어려우면 OSRB에 검토를 요청하세요.

## 참고

- [choosealicense.com](https://choosealicense.com)
- [SPDX License List](https://spdx.org/licenses/)
