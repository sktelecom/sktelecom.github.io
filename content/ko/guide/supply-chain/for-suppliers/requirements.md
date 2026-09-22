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
| CycloneDX | v1.3, v1.4, v1.5, v1.6, v1.7 | 애플리케이션 보안, 취약점 관리 중심 | JSON (권장), XML |
| SPDX | v2.2, v2.3 | 라이선스 컴플라이언스 중심 | JSON, Tag-Value |

> 참고: 두 형식 모두 동등하게 인정되나, 내부 시스템 연동성을 위해 CycloneDX (JSON) 형식을 권장합니다.

## 요구 수준 요약

각 항목의 요구 수준입니다. 필수 항목이 누락되면 반려됩니다. 권장 항목은 없어도 반려되지 않지만 포함을 권합니다.

| 항목 | 수준 | 상세 |
|---|:---:|---|
| 표준 포맷과 버전 (CycloneDX 또는 SPDX) | 필수 | 1. 표준 데이터 형식 |
| 메타데이터 (생성 일시, 생성 도구, 최상위 컴포넌트) | 필수 | 2.1 메타데이터 |
| 컴포넌트 이름과 버전 | 필수 | 2.2 컴포넌트 정보 |
| 직접·전이적 의존성 포함 | 필수 | 2.3 의존성 범위 |
| PURL(Package URL, 소프트웨어 패키지를 표준 형식으로 가리키는 식별자. `pkg:` 형식, 규격에 정의된 타입, 네임스페이스 필수 타입은 생략 불가) | 필수 | 3. PURL 준수 |
| 개발 전용 의존성 | 권장 | 2.3 의존성 범위 |
| 라이선스 정보 | 권장 | 4. 샘플 문서 |

합격 기준을 충족하는 [예시 SBOM 파일 (CycloneDX 1.6 JSON)](/samples/sbom-example-cyclonedx16.json)을 내려받아 구조를 비교해 보시기 바랍니다.

## 2. 필수 포함 정보

제출하는 SBOM 문서에는 다음 정보가 반드시 포함되어야 합니다. 정보가 누락되면 반려될 수 있습니다.

### 2.1 메타데이터 (Metadata)
문서 자체와 생성 도구에 대한 정보입니다.
*   Timestamp: 생성 일시 (ISO 8601 형식)
*   Tool Info: 생성 도구의 벤더, 이름, 버전 (예: `CycloneDX-Maven-Plugin v2.7.9`)
*   Component Info: 납품하는 최상위 소프트웨어의 명칭 및 버전

> **Component Info의 명칭 값은 장비·제품을 특정할 수 있는 고유한 값이어야 합니다.** 빈 값, `.`처럼 의미 없는 값, 생성 도구가 자동으로 채우는 고정 경로 값(예: `/scan`)은 다른 제출 건과 값이 겹쳐 등록이 거부됩니다. SK텔레콤은 이 값을 제출 건 전체에서 고유해야 하는 식별자로 취급합니다.

#### 파일 이름과 일치

여러 층(OS·애플리케이션 등)으로 나눠 제출하는 경우, 각 층의 최상위 컴포넌트 이름과 버전은 그 SBOM 파일 이름의 앞부분(`{이름}_{버전}`)과 같은 값이어야 합니다. 예를 들어 파일 이름이 `myserver-os_1.0.0_bom.json`이면 `metadata.component.name`(CycloneDX) 또는 `DocumentName`(SPDX)은 `myserver-os`, 버전은 `1.0.0`이어야 합니다.

재제출할 때는 이 이름을 그대로 유지하시기 바랍니다. 이 이름이 스캔의 식별자이므로, 이름이 바뀌면 이전 제출분이 지워지지 않고 남아 이미 조치한 취약점이 계속 집계됩니다.

