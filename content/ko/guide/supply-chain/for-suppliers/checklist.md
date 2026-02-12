---
title: "검증 체크리스트"
linkTitle: "검증 체크리스트"
weight: 3
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

### 3. 식별자 (PURL) 확인 
SK텔레콤 시스템은 PURL을 통해 취약점을 매핑합니다. 가장 중요한 항목입니다.
- [ ] 모든 컴포넌트(`components`) 객체 안에 `purl` 필드가 존재하는가?
- [ ] PURL 형식이 표준(`pkg:type/namespace/name@version`)을 따르는가?
- [ ] PURL 내에 특수문자 등이 올바르게 인코딩되었는가?

## 온라인 검증 도구
*   CycloneDX Validator: [https://cyclonedx.github.io/cyclonedx-web-tool/validate](https://cyclonedx.github.io/cyclonedx-web-tool/validate)