---
date: 2026-06-04
title: "공급망 보안 도구 BomLens 공개"
linkTitle: "공급망 보안 도구 BomLens 공개"
description: 
author: 장학성
categories: ["blog"]
tags: ["SBOM", "공급망보안", "컴플라이언스", "CycloneDX"]
resources:
- src: "**.{png,jpg}"
  title: "Image #:counter"
  params:
    byline: ""
---

안녕하세요.

SK텔레콤이 공급망 보안을 위해 개발한 [BomLens](https://github.com/sktelecom/bomlens)를 오픈소스로 공개했습니다. BomLens는 소프트웨어의 구성 요소를 분석해 CycloneDX 1.6 형식의 SBOM(소프트웨어 구성 명세)을 자동으로 만들어 주는 도구입니다.

소프트웨어 공급망 보안이 강조되면서 어떤 오픈소스가 어떤 버전으로 들어가 있는지 정확히 파악하는 일이 점점 중요해지고 있습니다. BomLens는 이 과정을 자동화해, 만드는 쪽과 받는 쪽 모두의 부담을 줄여 줍니다.

![BomLens 웹 UI](sbom-web-ui.png)

## 무엇을 할 수 있나요

BomLens는 하나의 Docker 이미지로 두 가지 일을 합니다.

첫째, 우리가 만드는 소프트웨어를 검사합니다. 소스 코드나 컨테이너 이미지, 바이너리를 분석해 CycloneDX SBOM과 오픈소스 고지문, 보안 리포트를 생성합니다. Java, Python, Node.js, Go, Rust, .NET, C/C++ 등 다양한 언어를 지원하며, 소스 폴더와 GitHub 주소, ZIP 압축 파일, Docker 이미지 등 여러 형태의 입력을 받습니다.

둘째, 우리가 받는 소프트웨어를 분석합니다. 공급사에게 받은 SBOM이나 펌웨어를 분석해 라이선스와 알려진 취약점을 정리한 오픈소스 리스크 리포트를 만듭니다. 모든 검사는 기본적으로 리스크 리포트를 함께 산출합니다.

## 어떻게 사용하나요

Docker 엔진만 준비되어 있으면 됩니다. 명령줄에 익숙하지 않아도 브라우저 기반 웹 UI로 프로젝트 이름과 검사 대상을 입력하고 실행하면, 실시간 로그를 보며 결과를 내려받을 수 있습니다.

```bash
git clone https://github.com/sktelecom/bomlens.git
cd bomlens
docker pull ghcr.io/sktelecom/sbom-generator:latest

# 결과 저장 폴더에서 실행하면 http://localhost:8080 이 열립니다
/path/to/bomlens/scripts/scan-sbom.sh --ui
```

CI/CD 파이프라인에 붙일 수 있는 명령줄 사용법도 제공하며, Windows와 macOS에서는 더블 클릭으로 실행되는 데스크톱 앱도 받을 수 있습니다. 더 자세한 내용은 [BomLens 프로젝트 소개](/project/sbom-generator/)와 [시작하기 문서](https://github.com/sktelecom/bomlens/blob/main/docs/getting-started.md)를 참고해 주세요.

소프트웨어 공급망 보안과 오픈소스 컴플라이언스 업무에 BomLens가 도움이 되기를 바랍니다. 사용 중 의견이나 개선 제안이 있다면 [GitHub](https://github.com/sktelecom/bomlens)에서 언제든 남겨 주세요.

감사합니다.
