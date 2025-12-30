---
title: "BSD-3-Clause 가이드"
linkTitle: "BSD-3-Clause"
weight: 10
type: docs
description:  "[BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) 라이선스는 BSD 3-Clause \"New\" or \"Revised\" License 라고도 불리며 소스 코드 공개를 요구하지는 않는 Permissive한 라이선스이다.  BSD-4-Clause에서 문제가 된 \"advertising clause\" 이 삭제되었다."
---

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포    
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포한다.  
> - 바이너리 형태로 재배포    
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉한다.    

</div>
{{% /alert %}}

## 소스 코드 내 라이선스 문구
BSD-3-Clause하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있다. 

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

## 사용 사례 별 의무 사항
### Case 1. 소스 형태로 재배포 
BSD-3-Clause하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수한다.

#### 1-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공
* 보증 부인 고지

즉, 소스 코드 내 저작권, 라이선스 등을 그대로 유지한다. 

### Case 2. 바이너리 형태로 재배포

BSD-3-Clause하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수한다. 

#### 2-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공
* 보증 부인 고지

이를 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉한다. 

> 참고 : https://www.osadl.org/fileadmin/checklists/unreflicenses/BSD-3-Clause.txt