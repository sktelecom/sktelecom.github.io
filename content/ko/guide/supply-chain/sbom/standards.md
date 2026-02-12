---
title: "SBOM 표준"
linkTitle: "SBOM 표준"
weight: 2
type: docs
description: >
  SBOM의 양대 표준인 SPDX와 CycloneDX의 특징을 비교하고 프로젝트에 적합한 선택 기준을 제시합니다.
---

## 주요 SBOM 표준

현재 시장을 양분하고 있는 두 가지 주요 표준 형식이 있습니다. 두 형식 모두 널리 사용되지만, 탄생 배경과 주력 분야에 차이가 있습니다.

- SPDX: Software Package Data Exchange
- CycloneDX: OWASP 주관의 보안 중심 SBOM 표준


## SPDX (Software Package Data Exchange)

### 개요

SPDX는 Linux Foundation이 주관하는 오픈소스 프로젝트로, 소프트웨어 패키지의 라이선스 및 저작권 정보를 표준화된 방식으로 표현하기 위해 개발되었습니다. (ISO/IEC 5962:2021)

### 주요 특징

1. SPDX는 원래 오픈소스 라이선스 정보 교환을 위해 개발되어, 라이선스 관련 정보가 매우 상세합니다.

- 표준화된 라이선스 식별자 (SPDX License List)
- 라이선스 표현식 (예: Apache-2.0 OR MIT)
- 저작권 정보 및 파일별 라이선스

2. 패키지뿐만 아니라 개별 파일 레벨의 정보도 포함할 수 있습니다.

- 파일별 해시값
- 파일별 라이선스
- 파일별 저작권 정보

### SPDX 문서 구조

```json
{
  "SPDXID": "SPDXRef-DOCUMENT",
  "spdxVersion": "SPDX-2.3",
  "name": "Example-SBOM",
  "documentNamespace": "https://example.com/sbom-2023-001",
  "creationInfo": {
    "created": "2023-01-15T10:30:00Z",
    "creators": ["Tool: SPDX-Tools-2.3"]
  },
  "packages": [
    {
      "SPDXID": "SPDXRef-Package-1",
      "name": "spring-core",
      "versionInfo": "5.3.20",
      "licenseDeclared": "Apache-2.0",
      "externalRefs": [
        {
          "referenceType": "purl",
          "referenceLocator": "pkg:maven/org.springframework/spring-core@5.3.20"
        }
      ]
    }
  ]
}
```

### 장점

- ISO 국제 표준으로 공식 인정
- 라이선스 정보가 매우 상세
- 파일 레벨까지 추적 가능
- 성숙한 도구 생태계

### 단점

- 보안 취약점 정보가 선택사항
- 구조가 다소 복잡
- 보안 중심 프로젝트에는 부족할 수 있음

## CycloneDX

### 개요

CycloneDX는 OWASP(Open Web Application Security Project)에서 개발한 SBOM 표준으로, 애플리케이션 보안에 중점을 둡니다.


### 주요 특징

1. 처음부터 보안 취약점 관리를 위해 설계되었습니다.

- 취약점 정보 (Vulnerabilities)
- 보안 분석 결과 (Security Analysis)
- 위협 정보 (Threats)

2. SPDX에 비해 구조가 간결하고 이해하기 쉽습니다.

- 필수 정보에 집중
- JSON, XML 형식 지원
- 작은 파일 크기

3. 다양한 사용 사례를 지원하는 확장 기능을 제공합니다.

- SaaS BOM
- Hardware BOM
- AI/ML BOM
- Cryptography BOM

