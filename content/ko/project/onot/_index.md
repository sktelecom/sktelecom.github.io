---
title: "onot"
linkTitle: "onot"
weight: 5
type: docs
description: >
  SPDX 기반 오픈소스 고지문 생성 도구
---


onot는 SPDX(Software Package Data Exchange) 문서를 기반으로 오픈소스 고지문을 자동으로 생성하는 컴플라이언스 도구입니다. SK텔레콤과 카카오가 공동으로 개발하여 오픈소스로 공개했습니다.

## 프로젝트 정보

* 개발: SK텔레콤 & 카카오 (공동 개발)
* 라이선스: Apache License 2.0
* GitHub: [https://github.com/sktelecom/onot](https://github.com/sktelecom/onot)

## 주요 특징

### 1. SPDX 기반 자동화
* SPDX 2.3 표준 지원
* JSON, RDF, YAML, Tag-Value 형식 지원
* 자동 파싱 및 검증

### 2. 다양한 출력 형식
* HTML 고지문
* Markdown 고지문
* Excel 형식
* 사용자 정의 템플릿 지원

### 3. 컴플라이언스 지원
* 라이선스 의무사항 자동 정리
* 저작권 정보 취합
* 소스코드 제공 여부 표시
* 고지 의무 자동 판단

## 설치 및 사용법

### 설치

```bash
# PyPI에서 설치
pip install onot

# 또는 소스에서 설치
git clone https://github.com/sktelecom/onot.git
cd onot
pip install -e .
```

### 기본 사용법

```bash
# SPDX 파일로부터 HTML 고지문 생성
onot -i sbom.spdx.json -o notice.html

# Markdown 형식으로 생성
onot -i sbom.spdx.json -o notice.md -f markdown

# Excel 형식으로 생성
onot -i sbom.spdx.json -o notice.xlsx -f excel
```
``

## SPDX 문서 예시

```json
{
  "spdxVersion": "SPDX-2.3",
  "dataLicense": "CC0-1.0",
  "SPDXID": "SPDXRef-DOCUMENT",
  "name": "MyProject",
  "packages": [
    {
      "SPDXID": "SPDXRef-Package-1",
      "name": "express",
      "versionInfo": "4.18.2",
      "licenseConcluded": "MIT",
      "copyrightText": "Copyright (c) 2009-2014 TJ Holowaychuk",
      "downloadLocation": "https://registry.npmjs.org/express/-/express-4.18.2.tgz"
    }
  ]
}
```


## 라이선스

Apache License 2.0 - 상업적 사용 가능

## 리소스

* GitHub: [https://github.com/sktelecom/onot](https://github.com/sktelecom/onot)
* 이슈: [GitHub Issues](https://github.com/sktelecom/onot/issues)
