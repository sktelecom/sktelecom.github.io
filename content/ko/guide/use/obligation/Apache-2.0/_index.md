---
title: "Apache-2.0 가이드"
linkTitle: "Apache-2.0"
weight: 10
type: docs
description: "[Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0)은 [Apache Software Foundation](https://www.apache.org/)에서 만든 오픈소스 라이선스이며, 소스 코드 공개를 요구하지 않는 Permissive 형태의 라이선스입니다."
---

SPDX Identifier: `Apache-2.0`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포    
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.    
>   - 수정 사항에 대한 고지를 포함합니다. (예: 수정일, 수정내용을 주석 형태로 포함)    
> - 바이너리 형태로 재배포    
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.    

</div>
{{% /alert %}}

## 소스 코드 내 라이선스 문구

Apache-2.0 라이선스 하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있습니다.

~~~
Copyright [yyyy] [name of copyright owner]
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
~~~

## 사용 사례별 의무사항

### Case 1. 소스 형태로 재배포

Apache-2.0 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권 등 정보를 유지합니다.
* NOTICE 파일이 포함되어 있을 경우 이를 유지합니다.

즉, 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

* 수정 사항에 대한 고지를 포함합니다. (예: 수정일, 수정내용을 주석 형태로 포함)

{{% /alert %}}

### Case 2. 바이너리 형태로 재배포

Apache-2.0 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권 등 정보를 유지합니다.
* NOTICE 파일이 포함되어 있을 경우 이를 유지합니다.

이를 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

## 라이선스 호환성

Apache-2.0 라이선스는 명시적인 특허 허여 조항을 포함하고 있어 대부분의 라이선스와 호환됩니다.

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| MIT | 호환 | Apache-2.0 유지 권장 |
| GPL-3.0 | 호환 | 전체 프로젝트가 GPL-3.0이 됨 |
| GPL-2.0 | 비호환 | 특허 조항 충돌 |
| LGPL-3.0 | 호환 | 동적 링크 시 권장 |
| Proprietary | 호환 | 상용 소프트웨어에 사용 가능 |

{{% alert title="주의사항" color="warning" %}}
Apache-2.0은 GPL-2.0과 호환되지 않습니다. Apache-2.0의 특허 허여 조항이 GPL-2.0과 충돌하기 때문입니다. GPL-3.0과는 호환됩니다.
{{% /alert %}}

## 참고 자료

* [Apache License 2.0 원문](http://www.apache.org/licenses/LICENSE-2.0)
* [SPDX License List - Apache-2.0](https://spdx.org/licenses/Apache-2.0.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/Apache-2.0.txt)