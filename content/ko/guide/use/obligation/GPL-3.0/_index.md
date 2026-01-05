---
title: "GPL-3.0 가이드"
linkTitle: "GPL-3.0"
weight: 10
type: docs
description: "[Free Software Foundation](http://www.fsf.org/)은 2007년 [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)을 공개하였습니다. GPL-3.0은 GPL-2.0과 유사한 의무사항을 갖지만, 추가로 User Product 배포 시 설치 정보(Installation Information) 제공을 요구합니다."
---

SPDX Identifier: `GPL-3.0-only` 또는 `GPL-3.0-or-later`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포<br>
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.
>     - 수정시 의무사항<br>
>       - 추가/수정한 부분에 GPL-3.0을 적용합니다.
>       - 수정 사항에 대한 고지를 포함합니다. (예: 수정일, 수정내용을 주석 형태로 포함)
> - 바이너리 형태로 재배포<br>
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.<br>
>     - 수정시 의무사항
>       - 추가/수정한 부분에 GPL-3.0을 적용합니다.
>       - 수정 사항에 대한 고지를 포함합니다. (예: 오픈소스 고지문에 수정일, 수정내용을 포함)
>     - 소스 코드 제공 의무
>       - <span class="-text-warning">바이너리에 해당하는 **전체** 소스 코드를 제공합니다.</span>
>       - 바이너리 사용자가 공개된 소스 코드로 동일한 바이너리를 만들 수 있는 <span class="-text-warning">빌드 환경</span>을 제공합니다.
>   - **설치 정보 제공 의무 : 바이너리를 User Product와 배포한다면 설치 정보(Installation Information)를 제공합니다.**

</div>
{{% /alert %}}

{{% alert title="Copyleft 주의사항" color="warning" %}}
GPL-3.0은 강력한 Copyleft 라이선스입니다. GPL-3.0 코드를 포함하는 파생저작물은 전체가 GPL-3.0을 따라야 하며, 소스 코드를 공개해야 합니다. 상용 소프트웨어 개발 시 사용에 주의가 필요합니다.
{{% /alert %}}

## 소스 코드 내 라이선스 문구

GPL-3.0 라이선스 하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있습니다.

~~~
Copyright (C) <year> <name of author>
 
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
 
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>
~~~

## 사용 사례별 의무사항

### Case 1. 소스 형태로 재배포

GPL-3.0 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 저작권 고지 제공
* 보증 부인 제공
* 라이선스 사본 제공

즉, 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

1. 추가/수정한 부분에 GPL-3.0을 적용합니다.
2. 수정 사항에 대한 고지를 포함합니다. (예: 수정일, 수정내용을 주석 형태로 포함)

{{% /alert %}}

### Case 2. 바이너리 형태로 재배포

GPL-3.0 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 저작권 고지 제공
* 보증 부인 제공
* 라이선스 사본 제공

이상의 내용을 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

1. 추가/수정한 부분에 GPL-3.0을 적용합니다.
2. 수정 사항에 대한 고지를 포함합니다. (예: 오픈소스 고지문에 수정일, 수정내용을 포함)

{{% /alert %}}

#### 2-2 소스 코드 제공 의무

바이너리에 해당하는 소스 코드를 제공합니다. 이때 다음 사항을 준수합니다.

1. GPL-3.0은 파생저작물에 대해서도 GPL-3.0을 적용하여 소스 코드를 공개할 것을 요구합니다. 아래 내용을 참고하여 GPL-3.0 하의 오픈소스와 파생저작물의 소스 코드를 공개합니다.

{{% alert title="GPL-3.0 파생저작물의 범위" color="warning" %}}
일반적인 GPL-3.0의 파생저작물 범위는 다음과 같습니다.

* 수정 코드
* GPL 프로그램과 동일한 프로세스에서 동작하는 Module
* GPL 프로그램과 링크로 연결한 Library
* GPL 프로그램을 상속한 Class

