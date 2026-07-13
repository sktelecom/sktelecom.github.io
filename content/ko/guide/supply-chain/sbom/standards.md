---
title: "SBOM 표준"
linkTitle: "SBOM 표준"
weight: 2
type: docs
description: >
  SBOM의 양대 표준인 SPDX와 CycloneDX의 특징을 비교하고 프로젝트에 적합한 선택 기준을 제시합니다.
---

{{% alert title="실무 결론부터" color="info" %}}
SK텔레콤 제출용 SBOM은 CycloneDX (JSON) 형식을 권장합니다. 허용 포맷과 버전은 [제출 요구사항](/guide/supply-chain/for-suppliers/requirements/)에서 확인하세요. 이 페이지의 나머지는 두 표준을 깊이 이해하려는 분들을 위한 상세 비교입니다.
{{% /alert %}}

## 주요 SBOM 표준

현재 널리 쓰이는 표준은 두 가지이며, 둘 다 SK텔레콤 제출에 사용할 수 있습니다. 탄생 배경과 주력 분야가 다릅니다.

- SPDX (Software Package Data Exchange): Linux Foundation이 주관하는 표준(ISO/IEC 5962)입니다. 오픈소스 라이선스 정보 교환을 위해 개발되어 라이선스·저작권 정보 표현이 상세하고, 개별 파일 레벨의 정보까지 담을 수 있습니다.
- CycloneDX: OWASP가 개발한 보안 중심 표준(ECMA-424)입니다. 처음부터 취약점 관리를 위해 설계되어 구조가 간결하고, 보안 도구와의 통합이 우수합니다.

## SPDX vs CycloneDX 비교

| 구분 | SPDX | CycloneDX |
|------|------|-----------| 
| 관리 기관 | Linux Foundation | OWASP |
| 표준 인증 | ISO/IEC 5962 | ECMA-424 |
| 주요 목적 | 라이선스 컴플라이언스 | 보안 취약점 관리 |
| 구조 복잡도 | 높음 (상세) | 낮음 (간결) |
| 파일 레벨 추적 | 지원 | 제한적 |
| 취약점 정보 | 선택사항 | 기본 포함 |
| 도구 생태계 | 성숙 | 빠르게 성장 중 |
| 파일 형식 | JSON, RDF/XML, YAML, Tag-Value | JSON, XML |
| 주요 사용자 | 법무팀, 오픈소스 관리 조직 | 보안팀, DevOps 엔지니어 |
| SKT 권장 | 라이선스 검증이 주 목적일 때 | 보안 취약점 관리가 주 목적일 때 |

어느 형식을 쓰든 제출 가능 여부는 형식이 아니라 내용이 가릅니다. 생성 도구가 지원하는 형식을 선택하고, [제출 요구사항](/guide/supply-chain/for-suppliers/requirements/)의 필수 필드를 충족하면 됩니다.

## 상호 변환

SPDX와 CycloneDX 간 변환 도구가 제공됩니다.

### SPDX에서 CycloneDX로 변환

```bash
# cyclonedx-cli 사용
cyclonedx convert --input-file sbom.spdx.json \
  --output-file sbom.cdx.json --input-format spdx \
  --output-format json
```

### CycloneDX에서 SPDX로 변환

```bash
# spdx-tools 사용
java -jar tools-java-1.1.0-jar-with-dependencies.jar \
  Convert bom.cdx.json bom.spdx.json
```

## 관련 문서

- [SBOM이란?](../what-is-sbom/): SBOM의 개념과 필요성
- [공급사 제출 요구사항](/guide/supply-chain/for-suppliers/requirements/): SK텔레콤이 허용하는 포맷 및 버전

## 참고 자료

- [SPDX Specification](https://spdx.github.io/spdx-spec/)
- [CycloneDX Specification](https://cyclonedx.org/specification/overview/)
- [NTIA SBOM Formats Comparison](https://www.ntia.gov/files/ntia/publications/sbom_formats_survey-version-2021_0.pdf)
