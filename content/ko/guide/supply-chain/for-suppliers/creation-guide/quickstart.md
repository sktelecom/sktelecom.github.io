---
title: "빠른 시작"
linkTitle: "빠른 시작"
weight: 1
type: docs
description: >
  범용 도구인 cdxgen을 사용하여 다양한 언어의 프로젝트를 분석하는 방법입니다.
---


## cdxgen 소개

`cdxgen`은 CycloneDX 형식을 기본 지원하며, 별도의 복잡한 설정 없이 프로젝트 구조를 자동 분석하여 SBOM을 생성해주는 강력한 도구입니다.

### 추천 대상
*   소스코드 형태로 납품하는 경우
*   여러 언어가 섞인 프로젝트 (예: Java 백엔드 + React 프론트엔드)
*   빠르게 SBOM을 생성하고 싶은 경우

## 설치 및 실행

### 1. 설치 (Node.js 필요)
```bash
npm install -g @cyclonedx/cdxgen
```

### 2. 기본 실행
프로젝트 루트 디렉토리에서 아래 명령어를 실행합니다.

```bash
# 기본 생성 (bom.json 생성)
cdxgen -o bom.json
```

### 3. 프로젝트 정보 포함 (권장)
SK텔레콤 제출 규격을 준수하기 위해 프로젝트 이름과 버전을 명시합니다.

```bash
cdxgen -o bom.json --project-name "MyPaymentApp" --project-version "1.0.0"
```

### 4. 언어 타입 명시 (정확도 향상)
특정 언어만 분석하거나 정확도를 높이려면 `-t` 옵션을 사용합니다.

```bash
# Java 프로젝트 명시
cdxgen -t java -o bom.json

# Python 프로젝트 명시
cdxgen -t python -o bom.json
```
