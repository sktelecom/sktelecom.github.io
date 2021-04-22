---
title: "Apache-2.0 가이드"
linkTitle: "Apache-2.0"
weight: 10
type: docs
description:  "[Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0)은 [Apache Software Foundation](https://www.apache.org/)에서 만든 오픈소스 라이선스이며, 소스 코드 공개를 요구하지 않는 Permissive 형태의 라이선스이다. "
---


## 소스 코드 내 라이선스 문구
Apache-2.0하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있다. 

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

## 사용 사례 별 의무 사항
### Case 1. 소스 형태로 재배포 
Apache-2.0하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수한다.

#### 1-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권 등 정보를 유지한다. 
* NOTICE 파일이 포함되어 있을 경우 이를 유지한다. 
즉, 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포한다. 


{{% alert title="수정 시 의무 사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수한다. 

* 수정 사항에 대한 고지를 포함한다. (예: 수정일, 수정내용을 주석 형태로 포함)

{{% /alert %}}

### Case 2. 바이너리 형태로 재배포

Apache-2.0하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수한다. 

#### 2-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권 등 정보를 유지한다. 
* NOTICE 파일이 포함되어 있을 경우 이를 유지한다. 
이를 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉한다. 

> 참고 : https://www.osadl.org/fileadmin/checklists/unreflicenses/Apache-2.0.txt