---
title: "오픈소스 라이선스별 의무사항"
linkTitle: "라이선스별 의무사항"
weight: 30
type: docs
description: >
  오픈소스 라이선스별 의무사항
---

## 재배포하지 않는다면 자유롭게 사용 가능

먼저, 대부분의 오픈소스 라이선스는 준수해야 할 의무 사항을 '재배포'시 부여합니다. 이 말은 오픈소스를 '재배포'하지 않는다면 고지, 소스 코드 공개 등의 의무사항이 발생하지 않고, 자유롭게 사용이 가능하다는 의미입니다.

{{% alert title="재배포란?" color="warning" %}}
여기서 재배포란 오픈소스의 소스 코드 또는 바이너리의 복사본을 다른 사람에게 제공하는 행위를 의미합니다. 앱스토어 배포, 판매, 3rd party 제공, 고객사 납품 등이 재배포에 해당합니다. 사내 개발 환경 구축, 테스트 도구 등 사내 용도로만 오픈소스를 사용하는 경우는 재배포에 해당하지 않습니다.
{{% /alert %}}

## 1. 제한 없는 라이선스 (Public Domain)

CC0, Public Domain과 같이 아무런 제한 없이 무료로 사용할 수 있는 라이선스가 있습니다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`Creative Commons Zero v1.0 Universal`](http://creativecommons.org/publicdomain/zero/1.0/) | [`CC0-1.0`](https://spdx.org/licenses/CC0-1.0.html)  |  |
| [`The Unlicense`](http://unlicense.org/) | [`Unlicense`](https://spdx.org/licenses/Unlicense.html) |  |

{{% alert title="Public Domain" color="warning" %}}
단, Public Domain이라고 선언된 소프트웨어라도 사례별로 법적 검토가 필요한 복잡한 문제가 내재되어 있을 수 있습니다. 사용하려는 코드가 Public Domain인지 확인이 필요하다면 OSPO에 문의하시기 바랍니다.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

## 2. Permissive 라이선스 (수월하게 사용 가능)

Permissive License라고 분류할 수 있는 오픈소스 라이선스는 고지 의무를 요구합니다. 오픈소스 라이선스의 고지 의무는 비교적 수월하게 준수할 수 있습니다.

이와 같이 고지 의무를 요구하는 Permissive 라이선스 하의 오픈소스를 포함하는 소프트웨어를 배포할 경우, "저작권 표시", "라이선스 고지" 등의 의무를 준수해야 합니다. (참고: [저작권 표시 및 라이선스 고지](../license/#저작권-표시-및-라이선스-고지))

SK텔레콤 오픈소스 컴플라이언스 프로세스를 통해 오픈소스 고지문을 발행하고 소프트웨어 배포 시 이를 동봉하여 고지 의무를 준수할 수 있습니다.

### 2-1. 주요 Permissive 라이선스

다음은 실무에서 가장 자주 사용되는 Permissive 라이선스로, 사용 사례별 가이드를 제공합니다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`MIT License`](http://opensource.org/licenses/mit-license.php) | [`MIT`](https://spdx.org/licenses/MIT.html) | [MIT 가이드](./mit/) |
| [`Apache License 2.0`](https://www.apache.org/licenses/LICENSE-2.0) | [`Apache-2.0`](https://spdx.org/licenses/Apache-2.0.html) | [Apache-2.0 가이드](./apache-2.0/) |
| [`BSD 2-Clause "Simplified" License`](https://opensource.org/licenses/bsd-license.php) | [`BSD-2-Clause` ](https://spdx.org/licenses/BSD-2-Clause.html)| [BSD-2-Clause 가이드](./bsd-2-clause/) |
| [`BSD 3-Clause "New" or "Revised" License`](https://opensource.org/licenses/BSD-3-Clause) | [`BSD-3-Clause`](https://spdx.org/licenses/BSD-3-Clause.html) | [BSD-3-Clause 가이드](./bsd-3-clause/) |
| [`ISC License`](http://opensource.org/licenses/ISC) | [`ISC`](https://spdx.org/licenses/ISC.html) |  |
| [`PostgreSQL License`](http://www.postgresql.org/about/licence) | [`PostgreSQL`](https://spdx.org/licenses/PostgreSQL.html) |  |
| [`zlib License`](http://opensource.org/licenses/zlib-license.php)| [`zlib`](https://spdx.org/licenses/Zlib.html) |  |
| [`PHP License v3.0`](http://www.php.net/license/3_0.txt) | [`PHP-3.0`](https://spdx.org/licenses/PHP-3.0.html) |  |
| [`Python Software Foundation License 2.0`](http://www.python.org/download/releases/2.3.2/license/) | [`PSF-2.0`](https://spdx.org/licenses/PSF-2.0.html) |  |
| [`Universal Permissive License v1.0`](http://opensource.org/licenses/UPL) | [`UPL-1.0`](https://spdx.org/licenses/UPL-1.0.html) |  |
| [`W3C Software Notice and License (2002-12-31)`](http://opensource.org/licenses/W3C.php) | [`W3C`](https://spdx.org/licenses/W3C.html) |  |

### 2-2. 기타 Permissive 라이선스

이외에도 아래와 같은 Permissive 라이선스가 있습니다. 이들도 고지 의무를 준수하면 자유롭게 사용 가능합니다.

- [Academic Free License v2.1](https://opensource.org/licenses/AFL-2.1) ([AFL-2.1](https://spdx.org/licenses/AFL-2.1.html))
- [Academic Free License v3.0](https://opensource.org/licenses/AFL-3.0) ([AFL-3.0](https://spdx.org/licenses/AFL-3.0.html))
- [Artistic License 1.0 (Perl)](https://dev.perl.org/licenses/artistic.html) ([Artistic-1.0-Perl](https://spdx.org/licenses/Artistic-1.0-Perl.html))
- [Artistic License 2.0](https://www.perlfoundation.org/artistic-license-20.html) ([Artistic-2.0](https://spdx.org/licenses/Artistic-2.0.html))
- [Apache Software License 1.1](https://apache.org/licenses/LICENSE-1.1) ([Apache-1.1](https://spdx.org/licenses/Apache-1.1.html))
- [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt) ([BSL-1.0](https://spdx.org/licenses/BSL-1.0.html))
- [BSD-2-Clause Plus Patent License](https://opensource.org/licenses/BSDplusPatent) ([BSD-2-Clause-Patent](https://spdx.org/licenses/BSD-2-Clause-Patent.html))
- [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/legalcode) ([CC-BY-4.0](https://spdx.org/licenses/CC-BY-4.0.html))
- [JSON License](https://www.json.org/license.html) ([JSON](https://spdx.org/licenses/JSON.html))
- [The FreeType Project License](https://gitlab.freedesktop.org/freetype/freetype/-/blob/master/docs/FTL.TXT) ([FTL](https://spdx.org/licenses/FTL.html))
- [Independent JPEG Group License](http://www.ijg.org/files/README) ([IJG](https://spdx.org/licenses/IJG.html))
- [libtiff License](https://gitlab.com/libtiff/libtiff/-/blob/master/LICENSE.md) ([libtiff](https://spdx.org/licenses/libtiff.html))
- [Lucent Public License v1.02](https://plan9.io/license.html) ([LPL-1.02](https://spdx.org/licenses/LPL-1.02.html))
- [Microsoft Public License](https://opensource.org/licenses/MS-PL) ([MS-PL](https://spdx.org/licenses/MS-PL.html))
- [X11 License](https://www.x.org/releases/X11R7.7/doc/xorg-docs/License.html) ([X11](https://spdx.org/licenses/X11.html))
- [CMU License](https://spdx.org/licenses/MIT-CMU.html#licenseText) ([MIT-CMU](https://spdx.org/licenses/MIT-CMU.html))
- [University of Illinois/NCSA Open Source License](https://otm.illinois.edu/accounts/register/) ([NCSA](https://spdx.org/licenses/NCSA.html))
- [OpenSSL License](https://www.openssl.org/source/license-openssl-ssleay.txt) ([OpenSSL](https://spdx.org/licenses/OpenSSL.html))
- [TCP Wrappers License](http://www.porcupine.org/wietse/software.html) ([TCP-wrappers](https://spdx.org/licenses/TCP-wrappers.html))
- [Unicode License v3](https://www.unicode.org/copyright.html) ([Unicode-3.0](https://spdx.org/licenses/Unicode-3.0.html))
- [X.Net License](https://spdx.org/licenses/Xnet.html#licenseText) ([Xnet](https://spdx.org/licenses/Xnet.html))
- [Zend License v2.0](http://www.zend.com/license/2_00.txt) ([Zend-2.0](https://spdx.org/licenses/Zend-2.0.html))
- [Zope Public License 2.1](https://old.zope.dev/Resources/ZPL/) ([ZPL-2.1](https://spdx.org/licenses/ZPL-2.1.html))

## 3. Weak Copyleft (조건부 사용 가능)

Weak Copyleft 유형의 라이선스는 소스 코드 공개를 요구하지만, 공개 범위가 Copyleft 유형의 라이선스에 비해 제한적이라는 특성이 있습니다.

{{% alert title="LGPL Library는 Dynamic Link하여 사용" color="danger" %}}
LGPL (Lesser GPL)도 역시 재배포 시 소스 코드 공개를 요구하는 등 GPL과 동일한 조건을 요구합니다. 단, Library 형태의 LGPL 하의 오픈소스를 Link 형태로 결합할 경우, LGPL Library 부분만 소스 코드를 공개하면 되고, 결합하는 코드는 공개 의무가 없다는 점이 GPL과 다릅니다.

LGPL이 적용된 컴포넌트를 [dynamically-linked](https://opensource.google/docs/thirdparty/licenses/#LinkingRequirements) 형태로 사용할 경우, 자사 코드를 공개하지 않는 방식으로 사용할 수 있습니다.
{{% /alert %}}

Weak Copyleft 라이선스 유형으로 분류할 수 있는 오픈소스 라이선스는 다음과 같습니다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`GNU Lesser General Public License v2.1`](https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html) | [`LGPL-2.1`](https://spdx.org/licenses/LGPL-2.1-only.html) | [LGPL-2.1 가이드](./lgpl-2.1/)  |
| [`GNU Lesser General Public License v3.0`](https://www.gnu.org/licenses/lgpl-3.0-standalone.html) | [`LGPL-3.0`](https://spdx.org/licenses/LGPL-3.0-only.html)| [LGPL-3.0 가이드](./lgpl-3.0/)  |
| [`Mozilla Public License 2.0`](http://opensource.org/licenses/MPL-2.0) | [`MPL-2.0`](https://spdx.org/licenses/MPL-2.0.html) | [MPL-2.0 가이드](./mpl-2.0/) |
| [`Mozilla Public License 1.1`](http://opensource.org/licenses/mozilla1.1.php) | [`MPL-1.1`](https://spdx.org/licenses/MPL-1.1.html) |  |
| [`Eclipse Public License 2.0`](https://opensource.org/licenses/EPL-2.0) | [`EPL-2.0`](https://spdx.org/licenses/EPL-2.0.html) | [EPL-2.0 가이드](./epl-2.0/) |
| [`Eclipse Public License 1.0`](http://opensource.org/licenses/eclipse-1.0.php) | [`EPL-1.0`](https://spdx.org/licenses/EPL-1.0.html) |  |
| [`Common Development and Distribution License 1.0`](http://opensource.org/licenses/cddl1.php) | [`CDDL-1.0`](https://spdx.org/licenses/CDDL-1.0.html) | [CDDL-1.0 가이드](./cddl-1.0/) |
| [`Common Public License 1.0`](http://opensource.org/licenses/cpl1.0.php) | [`CPL-1.0`](https://spdx.org/licenses/CPL-1.0.html) |  |
| [`IBM Public License v1.0`](http://opensource.org/licenses/ibmpl.php) | [`IPL-1.0`](https://spdx.org/licenses/IPL-1.0.html)|  |
| [`Apple Public Source License 2.0`](http://opensource.org/licenses/apsl-2.0.php) | [`APSL-2.0`](https://spdx.org/licenses/APSL-2.0.html) |  |
| [`Ruby License`](http://www.ruby-lang.org/en/LICENSE.txt) | [`Ruby` ](https://spdx.org/licenses/Ruby.html)|  |

{{% alert title="주의: GPL/LGPL-3.0 설치정보 제공 의무" color="danger" %}}
GPL-3.0/LGPL-3.0 하의 오픈소스가 설치된 사용자 제품(User Product)을 배포하기 위해서는 소스 코드 뿐만 아니라 설치 정보를 함께 제공해야 합니다. 이는 기업이 준수하기 어려운 조건이기 때문에 일반적으로 GPL-3.0/LGPL-3.0의 오픈소스는 사용자 제품(User Product) 개발 시 사용할 수 없음에 주의하시기 바랍니다.
* 사용자 제품(User Product): 전자 기기와 같은 embedded device
* 설치 정보(Installation Information): 사용자가 소스 코드를 빌드하여 다시 제품에 설치하기 위해 필요한 모든 정보 및 방법
{{% /alert %}}

Copyleft 라이선스 하의 오픈소스를 포함하는 소프트웨어를 배포할 경우, 사용자에게 소스 코드를 직접 제공하거나, 사용자가 요청시 소스 코드를 제공하겠다는 서면 약정서를 제공해야 합니다.

## 4. Copyleft (사용 주의)

GPL (GNU General Public License)은 오픈소스를 재배포 시 소스 코드 공개를 요구합니다. 오픈소스 자체의 소스 코드 뿐만 아니라 결합한 소스 코드까지 함께 동일한 라이선스 조건으로 공개할 것을 요구해서 Copyleft 성격의 라이선스라고도 합니다. Copyleft 라이선스 유형은 오픈소스 라이선스 중에 요구하는 의무사항이 가장 많은 라이선스 유형이기 때문에 이 유형의 라이선스로 배포되는 오픈소스는 사용 시 주의가 필요합니다.

{{% alert title="자사 코드 분리 방법" color="warning" %}}
대표적인 의무 사항은 이 라이선스로 배포되는 오픈소스를 제품에 포함하여 배포하려면 해당 오픈소스의 소스 코드의 공개가 필요합니다. 또한 이 오픈소스와 결합하는 소스 코드까지도 동일한 오픈소스 라이선스를 적용하여 공개해야 합니다.

따라서, Copyleft 라이선스 유형의 라이선스가 적용된 오픈소스는 SK텔레콤이 배포하는 제품에 포함 시 주의해야 합니다. 이러한 오픈소스는 설계 단계에서부터 Build 시 자사 소프트웨어와 통합되지 않고 Runtime에도 독립된 프로세스로 동작되도록 해야 합니다.
{{% /alert %}}

Copyleft 라이선스 유형으로 분류할 수 있는 오픈소스 라이선스는 다음과 같습니다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`GNU General Public License v2.0`](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html) | [`GPL-2.0`](https://spdx.org/licenses/GPL-2.0-only.html) | [GPL-2.0 가이드](./gpl-2.0/) |
| [`GNU General Public License v3.0`](https://www.gnu.org/licenses/gpl-3.0-standalone.html) | [`GPL-3.0`](https://spdx.org/licenses/GPL-3.0-only.html)| [GPL-3.0 가이드](./gpl-3.0/)  |

## 5. Network Copyleft (SaaS 제공 시 주의)

AGPL (GNU Affero General Public License)은 일반 GPL의 "배포" 개념을 확장하여 네트워크를 통한 서비스 제공도 배포로 간주합니다.

{{% alert title="AGPL 주의사항" color="danger" %}}
AGPL로 공개된 오픈소스를 서버에서 실행하여 네트워크 서비스(SaaS, API 등)를 제공하는 경우, 바이너리를 배포하지 않더라도 다음 의무가 발생합니다:

1. AGPL 오픈소스의 소스 코드 공개
2. 함께 링크되어 동작하는 모든 소프트웨어의 소스 코드를 AGPL로 공개
3. 서비스 사용자가 소스 코드를 다운로드할 수 있는 방법 제공

이는 SK텔레콤의 핵심 서버 프로그램까지 공개해야 하는 위험이 있습니다.

따라서 AGPL 오픈소스는 SK텔레콤의 네트워크 서비스 개발 시 사용할 수 없습니다.

예외적으로 사용이 필요한 경우 OSPO에 문의하시기 바랍니다.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`GNU Affero General Public License v3.0`](https://www.gnu.org/licenses/agpl.txt) | [`AGPL-3.0`](https://spdx.org/licenses/AGPL-3.0-only.html) | [AGPL-3.0 가이드](./agpl-3.0/) |

## 6. Source Available (제한적 오픈소스)

Source Available 라이선스는 소스 코드가 공개되어 있지만, OSI (Open Source Initiative)가 승인한 오픈소스 라이선스가 아닙니다. 이들은 상업적 SaaS 제공 등에 제한을 가하고 있으며, 일반적인 오픈소스와는 다른 조건을 가지고 있습니다.

{{% alert title="Source Available vs 오픈소스" color="danger" %}}
SSPL, BSL, Elastic License 2.0은 OSI가 승인한 오픈소스가 아닙니다.

이들은 "Source Available" 라이선스로, 소스 코드는 공개되어 있지만 상업적 SaaS 제공 등에 제한이 있습니다. 일부는 일정 기간 후 진짜 오픈소스로 전환됩니다.

제품/서비스에 사용 전 반드시 OSPO에 문의하시기 바랍니다.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`Server Side Public License v1`](https://www.mongodb.com/licensing/server-side-public-license) | [`SSPL-1.0`](https://spdx.org/licenses/SSPL-1.0.html) | [SSPL 가이드](./sspl/) |
| [`Business Source License 1.1`](https://mariadb.com/bsl11/) | [`BUSL-1.1`](https://spdx.org/licenses/BUSL-1.1.html) | [BSL 가이드](./bsl/) |
| [`Elastic License 2.0`](https://www.elastic.co/licensing/elastic-license) | [`Elastic-2.0`](https://spdx.org/licenses/Elastic-2.0.html) | [Elastic-2.0 가이드](./elastic-2.0/) |

## 7. AI Model 라이선스

AI Model 라이선스는 AI 모델(가중치)에 적용되는 라이선스로, 일반 소프트웨어 라이선스와는 다른 특성을 가지고 있습니다. 이들은 모델의 사용, 수정, 배포는 허용하지만 특정 용도에 대한 제한을 포함하고 있습니다.

{{% alert title="AI Model 라이선스 주의사항" color="warning" %}}
AI Model 라이선스는 일반 소프트웨어 라이선스와 다른 특성을 가집니다:

- **용도 제한**: 군사, 범죄, 감시, 차별 등 특정 목적 사용 금지
- **책임 조항**: AI 생성 결과물에 대한 책임 명시 필요
- **데이터 출처**: 학습 데이터의 라이선스도 함께 확인 필요
- **상업적 제한**: 일부 라이선스는 대규모 상업적 사용 제한

AI 서비스 개발 시 반드시 OSPO에 문의하시기 바랍니다.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`CreativeML Open RAIL-M`](https://huggingface.co/spaces/CompVis/stable-diffusion-license) | [`CreativeML-OpenRAIL-M`](https://spdx.org/licenses/CreativeML-OpenRAIL-M.html) | [CreativeML 가이드](./creativeml/) |
| [`BigScience RAIL License v1.0`](https://bigscience.huggingface.co/blog/the-bigscience-rail-license) | [`BigScience-RAIL-1.0`](https://spdx.org/licenses/BigScience-RAIL-1.0.html) | [RAIL 가이드](./rail/) |
| [`Llama 2 Community License`](https://ai.meta.com/llama/license/) | `Llama-2` | [Llama 2 가이드](./llama-2/) |

## 8. 사용 제한 라이선스

### 8-1. 비상업용 (Non-Commercial)

연구, 학습만을 위해서라고 해도 SK텔레콤 내에서 사용한다면 상업적인 활동으로 간주될 수 있습니다. 따라서 비상업적으로만 사용할 수 있도록 제한하는 라이선스에 따라 공개된 오픈소스는 SK텔레콤에서 사용할 수 없습니다. 이러한 비상업용 (Non-Commercial) 라이선스는 다음과 같습니다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`Creative Commons Attribution Non Commercial 4.0 International`](https://creativecommons.org/licenses/by-nc/4.0/legalcode) | [`CC-BY-NC-4.0`](https://spdx.org/licenses/CC-BY-NC-4.0.html) |  |
| [`Creative Commons Attribution Non Commercial Share Alike 4.0 International`](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) | [`CC-BY-NC-SA-4.0`](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) |  |
| [`Creative Commons Attribution Non Commercial No Derivatives 4.0 International`](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode) | [`CC-BY-NC-ND-4.0`](https://spdx.org/licenses/CC-BY-NC-ND-4.0.html) |  |

### 8-2. 광고 조항 포함

BSD-4-Clause 라이선스는 오픈소스의 기능/활용을 언급하는 모든 광고에 특정 문구 ("This product includes software developed by the <organization>.")의 포함을 요구합니다. 이러한 "advertising clause"의 요구사항을 준수하는 것은 쉽지 않기 때문에 사용을 제한합니다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`BSD 4-Clause "Original" or "Old" License`](http://directory.fsf.org/wiki/License:BSD_4Clause) | [`BSD-4-Clause`](https://spdx.org/licenses/BSD-4-Clause.html) | [BSD-4-Clause 가이드](./bsd-4-clause/) |

이러한 라이선스 하의 오픈소스를 반드시 포함해야 하는 경우라면 OSPO에 포함할 수 있는 방법을 문의하시기 바랍니다.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)

## 9. 문서/콘텐츠 라이선스

Creative Commons 라이선스는 주로 문서, 이미지, 데이터셋 등의 콘텐츠에 사용되는 라이선스입니다. 이들은 소프트웨어 코드보다는 창작물에 적합한 라이선스입니다.

{{% alert title="소프트웨어 vs 문서/콘텐츠" color="info" %}}
Creative Commons 라이선스는 주로 문서, 이미지, 데이터셋, 콘텐츠에 사용됩니다. 소프트웨어 코드에는 적합하지 않으므로, 소프트웨어 개발 시에는 MIT, Apache-2.0 등의 소프트웨어 라이선스를 사용하시기 바랍니다.
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`Creative Commons Attribution 4.0 International`](https://creativecommons.org/licenses/by/4.0/) | [`CC-BY-4.0`](https://spdx.org/licenses/CC-BY-4.0.html)|  |
| [`Creative Commons Attribution Share Alike 4.0 International` ](https://creativecommons.org/licenses/by-sa/4.0/legalcode)| [`CC-BY-SA-4.0`](https://spdx.org/licenses/CC-BY-SA-4.0.html) |  |
| [`Creative Commons Attribution No Derivatives 4.0 International`](https://creativecommons.org/licenses/by-nd/4.0/legalcode) | [`CC-BY-ND-4.0`](https://spdx.org/licenses/CC-BY-ND-4.0.html) |  |

## 10. 이외 언급하지 않은 라이선스

위에서 분류되지 않은 라이선스가 적용된 오픈소스를 SK텔레콤의 제품에 사용하기 위해서는 사전 검토가 필요합니다. OSPO에 사용 가능 여부를 문의하시기 바랍니다.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)