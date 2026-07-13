---
title: "SBOM 제출 전 검증 체크리스트"
linkTitle: "검증 체크리스트"
weight: 6
type: docs
description: >
  SBOM 제출 전 필수 확인 사항을 점검하여 반려를 방지합니다.
---

## 필수 점검 항목

아래 체크리스트를 통과하지 못한 SBOM은 시스템에서 자동으로 반려될 수 있습니다. 2~4번 항목은 아래 [검증 도구](#검증-도구)의 BomLens 자동 검증으로 한 번에 확인할 수 있습니다.

### 1. 파일 무결성
- [ ] 파일 확장자가 `.json` 또는 `.xml` 인가? (압축 파일 아님)
- [ ] 파일 크기가 1KB 이상이며, 내용이 비어있지 않은가?
- [ ] JSON 문법 오류가 없는가? (`jq` 등으로 확인 권장)

### 2. 필수 데이터 필드
- [ ] bomFormat: `CycloneDX` 또는 `SPDX`가 명시되었는가?
- [ ] Metadata: 최상위 컴포넌트(납품 프로젝트)의 이름과 버전이 정확한가?
- [ ] Components: 포함된 라이브러리 목록이 실제와 일치하는가?

### 3. 의존성 완전성 확인
전이적 의존성 누락은 가장 흔한 반려 사유입니다. 아래 항목을 반드시 확인하시기 바랍니다.
- [ ] 직접 의존성(프로젝트가 직접 선언한 라이브러리)이 모두 포함되어 있는가?
- [ ] 전이적 의존성(직접 의존성이 내부적으로 사용하는 라이브러리)이 포함되어 있는가?
- [ ] SBOM 생성 전 빌드(또는 패키지 설치)를 완료하였는가? (예: `npm install`, `mvn package`, `pip install`)
- [ ] 컴포넌트 수가 합리적인가? (직접 의존성만 몇 개인 프로젝트에서 총 컴포넌트 수가 10개 미만이라면 전이적 의존성이 누락되었을 가능성이 높음)

### 4. 식별자 (PURL) 확인
SK텔레콤 시스템은 PURL로 취약점을 매핑합니다. 가장 중요한 항목입니다.
- [ ] 모든 컴포넌트(`components`) 객체 안에 `purl` 필드가 존재하는가?
- [ ] purl 보유 컴포넌트 수가 전체 컴포넌트 수와 일치(또는 근접)하는가?
- [ ] PURL 형식이 표준(`pkg:type/namespace/name@version`)을 따르는가?
- [ ] PURL 내에 특수문자 등이 올바르게 인코딩되었는가?

아래 명령으로 purl 개수를 직접 확인하시기 바랍니다. 전체 컴포넌트 수와 purl 보유 수가 같아야 합니다.

```bash
# CycloneDX — 두 값이 같아야 한다
jq '.components | length' sbom.json                      # 전체 컴포넌트 수
jq '[.components[] | select(.purl)] | length' sbom.json  # purl 보유 수

# SPDX — purl(externalRef) 보유 패키지 수
jq '[.packages[] | select(.externalRefs[]?.referenceType == "purl")] | length' sbom.json
```

> purl 보유 수가 0이거나 전체 컴포넌트 수보다 현저히 적으면 제출하지 마십시오. 원인과 재생성 방법은 [자주 발생하는 반려 사유](../rejection-reasons/)를 참고하십시오.

## 검증 도구

### BomLens 자동 검증 (권장)

[BomLens](../skt-scanner/)의 SBOM 분석 기능은 위 체크리스트의 2~4번을 포함해 [제출 요구사항](../requirements/)을 자동으로 점검합니다. v1.8.0 이상이 필요합니다.

```bash
./scripts/scan-sbom.sh --project my-app --version 1.0.0 \
  --analyze "./sbom.json" \
  --generate-only
```

실행하면 `my-app_1.0.0/` 폴더에 적합성 리포트(`my-app_1.0.0_conformance.html`)가 생성됩니다. 리포트가 자동으로 확인하는 항목은 다음과 같습니다.

| 검사 항목 | 체크리스트 대응 |
|-----------|-----------------|
| 스펙 버전 범위 (CycloneDX 1.3~1.6, SPDX 2.2~2.3) | 2. 필수 데이터 필드 |
| 생성 일시, 생성 도구, 최상위 컴포넌트 이름·버전 | 2. 필수 데이터 필드 |
| 모든 컴포넌트의 이름·버전 | 2. 필수 데이터 필드 |
| 직접·전이적 의존성 포함 여부 | 3. 의존성 완전성 확인 |
| PURL 보유율, 표준 형식(`pkg:type/name@version`), `pkg:generic` 금지 | 4. 식별자 (PURL) 확인 |
| 라이선스·해시 보유율 (권장 항목) | — |

결과가 fail이면 어떤 컴포넌트가 어느 항목에 미달하는지 목록으로 표시되므로, 해당 부분을 보완해 SBOM을 다시 생성한 뒤 재검증하면 됩니다. 웹 UI(`--ui` 실행 후 SBOM 업로드)에서도 같은 검증을 할 수 있습니다.

### CycloneDX Validator (스키마 검사)

*   CycloneDX Validator: [https://cyclonedx.github.io/cyclonedx-web-tool/validate](https://cyclonedx.github.io/cyclonedx-web-tool/validate)

CycloneDX 파일이 표준 스키마에 맞는지 확인하는 온라인 도구입니다. JSON 문법과 형식 오류(체크리스트 1번)를 설치 없이 빠르게 확인할 때 유용합니다. 다만 스키마 검사만 수행하므로, 통과하더라도 2~4번(필수 필드, 의존성 완전성, PURL)을 충족한다는 뜻은 아닙니다. SPDX 파일은 이 도구로 검사할 수 없습니다.

## 관련 문서

- [자주 발생하는 반려 사유](../rejection-reasons/): 반려 사유별 원인과 해결 방법
- [제출 요구사항](../requirements/): 필수 데이터 필드 및 PURL 형식 상세 안내. 합격 기준을 충족하는 예시 SBOM 파일 포함
- [제출 절차](../submission/): 체크리스트 통과 후 제출 방법
- [BomLens](../skt-scanner/): 체크리스트 항목을 충족하는 SBOM을 생성하는 도구
