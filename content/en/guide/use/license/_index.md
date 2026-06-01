---
title: "What Is an Open Source License?"
linkTitle: "Open Source License"
weight: 10
type: docs
description: >
  What is an open source license?
---

## What Is Open Source?
Open source refers to software whose source code, distributed through a licensing scheme, can be freely copied, modified, used, and redistributed. With open source, anyone can fix bugs or adapt the code to add features, and can participate in software development. In this way, open source provides developers with the right to distribute the program, the right to access the source code, and the right to modify the source code.

## Open Source Carries Legal Responsibilities Too!
Open source is widely used because, when leveraged well, it can reduce development cost and time. However, quite a few users are not well aware of the legal responsibilities of open source and the risks that come with them.

* Just like commercial software, to use open source you must comply with that open source's license. If you violate it, your right to use it is revoked, and if you have turned it into a product, you cannot sell that product.
* You may also face claims from the open source community, severely damaging your corporate image as a license-violating company.
* In the worst case, you could become involved in legal litigation, so it is important to know about open source in advance and prepare accordingly.
The legal responsibilities of open source differ depending on the type of open source license, so when using open source you must understand the legal responsibilities of each license.

## Software Intellectual Property Rights
To understand the legal risks of open source, you need to understand the basic concepts of intellectual property rights in software and of licenses, because an open source license is a type of software license.
The legal mechanisms that protect software — that is, the intellectual property rights related to software — include copyright, patent rights, trademark rights, and trade secrets.

### Copyright
Copyright is the right that a creator (author) acquires over their creation; it protects the result of the creation and arises at the same time as the creation.
Therefore, when a programmer develops software, copyright arises automatically, and that right is granted to the programmer or the company they belong to. A copyrighted work may not be copied, distributed, or modified by anyone without the copyright holder's permission.

### Patent
A patent is an exclusive and exclusionary right that an inventor (patent holder) holds over an invention.
Unlike copyright, a patent must be filed in a prescribed manner and only takes effect once it has passed examination and been registered. To use a patented technology, you must obtain the patent holder's permission.
Software that implements a patented method falls within the scope of the patent regardless of the programming language used.


|   | Copyright | Patent  |
| ------------- |:-------------:| :-----:|
| When the right arises | Arises at the same time as creation | Patent filing, examination, registration |
| Content of the right | Moral rights (right of publication, right of attribution, right to integrity)  <br />Economic rights (reproduction, adaptation, distribution, transmission)   |   Exclusive and exclusionary right; right to work the invention |
| Scope of effect | Substantial similarity of expression (code) | Identity of the idea (algorithm, function) |

## Software License
A rights holder who has an exclusive and exclusionary right over software may permit others to use or distribute that software. Simply put, a license is permission for others to use, copy, modify, distribute, and so on, one's own work.

* Typical commercial software requires a royalty in return.

## Open Source License
Just like ordinary commercial software, open source also has intellectual property rights such as copyright. Therefore, if you use it carelessly without the rights holder's permission, you may face litigation.
However, open source rights holders grant broad licenses so that many people can use the software freely.

For example, they grant users not only the right to use the software but also to copy and distribute it freely, and even provide the source code so that it can be modified freely. For this, an open source license that explicitly expresses these rights is required. Therefore, software to which no open source license applies is not open source, and no one other than the copyright holder may use, copy, modify, or distribute that software.


{{% alert title="Caution" color="warning" %}}
A point to be careful about here is that not every project published on GitHub is open source. GitHub's public projects are subject to GitHub's Terms of Service, under which others may view or fork your project but are granted no other rights. For a project to be open source, an open source license must be applied so that many people can freely use, modify, distribute, and contribute back to it.
{{% /alert %}}

{{% alert title="What If the Code Has No License?" color="warning" %}}
If a license is not specified for the code, the right to use that code still belongs solely to the copyright holder. Therefore, we have no right to use that code. We cannot include that code in the company's product or service. If the code is truly necessary, contact the code's author and make a request such as the following.

"We'd love to use this code in a project of ours and wanted to make sure that you are OK with it. Would you be willing to add an OSI-approved license like the MIT or the Apache License to the project so that we know this is really open source?"

Most authors will respond positively to this.
{{% /alert %}}

Open source licenses do not require a royalty like commercial software does; instead, they require a few obligations to be observed, such as providing the source code.

## Key Obligations
It is important to understand and comply with the obligations of open source. The general obligations of open source licenses are notice and source code disclosure.

{{% alert title="What If You Don't Redistribute?" color="warning" %}}
Note that most open source licenses impose obligations when you redistribute the open source. In other words, you only need to comply with obligations for open source included in software or models that are redistributed outside the company. For example, if you use open source only for testing purposes within the company, no obligations are imposed.
{{% /alert %}}

### Copyright Notice and License Notice
Most open source licenses require that information about the developers or contributors and about copyright be displayed in or included with the product, and they require the distributor to attach a copy of the relevant license so that users can clearly understand their rights regarding the open source.

~~~
e.g.) Apache License 2.0
 
4. a. You must give any other recipients of the Work or Derivative Works a copy of
this License;
 
4. c. You must retain, in the Source form of any Derivative Works that You distribute,
all copyright, patent, trademark, and attribution notices from the Source form of the
Work, excluding those notices that do not pertain to any part of the Derivative Works;
~~~

### Source Code Disclosure
Representatively, GPL-family licenses allow software to be distributed in binary form but require that the source code corresponding to the binary be disclosed together with it.

~~~
e.g.) GPL 2.0
 
3. You may copy and distribute the Program (or a work based on it, under Section 2) in
object code or executable form under the terms of Sections 1 and 2 above provided that
you also do one of the following:
 a) Accompany it with the complete corresponding machine-readable source code,
~~~

### Applying the Same License Upon Redistribution
The part that differs greatly depending on the license concerns 'Copyleft'. Copyleft licenses, represented by the GPL, require that when users modify software and wish to distribute it, the modified software also be distributed under the same license.
~~~
e.g.) GPL 2.0
 
2. You may modify your copy or copies of the Program or any portion of it, thus forming
a work based on the Program, and copy and distribute such modifications or work under
the terms of Section 1 above, provided that you also meet all of these conditions:
 b) You must cause any work that you distribute or publish, that in whole or in part
contains or is derived from the Program or any part thereof, to be licensed as a whole
at no charge to all third parties under the terms of this License.
~~~

{{% alert title="Next" color="success" %}}
The [OSI (Open Source Initiative)](https://opensource.org/) defines the minimum criteria for a license to qualify as open source ([Open Source Definition, OSD](https://opensource.org/osd)) and certifies open source licenses according to this definition. There are about 80 certified open source licenses. The obligations required by each license differ.

The obligations of each license and SK Telecom's restriction policy are explained on the following page.
* [Obligations by Open Source License](/en/guide/use/obligation)
{{% /alert %}}
