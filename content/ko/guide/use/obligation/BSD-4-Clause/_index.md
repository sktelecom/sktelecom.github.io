---
title: "BSD-4-Clause 가이드"
linkTitle: "BSD-4-Clause"
weight: 10
type: docs
description: "[BSD-4-Clause](https://directory.fsf.org/wiki/License:BSD-4-Clause) 라이선스는 BSD \"Original\" or \"Old\" License라고도 불리는 BSD 라이선스의 원형입니다. 소스 코드 공개를 요구하지는 않지만, 광고 조항(advertising clause)을 포함하고 있어서 사용에 문제가 됩니다."
---

SPDX Identifier: `BSD-4-Clause`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포    
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.  
>   - BSD-4-Clause 하 오픈소스의 기능/활용을 언급하는 모든 광고에 다음 문구 포함  
      <i>"This product includes software developed by the &lt;organization&gt;."</i>
> - 바이너리 형태로 재배포    
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.  
>   - BSD-4-Clause 하 오픈소스의 기능/활용을 언급하는 모든 광고에 다음 문구 포함  
      <i>"This product includes software developed by the &lt;organization&gt;."</i>

</div>
{{% /alert %}}

## 소스 코드 내 라이선스 문구

BSD-4-Clause 라이선스 하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있습니다.

~~~
Copyright (c) <year>, <copyright holder>
All rights reserved.
 
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
 
1. Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software
must display the following acknowledgement:
This product includes software developed by the <organization>.
4. Neither the name of the <organization> nor the
names of its contributors may be used to endorse or promote products
derived from this software without specific prior written permission.
 
THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
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

BSD-4-Clause 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공
* 보증 부인 고지
* BSD-4-Clause 하 오픈소스의 기능/활용을 언급하는 모든 광고에 다음 문구 포함   
<i>"This product includes software developed by the &lt;organization&gt;."</i>

즉, 소스 코드 내 저작권, 라이선스 등을 그대로 유지합니다.

### Case 2. 바이너리 형태로 재배포

BSD-4-Clause 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공
* 보증 부인 고지
* BSD-4-Clause 하 오픈소스의 기능/활용을 언급하는 모든 광고에 다음 문구 포함   
<i>"This product includes software developed by the &lt;organization&gt;."</i>

이를 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

## 라이선스 호환성

BSD-4-Clause는 광고 조항으로 인해 다른 라이선스와의 호환성에 문제가 있습니다.

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| MIT | 호환 | 광고 조항 유지 필요 |
| Apache-2.0 | 호환 | 광고 조항 유지 필요 |
| GPL-2.0/3.0 | 비호환 | GPL과 광고 조항 충돌 |
| Proprietary | 호환 | 광고 조항 준수 필요 |

{{% alert color="warning" %}}

FreeBSD, NetBSD, BSD 등의 오픈소스는 원래 BSD-4-Clause를 적용하였으나, "advertising clause" 조항의 문제를 인식하여 BSD-3-Clause, BSD-2-Clause 등으로 라이선스를 변경하였습니다.

* FreeBSD : BSD-2-Clause로 변경함 - http://www.gnu.org/licenses/bsd.html
* NetBSD : BSD-2-Clause로 변경함 - http://www.netbsd.org/about/redistribution.html#why2clause
* BSD : BSD-3-Clause로 변경함 - ftp://ftp.cs.berkeley.edu/pub/4bsd/README.Impt.License.Change

{{% /alert %}}

## 참고 자료

* [BSD-4-Clause License 원문](https://directory.fsf.org/wiki/License:BSD-4-Clause)
* [SPDX License List - BSD-4-Clause](https://spdx.org/licenses/BSD-4-Clause.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/BSD-4-Clause.txt)