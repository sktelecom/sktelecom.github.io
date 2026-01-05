---
title: "Open Source Guide"
linkTitle: "Guide"
weight: 30
type: docs
description: >
  Open Source Guides at SK telecom
menu:
  main:
    weight: 30
aliases:
    - /oss-guide/
---

{{% alert title="NOTICE" color="success" %}}
오픈소스의 개방과 공유의 정신에 따라 SK텔레콤은 내부 구성원들을 위한 오픈소스 가이드를 누구나 활용할 수 있도록 공개하였습니다. (단, 사내 시스템 Link 등 일부 내용은 제외하였습니다.)
{{% /alert %}}

## 들어가며

`"If software is eating the world, open source is eating the software world."`

오픈소스가 소프트웨어 세상의 핵심이 되었다는 것은 이제 설명하지 않아도 되는 당연한 사실입니다.

SK텔레콤은 대부분의 서비스에서 이미 많은 오픈소스를 사용하고 있습니다. 이에 그치지 않고 SK텔레콤은 다수의 오픈소스 프로젝트에 기여하고, 주요 소프트웨어를 오픈소스로 공개하고 있습니다. 이는 오픈소스가 소프트웨어 개발 문화를 혁신하는 훌륭한 도구임을 분명히 인식하고, 오픈소스 커뮤니티에 적극 참여하였을 때 오픈소스로부터 최대의 가치를 창출할 수 있다는 믿음 때문입니다.

최근 오픈소스 생태계에서는 라이선스 컴플라이언스와 함께 보안 취약점 관리와 소프트웨어 공급망 보안이 중요한 과제로 부상하였습니다. 미국과 유럽의 규제 강화에 따라 SBOM(Software Bill of Materials) 관리와 체계적인 취약점 대응이 필수가 되었습니다.

SK텔레콤 OSPO(Open Source Program Office)는 구성원들이 올바르게 오픈소스를 사용하고, 기여할 뿐만 아니라 SK텔레콤의 소프트웨어를 오픈소스로 공개하기 위한 가이드를 제공합니다.

## 가이드 구성

이 가이드는 다음 세 가지 주제로 구성됩니다.

![ospo](./ospo.png)

(이미지 출처 : https://opensource.com/article/20/5/open-source-program-office)

1. [오픈소스 사용하기](/guide/use) (Consume open source projects)
   * 외부 오픈소스를 가져와서 SK텔레콤의 제품이나 서비스에 사용하는 방법과 주의해야 할 사항들을 설명합니다.
   * 라이선스 의무사항 준수, SBOM 관리, 보안 취약점 대응, 자동화 도구 활용을 포함합니다.
2. [오픈소스 기여하기](/guide/contribute) (Contribute to open source projects)
   * 기존의 외부 오픈소스 프로젝트에 SK텔레콤 구성원이 작성한 코드를 기여하는 방법과 절차를 설명합니다.
3. [오픈소스 공개하기](/guide/release) (Release of new open source project)
   * SK텔레콤 구성원이 개발한 소프트웨어를 오픈소스로 공개하는 방법과 절차를 설명합니다.


{{% alert title="References" color="success" %}}
이 문서는 다음 자료들을 참고하여 작성하였습니다.
* [TODO Guides](https://todogroup.org/guides/)
* [GitHub Guide](https://opensource.guide/)
* [Google Open Source Docs](https://opensource.google/docs/)
* [오픈소스 소프트웨어 라이선스 가이드](https://www.olis.or.kr/license/licenseGuide.do)
* [ISO/IEC 5230 - OpenChain Specification](https://www.openchainproject.org/)
* [ISO/IEC 18974 - OpenChain Security Assurance](https://www.openchainproject.org/security-assurance)
* [SPDX Specification](https://spdx.dev/)
* [CycloneDX Specification](https://cyclonedx.org/)
{{% /alert %}}


{{% alert title="Contacts" color="success" %}}
오픈소스 가이드와 관련하여 문의나 요청이 있는 분은 SK텔레콤 OSPO에 연락 주시기 바랍니다.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}