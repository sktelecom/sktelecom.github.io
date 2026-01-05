---
title: "CDDL-1.0 가이드"
linkTitle: "CDDL-1.0"
weight: 10
type: docs
description: "[CDDL-1.0](https://opensource.org/licenses/cddl1)은 Common Development and Distribution License 1.0이라고도 불리며, 파일 단위의 소스 코드 공개를 요구하는 Weak Copyleft 성격의 라이선스입니다."
---

SPDX Identifier: `CDDL-1.0`

{{% alert title="의무사항 요약" color="primary" %}}
<div class="-bg-100 p-3">

> - 소스 형태로 재배포    
>   - 고지 의무 : 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.  
>   - 수정시 의무사항
>     - 수정한 파일에 CDDL-1.0을 적용합니다. (별도로 추가한 파일에는 CDDL-1.0 적용 의무 없음)
> - 바이너리 형태로 재배포    
>   - 고지 의무 : 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.    
>   - 수정시 의무사항  
>     - 수정한 파일에 CDDL-1.0을 적용합니다. (별도로 추가한 파일에는 CDDL-1.0 적용 의무 없음)  
>     - 소스 코드 제공 의무  
>       - <span class="-text-warning">바이너리 내 CDDL-1.0에 해당하는 **파일**의 소스 코드를 제공합니다.</span>  

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft 특성" color="info" %}}
CDDL-1.0은 파일 단위 Weak Copyleft 라이선스입니다. MPL을 기반으로 만들어졌으며, CDDL-1.0 파일 자체를 수정한 경우에만 소스 코드 공개 의무가 발생합니다. 별도로 추가한 파일은 공개할 필요가 없어 상용 소프트웨어에서도 사용 가능합니다.
{{% /alert %}}

## 사용 사례별 의무사항

### Case 1. 소스 형태로 재배포

CDDL-1.0 라이선스 하의 오픈소스를 소스 형태로 재배포 시 다음 사항을 준수합니다.

#### 1-1 고지 의무
* 라이선스 사본
* 저작권, 특허, 상표권 등 법적 고지 유지

즉, 소스 코드 내 명시된 저작권/라이선스 정보를 그대로 유지한 상태로 재배포합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

* 수정한 파일에 CDDL-1.0을 적용합니다. (별도로 추가한 파일에는 CDDL-1.0 적용 의무 없음)

{{% /alert %}}

### Case 2. 바이너리 형태로 재배포

CDDL-1.0 라이선스 하의 오픈소스를 빌드하여 바이너리 형태로만 재배포 시 다음 사항을 준수합니다.

#### 2-1 고지 의무
* 라이선스 사본 제공
* 저작권, 특허, 상표권 등 법적 고지 유지

이상의 내용을 포함하는 오픈소스 고지문을 생성하여 바이너리 재배포 시 동봉합니다.

{{% alert title="수정 시 의무사항" color="success" %}}
오픈소스의 소스 코드를 일부 추가/수정하였을 경우, 다음 사항을 준수합니다.

* 수정한 파일에 CDDL-1.0을 적용합니다. (별도로 추가한 파일에는 CDDL-1.0 적용 의무 없음)

{{% /alert %}}

#### 2-2 소스 코드 제공 의무

바이너리 내 CDDL-1.0에 해당하는 소스 코드 파일을 제공합니다. 이때 다음 사항을 준수합니다.

* CDDL-1.0은 파일 내 추가한 내용에 대해서도 CDDL-1.0을 적용하여 소스 코드를 공개할 것을 요구합니다. 따라서 원본 파일과 더불어 수정한 파일도 CDDL-1.0을 적용하여 공개합니다.

오픈소스 고지문에 사용자가 소스 코드를 수령할 수 있는 방법을 안내함으로써 소스 코드 제공 의무를 준수할 수 있습니다.

## MPL 기반 라이선스

CDDL-1.0은 Mozilla Public License(MPL)를 기반으로 Sun Microsystems(현 Oracle)가 제작한 라이선스입니다.

* **MPL 유사성**: 파일 단위 Copyleft 적용
* **주요 사용처**: Sun/Oracle 프로젝트 (OpenSolaris, GlassFish 등)
* **현재 상황**: 현재는 CDDL 사용이 감소하고 있는 추세

## 라이선스 호환성

### 주요 라이선스와의 호환성

| 결합 대상 라이선스 | 호환 여부 | 비고 |
|-------------------|----------|------|
| MIT | 호환 | CDDL 파일만 공개 |
| Apache-2.0 | 호환 | CDDL 파일만 공개 |
| GPL-2.0/3.0 | 비호환 | Copyleft 충돌 |
| MPL-2.0 | 호환 | 유사한 파일 단위 Copyleft |
| Proprietary | 호환 | CDDL 파일만 공개하면 사용 가능 |

{{% alert title="GPL과의 비호환성" color="warning" %}}
CDDL-1.0은 GPL 계열 라이선스와 호환되지 않습니다. CDDL과 GPL의 Copyleft 조항이 서로 충돌하기 때문입니다.
{{% /alert %}}

## 참고 자료

* [CDDL-1.0 License 원문](https://opensource.org/licenses/cddl1)
* [SPDX License List - CDDL-1.0](https://spdx.org/licenses/CDDL-1.0.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/CDDL-1.0.txt)