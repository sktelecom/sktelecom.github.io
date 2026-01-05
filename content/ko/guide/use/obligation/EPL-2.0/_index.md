---
title: "EPL-2.0 가이드"
linkTitle: "EPL-2.0"
weight: 10
type: docs
description: "[EPL-2.0](https://www.eclipse.org/legal/epl-2.0)은 Eclipse Public License 2.0이라고도 불리며, 모듈 단위의 소스 코드 공개를 요구하는 Weak Copyleft 성격의 라이선스입니다."
---

SPDX Identifier: `EPL-2.0`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포 
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다. 
>    - 수정시 의무사항 
>      - 수정한 모듈에 EPL-2.0을 적용합니다.
> - 바이너리 형태로 재배포 
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다. 
>   - 수정시 의무사항
>     - 수정한 모듈에 EPL-2.0을 적용합니다.
>   - 소스 코드 제공 의무 
>     - <span class="-text-warning">바이너리 내 EPL-2.0에 해당하는 **모듈**의 소스 코드 파일을 제공합니다.</span>

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft 특성" color="info" %}}
EPL-2.0은 모듈 단위 Weak Copyleft 라이선스입니다. EPL-2.0 모듈 자체를 수정한 경우에만 소스 코드 공개 의무가 발생하며, 별도로 추가한 모듈은 공개할 필요가 없습니다. 따라서 상용 소프트웨어에서도 사용 가능합니다.
{{% /alert %}}

## 소스 코드 내 라이선스 문구

EPL-2.0 라이선스 하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있습니다.
```
This program and the accompanying materials are made available under the
terms of the Eclipse Public License v. 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0, or the Eclipse Distribution License
v. 1.0 which is available at
http://www.eclipse.org/org/documents/edl-v10.php.
```

## 사용 사례별 의무사항

### Case 1. 소스 형태로 재배포

EPL-2.0 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권, 보증부인, 면책 등 법적 고지 수정 금지

즉, 소스 코드 내 명시된 라이선스 정보를 그대로 유지한 상태로 재배포합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

* 수정한 모듈에 EPL-2.0을 적용합니다.

{{% /alert %}}

### Case 2. 바이너리 형태로 재배포

EPL-2.0 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권, 보증부인, 면책 등 법적 고지 수정 금지

이상의 내용을 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

* 수정한 모듈에 EPL-2.0을 적용합니다.

{{% /alert %}}

#### 2-2 소스 코드 제공 의무

바이너리 내 EPL-2.0에 해당하는 모듈의 소스 코드 파일을 제공합니다. 이때 다음 사항을 준수합니다.

* EPL-2.0은 모듈 내 추가한 내용에 대해서도 EPL-2.0을 적용하여 소스 코드를 공개할 것을 요구합니다. 따라서 원 모듈과 더불어 모듈 내 추가/수정한 내용도 EPL-2.0을 적용하여 공개합니다.

오픈소스 고지문에 사용자가 소스 코드를 수령할 수 있는 방법을 안내함으로써 소스 코드 제공 의무를 준수할 수 있습니다.

## 모듈 단위 Copyleft

EPL-2.0의 핵심 특징은 모듈 단위로 Copyleft가 적용된다는 점입니다.

* **EPL-2.0 모듈 수정 시**: 해당 모듈만 EPL-2.0로 공개
* **별도 모듈 추가 시**: 추가한 모듈은 공개 불필요
* **다른 라이선스와 결합**: 모듈을 분리하면 결합 가능

이러한 특성으로 인해 Eclipse 재단 프로젝트와 상용 소프트웨어를 함께 개발할 수 있습니다.

## 라이선스 호환성

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| MIT | 호환 | EPL 모듈만 공개 |
| Apache-2.0 | 호환 | EPL 모듈만 공개 |
| GPL-2.0 | 비호환 | 기본적으로 비호환 |
| GPL-3.0 | 조건부 | Secondary License 지정 시 호환 |
| Proprietary | 호환 | EPL 모듈만 공개하면 사용 가능 |

{{% alert title="Secondary License 조항" color="info" %}}
EPL-2.0은 Secondary License로 GPL-2.0 또는 GPL-3.0을 지정할 수 있습니다. 이 경우 GPL 프로젝트에서도 사용 가능합니다.
{{% /alert %}}

## 참고 자료

* [EPL-2.0 License 원문](https://www.eclipse.org/legal/epl-2.0)
* [SPDX License List - EPL-2.0](https://spdx.org/licenses/EPL-2.0.html)
* [Eclipse Foundation FAQ](https://www.eclipse.org/legal/eplfaq.php)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/EPL-2.0.txt)