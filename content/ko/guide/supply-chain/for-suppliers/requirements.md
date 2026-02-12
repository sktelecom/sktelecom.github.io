---
title: "SBOM 제출 요구사항"
linkTitle: "제출 요구사항"
weight: 1
type: docs
description: >
  SK텔레콤 정책에 따른 표준 SBOM 형식, 필수 포함 정보, PURL 식별자 규칙을 상세히 정의합니다.
---

## 1. 표준 데이터 형식

SK텔레콤은 글로벌 표준으로 자리 잡은 두 가지 형식을 모두 지원합니다. 공급사는 사용하는 도구가 지원하는 형식을 선택하여 제출할 수 있습니다.

| 형식 | 버전 | 권장 용도 | 파일 형식 |
|------|------|----------|-----------|
| CycloneDX | v1.3, v1.4, v1.5 | 애플리케이션 보안, 취약점 관리 중심 | JSON (권장), XML |
| SPDX | v2.2, v2.3 | 라이선스 컴플라이언스 중심 | JSON, Tag-Value |

> 참고: 두 형식 모두 동등하게 인정되나, 내부 시스템 연동성을 위해 CycloneDX (JSON) 형식을 권장합니다.

## 2. 필수 포함 정보

제출되는 SBOM 문서는 다음의 정보들을 반드시 포함하고 있어야 합니다. 정보가 누락된 경우 반려될 수 있습니다.

### 2.1 메타데이터 (Metadata)
문서 자체와 생성 도구에 대한 정보입니다.
*   Timestamp: 생성 일시 (ISO 8601 형식)
*   Tool Info: 생성 도구의 벤더, 이름, 버전 (예: `CycloneDX-Maven-Plugin v2.7.9`)
*   Component Info: 납품하는 최상위 소프트웨어의 명칭 및 버전

### 2.2 컴포넌트 정보 (Components)
소프트웨어를 구성하는 개별 라이브러리 정보입니다.
*   Name: 컴포넌트 이름 (예: `commons-lang3`)
*   Version: 컴포넌트 버전 (예: `3.12.0`)
*   PURL (Package URL): [필수] 패키지 식별자

## 3. Package URL (PURL) 준수

PURL(Package URL)은 소프트웨어 패키지를 고유하게 식별하기 위한 표준 URL 형식입니다. SK텔레콤의 취약점 분석 시스템은 PURL을 기준으로 동작하므로, 모든 컴포넌트에 유효한 PURL이 포함되어야 합니다.

### 언어별 PURL 예시

| 생태계 | PURL 형식 예시 |
| :--- | :--- |
| Java (Maven) | `pkg:maven/org.springframework/spring-core@5.3.20` |
| JavaScript (NPM) | `pkg:npm/express@4.18.2` |
| Python (PyPI) | `pkg:pypi/django@4.1.0` |
| Go | `pkg:golang/github.com/gin-gonic/gin@v1.8.1` |
| .NET (NuGet) | `pkg:nuget/Newtonsoft.Json@13.0.1` |
| OS 패키지 (RPM) | `pkg:rpm/centos/glibc@2.17-317.el7?arch=x86_64` |

> PURL에 대한 자세한 사양은 [Package URL 공식 스펙](https://github.com/package-url/purl-spec)을 참고하십시오.

## 4. 샘플 문서

### CycloneDX 샘플

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.4",
  "version": 1,
  "metadata": {
    "timestamp": "2023-10-15T10:30:00Z",
    "tools": [{
      "vendor": "Example Corp",
      "name": "cyclonedx-maven-plugin",
      "version": "2.7.9"
    }],
    "component": {
      "type": "application",
      "name": "PaymentModule",
      "version": "2.1.0",
      "purl": "pkg:maven/com.example/payment-module@2.1.0"
    }
  },
  "components": [{
    "type": "library",
    "name": "spring-core",
    "version": "5.3.20",
    "purl": "pkg:maven/org.springframework/spring-core@5.3.20",
    "licenses": [{
      "license": {
        "id": "Apache-2.0"
      }
    }]
  }]
}
...
```


## 참고 자료

- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [Package URL Specification](https://github.com/package-url/purl-spec)
