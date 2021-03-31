# 오픈소스 프로젝트 작성하기

SK텔레콤 오픈소스 포털 웹사이트에서는 [SK텔레콤이 공개한 오픈소스 프로젝트에 대해 소개](https://sktelecom.github.io/project/)를 하고 있습니다. 아래 절차를 참고핳여 이 내용을 수정하거나 새로운 오픈소스 프로젝트를 추가할 수 있습니다.

- [오픈소스 프로젝트 작성하기](#오픈소스-프로젝트-작성하기)
  - [소스 코드 다운로드](#소스-코드-다운로드)
  - [오픈소스 프로젝트 소스 코드 위치 확인](#오픈소스-프로젝트-소스-코드-위치-확인)
  - [오픈소스 프로젝트 신규 추가하기](#오픈소스-프로젝트-신규-추가하기)
  - [수정 사항 확인하기](#수정-사항-확인하기)
  - [영문 페이지 반영하기](#영문-페이지-반영하기)
  - [수정 사항 반영 요청하기](#수정-사항-반영-요청하기)

## 소스 코드 다운로드

* [GitHub workflow에](./github-workflow.md)의 Step 1~4를 수행하여 SK텔레콤 오픈소스 포털 웹사이트의 소스 코드를 로컬 PC에 다운로드합니다. 

## 오픈소스 프로젝트 소스 코드 위치 확인

블로그의 소스 코드는 다음 디렉토리에 위치합니다. 

```
$ cd content/ko/project/
$ ls
_index.md	h8l		hanu		kobert		kogpt2		metatron	sona
```

## 오픈소스 프로젝트 신규 추가하기

`content/ko/project/` 디렉토리 내에 기존 프로젝트의 디렉토리를 하나 복사하여 새로운 디렉토리를 생성합니다. 예를 들어 `metatron` 디렉토리를 복사하세요. 

```
$ cp -R ./metatron ./new-project-name
```

생성한 디렉토리 내에는 기본적으로 _index.md 파일이 있습니다. 그리고, 오픈소스 프로젝트 소개에 필요한 이미지 파일 등을 위치시킵니다. 

_index.md 파일은 Markdown 형태이며 상단의 헤더 영역과 본문 영역으로 구분되며, 헤더 영역은 다음과 같이 구성됩니다,

```
---
title: "Metatron Discovery"
linkTitle: "Metatron"
weight: 1
type: docs
description: >
  Metatron Discovery gives your business the power to fly.
---
```

각 항목의 내용은 다음과 같습니다.

* title : 문서의 제목이며, 웹사이트 화면 상단의 Title 영역에 표시됩니다.
* linkTitle : 메뉴 이름으며, 웹사이트 좌측의 메뉴바 영역에 표시됩니다. (작성하지 않을 경우, title 값이 메뉴바에 표시됩니다.)
* weight: weight 값에 따라 화면 좌측메뉴 영역에 보여질 순서가 정해집니다.
* type : docs -> 이 부분은 수정하지 마세요. type은 docs로 되어 있어야 합니다.
* description: 문서에 대한 간략한 소개이며 웹사이트 화면 상단의 Title 영역 바로 아래에 표시됩니다. 


헤더 영역을 작성 후 문서 본문을 Markdown 문법에 맞추어 작성합니다. 필요에 따라 파일과 그림을 첨부합니다. : [파일 첨부와 그림 보여주기](./attach-file-image.md)

## 수정 사항 확인하기

수정 사항을 작성 후 [로컬에서 웹사이트 구동하기](./local-website-server.md)를 해보면 수정 사항이 정상적으로 동작하는지 확인할 수 있습니다. 

## 영문 페이지 반영하기

국문 페이지 내용 작성을 완료하였으면 다음 안내에 따라 이를 영문 페이지에도 반영하세요. : [영문 페이지 작성 방법](multi-language.md)

(영문 페이지에 반영할 필요가 없는 내용일 경우, `영문 페이지 반영하기`는 스킵합니다.)

## 수정 사항 반영 요청하기

추가 / 수정을 완료하면 Pull Request하여 반영을 요청합니다. 관리자가 Review후 Merge / Deploy합니다. [Git Workflow](./github-workflow.md)를 참고하여 Pull Request를 보내주세요. 
