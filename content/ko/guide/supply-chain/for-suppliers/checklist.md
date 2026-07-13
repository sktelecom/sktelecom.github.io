---
title: "SBOM 제출 전 검증 체크리스트"
linkTitle: "검증 체크리스트"
weight: 6
type: docs
description: >
  SBOM 제출 전 필수 확인 사항을 점검하여 반려를 방지합니다.
---

## 필수 점검 항목

아래 체크리스트를 통과하지 못한 SBOM은 시스템에서 자동으로 반려될 수 있습니다.

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

## 온라인 검증 도구
*   CycloneDX Validator: [https://cyclonedx.github.io/cyclonedx-web-tool/validate](https://cyclonedx.github.io/cyclonedx-web-tool/validate)

## 관련 문서

- [자주 발생하는 반려 사유](../rejection-reasons/): 반려 사유별 원인과 해결 방법
- [제출 요구사항](../requirements/): 필수 데이터 필드 및 PURL 형식 상세 안내. 합격 기준을 충족하는 예시 SBOM 파일 포함
- [제출 절차](../submission/): 체크리스트 통과 후 제출 방법
- [BomLens](../skt-scanner/): 체크리스트 항목을 충족하는 SBOM을 생성하는 도구