BomLens로 생성하면 `--project`와 `--version` 값이 이 필드에 자동으로 채워지므로 따로 손댈 필요가 없습니다. 층별 파일 이름 규칙은 [오픈소스 도구 활용](../creation-guide/#층별로-제출)의 층별로 제출 절을 참고하세요.

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
*   Version: 컴포넌트 버전 (예: `3.12.0`) — 필수. SPDX는 `versionInfo`, CycloneDX는 `version` 필드에 정확한 버전을 기재합니다. 버전이 없으면 취약점 매핑이 불가능합니다.
*   PURL (Package URL): [필수] 패키지 식별자

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

여기서 컴포넌트는 SBOM의 `components` 목록(개별 라이브러리·패키지)을 뜻하며, 최상위 제품 자체(SBOM 메타데이터의 컴포넌트 정보)에는 적용되지 않습니다.

> **PURL은 반드시 `pkg:` 접두어로 시작하는 표준 형식이어야 합니다.** `name:version`, `org/repo:tag` 등 자유 텍스트는 허용되지 않으며, 이 경우 취약점 매핑이 불가능해 반려됩니다.

형식이 유효해 보여도 매칭에 실패하는 PURL이 있습니다. 아래 세 규칙은 스키마 검사로는 걸러지지 않으므로 특히 주의하시기 바랍니다.

### 3.1 규격에 정의된 타입

타입 자리에는 Package URL 규격이 정의한 타입만 쓸 수 있습니다. `maven`, `npm`, `pypi`, `rpm`처럼 생태계와 조회할 저장소를 특정하는 이름이며, 전체 목록은 규격 저장소의 [purl-types-index.json](https://github.com/package-url/purl-spec/blob/main/purl-types-index.json)에서 확인할 수 있습니다.

규격에 없는 이름을 임의로 넣으면(예: `pkg:applications/java@11.0.25`) 형식 검사는 통과하지만 어느 저장소를 조회해야 할지 판단할 수 없어 매칭이 실패합니다. 생태계를 특정하지 못하는 `pkg:generic/`도 같은 이유로 허용되지 않습니다.

### 3.2 네임스페이스가 필수인 타입

네임스페이스는 타입과 패키지 이름 사이의 자리입니다. 규격이 이 자리를 필수로 정한 타입은 다음과 같습니다.

`alpm` `apk` `bitbucket` `composer` `deb` `git` `github` `golang` `huggingface` `maven` `qpkg` `rpm` `swift` `vscode-extension`

이 자리가 비면 형식은 유효해 보여도 패키지를 특정할 수 없어 매칭이 되지 않고 반려됩니다. 실제 접수에서 가장 많이 발견되는 유형은 다음 두 가지입니다.

*   **Maven**: groupId가 네임스페이스에 와야 합니다. `pkg:maven/org.slf4j/jcl-over-slf4j@2.0.15`가 올바른 형태이고, groupId와 artifactId를 점으로 이어 붙인 `pkg:maven/org.slf4j.jcl-over-slf4j@2.0.15`는 저장소에 존재하지 않는 좌표라 반려됩니다.
*   **OS 패키지(rpm, deb, apk)**: 배포판이 네임스페이스에 와야 합니다(`pkg:rpm/rhel/bind@9.11.36-16.el8_10.6`).

배포판 값은 반드시 이 위치(네임스페이스)에 있어야 인식됩니다. 물음표 뒤 쿼리 파라미터(예: `?distro=rhel-8.10`)에 넣는 것은 인정되지 않습니다. 이 값은 부가 정보로만 취급되어 매칭에 쓰이지 않으며, 네임스페이스가 비어 있으면 위와 똑같이 반려됩니다.

### 3.3 네임스페이스에 들어갈 값

네임스페이스에는 저장소가 실제로 쓰는 식별자를 그대로 넣어야 합니다. 사람이 읽는 회사 이름이나 URL은 식별자가 아닙니다. 생성 도구가 매니페스트의 벤더 문자열을 groupId 자리에 그대로 옮기면 `pkg:maven/The%2BApache%2BSoftware%2BFoundation/poi@5.4.1`이나 `pkg:maven/http%3A/www.jboss.org/jbossxts@1.1` 같은 형태가 되는데, 둘 다 저장소에 없는 좌표라 매칭되지 않습니다. Maven이라면 `pkg:maven/org.apache.poi/poi@5.4.1`처럼 실제 groupId를 기재해야 합니다.

### 3.4 언어별 PURL 예시

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

### 3.5 올바른 / 잘못된 PURL 예시

| 잘못된 예 | 올바른 예 |
|---|---|
| `commons-lang3:3.12.0` | `pkg:maven/org.apache.commons/commons-lang3@3.12.0` |
| `actions/checkout:v3` | `pkg:github/actions/checkout@v3` |
| `lodash@4.17.21` | `pkg:npm/lodash@4.17.21` |
| `pkg:generic/foo@1.0` | (생태계에 맞는 타입으로 변경) |
| `pkg:applications/java@11.0.25` | (규격에 정의된 타입으로 변경) |
| `pkg:maven/org.slf4j.jcl-over-slf4j@2.0.15` | `pkg:maven/org.slf4j/jcl-over-slf4j@2.0.15` |
| `pkg:maven/The%2BApache%2BSoftware%2BFoundation/poi@5.4.1` | `pkg:maven/org.apache.poi/poi@5.4.1` |
| `pkg:rpm/bind@9.11.36-16.el8_10.6` | `pkg:rpm/rhel/bind@9.11.36-16.el8_10.6` |
| `pkg:rpm/bind@9.11.36-16.el8_10.6?distro=rhel-8.10` | `pkg:rpm/rhel/bind@9.11.36-16.el8_10.6` |

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
```


## 참고 자료

- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [Package URL Specification](https://github.com/package-url/purl-spec)

## 관련 문서

- [공급사 가이드 홈](../)
- [BomLens](../skt-scanner/): SK텔레콤이 제공하는 SBOM 생성 도구
- [오픈소스 도구 활용](../creation-guide/): cdxgen, Syft 등 오픈소스 도구 안내
- [검증 체크리스트](../checklist/): 제출 전 확인 사항과 검증 도구(BomLens 자동 검증, CycloneDX Validator) 안내
- [제출 절차](../submission/): 제출 방법 및 이메일 양식
