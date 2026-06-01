---
title: "Obligations by Open Source License"
linkTitle: "Obligations by License"
weight: 30
type: docs
description: >
  Obligations by open source license
---

## Free to Use If Not Redistributed

First, most open source licenses impose obligations only upon 'redistribution'. In other words, if you do not 'redistribute' the open source, obligations such as notice and source code disclosure do not arise, so you can use it freely.

{{% alert title="What Is Redistribution?" color="warning" %}}
Here, redistribution means the act of providing a copy of the source code or binary of open source to another person. App store distribution, sale, provision to a 3rd party, delivery to a client company, and the like constitute redistribution. Using open source only for internal purposes — such as building an internal development environment or as a testing tool — does not constitute redistribution.
{{% /alert %}}

## 1. Unrestricted Licenses (Public Domain)

There are licenses, such as CC0 and Public Domain, that can be used for free without any restrictions.

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`Creative Commons Zero v1.0 Universal`](http://creativecommons.org/publicdomain/zero/1.0/) | [`CC0-1.0`](https://spdx.org/licenses/CC0-1.0.html)  |  |
| [`The Unlicense`](http://unlicense.org/) | [`Unlicense`](https://spdx.org/licenses/Unlicense.html) |  |

{{% alert title="Public Domain" color="warning" %}}
Note that even software declared to be Public Domain may have complex underlying issues that require case-by-case legal review. If you need to confirm whether the code you intend to use is Public Domain, please contact the OSPO.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

## 2. Permissive Licenses (Easy to Use)

Open source licenses that can be classified as Permissive Licenses require notice obligations. The notice obligations of open source licenses are relatively easy to comply with.

When distributing software that includes open source under a Permissive license that requires notice obligations in this way, you must comply with obligations such as "copyright notice" and "license notice." (Reference: [Copyright Notice and License Notice](../license/#copyright-notice-and-license-notice))

Through the SK Telecom open source compliance process, you can issue an open source notice and enclose it when distributing software to fulfill the notice obligation.

### 2-1. Major Permissive Licenses

The following are the Permissive licenses most frequently used in practice, with use-case guides provided.

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`MIT License`](http://opensource.org/licenses/mit-license.php) | [`MIT`](https://spdx.org/licenses/MIT.html) | [MIT Guide](./mit/) |
| [`Apache License 2.0`](https://www.apache.org/licenses/LICENSE-2.0) | [`Apache-2.0`](https://spdx.org/licenses/Apache-2.0.html) | [Apache-2.0 Guide](./apache-2.0/) |
| [`BSD 2-Clause "Simplified" License`](https://opensource.org/licenses/bsd-license.php) | [`BSD-2-Clause` ](https://spdx.org/licenses/BSD-2-Clause.html)| [BSD-2-Clause Guide](./bsd-2-clause/) |
| [`BSD 3-Clause "New" or "Revised" License`](https://opensource.org/licenses/BSD-3-Clause) | [`BSD-3-Clause`](https://spdx.org/licenses/BSD-3-Clause.html) | [BSD-3-Clause Guide](./bsd-3-clause/) |
| [`ISC License`](http://opensource.org/licenses/ISC) | [`ISC`](https://spdx.org/licenses/ISC.html) |  |
| [`PostgreSQL License`](http://www.postgresql.org/about/licence) | [`PostgreSQL`](https://spdx.org/licenses/PostgreSQL.html) |  |
| [`zlib License`](http://opensource.org/licenses/zlib-license.php)| [`zlib`](https://spdx.org/licenses/Zlib.html) |  |
| [`PHP License v3.0`](http://www.php.net/license/3_0.txt) | [`PHP-3.0`](https://spdx.org/licenses/PHP-3.0.html) |  |
| [`Python Software Foundation License 2.0`](http://www.python.org/download/releases/2.3.2/license/) | [`PSF-2.0`](https://spdx.org/licenses/PSF-2.0.html) |  |
| [`Universal Permissive License v1.0`](http://opensource.org/licenses/UPL) | [`UPL-1.0`](https://spdx.org/licenses/UPL-1.0.html) |  |
| [`W3C Software Notice and License (2002-12-31)`](http://opensource.org/licenses/W3C.php) | [`W3C`](https://spdx.org/licenses/W3C.html) |  |

### 2-2. Other Permissive Licenses

In addition, there are other Permissive licenses such as those below. These too can be used freely as long as you comply with the notice obligations.

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

## 3. Weak Copyleft (Conditionally Usable)

Weak Copyleft type licenses require source code disclosure, but have the characteristic that the scope of disclosure is more limited than that of Copyleft type licenses.

{{% alert title="Use LGPL Libraries via Dynamic Linking" color="danger" %}}
The LGPL (Lesser GPL) also requires the same conditions as the GPL, such as source code disclosure upon redistribution. However, it differs from the GPL in that, when combining LGPL open source in library form via linking, you only need to disclose the source code of the LGPL library portion, and the code that links to it has no disclosure obligation.

If you use an LGPL-licensed component in a [dynamically-linked](https://opensource.google/docs/thirdparty/licenses/#LinkingRequirements) form, you can use it without disclosing your own code.
{{% /alert %}}

The open source licenses that can be classified as Weak Copyleft type licenses are as follows.

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`GNU Lesser General Public License v2.1`](https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html) | [`LGPL-2.1`](https://spdx.org/licenses/LGPL-2.1-only.html) | [LGPL-2.1 Guide](./lgpl-2.1/)  |
| [`GNU Lesser General Public License v3.0`](https://www.gnu.org/licenses/lgpl-3.0-standalone.html) | [`LGPL-3.0`](https://spdx.org/licenses/LGPL-3.0-only.html)| [LGPL-3.0 Guide](./lgpl-3.0/)  |
| [`Mozilla Public License 2.0`](http://opensource.org/licenses/MPL-2.0) | [`MPL-2.0`](https://spdx.org/licenses/MPL-2.0.html) | [MPL-2.0 Guide](./mpl-2.0/) |
| [`Mozilla Public License 1.1`](http://opensource.org/licenses/mozilla1.1.php) | [`MPL-1.1`](https://spdx.org/licenses/MPL-1.1.html) |  |
| [`Eclipse Public License 2.0`](https://opensource.org/licenses/EPL-2.0) | [`EPL-2.0`](https://spdx.org/licenses/EPL-2.0.html) | [EPL-2.0 Guide](./epl-2.0/) |
| [`Eclipse Public License 1.0`](http://opensource.org/licenses/eclipse-1.0.php) | [`EPL-1.0`](https://spdx.org/licenses/EPL-1.0.html) |  |
| [`Common Development and Distribution License 1.0`](http://opensource.org/licenses/cddl1.php) | [`CDDL-1.0`](https://spdx.org/licenses/CDDL-1.0.html) | [CDDL-1.0 Guide](./cddl-1.0/) |
| [`Common Public License 1.0`](http://opensource.org/licenses/cpl1.0.php) | [`CPL-1.0`](https://spdx.org/licenses/CPL-1.0.html) |  |
| [`IBM Public License v1.0`](http://opensource.org/licenses/ibmpl.php) | [`IPL-1.0`](https://spdx.org/licenses/IPL-1.0.html)|  |
| [`Apple Public Source License 2.0`](http://opensource.org/licenses/apsl-2.0.php) | [`APSL-2.0`](https://spdx.org/licenses/APSL-2.0.html) |  |
| [`Ruby License`](http://www.ruby-lang.org/en/LICENSE.txt) | [`Ruby` ](https://spdx.org/licenses/Ruby.html)|  |

{{% alert title="Caution: GPL/LGPL-3.0 Installation Information Obligation" color="danger" %}}
To distribute a User Product on which open source under GPL-3.0/LGPL-3.0 is installed, you must provide not only the source code but also the installation information. Because this is a condition that is difficult for a company to comply with, note that GPL-3.0/LGPL-3.0 open source generally cannot be used when developing a User Product.
* User Product: an embedded device such as an electronic device
* Installation Information: all information and methods needed for a user to build the source code and install it back onto the product
{{% /alert %}}

When distributing software that includes open source under a Copyleft license, you must either provide the source code directly to the user or provide a written offer to supply the source code upon the user's request.

## 4. Copyleft (Use with Caution)

The GPL (GNU General Public License) requires source code disclosure when redistributing open source. Because it requires that not only the open source's own source code but also any combined source code be disclosed together under the same license terms, it is also called a Copyleft-type license. Since the Copyleft license type imposes the most obligations among open source licenses, open source distributed under this type of license requires caution when used.

{{% alert title="How to Separate Your Own Code" color="warning" %}}
A representative obligation is that, to include open source distributed under this license in a product and distribute it, the source code of that open source must be disclosed. Furthermore, even the source code combined with this open source must be disclosed under the same open source license.

Therefore, when including open source to which a Copyleft-type license applies in a product distributed by SK Telecom, you must exercise caution. Such open source must be designed from the design stage so that it is not integrated with your own software at build time and operates as an independent process at runtime as well.
{{% /alert %}}

The open source licenses that can be classified as Copyleft type licenses are as follows.

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`GNU General Public License v2.0`](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html) | [`GPL-2.0`](https://spdx.org/licenses/GPL-2.0-only.html) | [GPL-2.0 Guide](./gpl-2.0/) |
| [`GNU General Public License v3.0`](https://www.gnu.org/licenses/gpl-3.0-standalone.html) | [`GPL-3.0`](https://spdx.org/licenses/GPL-3.0-only.html)| [GPL-3.0 Guide](./gpl-3.0/)  |

## 5. Network Copyleft (Caution When Providing SaaS)

The AGPL (GNU Affero General Public License) extends the "distribution" concept of the ordinary GPL to treat the provision of a service over a network as distribution as well.

{{% alert title="AGPL Cautions" color="danger" %}}
If you run AGPL-licensed open source on a server to provide a network service (SaaS, API, etc.), the following obligations arise even if you do not distribute a binary:

1. Disclose the source code of the AGPL open source
2. Disclose, under the AGPL, the source code of all software that is linked and operates together with it
3. Provide a means for service users to download the source code

This carries the risk of having to disclose even SK Telecom's core server programs.

Therefore, AGPL open source cannot be used when developing SK Telecom's network services.

If you exceptionally need to use it, please contact the OSPO.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`GNU Affero General Public License v3.0`](https://www.gnu.org/licenses/agpl.txt) | [`AGPL-3.0`](https://spdx.org/licenses/AGPL-3.0-only.html) | [AGPL-3.0 Guide](./agpl-3.0/) |

## 6. Source Available (Restricted Open Source)

A Source Available license is one whose source code is publicly available but which is not an open source license approved by the OSI (Open Source Initiative). These place restrictions on things like commercial SaaS offerings and have conditions different from ordinary open source.

{{% alert title="Source Available vs Open Source" color="danger" %}}
SSPL, BSL, and Elastic License 2.0 are not OSI-approved open source.

These are "Source Available" licenses; their source code is publicly available, but there are restrictions on things like commercial SaaS offerings. Some convert to true open source after a certain period.

Be sure to contact the OSPO before using them in a product/service.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`Server Side Public License v1`](https://www.mongodb.com/licensing/server-side-public-license) | [`SSPL-1.0`](https://spdx.org/licenses/SSPL-1.0.html) | [SSPL Guide](./sspl/) |
| [`Business Source License 1.1`](https://mariadb.com/bsl11/) | [`BUSL-1.1`](https://spdx.org/licenses/BUSL-1.1.html) | [BSL Guide](./bsl/) |
| [`Elastic License 2.0`](https://www.elastic.co/licensing/elastic-license) | [`Elastic-2.0`](https://spdx.org/licenses/Elastic-2.0.html) | [Elastic-2.0 Guide](./elastic-2.0/) |

## 7. AI Model Licenses

AI Model licenses are licenses applied to AI models (weights) and have characteristics different from ordinary software licenses. They allow use, modification, and distribution of the model but include restrictions on specific uses.

{{% alert title="AI Model License Cautions" color="warning" %}}
AI Model licenses have characteristics different from ordinary software licenses:

- **Use restrictions**: Prohibit use for specific purposes such as military, criminal, surveillance, and discriminatory uses
- **Liability clauses**: Require clear statements of responsibility for AI-generated outputs
- **Data provenance**: Require checking the license of the training data as well
- **Commercial restrictions**: Some licenses restrict large-scale commercial use

Be sure to contact the OSPO when developing AI services.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`CreativeML Open RAIL-M`](https://huggingface.co/spaces/CompVis/stable-diffusion-license) | [`CreativeML-OpenRAIL-M`](https://spdx.org/licenses/CreativeML-OpenRAIL-M.html) | [CreativeML Guide](./creativeml/) |
| [`BigScience RAIL License v1.0`](https://bigscience.huggingface.co/blog/the-bigscience-rail-license) | [`BigScience-RAIL-1.0`](https://spdx.org/licenses/BigScience-RAIL-1.0.html) | [RAIL Guide](./rail/) |
| [`Llama 2 Community License`](https://ai.meta.com/llama/license/) | `Llama-2` | [Llama 2 Guide](./llama-2/) |

## 8. Use-Restricted Licenses

### 8-1. Non-Commercial

Even for research or learning purposes only, use within SK Telecom may be regarded as a commercial activity. Therefore, open source released under a license that restricts use to non-commercial purposes only cannot be used at SK Telecom. Such Non-Commercial licenses are as follows.

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`Creative Commons Attribution Non Commercial 4.0 International`](https://creativecommons.org/licenses/by-nc/4.0/legalcode) | [`CC-BY-NC-4.0`](https://spdx.org/licenses/CC-BY-NC-4.0.html) |  |
| [`Creative Commons Attribution Non Commercial Share Alike 4.0 International`](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) | [`CC-BY-NC-SA-4.0`](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) |  |
| [`Creative Commons Attribution Non Commercial No Derivatives 4.0 International`](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode) | [`CC-BY-NC-ND-4.0`](https://spdx.org/licenses/CC-BY-NC-ND-4.0.html) |  |

### 8-2. Advertising Clause Included

The BSD-4-Clause license requires that a specific phrase ("This product includes software developed by the <organization>.") be included in all advertising that mentions the features/use of the open source. Because complying with this "advertising clause" requirement is not easy, its use is restricted.

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`BSD 4-Clause "Original" or "Old" License`](http://directory.fsf.org/wiki/License:BSD_4Clause) | [`BSD-4-Clause`](https://spdx.org/licenses/BSD-4-Clause.html) | [BSD-4-Clause Guide](./bsd-4-clause/) |

If you absolutely must include open source under such a license, please ask the OSPO how it can be included.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)

## 9. Document/Content Licenses

Creative Commons licenses are licenses used mainly for content such as documents, images, and datasets. They are licenses better suited to creative works than to software code.

{{% alert title="Software vs Document/Content" color="info" %}}
Creative Commons licenses are used mainly for documents, images, datasets, and content. They are not suitable for software code, so when developing software, please use software licenses such as MIT and Apache-2.0.
{{% /alert %}}

| Full name | [Identifier](https://spdx.org/licenses/) | Use-Case Guides |
|---|:---|:---:|
| [`Creative Commons Attribution 4.0 International`](https://creativecommons.org/licenses/by/4.0/) | [`CC-BY-4.0`](https://spdx.org/licenses/CC-BY-4.0.html)|  |
| [`Creative Commons Attribution Share Alike 4.0 International` ](https://creativecommons.org/licenses/by-sa/4.0/legalcode)| [`CC-BY-SA-4.0`](https://spdx.org/licenses/CC-BY-SA-4.0.html) |  |
| [`Creative Commons Attribution No Derivatives 4.0 International`](https://creativecommons.org/licenses/by-nd/4.0/legalcode) | [`CC-BY-ND-4.0`](https://spdx.org/licenses/CC-BY-ND-4.0.html) |  |

## 10. Other Licenses Not Mentioned

To use open source under a license not classified above in an SK Telecom product, prior review is required. Please ask the OSPO whether it can be used.
* [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