다음의 경우 GPL의 파생저작물로 보지 않습니다.

* CD와 같은 매체에 함께 존재하지만 GPL 프로그램과 전혀 연동하지 않는 독립 프로그램 (#[MereAggregation](https://www.gnu.org/licenses/gpl-faq.en.html#MereAggregation))
* GPL 프로그램과는 별도의 프로그램으로써 Pipe, Socket, IPC, Command Line Arguments로 GPL 프로그램과 통신하는 경우
{{% /alert %}}

2. 바이너리 사용자가 공개된 소스 코드로 동일한 바이너리를 만들 수 있는 빌드 환경을 제공합니다. 여기에는 다음 사항이 포함됩니다.
   * Tool chain 정보
   * 빌드 스크립트
   * 빌드 방법 (README)

소스 코드 대신 서면 약정서(Written Offer)를 제공할 수 있습니다. 여기에는 다음 진술이 포함되어야 합니다.

1. 서면 약정서는 제품 판매 후 3년간 유효합니다.
2. 누구에게나 제공합니다.
3. 비용 청구를 하지 않습니다. (소스 전달을 위해 발생하는 비용 제외)

{{% alert color="warning" %}}
이후 외부로부터 서면 약정서를 근거로 소스 코드 제공을 요청 받을 경우, 위에서 언급한 바이너리에 해당하는 소스 코드를 제공해야 합니다. 따라서 회사는 제품 판매 후 최소 3년간 소스 코드를 보관해야 합니다.
{{% /alert %}}

#### 2-3 설치 정보 제공 의무

바이너리를 User Product와 배포한다면 설치 정보(Installation Information)를 제공합니다.

- User Product : 전자 기기와 같은 Embedded Device
- 설치 정보(Installation Information) : 사용자가 소스 코드를 빌드하여 다시 제품에 설치하기 위해 필요한 모든 정보 및 방법

{{% alert title="사용 제한" color="warning" %}}
대부분의 User Product는 보안상의 이유로 설치 정보를 제공하는 것이 불가능합니다. 따라서 User Product로 배포하는 소프트웨어에는 GPL-3.0의 오픈소스를 사용하지 않아야 합니다.
{{% /alert %}}

## GPL-2.0 대비 주요 개선사항

GPL-3.0은 GPL-2.0의 핵심 원칙을 유지하면서 다음 사항을 개선하였습니다.

* **특허 허여 명시**: 기여자의 특허 라이선스 허여를 명시적으로 규정
* **티보이제이션 방지**: User Product에 설치 정보 제공 의무 추가
* **국제화**: 전 세계적으로 적용 가능하도록 법적 용어 개선

## 라이선스 호환성

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| MIT | 호환 | 전체 프로젝트가 GPL-3.0이 됨 |
| Apache-2.0 | 호환 | 전체 프로젝트가 GPL-3.0이 됨 |
| GPL-2.0 | 조건부 | GPL-2.0-or-later인 경우만 호환 |
| LGPL-3.0 | 호환 | LGPL 부분은 LGPL 유지 가능 |
| AGPL-3.0 | 호환 | 전체 프로젝트가 AGPL-3.0이 됨 |
| Proprietary | 비호환 | 상용 소프트웨어에 사용 불가 |

{{% alert title="GPL-2.0과의 호환성" color="info" %}}
GPL-2.0-only 라이선스와 GPL-3.0은 호환되지 않습니다. 그러나 GPL-2.0-or-later 라이선스는 GPL-3.0으로 업그레이드할 수 있어 호환됩니다.
{{% /alert %}}

## 참고 자료

* [GPL-3.0 License 원문](https://www.gnu.org/licenses/gpl-3.0.html)
* [SPDX License List - GPL-3.0](https://spdx.org/licenses/GPL-3.0-only.html)
* [GNU GPL FAQ](https://www.gnu.org/licenses/gpl-faq.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/GPL-3.0-only.txt)