# How to Contribute

**Note that this page is only available in Korean.** 

[SK텔레콤 오픈소스 포털](https://sktelecom.github.io/) 웹사이트는 모든 소스 코드를 공개하여 오픈소스 개발 방식으로 개발하고 있습니다. 여러분의 참여와 기여가 큰 힘이 됩니다. 

- [How to Contribute](#how-to-contribute)
  - [기여 절차](#기여-절차)
  - [개발 환경 구성](#개발-환경-구성)
  - [메뉴 구조](#메뉴-구조)
  - [다국어 지원](#다국어-지원)
  - [테마](#테마)
  - [세부 기여 방법](#세부-기여-방법)
  - [문의 / 요청](#문의--요청)

## 기여 절차

일반적인 [GitHub Workflow](./docs/github-workflow.md)에 따라 수정 사항을 Pull Request하시기 바랍니다. 

## 개발 환경 구성

이 사이트는 웹사이트 구축용 오픈소스인 [Hugo](https://gohugo.io/) 프레임워크를 기반으로 문서 작업에 최적화된 [Docsy](https://github.com/google/docsy) 테마를 사용하여 제작하였습니다. 

개발 환경을 구성하여 로컬에서 웹사이트를 실행할 수 있습니다. 다음 가이드에 따라 Hugo 설치 등 필요한 작업을 수행하세요.

* [로컬PC에서 웹사이트 구동하기](./docs/local-website-server.md)

## 메뉴 구조

SK텔레콤 오픈소스 포털 웹사이트 화면 상단에는 여러 메뉴가 있는데요, 다음 두 곳에서 메뉴를 추가/삭제 할 수 있습니다. 
1. 사이트 구성 파일([config.toml](./config.toml))내 `[[menu.main]]` 부분
2. /content 하위 [디렉토리](./content/ko/)

각 페이지를 가리키는 _index.md 파일 내 상단에는 weight 속성을 정의할 수 있습니다. 동일한 디렉토리 내에서 가중치가 낮을수록 먼저 나타납니다. 예를들어 About 페이지를 표현하는 [`_index.md`](./content/ko/about/_index.md)의 페이지 상단은 다음과 같이 weight가 10으로 다른 페이지보다 낮은 값을 갖고 있어서 메뉴의 제일 왼쪽에 나타나게 됩니다. 

```
---
title: "About"
linkTitle: "About"
weight: 10
type: docs
description: >
  SK텔레콤의 오픈소스 거버넌스 현황
menu:
  main:
    weight: 10
---
```

## 다국어 지원

SK텔레콤 오픈소스 포털 웹사이트는 한국어와 영어를 지원합니다. [`/content`](./content/)하위에 `/ko`와 `/en` 디렉토리로 구분하여 각각 한국어와 영어 콘텐츠를 추가합니다.

## 테마

화면의 스타일을 정의하는 테마 파일은 [`themes/docsy`](./themes/docsy/)디렉토리에 있습니다. 이 파일은 변경하지 마세요. 


## 세부 기여 방법

SK텔레콤 오픈소스 포털 웹사이트의 콘텐츠는 여러분의 기여로 채워집니다. [오픈소스 프로젝트](https://sktelecom.github.io/project/), [오픈소스 가이드](https://sktelecom.github.io/guide/) 및 [오픈소스 블로그](https://sktelecom.github.io/blog/)를 직접 추가해주세요. 

* 오픈소스 프로젝트 등록하기
* 오픈소스 가이드 작성하기
* 오픈소스 블로그 작성하기


## 문의 / 요청

오픈소스 기여와 관련하여 문의나 요청이 있을 경우 Issue를 생성하거나 OSPO (Open Source Program Office)에 메일로 문의 주세요. 

* [create an issue](https://github.com/sktelecom/sktelecom.github.io/issues/new) 
* SK텔레콤 OSPO Email : opensource@sktelecom.com


감사합니다!

===
