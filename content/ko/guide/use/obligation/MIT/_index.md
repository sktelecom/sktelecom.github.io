---
title: "MIT 가이드"
linkTitle: "MIT"
weight: 10
type: docs
description: "[MIT](https://opensource.org/licenses/MIT) 라이선스는 Massachusetts Institute of Technology (MIT)에서 만들었으며, 소스 코드 공개를 요구하지 않는 대표적인 Permissive 라이선스입니다."
---

SPDX Identifier: `MIT`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포    
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.  
> - 바이너리 형태로 재배포    
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

</div>
{{% /alert %}}

## 소스 코드 내 라이선스 문구

MIT 라이선스 하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있습니다.

~~~
Copyright (c) <year> <copyright holders>
 
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
~~~

## 사용 사례별 의무사항

### Case 1. 소스 형태로 재배포

MIT 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공

즉, 소스 코드 내 저작권, 라이선스 등을 그대로 유지합니다.

### Case 2. 바이너리 형태로 재배포

MIT 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 저작권 고지
* 라이선스 사본 제공

이를 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

## 라이선스 호환성

MIT 라이선스는 대부분의 다른 라이선스와 호환됩니다.

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| Apache-2.0 | 호환 | Apache-2.0의 특허 조항 유지 권장 |
| GPL-2.0/3.0 | 호환 | 전체 프로젝트가 GPL이 됨 |
| LGPL-2.1/3.0 | 호환 | 동적 링크 시 권장 |
| Proprietary | 호환 | 상용 소프트웨어에 사용 가능 |

{{% alert title="주의사항" color="warning" %}}
MIT 라이선스 코드를 GPL 프로젝트에 포함하면 전체 프로젝트가 GPL 라이선스를 따라야 합니다. GPL의 Copyleft 조건이 MIT보다 더 강한 제약을 가하기 때문입니다.
{{% /alert %}}

## 참고 자료

* [MIT License 원문](https://opensource.org/licenses/MIT)
* [SPDX License List - MIT](https://spdx.org/licenses/MIT.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/MIT.txt)