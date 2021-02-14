---
title: "파일 내 저작권 및 라이선스 표시"
linkTitle: "저작권 표시"
weight: 30
type: docs
description: >
  파일 내 저작권 및 라이선스 표시하는 방법을 설명한다. 
---

저작권은 ([베른 협약](https://en.wikipedia.org/wiki/Berne_Convention) 이후) 저작자가 저작물 만들 때 자동으로 생성된다. 모든 저작물은 저작권에 의해 보호되며, 저작권 보유자에게 저작물에 대한 독점적인 권한이 부여된다. 따라서 우리의 저작물(소스 코드, 텍스트, 이미지, 기타 미디어 등)을 다른 사용자가 사용할 수 있게 하려면 그들에게 라이선스를 부여해야 한다. 라이선스의 사전적 정의는 "특정 권리를 실행하기 위해 자격이 있는 기관으로부터 받은 허가"이며, 이러한 허가 없이 특정 권리를 실행하는 것은 저작권 침해와 같은 불법 행위가 된다.

저작권 표시가 법에 따라 요구되는 것은 아니지만, (1) 대부분의 오픈소스 라이선스가 저작권 표시를 요구하고, (2) 사용자가 법적 또는 기술적인 이유로 저작권자에게 연락하기를 원할 수 있다는 점을 고려하여 소스 코드 파일에 저작권 표시를 포함하는 것은 의미가 있다.

SK텔레콤에서 작성하여 오픈소스로 공개하는 모든 소스 코드 파일에는 다음과 같은 방법으로 저작권 표시 및 라이선스를 고지하라.

## 저작권 표시
소스 코드 상단 헤더 부분에 다음 정보를 포함하는 저작권 표시를 추가하라.

* Copyright (혹은 © 기호)
* 최초 작성 연도
* 저작권 보유자 이름
  * SK텔레콤 구성원이 저자인 저작물의 저작권은 SK텔레콤이 보유한다. 따라서, 회사 이름을 작성한다. (SK TELECOM CO., LTD.)
  * SK텔레콤의 자체적인 개발보다 외부 기여를 적극적으로 수용할 계획이라면 저작권 정보를 "The [Project] Authors"라고 표시하고, 저자 정보를 AUTHORS 파일로 관리하는 것도 고려할 수 있다.
* 연락처 (Optional)
  * 사용자가 저자에게 기술적, 법률적 문의를 위해 연락을 취하고 싶을 수 있다. 이를 대응하기 위한 저자의 이메일 정보를 제공할 수 있다. 이는 필수는 아니다.
  * 또는, 사용자가 정보를 얻을 수 있는 프로젝트의 웹사이트 URL 등 연락처 정보를 작성한다.

저작권 표시는 [REUSE.software](https://reuse.software/) 에서 권장하는 방법인 SPDX Tag ("SPDX-FileCopyrightText")를 사용하여 표시한다. 그 예는 아래와 같다.

~~~php
SPDX-FileCopyrightText: Copyright 2021 SK TELECOM CO., LTD. <{$project-website-url}>
~~~

## 라이선스 고지
각 소스 코드 파일마다 라이선스가 무엇인지 알리는 것도 매우 중요한다. 라이선스는 혼란을 줄이기 위해 Linux Foundation의 [SPDX 프로젝트](https://spdx.org/)에서 제공하는 [SPDX ID](https://spdx.org/ids)를 사용하여 표시한다. SPDX ID를 사용하는 방법은 간단한다.

먼저 적용하고자 하는 오픈소스 라이선스의 SPDX Identifier가 무엇인지 [SPDX License List](https://spdx.org/licenses/) 페이지에서 확인한다. 예를 들어, Apache License version 2의 SPDX Identifier는 Apache-2.0이다.

![license-list](./license-list.png)

그리고 소스 코드 파일 상단에 SPDX-License-Identifier라는 tag를 이용하여 라이선스 Identifier를 표시한다. 그 예는 아래와 같다.

~~~php
SPDX-License-Identifier: Apache-2.0
~~~

## 자동화 도구
(SPDX tag와 함께 추가되도록 도구 개선 후 가이드 개선 필요 : [haksung@sk.com](haksung@sk.com) )

### addlicnse
* [addlicense](https://github.com/google/addlicense) : 소스 파일을 자동으로 인식하여 저작권/라이선스 표시를 추가한다.

~~~perl
addlicense -c "SK TELECOM CO., LTD." -l apache [filename]
~~~ 

### autogen
* [autogen](https://github.com/mbrukman/autogen) : 새로운 파일에 주석 및 코드를 자동으로 추가한다. 

~~~perl
autogen --no-code --no-tlc -c "SK TELECOM CO., LTD." -l apache [filename]
~~~

이를 batch 로 적용할 수도 있다. 아래 예는 Java 파일에 적용하는 batch이다.

~~~perl
find . -type f -name \*.java -exec autogen -i --no-code --no-tlc -c \
  "SK TELECOM CO., LTD." -l apache {} \;
~~~