### CycloneDX 문서 구조

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.4",
  "serialNumber": "urn:uuid:3e671687-395b-41f5-a30f-a58921a69b79",
  "version": 1,
  "metadata": {
    "timestamp": "2023-01-15T10:30:00Z",
    "tools": [
      {
        "name": "cyclonedx-maven-plugin",
        "version": "2.7.9"
      }
    ],
    "component": {
      "type": "application",
      "name": "MyApp",
      "version": "1.0.0"
    }
  },
  "components": [
    {
      "type": "library",
      "name": "spring-core",
      "version": "5.3.20",
      "purl": "pkg:maven/org.springframework/spring-core@5.3.20",
      "licenses": [
        {
          "license": {
            "id": "Apache-2.0"
          }
        }
      ]
    }
  ]
}
```

### 장점

- 보안 취약점 정보 기본 포함
- 구조가 간결하고 이해하기 쉬움
- 보안 도구와의 통합이 우수
- 활발한 커뮤니티 및 도구 개발

### 단점

- ISO 표준은 아님 (사실상 표준)
- 파일 레벨 정보는 제한적
- 라이선스 표현이 SPDX보다 단순

## SPDX vs CycloneDX 비교

| 구분 | SPDX | CycloneDX |
|------|------|-----------|
| 관리 기관 | Linux Foundation | OWASP |
| 표준 인증 | ISO/IEC 5962 | 사실상 표준 |
| 주요 목적 | 라이선스 컴플라이언스 | 보안 취약점 관리 |
| 구조 복잡도 | 높음 (상세) | 낮음 (간결) |
| 파일 레벨 추적 | 지원 | 제한적 |
| 취약점 정보 | 선택사항 | 기본 포함 |
| 도구 생태계 | 성숙 | 빠르게 성장 중 |
| 파일 형식 | JSON, RDF/XML, YAML, Tag-Value | JSON, XML |
| 주요 사용자 | 법무팀, 오픈소스 관리 조직 | 보안팀, DevOps 엔지니어 |
| SKT 권장 | 라이선스 검증이 주 목적일 때 | 보안 취약점 관리가 주 목적일 때 |


## 선택 가이드

### CycloneDX 선택이 적합한 경우

다음과 같은 경우 CycloneDX를 권장합니다.

- 보안이 최우선: 취약점 관리가 주요 목적
- 빠른 시작: 간결한 구조로 빠르게 도입
- DevSecOps: CI/CD에 통합하여 자동화
- 현대적인 애플리케이션: 클라우드, 컨테이너 환경

### SPDX 선택이 적합한 경우

다음과 같은 경우 SPDX를 권장합니다.

- 라이선스 컴플라이언스 중시: 상세한 라이선스 정보 필요
- 파일 레벨 추적: 소스코드 파일별 정보 필요
- ISO 표준 준수: 공식 표준 인증 필요
- 레거시 시스템: 기존 SPDX 도구 사용 중

### SK텔레콤 권장사항

SK텔레콤의 내부 프로젝트는 CycloneDX (JSON) 형식을 기본 권장합니다. 이는 내부 취약점 관리 시스템과의 연동성이 CycloneDX가 더 우수하기 때문입니다. 단, 외부 파트너사가 SPDX를 제출하는 경우에도 호환성을 지원합니다.

## 상호 변환

SPDX와 CycloneDX 간 변환 도구가 제공됩니다.

### SPDX → CycloneDX

```bash
# cyclonedx-cli 사용
cyclonedx convert --input-file sbom.spdx.json \
  --output-file sbom.cdx.json --input-format spdx \
  --output-format json
```

### CycloneDX → SPDX

```bash
# spdx-tools 사용
java -jar tools-java-1.1.0-jar-with-dependencies.jar \
  Convert bom.cdx.json bom.spdx.json
```


## SBOM 생성

상세한 SBOM 생성 방법과 기술적 가이드는 다음 문서를 참고하시기 바랍니다.

- [공급사 가이드 (For Suppliers)](../../for-suppliers/)
- [SBOM 생성 방법](../../for-suppliers/sbom-generation/)

## 참고 자료

- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [NTIA SBOM Formats Comparison](https://www.ntia.gov/files/ntia/publications/sbom_formats_survey-version-2021_0.pdf)

