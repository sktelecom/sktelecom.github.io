---
title: "오픈소스 라이선스 별 의무사항"
linkTitle: "라이선스별 의무사항"
weight: 30
type: docs
description: >
  오픈소스 라이선스 별 의무사항
---

## 재배포하지 않는다면 자유롭게 사용 가능
먼저, 대부분의 오픈소스 라이선스는 준수해야 할 의무 사항을 '재배포'시 부여한다. 이 말은 오픈소스를 '재배포'하지 않는다면 고지, 소스 코드 공개 등의 의무사항이 발생하지 않고, 자유롭게 사용이 가능하다는 의미이다.


{{% alert title="재배포란?" color="warning" %}}
여기서 재배포란 오픈소스의 소스 코드 또는 바이너리의 복사본을 다른 사람에게 제공하는 행위를 의미한다. 앱스토어 배포, 판매, 3rd party 제공, 고객사 납품 등이 재배포에 해당한다. 사내 개발 환경 구축, 테스트 도구 등 사내 용도로만 오픈소스를 사용하는 경우는 재배포에 해당하지 않는다.
{{% /alert %}}


## 아무 조건 없이 사용 가능한 라이선스
CC0, Public Domain과 같이 아무런 제한 없이 무료로 사용할 수 있는 라이선스가 있다. ‌

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`Creative Commons Zero v1.0 Universal`](http://creativecommons.org/publicdomain/zero/1.0/) | [`CC0-1.0`](https://spdx.org/licenses/CC0-1.0.html)  |  |
| [`The Unlicense`](http://unlicense.org/) | [`Unlicense`](https://spdx.org/licenses/Unlicense.html) |  |


{{% alert title="Public Domain" color="warning" %}}
단, Public Domain이라고 선언된 소프트웨어라도 사례별로 법적 검토가 필요한 복잡한 문제가 내재되어 있을 수 있다. 사용하려는 코드가 Public Domain인지 확인이 필요하다면 OSPO<sub>Open Source Program Office</sub>에 문의하라.   
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

## 수월하게 사용 가능한 라이선스
Permissive License라고 분류할 수 있는 아래의 오픈소스 라이선스는 고지 의무를 요구한다. 오픈소스 라이선스의 고지 의무는 비교적 수월하게 준수할 수 있다. 

* 이와 같이 고지 의무를 요구하는 Permissive 라이선스 하의 오픈소스를 포함하는 소프트웨어를 배포할 경우, "저작권 표시", "라이선스 고지" 등의 의무를 준수해야 한다. (참고 : [저작권 표시 및 라이선스 고지](../license/#저작권-표시-및-라이선스-고지))
* SK텔레콤 오픈소스 컴플라이언스 프로세스를 통해 오픈소스 고지문을 발행하고 소프트웨어 배포 시 이를 동봉하여 고지 의무를 준수할 수 있다. 

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`Academic Free License v2.1`](http://web.archive.org/web/20060428203736/http://opensource.org/licenses/afl-2.1.php) | [`AFL-2.1`](https://spdx.org/licenses/AFL-2.1.html) |  |
| [`Academic Free License v3.0`](http://opensource.org/licenses/AFL-3.0) | [`AFL-3.0`](https://spdx.org/licenses/AFL-3.0.html)| | 
| [`Artistic License 1.0`](https://opensource.org/licenses/artistic-license-1.0) | [`Artistic-1.0`](https://spdx.org/licenses/Artistic-1.0.html) |  | 
| [`Artistic License 2.0`](http://opensource.org/licenses/artistic-license-2.0) | [`Artistic-2.0`](https://spdx.org/licenses/Artistic-2.0.html) |  | 
| [`Apache License 1.1` ](http://apache.org/licenses/LICENSE-1.1)| [`Apache-1.1` ](https://spdx.org/licenses/Apache-1.1.html)|  |
| [`Apache License 2.0`](https://www.apache.org/licenses/LICENSE-2.0) | [`Apache-2.0`](https://spdx.org/licenses/Apache-2.0.html) |  |
| [`Boost Software License 1.0`](http://www.boost.org/users/license.html) | [`BSL-1.0`](https://spdx.org/licenses/BSL-1.0.html)|  |
| [`BSD 2-Clause "Simplified" License`](https://opensource.org/licenses/bsd-license.php) | [`BSD-2-Clause` ](https://spdx.org/licenses/BSD-2-Clause.html)|  |
| [`BSD 3-Clause "New" or "Revised" License`](https://opensource.org/licenses/BSD-3-Clause) | [`BSD-3-Clause`](https://spdx.org/licenses/BSD-3-Clause.html) |  |
| [`BSD-2-Clause Plus Patent License`](https://opensource.org/licenses/BSDplusPatent) | [`BSD-2-Clause-Patent`](https://spdx.org/licenses/BSD-2-Clause-Patent.html)|  |
| [`Creative Commons Attribution 4.0 International`](https://creativecommons.org/licenses/by/4.0/) | [`CC-BY-4.0`](https://spdx.org/licenses/CC-BY-4.0.html)|  |
| [`JSON License`](https://www.json.org/license.html) | [`JSON`](https://spdx.org/licenses/JSON.html) |  |
| [`Freetype Project License`](http://freetype.sourceforge.net/FTL.TXT)) | [`FTL` ](https://spdx.org/licenses/FTL.html)|  |
| [`ISC License`](http://opensource.org/licenses/ISC)) | [`ISC`](https://spdx.org/licenses/ISC.html) |  |
| [`Independent JPEG Group License`](http://dev.w3.org/cvsweb/Amaya/libjpeg/Attic/README?rev=1.2) | [`IJG`](https://spdx.org/licenses/IJG.html) |  |
| [`libtiff License`](http://www.remotesensing.org/libtiff/misc.html) | [`libtiff`](https://spdx.org/licenses/libtiff.html) |  |
| [`Lucent Public License v1.02`](http://cm.bell-labs.com/plan9/license.html) | [`LPL-1.02`](https://spdx.org/licenses/LPL-1.02.html) |  |
| [`Microsoft Public License`](http://opensource.org/licenses/MS-PL) | [`MS-PL`](https://spdx.org/licenses/MS-PL.html) |  |
| [`MIT License`](http://opensource.org/licenses/mit-license.php) | [`MIT`](https://spdx.org/licenses/MIT.html) |  |
| [`X11 License`](http://www.xfree86.org/3.3.6/COPYRIGHT2.html#3)| [`X11`](https://spdx.org/licenses/X11.html) |  |
| [`CMU License`](https://web.archive.org/web/20190922104304/https://fedoraproject.org/wiki/Licensing:MIT?rd=Licensing/MIT#CMU_Style)| [`MIT-CMU` ](https://spdx.org/licenses/MIT-CMU.html)|  | 
| [`University of Illinois/NCSA Open Source License`](http://opensource.org/licenses/UoI-NCSA.php) | [`NCSA`](https://spdx.org/licenses/NCSA.html) |  | 
| [`OpenSSL License`](http://www.openssl.org/source/license.html)| [`OpenSSL`](https://spdx.org/licenses/OpenSSL.html) |  | 
| [`PHP License v3.0`](http://www.php.net/license/3_0.txt) | [`PHP-3.0`](https://spdx.org/licenses/PHP-3.0.html) |  | 
| [`PostgreSQL License`](http://www.postgresql.org/about/licence) | [`PostgreSQL`](https://spdx.org/licenses/PostgreSQL.html) |  | 
| [`TCP Wrappers License`](http://www.blackberry.com/support/blackberrypresenter/opensourcefiles/LICENSE-BSD-LIBWRAP.TXT)| [`TCP-wrappers`](https://spdx.org/licenses/TCP-wrappers.html) |  | 
| [`Python Software Foundation License 2.0`](http://www.python.org/download/releases/2.3.2/license/) | [`PSF-2.0`](https://spdx.org/licenses/PSF-2.0.html) |  | 
| [`Unicode License Agreement - Data Files and Software (2016)`](http://www.unicode.org/copyright.html#Exhibit1) | [`Unicode-DFS-2016`](https://spdx.org/licenses/Unicode-DFS-2016.html) |  | 
| [`Universal Permissive License v1.0`](http://opensource.org/licenses/UPL)) | [`UPL-1.0`](https://spdx.org/licenses/UPL-1.0.html) |  | 
| [`W3C Software Notice and License (2002-12-31)`](http://opensource.org/licenses/W3C.php) | [`W3C`](https://spdx.org/licenses/W3C.html) |  | 
| [`X.Net License`](http://opensource.org/licenses/xnet.php) | [`Xnet`](https://spdx.org/licenses/Xnet.html) |  | 
| [`Zend License v2.0`](http://www.zend.com/license/2_00.txt) | [`Zend-2.0`](https://spdx.org/licenses/Zend-2.0.html) |  | 
| [`zlib License`](http://opensource.org/licenses/zlib-license.php)| [`zlib`](https://spdx.org/licenses/Zlib.html) |  | 
| [`Zope Public License 2.0`](http://opensource.org/licenses/zpl.php)| [`ZPL-2.0`](https://spdx.org/licenses/ZPL-2.0.html) |  | 


## 주의가 필요한 라이선스
### Copyleft 라이선스 유형
GPL(GNU General Public License)은 오픈소스를 재배포 시 소스 코드 공개를 요구한다. 오픈소스 자체의 소스 코드 뿐만 아니라 결합한 소스 코드까지 함께 동일한 라이선스 조건으로 공개할 것을 요구해서 Copyleft 성격의 라이선스라고도 한다. Copyleft 라이선스 유형은 오픈소스 라이선스 중에 요구하는 의무사항이 가장 많은 라이선스 유형이기 때문에 이 유형의 라이선스로 배포되는 오픈소스는 사용 시 주의가 필요하다.


{{% alert title="자사 코드 분리 방법" color="warning" %}}
대표적인 의무 사항은 이 라이선스로 배포되는 오픈소스를 제품에 포함하여 배포하려면 해당 오픈소스의 소스 코드의 공개가 필요하다. 또한 이 오픈소스와 결합하는 소스 코드까지도 동일한 오픈소스 라이선스를 적용하여 공개해야 한다. ‌

따라서, **Copyleft 라이선스 유형의 라이선스가 적용된 오픈소스는 SK텔레콤이 배포하는 제품에 포함 시 주의해야 한다**.

<span style="color:red">이러한 오픈소스는 설계 단계에서부터 Build 시 자사 소프트웨어와 통합되지 않고 Runtime에도 독립된 프로세스로 동작되도록 해야 한다.</span>
{{% /alert %}}

Copyleft 라이선스 유형으로 분류할 수 있는 오픈소스 라이선스는 다음과 같다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`GNU General Public License v2.0`](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html) | [`GPL-2.0`](https://spdx.org/licenses/GPL-2.0-only.html) | [GPL-2.0 가이드](./gpl-2.0/) |
| [`GNU General Public License v3.0`](https://www.gnu.org/licenses/gpl-3.0-standalone.html) | [`GPL-3.0`](https://spdx.org/licenses/GPL-3.0-only.html)| [GPL-3.0 가이드](./gpl-3.0/)  |
| [`Creative Commons Attribution Share Alike 4.0 International` ](https://creativecommons.org/licenses/by-sa/4.0/legalcode)| [`CC-BY-SA-4.0`](https://spdx.org/licenses/CC-BY-SA-4.0.html) |  |
| [`Creative Commons Attribution No Derivatives 4.0 International`](https://creativecommons.org/licenses/by-nd/4.0/legalcode) | [`CC-BY-ND-4.0`](https://spdx.org/licenses/CC-BY-ND-4.0.html) |  |
| [`Open Software License 3.0`](http://opensource.org/licenses/osl-2.1.php) | [`OSL-3.0`](https://spdx.org/licenses/OSL-3.0.html) |  |
| [`Q Public License 1.0`](http://opensource.org/licenses/qtpl.php) | [`QPL-1.0`](https://spdx.org/licenses/QPL-1.0.html) |  |
| [`Sleepycat License`](http://opensource.org/licenses/sleepycat.php) | [`Sleepycat`](https://spdx.org/licenses/Sleepycat.html) |  |

{{% alert title="주의 : GPL/LGPL-3.0 설치정보 제공 의무" color="danger" %}}
GPL-3.0/LGPL-3.0하의 오픈소스가 설치된 사용자 제품(User Product)을 배포하기 위해서는 소스 코드 뿐만 아니라 설치 정보를 함께 제공해야 한다. 이는 기업이 준수하기 어려운 조건이기 때문에 <span style="color:red">일반적으로 GPL-3.0/LGPL-3.0의 오픈소스는 사용자 제품(User Product) 개발 시 사용할 수 없음에 주의</span>하라. 
* 사용자 제품(User Product) : 전자 기기와 같은 embedded device
* 설치 정보(Installation Information) : 사용자가 소소 코드를 빌드하여 다시 제품에 설치하기 위해 필요한 모든 정보 및 방법
{{% /alert %}}


같이 소스 코드 공개 의무를 요구하는 Copyleft 라이선스 하의 오픈소스를 포함하는 소프트웨어를 배포할 경우, 사용자에게 소스 코드를 직접 제공하거나, 사용자가 요청시 소스 코드를 제공하겠다는 서면 약정서를 제공해야 한다. 이에 대한 세부 절차 및 방법은 다음 가이드를 참고하라. : _internal_link_

### Weak Copyleft 유형
Weak Copyleft 유형의 라이선스는 이와 같이 소스 코드 공개는 요구하지만, 공개 범위가 Copyleft 유형의 라이선스에 비해 약하다는 특성이 있다. 

{{% alert title="LGPL Library는 Dynamic Link하여 사용" color="danger" %}}
LGPL (Lesser GPL)도 역시 재배포 시 소스 코드 공개를 요구하는 등 GPL과 동일한 조건을 요구한다. 단, Library 형태의 LGPL하의 오픈소스를 Link 형태로 결합할 경우, LGPL Library 부분만 소스 코드를 공개하면 되고, 결합하는 코드는 공개 의무가 없다는 점이 GPL과 다르다. 

LGPL이 적용된 컴포넌트를 [dynamically-linked](https://opensource.google/docs/thirdparty/licenses/#LinkingRequirements) 형태로 사용할 경우, <span style="color:red">자사 코드를 공개하지 않는 방식</span>으로 사용할 수 있다.
{{% /alert %}}

Weak Copyleft 라이선스 유형으로 분류할 수 있는 오픈소스 라이선스는 다음과 같다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`GNU Lesser General Public License v2.1`](https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html) | [`LGPL-2.1`](https://spdx.org/licenses/LGPL-2.1-only.html) | [LGPL-2.1 가이드](./lgpl-2.1/)  |
| [`GNU Lesser General Public License v3.0`](https://www.gnu.org/licenses/lgpl-3.0-standalone.html) | [`LGPL-3.0`](https://spdx.org/licenses/LGPL-3.0-only.html)| [LGPL-3.0 가이드](./lgpl-3.0/)  |
| [`Common Development and Distribution License 1.0`](http://opensource.org/licenses/cddl1.php) | [`CDDL-1.0`](https://spdx.org/licenses/CDDL-1.0.html) |  |
| [`Common Public License 1.0`](http://opensource.org/licenses/cpl1.0.php) | [`CPL-1.0`](https://spdx.org/licenses/CPL-1.0.html) |  |
| [`Eclipse Public License 1.0`](http://opensource.org/licenses/eclipse-1.0.php) | [`EPL-1.0`](https://spdx.org/licenses/EPL-1.0.html) |  |
| [`Eclipse Public License 2.0`](https://opensource.org/licenses/EPL-2.0) | [`EPL-2.0`](https://spdx.org/licenses/EPL-2.0.html) |  |
| [`IBM Public License v1.0`](http://opensource.org/licenses/ibmpl.php) | [`IPL-1.0`](https://spdx.org/licenses/IPL-1.0.html)|  |
| [`Mozilla Public License 1.1`](http://opensource.org/licenses/mozilla1.1.php) | [`MPL-1.1`](https://spdx.org/licenses/MPL-1.1.html) |  |
| [`Mozilla Public License 2.0`](http://opensource.org/licenses/MPL-2.0) | [`MPL-2.0`](https://spdx.org/licenses/MPL-2.0.html) |  |
| [`Apple Public Source License 2.0`](http://opensource.org/licenses/apsl-2.0.php) | [`APSL-2.0`](https://spdx.org/licenses/APSL-2.0.html) |  |
| [`Ruby License`](http://www.ruby-lang.org/en/LICENSE.txt) | [`Ruby` ](https://spdx.org/licenses/Ruby.html)|  |


## 사용 제한 라이선스
다음의 라이선스는 SK텔레콤의 제품/서비스에 사용하기에 적합하지 않은 조건을 포함하고 있다. 따라서, 이러한 라이선스 하의 오픈소스는 사용하지 말아야 한다. 

### 비상업용 라이선스
연구, 학습만을 위해서라고 해도 SK텔레콤 내에서 사용한다면 상업적인 활동으로 간주될 수 있다. 따라서 비상업적으로만 사용할 수 있도록 제한하는 라이선스에 따라 공개된 오픈소스는 SK텔레콤에서 사용할 수 없다. 이러한 비상업용 (Non-Commercial) 라이선스는 다음과 같다.‌

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`Creative Commons Attribution Non Commercial 4.0 International`](https://creativecommons.org/licenses/by-nc/4.0/legalcode) | [`CC-BY-NC-4.0`](https://spdx.org/licenses/CC-BY-NC-4.0.html) |  |
| [`Creative Commons Attribution Non Commercial Share Alike 4.0 International`](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) | [`CC-BY-NC-SA-4.0`](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) |  |
| [`Creative Commons Attribution Non Commercial No Derivatives 4.0 International`](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode) | [`CC-BY-NC-ND-4.0`](https://spdx.org/licenses/CC-BY-NC-ND-4.0.html) |  |


### Network 서비스 제한 라이선스
AGPL, SSPL은 Network 서비스도 배포로 간주하여 의무사항 준수를 요구하는 조항을 포함한다. 이에 따라 Network 서비스를 제공하는 서버에 AGPL로 공개된 오픈소스가 포함되어 있다면, 소프트웨어를 배포하지 않아도, AGPL 오픈소스 뿐만 아니라 함께 링크되어 동작하는 다른 소프트웨어의 소스코드 까지 AGPL로 공개해야 하는 의무가 발생한다. 이 경우, SK텔레콤의 핵심 서버 프로그램까지도 AGPL로 공개해야 하는 위험이 있다. 따라서, SK텔레콤의 제품 및 서비스 개발 시, AGPL 및 SSPL 등의 오픈소스 라이선스가 적용된 오픈소스는 사용할 수 없다. 

이러한 Network 서비스 시 조건을 부여하는 라이선스는 다음과 같다.

| Full name | [Identifier](https://spdx.org/licenses/) | 사용 사례별 가이드 |
|---|:---|:---:|
| [`GNU Affero General Public License v3.0`](https://www.gnu.org/licenses/agpl.txt) | [`AGPL-3.0`](https://spdx.org/licenses/AGPL-3.0-only.html) | [AGPL-3.0 가이드](./agpl-3.0/) |
| [`Server Side Public License, v 1`](https://www.mongodb.com/licensing/server-side-public-license) | [`SSPL-1.0`](https://spdx.org/licenses/SSPL-1.0.html) |  |

* AGPL (GNU Affero General Public License)
* SSPL (Server Side Public License)

이러한 라이선스 하의 오픈소스를 반드시 포함해야 하는 경우라면 OSPO<sub>Open Source Program Office</sub>에 포함할 수 있는 방법을 문의하라. : [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)

### 이외 언급하지 않은 라이선스

위에서 분류되지 않은 라이선스가 적용된 오픈소스를 SK텔레콤의 제품에 사용하기 위해서는 사전 검토가 필요하다. OSPO<sub>Open Source Program Office</sub>에 사용 가능 여부를 문의하라. : [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)