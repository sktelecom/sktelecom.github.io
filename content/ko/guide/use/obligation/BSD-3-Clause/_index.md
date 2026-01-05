---
title: "BSD-3-Clause 가이드"
linkTitle: "BSD-3-Clause"
weight: 10
type: docs
description: "[BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) 라이선스는 BSD 3-Clause \"New\" or \"Revised\" License라고도 불리며 소스 코드 공개를 요구하지 않는 Permissive 라이선스입니다. BSD-4-Clause에서 문제가 된 \"advertising clause\"가 삭제되었습니다."
---

SPDX Identifier: `BSD-3-Clause`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포    
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.  
> - 바이너리 형태로 재배포    
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.    

</div>
{{% /alert %}}

## 소스 코드 내 라이선스 문구

BSD-3-Clause 라이선스 하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있습니다.

~~~
Copyright (c) <year>, <copyright holder>
All rights reserved.
 
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
 
* Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.
* Neither the name of the <organization> nor the
names of its contributors may be used to endorse or promote products
derived from this software without specific prior written permission.
 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
~~~

## 사용 사례별 의무사항

### Case 1. 소스 형태로 재배포

BSD-3-Clause 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공
* 보증 부인 고지

즉, 소스 코드 내 저작권, 라이선스 등을 그대로 유지합니다.

### Case 2. 바이너리 형태로 재배포

BSD-3-Clause 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공
* 보증 부인 고지

이를 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

## 라이선스 호환성

BSD-3-Clause 라이선스는 조직명 무단 사용 금지 조항을 포함하고 있으며 대부분의 라이선스와 호환됩니다.

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| MIT | 호환 | 유사한 라이선스 |
| Apache-2.0 | 호환 | Apache-2.0의 특허 조항 유지 권장 |
| GPL-2.0/3.0 | 호환 | 전체 프로젝트가 GPL이 됨 |
| Proprietary | 호환 | 상용 소프트웨어에 사용 가능 |

{{% alert title="BSD-3-Clause 특징" color="info" %}}
BSD-3-Clause는 BSD-2-Clause에 "조직명이나 기여자 이름을 무단으로 홍보에 사용할 수 없다"는 조항이 추가되어 있습니다.
{{% /alert %}}

## 참고 자료

* [BSD-3-Clause License 원문](https://opensource.org/licenses/BSD-3-Clause)
* [SPDX License List - BSD-3-Clause](https://spdx.org/licenses/BSD-3-Clause.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/BSD-3-Clause.txt)