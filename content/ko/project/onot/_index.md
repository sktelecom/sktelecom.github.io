---
title: "onot"
linkTitle: "onot"
weight: 5
type: docs
github: "https://github.com/sktelecom/onot"
techs: ["Compliance", "Tool"]
description: >
  SBOM 기반 오픈소스 고지문(OSS Notice) 생성 도구
---


onot는 SBOM(소프트웨어 구성 명세) 문서를 읽어 오픈소스 고지문을 자동으로 만들어 주는 컴플라이언스 도구입니다. SPDX와 CycloneDX, Excel 형식의 SBOM을 입력받아 HTML, 텍스트, Markdown, PDF 고지문을 생성합니다. 라이선스 본문을 내장하고 있어 네트워크가 없는 폐쇄망에서도 완전히 동작하며, SBOM이 사용자의 기기를 벗어나지 않습니다. SK텔레콤과 카카오가 함께 개발해 오픈소스로 공개했습니다.

![onot 데스크톱 앱 미리보기](onot-app-preview.png)

## 프로젝트 정보

* 개발: SK텔레콤, 카카오 (공동 개발)
* 라이선스: Apache License 2.0
* GitHub: [https://github.com/sktelecom/onot](https://github.com/sktelecom/onot)

## 주요 특징

### 다양한 SBOM 입력

* SPDX 2.x 지원 (JSON, YAML, Tag-Value, RDF)
* CycloneDX 지원 (JSON, XML)
* Excel 형식 지원
* 확장자와 내용으로 입력 형식 자동 감지

### 다양한 출력 형식

* HTML, 텍스트, Markdown, PDF 고지문 생성
* 한국어와 영어 고지문 선택 (`--lang`)
* 회사 정보 등 사용자 설정 적용 (`onot.yaml`)

### 완전 오프라인 동작과 여러 사용 형태

* 라이선스 본문을 내장해 폐쇄망에서도 동작 (SBOM이 기기를 벗어나지 않음)
* 명령줄 도구(CLI) 제공
* 데스크톱 앱 제공 (Windows, macOS)
* 로컬 API 사이드카 제공

### 컴플라이언스 지원

* 라이선스 의무사항 자동 정리
* 저작권 정보 취합
* 소스코드 제공 여부 표시
* 고지 의무 자동 판단

## 설치 및 사용법

### CLI 설치

```bash
# PyPI에서 설치 (PDF 출력이 필요하면 ,pdf 추가)
pip install "onot[spdx,cyclonedx,excel,api]"

# 또는 소스에서 설치
git clone https://github.com/sktelecom/onot.git
cd onot
pip install -e .
```

### 데스크톱 앱

별도 설정 없이 사용할 수 있습니다. [Releases](https://github.com/sktelecom/onot/releases)에서 Windows 또는 macOS 설치 프로그램을 내려받아 실행하고, SBOM 파일을 끌어다 놓으면 고지문을 미리 보고 내려받을 수 있습니다.

### 기본 사용법

```bash
# SBOM 파일로부터 HTML과 Markdown 고지문 생성 (입력 형식 자동 감지)
onot generate -i sbom.spdx.json -f html -f markdown --output-dir ./output

# 지원하는 출력 형식 확인
onot formats

# 버전 확인
onot version
```

주요 옵션

* `-f, --format`: html, text, markdown, pdf (반복 지정 가능)
* `--lang`: ko, en
* `--config`: onot.yaml (회사 정보 등)
* `--online`: 누락된 라이선스 본문을 원격에서 가져오기 (기본값은 오프라인)
* `--stdout`: 단일 텍스트 형식을 표준 출력으로 내보내기

## SBOM 문서 예시

아래는 SPDX 2.3 JSON 예시입니다. CycloneDX(JSON, XML)와 Excel 형식도 같은 방식으로 입력할 수 있으며, 입력 형식은 자동으로 감지됩니다.

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
* 사용자 가이드: [USER_GUIDE.md](https://github.com/sktelecom/onot/blob/main/docs/USER_GUIDE.md)
* 데스크톱 앱 다운로드: [Releases](https://github.com/sktelecom/onot/releases)
* 이슈: [GitHub Issues](https://github.com/sktelecom/onot/issues)
