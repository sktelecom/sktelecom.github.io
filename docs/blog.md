# 오픈소스 블로그 작성하기

오픈소스 블로그를 작성하여 SK텔레콤 오픈소스 포털 웹사이트 > 메뉴 > [Blog](https://sktelecom.github.io/blog/) 등록할 수 있습니다. 

- [오픈소스 블로그 작성하기](#오픈소스-블로그-작성하기)
  - [소스 코드 다운로드](#소스-코드-다운로드)
  - [블로그 소스 코드 위치 확인](#블로그-소스-코드-위치-확인)
  - [블로그 작성하기](#블로그-작성하기)
  - [수정 사항 확인하기](#수정-사항-확인하기)
  - [영문 페이지 반영하기](#영문-페이지-반영하기)
  - [수정 사항 반영 요청하기](#수정-사항-반영-요청하기)

## 소스 코드 다운로드

* [GitHub workflow에](./github-workflow.md)의 Step 1~4를 수행하여 SK텔레콤 오픈소스 포털 웹사이트의 소스 코드를 로컬 PC에 다운로드합니다. 

## 블로그 소스 코드 위치 확인

블로그의 소스 코드는 다음 디렉토리에 위치합니다. 

```
$ cd content/ko/blog/
$ ls
2020		2021		_index.md	sample
```

## 블로그 작성하기

작성일에 해당하는 연도 디렉토리 (예: [/2021](../content/ko/blog/2021) 하위에 작성할 블로그를 위한 디렉토리를 생성합니다. 쉽게하려면 [/sample-post](../content/ko/blog/sample/sample-post) 디렉토리를 복사해서 사용하세요. 디렉토리는 "yyyy-mm-dd-title" 형태의 이름으로 생성합니다.

```
$ cd 2021/
$ cp -R ../sample/sample-post/ ./2021-03-30-title
```

생성한 디렉토리 내에는 기본적으로 index.md 파일이 있어야 합니다. 그리고, 블로그 작성에 필요한 이미지 파일 등을 위치시킵니다. 

index.md 파일은 Markdown 형태이며 상단의 헤더 영역과 본문 영역으로 구분되며, 헤더 영역은 다음과 같이 구성됩니다,

```
---
date: 2020-08-29
title: "The sample blog post"
linkTitle: "Sample blog post"
description: "The Docsy Hugo theme lets project maintainers and contributors focus on content, not on reinventing a website infrastructure from scratch"
author: Riona MacNamara ([@rionam](https://twitter.com/bepsays))
resources:
- src: "**.{png,jpg}"
  title: "Image #:counter"
  params:
    byline: "Photo: Riona MacNamara / CC-BY-CA"
---
```

각 항목의 내용은 다음과 같습니다.

* date : 문서 작성일을 기재하세요. (Optional)
* title : 문서의 제목이며, 웹사이트 화면 상단의 Title 영역에 표시됩니다.
* linkTitle : 메뉴 이름으며, 웹사이트 좌측의 메뉴바 영역에 표시됩니다. (작성하지 않을 경우, title 값이 메뉴바에 표시됩니다.)
* description: 블로그에 대한 설명이며 웹사이트 화면 상단의 Title 영역 바로 아래에 표시됩니다. 
* author : 저자 정보이며, 블로그 상단에 **By Riona MacNamara (@rionam) **와 같은 형태로 표시됩니다. (예: [Sample blog post](https://sktelecom.github.io/blog/sample/sample-post/)
* resource : 블로그 본문에서 사용할 이미지 파일에 대한 정보를 작성합니다. 세부 내용은 [hugo의 Image Processing 기능을 사용하여 보여주기](./attach-file-image.md#hugo의-image-processing-기능을-사용하여-보여주기) 부분을 참고하세요. 


헤더 영역을 작성 후 블로그 본문을 Markdown 문법에 맞추어 작성합니다. 필요에 따라 파일과 그림을 첨부합니다. : [파일 첨부와 그림 보여주기](./attach-file-image.md)

## 수정 사항 확인하기

수정 사항을 작성 후 [로컬에서 웹사이트 구동하기](./local-website-server.md)를 해보면 수정 사항이 정상적으로 동작하는지 확인할 수 있습니다. 

## 영문 페이지 반영하기

국문 페이지 내용 작성을 완료하였으면 다음 안내에 따라 이를 영문 페이지에도 반영하세요. : [영문 페이지 작성 방법](multi-language.md)

(영문 페이지에 반영할 필요가 없는 내용일 경우, `영문 페이지 반영하기`는 스킵합니다.)

## 수정 사항 반영 요청하기

추가 / 수정을 완료하면 Pull Request하여 반영을 요청합니다. 관리자가 Review후 Merge / Deploy합니다. [Git Workflow](./github-workflow.md)를 참고하여 Pull Request를 보내주세요. 
