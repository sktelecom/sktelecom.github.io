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
| CycloneDX | v1.3, v1.4, v1.5, v1.6 | 애플리케이션 보안, 취약점 관리 중심 | JSON (권장), XML |
| SPDX | v2.2, v2.3 | 라이선스 컴플라이언스 중심 | JSON, Tag-Value |

> 참고: 두 형식 모두 동등하게 인정되나, 내부 시스템 연동성을 위해 CycloneDX (JSON) 형식을 권장합니다.

## 2. 필수 포함 정보

제출하는 SBOM 문서에는 다음 정보가 반드시 포함되어야 합니다. 정보가 누락되면 반려될 수 있습니다.

### 2.1 메타데이터 (Metadata)
문서 자체와 생성 도구에 대한 정보입니다.
*   Timestamp: 생성 일시 (ISO 8601 형식)
*   Tool Info: 생성 도구의 벤더, 이름, 버전 (예: `CycloneDX-Maven-Plugin v2.7.9`)
*   Component Info: 납품하는 최상위 소프트웨어의 명칭 및 버전

#### 생성 도구 명시 형식

생성 도구 정보는 형식에 따라 다음 필드에 기재해야 합니다.

*   **SPDX**: `creationInfo.creators` 필드에 `Tool:` 접두어로 도구명과 버전 기재
*   **CycloneDX**: `metadata.tools` 배열에 `vendor`, `name`, `version` 기재

```json
// SPDX creationInfo 예시
"creationInfo": {
  "created": "2026-04-06T03:22:00Z",
  "creators": ["Tool: Syft-0.98.0", "Organization: VendorName"]
}
```

### 2.2 컴포넌트 정보 (Components)
소프트웨어를 구성하는 개별 라이브러리 정보입니다.
*   Name: 컴포넌트 이름 (예: `commons-lang3`)
*   Version: 컴포넌트 버전 (예: `3.12.0`) — **필수**: 버전 없이는 취약점 매핑 불가
*   PURL (Package URL): [필수] 패키지 식별자

> **버전 정보는 반드시 포함해야 합니다.** 각 패키지(package/component)는 SPDX의 `versionInfo` 또는 CycloneDX의 `version` 필드에 정확한 버전을 기재해야 합니다. 버전이 없으면 취약점 데이터베이스와의 매핑이 불가능하여 보안 분석을 수행할 수 없습니다.

| 항목 | 추가 요구사항 |
|------|-------------|
| 버전 명시 | 필수 — 버전 없이는 취약점 매핑 불가 |

### 2.3 의존성 범위 (Dependency Scope)

> **중요: 전이적 의존성(Transitive Dependencies)을 반드시 포함해야 합니다.**

SK텔레콤은 제출된 SBOM을 기반으로 취약점을 분석합니다. 직접 의존성만 포함된 SBOM은 숨겨진 취약점을 놓칠 수 있으므로 반려될 수 있습니다.

| 의존성 종류 | 설명 | 포함 여부 |
|---|---|---|
| 직접 의존성 (Direct) | 프로젝트가 직접 선언한 라이브러리 | 필수 |
| 전이적 의존성 (Transitive) | 직접 의존성이 다시 의존하는 라이브러리 | 필수 |
| 개발 전용 의존성 (Dev-only) | 테스트, 빌드 도구 등 런타임 미포함 라이브러리 | 권장 포함 |

**전이적 의존성이란?**

예를 들어 프로젝트가 `library-A`를 직접 사용하고, `library-A`가 내부적으로 `library-B`를 사용하는 경우, `library-B`가 전이적 의존성입니다. `library-B`에 취약점이 있어도 SBOM에 포함되지 않으면 탐지할 수 없습니다.

```
MyApp
  └─ library-A v1.0 (직접 의존성)  ← 공급사가 명시적으로 선언
       └─ library-B v2.3 (전이적 의존성)  ← SBOM에 반드시 포함되어야 함
            └─ library-C v0.9 (전이적 의존성)  ← SBOM에 반드시 포함되어야 함
```

**올바른 SBOM 생성을 위한 전제 조건**

