---
title: "오픈소스 프로젝트 이름 결정"
linkTitle: "이름 결정"
weight: 20
type: docs
description: >
  오픈소스 프로젝트 이름 정하기
---

듣기 좋고 외우기 쉬우며, 어떤 프로젝트인지 나타낼 수 있는 이름으로 짓는게 좋다. 문제가 될 소지가 있는 이름은 피해야 한다. 

## 기억하기 쉬운 이름을 선택하라.
기억하기 쉽고, 프로젝트가 무엇을 하는지에 대해 알릴 수 있는 이름으로 선택하라. 예를 들면 다음과 같다.

* [Sentry](https://github.com/getsentry/sentry) (보초, 감시) : Crash Reporting을 모니터하는 앱이다.
* [Thin](https://github.com/macournoyer/thin) : 빠르고 간단한 Ruby web server 이다.

만약 기존의 어떤 프로젝트를 기반으로 한다면 그 프로젝트 이름을 앞에 붙여서 사용할 수도 있다. 예를 들어, [node-fetch](https://github.com/node-fetch/node-fetch)는 Node.js에 window.fetch를 제공하는 모듈이다.

무엇보다도 명확성을 고려하라. 조크가 가미된 이름이 재미있으나 다른 문화나 언어를 가진 사람에게는 이해되지 않을 수 있다.

## SK텔레콤 브랜드 이름은 피하라.
SK텔레콤이 홍보하는 제품 혹은 서비스가 아니라면 SK텔레콤의 브랜드를 사용하지 마라. 또한 꼭 필요한 경우가 아니라면 "T-이름" 형태의 이름(예: T world)을 사용하지 마라.

## 중복되는 이름은 피하라.
유사한 이름의 오픈소스 프로젝트가 있는지 먼저 확인하라. 특히, 같은 생태계에 동일한 이름의 프로젝트가 있다면 그 이름은 피해야 한다. 이미 존재하는 인기있는 프로젝트와 이름이 겹칠 경우, 사용자에게 혼란을 줄 수 있다.

웹사이트, 트위터 등을 이용한 홍보를 고려해서 미리 원하는 [도메인 이름](https://instantdomainsearch.com/)이나 SNS 계정을 확보할 수 있는지 확인하라. 당장 필요하지 않더라도 미리 확보하는게 좋다.

## 타사 브랜드를 사용하지 마라.
즉, "Java Test Library" 보다는 "Test Library for Java"가 낫다.

## 상표권을 침해하지 마라.
프로젝트 이름이 상표권을 침해하지 않는지 확인하는 것도 중요하다. 추후 상표권을 가진 회사가 프로젝트 중단 요청이나 법적조치를 취해올 수 있다. 이러한 위험을 감수해야 하는 상황을 만들 필요는 없다. Kipris의 [상표권 검색](http://kdtj.kipris.or.kr/kdtj/searchLogina.do?method=loginTM) (해외의 경우 [WIPO Global Brand Databae](https://www3.wipo.int/branddb/en/))에서 상표권 충돌 여부를 확인할 수 있다. 

{{% alert title="T-legalnet" color="warning" %}}
상표권에 대해 보다 자세한 확인이 필요할 경우, [T-legalnet](http://t-legalnet.sktelecom.com)을 통해 IPR팀의 검토를 받아라. 
{{% /alert %}}

