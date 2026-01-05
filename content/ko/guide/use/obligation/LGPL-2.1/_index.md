---
title: "LGPL-2.1 가이드"
linkTitle: "LGPL-2.1"
weight: 10
type: docs
description: "[Free Software Foundation](http://www.fsf.org/)에서 만든 대표적인 Weak Copyleft 라이선스인 [LGPL-2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)은 재배포 시 소스 코드 공개를 요구하지만, LGPL Library를 Dynamic Link하여 사용하면 자사의 코드는 공개 대상에 포함되지 않습니다."
---

SPDX Identifier: `LGPL-2.1-only` 또는 `LGPL-2.1-or-later`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포 
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다. 
>     - 수정시 의무사항 
>       - 추가/수정한 부분에 LGPL-2.1을 적용합니다.
>       - 수정 사항에 대한 고지를 포함합니다. (예: 수정일, 수정내용을 주석 형태로 포함)
> - 바이너리 형태로 재배포 
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다. 
>     - 수정시 의무사항
>       - 추가/수정한 부분에 LGPL-2.1을 적용합니다.
>       - 수정 사항에 대한 고지를 포함합니다. (예: 오픈소스 고지문에 수정일, 수정내용을 포함)
>     - 소스 코드 제공 의무
>       - <span class="-text-warning">바이너리(라이브러리)에 해당하는 **전체** 소스 코드를 제공합니다.</span>
>       - 사용자가 공개된 LGPL 라이브러리의 소스 코드를 빌드하여 동일한 라이브러리를 만들 수 있는 <span class="-text-warning">빌드 환경</span>을 제공합니다.

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft 특성" color="info" %}}
LGPL-2.1은 Weak Copyleft 라이선스입니다. LGPL 라이브러리 자체를 수정한 경우에만 소스 코드 공개 의무가 발생하며, 동적 링크(Dynamic Link)로 사용하는 애플리케이션은 공개할 필요가 없습니다. 따라서 상용 소프트웨어에서도 사용 가능합니다.
{{% /alert %}}

## 소스 코드 내 라이선스 문구

LGPL-2.1 라이선스 하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있습니다.

~~~
Copyright (C) year name of author
 
This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.
 
This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.
 
You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
~~~

## 사용 사례별 의무사항

### Case 1. 소스 형태로 재배포

LGPL-2.1 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 저작권 고지 제공
* 보증 부인 제공
* 라이선스 사본 제공

즉, 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

1. 추가/수정한 부분에 LGPL-2.1을 적용합니다.
2. 수정 사항에 대한 고지를 포함합니다. (예: 수정일, 수정내용을 주석 형태로 포함)

{{% /alert %}}

### Case 2. 바이너리(라이브러리) 형태로 재배포

LGPL-2.1 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 저작권 고지 제공
* 보증 부인 제공
* 라이선스 사본 제공

이상의 내용을 포함하는 오픈소스 고지문을 생성하여 라이브러리 재배포 시 동봉합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

1. 추가/수정한 부분에 LGPL-2.1을 적용합니다.
2. 수정 사항에 대한 고지를 포함합니다. (예: 오픈소스 고지문에 수정일, 수정내용을 포함)

{{% /alert %}}

#### 2-2 소스 코드 제공 의무

바이너리(라이브러리)에 해당하는 소스 코드를 제공합니다. 이때 다음 사항을 준수합니다.

1. LGPL-2.1은 파생저작물에 대해서도 LGPL-2.1을 적용하여 소스 코드를 공개할 것을 요구합니다. 아래 내용을 참고하여 LGPL-2.1 하의 오픈소스와 파생저작물의 소스 코드를 공개합니다.

{{% alert title="LGPL-2.1 파생저작물의 범위" color="warning" %}}
일반적인 LGPL-2.1의 파생저작물 범위는 다음과 같습니다.

* 라이브러리 내 수정/추가 파일

다음의 경우 LGPL-2.1의 파생저작물로 보지 않습니다.

* LGPL-2.1 라이브러리를 Dynamic Link하여 사용하는 프로그램
* Java에서 LGPL-2.1인 JAR 파일을 import하는 프로그램도 LGPL-2.1의 파생저작물로 간주하지 않습니다. (http://www.gnu.org/licenses/lgpl-java.html)
{{% /alert %}}

2. 사용자가 공개된 LGPL 라이브러리의 소스 코드를 빌드하여 동일한 라이브러리를 만들 수 있는 빌드 환경을 제공합니다. 여기에는 다음 사항이 포함됩니다.
   * Tool chain 정보
   * 빌드 스크립트
   * 빌드 방법 (README)

3. LGPL 라이브러리를 Static Link하여 생성한 실행파일(Executable)을 배포하는 경우, 사용자가 LGPL 라이브러리를 수정하고 다시 실행파일을 생성할 수 있도록 실행파일을 구성하는 오브젝트 코드를 제공합니다. ([#LGPLStaticVsDynamic](https://www.gnu.org/licenses/gpl-faq.en.html#LGPLStaticVsDynamic))

소스 코드 대신 서면 약정서(Written Offer)를 제공할 수 있습니다. 여기에는 다음 진술이 포함되어야 합니다.

1. 서면 약정서는 제품 판매 후 3년간 유효합니다.
2. 누구에게나 제공합니다.
3. 비용 청구를 하지 않습니다. (소스 전달을 위해 발생하는 비용 제외)

{{% alert color="warning" %}}
이후 외부로부터 서면 약정서를 근거로 소스 코드 제공을 요청 받을 경우, 위에서 언급한 바이너리에 해당하는 소스 코드를 제공해야 합니다. 따라서 회사는 제품 판매 후 최소 3년간 소스 코드를 보관해야 합니다.
{{% /alert %}}

## 동적 링크 vs 정적 링크

LGPL-2.1의 핵심은 링킹 방식에 따라 소스 코드 공개 범위가 달라진다는 점입니다.

* **동적 링크(Dynamic Link)**: LGPL 라이브러리만 공개, 애플리케이션 코드는 공개 불필요
* **정적 링크(Static Link)**: LGPL 라이브러리 + 오브젝트 코드 제공 필요

상용 소프트웨어 개발 시에는 동적 링크 사용을 권장합니다.

## 라이선스 호환성

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| MIT | 호환 | 동적 링크 시 상용 소프트웨어 가능 |
| Apache-2.0 | 비호환 | 특허 조항 충돌 |
| GPL-2.0 | 호환 | GPL 부분은 GPL 유지 |
| LGPL-3.0 | 조건부 | LGPL-2.1-or-later인 경우만 호환 |
| Proprietary | 조건부 | 동적 링크 시 사용 가능 |

{{% alert title="상용 소프트웨어 사용 조건" color="info" %}}
LGPL-2.1 라이브러리를 동적 링크로 사용하면 상용 소프트웨어에서도 사용 가능합니다. 단, LGPL 라이브러리 자체를 수정한 경우에는 해당 수정 부분의 소스 코드를 공개해야 합니다.
{{% /alert %}}

## 참고 자료

* [LGPL-2.1 License 원문](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)
* [SPDX License List - LGPL-2.1](https://spdx.org/licenses/LGPL-2.1-only.html)
* [GNU LGPL FAQ](https://www.gnu.org/licenses/gpl-faq.html#LGPL)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/LGPL-2.1-only.txt)