전이적 의존성이 정확하게 포함되려면 빌드(또는 패키지 설치)가 완료된 상태에서 SBOM을 생성해야 합니다. 소스코드만 있는 상태에서는 전이적 의존성이 누락될 수 있습니다.

- Java (Maven): `mvn package` 또는 `mvn dependency:resolve` 실행 후 생성
- Java (Gradle): `./gradlew dependencies` 실행 후 생성
- Python: `pip install -r requirements.txt` (가상환경 활성화) 후 생성
- Node.js: `npm install` 또는 `yarn install` 실행 후 생성
- Go: `go mod download` 실행 후 생성

> 각 도구별 전이적 의존성 포함 방법은 [오픈소스 도구 활용](../creation-guide/) 가이드를 참고하시기 바랍니다.

## 3. Package URL (PURL) 준수

PURL(Package URL)은 소프트웨어 패키지를 고유하게 식별하기 위한 표준 URL 형식입니다. SK텔레콤의 취약점 분석 시스템은 PURL을 기준으로 동작하므로, 모든 컴포넌트에 유효한 PURL이 포함되어야 합니다.

> **PURL은 반드시 `pkg:` 접두어로 시작하는 표준 형식이어야 합니다.** `name:version`, `org/repo:tag` 등 자유 텍스트는 허용되지 않으며, 이 경우 취약점 매핑이 불가능해 반려됩니다.

### 언어별 PURL 예시

| 생태계 | PURL 형식 예시 |
| :--- | :--- |
| Java (Maven) | `pkg:maven/org.springframework/spring-core@5.3.20` |
| JavaScript (NPM) | `pkg:npm/express@4.18.2` |
| Python (PyPI) | `pkg:pypi/django@4.1.0` |
| Go | `pkg:golang/github.com/gin-gonic/gin@v1.8.1` |
| .NET (NuGet) | `pkg:nuget/Newtonsoft.Json@13.0.1` |
| Ruby (RubyGems) | `pkg:gem/rails@7.0.4` |
| GitHub (Actions·소스 호스팅) | `pkg:github/actions/checkout@v3` |
| OS 패키지 (RPM) | `pkg:rpm/centos/glibc@2.17-317.el7?arch=x86_64` |

### purl 타입 제한

purl은 생태계를 특정할 수 있는 타입이어야 합니다.

| 항목 | 요구사항 |
|------|---------|
| purl 타입 | `pkg:generic/` **사용 금지**. 생태계를 명시하는 타입 사용 필수 |
| 허용 타입 | `pkg:rpm/`, `pkg:deb/`, `pkg:apk/`, `pkg:npm/`, `pkg:maven/`, `pkg:pypi/`, `pkg:cargo/`, `pkg:golang/`, `pkg:gem/`, `pkg:nuget/`, `pkg:github/` (GitHub에 호스팅된 소스 컴포넌트) 등 |

### 올바른 / 잘못된 PURL 예시

| 잘못된 예 | 올바른 예 |
|---|---|
| `commons-lang3:3.12.0` | `pkg:maven/org.apache.commons/commons-lang3@3.12.0` |
| `actions/checkout:v3` | `pkg:github/actions/checkout@v3` |
| `lodash@4.17.21` | `pkg:npm/lodash@4.17.21` |
| `pkg:generic/foo@1.0` | (생태계에 맞는 타입으로 변경) |

> PURL에 대한 자세한 사양은 [Package URL 공식 스펙](https://github.com/package-url/purl-spec)을 참고하시기 바랍니다.

## 4. 샘플 문서

### CycloneDX 샘플

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.6",
  "version": 1,
  "metadata": {
    "timestamp": "2026-04-06T10:30:00Z",
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

## 관련 문서

- [공급사 가이드 홈](../)
- [BomLens](../skt-scanner/): SK텔레콤이 제공하는 SBOM 생성 도구
- [오픈소스 도구 활용](../creation-guide/): cdxgen, Syft 등 오픈소스 도구 안내
- [검증 체크리스트](../checklist/): 제출 전 확인 사항
- [제출 절차](../submission/): 제출 방법 및 이메일 양식
