---
title: "EPL-2.0가이드"
linkTitle: "EPL-2.0"
weight: 10
type: docs
description: "[EPL-2.0](https://www.eclipse.org/legal/epl-2.0)은 Eclipse Public License 2.0이라고도 불리며, 모듈 단위의 소스 코드 공개를 요구하는 Weak Copyleft 성격의 라이선스이다. " 
---

## 소스 코드 내 라이선스 문구
EPL-2.0하의 오픈소스는 일반적으로 소스 코드 상단에 다음과 같은 문구가 있다. 

```
This program and the accompanying materials are made available under the
terms of the Eclipse Public License v. 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0, or the Eclipse Distribution License
v. 1.0 which is available at
http://www.eclipse.org/org/documents/edl-v10.php.
```

## 사용 사례 별 의무 사항
### Case 1. 소스 형태로 재배포 
EPL-2.0하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수한다.

#### 1-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권, 보증부인, 면책 등 법적 고지 수정 금지

즉, 소스 코드 내 명시된 라이선스 정보를 그대로 유지한 상태로 재배포한다. 


{{% alert title="수정 시 의무 사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수한다. 

* 수정한 모듈에 EPL-2.0을 적용한다.

{{% /alert %}}

### Case 2. 바이너리 형태로 재배포

EPL-2.0하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수한다. 

#### 2-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권, 보증부인, 면책 등 법적 고지 수정 금지

이상의 내용을 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉한다. 

{{% alert title="수정 시 의무 사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수한다. 

* 수정한 모듈에 EPL-2.0을 적용한다.

{{% /alert %}}

#### 2-2 소스 코드 제공 의무
바이너리 내 EPL-2.0에 해당하는 모듈의 소스 코드 파일을 제공한다. 이때 다음 사항을 준수한다. 

* EPL-2.0은 모듈 내 추가한 내용에 대해서도 EPL-2.0을 적용하여 소스 코드를 공개할 것을 요구한다. 따라서, 원 모듈과 더불어 모듈 내 추가/수정한 내용도 EPL-2.0을 적용하여 공개한다.

오픈소스 고지문에 사용자가 소스 코드를 수령할 수 있는 방법을 안내함으로써 소스 코드 제공 의무를 준수할 수 있다. 

> 참고 : https://www.osadl.org/fileadmin/checklists/unreflicenses/EPL-2.0.txt