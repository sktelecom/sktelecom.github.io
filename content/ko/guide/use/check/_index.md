---
title: "오픈소스 라이선스 확인하기"
linkTitle: "라이선스 확인하기"
weight: 20
type: docs
description: >
  오픈소스 라이선스를 확인하는 방법
---

여러 가지 방법으로 오픈소스 라이선스를 확인할 수 있습니다. 분석 도구를 사용하지 않고도 수동으로 확인하거나, 자동화 도구를 활용하여 효율적으로 확인할 수 있습니다.

## 수동 확인 방법

### 방법 1. 소스 코드 파일 상단 주석 확인

일반적인 오픈소스는 소스 코드 파일 상단에 저작권과 라이선스 정보를 표시합니다.

![01](./01.png)
(https://github.com/SKTBrain/KoBERT/blob/master/kobert/pytorch_kobert.py)

이 내용으로 오픈소스 라이선스를 확인할 수 있습니다.

SK텔레콤은 [FOSSology](https://www.fossology.org/)라는 도구를 제공하여 누구나 소스 코드 파일 상단의 오픈소스 라이선스를 쉽게 확인할 수 있게 하였습니다.

### 방법 2. Root 폴더 내 LICENSE (혹은 COPYING) 파일 확인

일반적인 오픈소스는 Root 폴더 내 LICENSE 혹은 COPYING 파일로 라이선스 정보를 표시합니다.

![02](./02.png)
(https://github.com/openinfradev/tacoplay)

### 방법 3. README 또는 웹사이트에서 라이선스 정보 확인

어떤 오픈소스는 오픈소스를 설명하는 README나 웹사이트 문서에서 라이선스 정보를 제공합니다.

![03](./03.png)
(https://github.com/metatron-app/metatron-discovery)

## 자동화 도구를 활용한 확인

대규모 프로젝트나 다수의 의존성을 포함하는 경우, 자동화 도구를 사용하여 효율적으로 라이선스를 확인할 수 있습니다.

### Syft

Syft는 컨테이너 이미지와 파일 시스템에서 SBOM을 생성하고 라이선스를 추출하는 도구입니다.
```bash
syft dir:. -o json
```

### Trivy

Trivy는 취약점 스캔과 함께 라이선스 정보를 확인할 수 있는 도구입니다.
```bash
trivy fs --scanners license .
```

자동화 도구에 대한 상세한 사용법은 [자동화](/guide/use/automation/) 섹션을 참고하시기 바랍니다.

## 라이선스 정보 우선순위

만약 방법 1-3에서 명시한 정보가 서로 상이하다면, 방법 1, 즉 파일 내 표시된 라이선스 정보에 우선순위를 두고 판단하시기 바랍니다.