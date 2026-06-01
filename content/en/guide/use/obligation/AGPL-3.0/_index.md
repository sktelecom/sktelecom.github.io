---
title: "AGPL-3.0 Guide"
linkTitle: "AGPL-3.0"
weight: 10
type: docs
description: "The [Free Software Foundation](http://www.fsf.org/) released [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html) in 2007. AGPL-3.0 is a license that adds a clause to GPL-3.0 requiring the source code of software that interacts over a network to be disclosed as well."
---

SPDX Identifier: `AGPL-3.0-only` or `AGPL-3.0-or-later`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form  
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact.  
>   - Obligations upon modification  
>     - Apply AGPL-3.0 to the added/modified portions.  
>     - Include a notice of the modifications. (e.g., include the modification date and modified content as comments)  
> - Redistribution in binary form  
>   - Notice obligation: Generate an open source notice and enclose it when redistributing the binary.  
>   - Obligations upon modification  
>     - Apply AGPL-3.0 to the added/modified portions.  
>     - Include a notice of the modifications. (e.g., include the modification date and modified content in the open source notice)   
>   - Source code provision obligation  
>     - <span class="-text-warning">Provide the **entire** source code corresponding to the binary.</span>
>       - AGPL-3.0 requires that derivative works also be licensed under AGPL-3.0 and have their source code disclosed.
>     - Provide a <span class="-text-warning">build environment</span> that allows binary users to build an identical binary from the disclosed source code.  
>   - **Installation information obligation: If the binary is distributed together with a User Product, provide the Installation Information.**  
> - <span class="-text-warning">**Remote network interaction**</span>
>   - If a modified version is used to interact with remote users over a network, the source code of the modified version must be made available to those remote users.  

</div>
{{% /alert %}}

{{% alert title="Copyleft Caution" color="warning" %}}
AGPL-3.0 is the strongest Copyleft license. The obligation to disclose source code arises not only when distributing binaries but also when providing SaaS over a network. Particular caution is required when developing commercial software and cloud services.
{{% /alert %}}

## License Statement in Source Code

Open source under the AGPL-3.0 license generally carries the following statement at the top of the source code.

~~~
Copyright (C) <year> <name of author>
 
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
 
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.
 
You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the AGPL-3.0 license in source form, observe the following.

#### 1-1 Notice Obligation
* Provide the copyright notice
* Provide the warranty disclaimer
* Provide a copy of the license

In other words, redistribute while keeping the copyright/license information stated in the source code intact.

{{% alert title="Obligations upon Modification" color="success" %}}
If you add to or modify part of the open source code, observe the following.

1. Apply AGPL-3.0 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and modified content as comments)

{{% /alert %}}

### Case 2. Redistribution in Binary Form

When building open source under the AGPL-3.0 license and redistributing it in binary form only, observe the following.

#### 2-1 Notice Obligation
* Provide the copyright notice
* Provide the warranty disclaimer
* Provide a copy of the license

Generate an open source notice containing the above and enclose it when redistributing the binary.

{{% alert title="Obligations upon Modification" color="success" %}}
If you add to or modify part of the open source code, observe the following.

1. Apply AGPL-3.0 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and modified content in the open source notice)

{{% /alert %}}

#### 2-2 Source Code Provision Obligation

Provide the source code corresponding to the binary. In doing so, observe the following.

1. AGPL-3.0 requires that derivative works also be licensed under AGPL-3.0 and have their source code disclosed. Referring to the content below, disclose the source code of the AGPL-3.0 open source and its derivative works.

{{% alert title="Scope of AGPL-3.0 Derivative Works" color="warning" %}}
The general scope of AGPL-3.0 derivative works is as follows.

* Modified code
* A Module running in the same process as the AGPL program
* A Library linked with the AGPL program
* A Class that inherits from the AGPL program

The following are not regarded as GPL derivative works.

* An independent program that resides together on a medium such as a CD but does not interoperate with the AGPL program at all (#[MereAggregation](https://www.gnu.org/licenses/gpl-faq.en.html#MereAggregation))
* A program separate from the AGPL program that communicates with it via Pipe, Socket, IPC, or Command Line Arguments

{{% /alert %}}

2. Provide a build environment that allows binary users to build an identical binary from the disclosed source code. This includes the following.
   * Tool chain information
   * Build scripts
   * Build instructions (README)

Instead of the source code, you may provide a Written Offer. It must include the following statements.

1. The Written Offer is valid for three years after the product is sold.
2. It is offered to anyone.
3. No fee is charged. (excluding the cost incurred for delivering the source)

{{% alert color="warning" %}}
If you later receive a request, based on the Written Offer, to provide source code, you must provide the source code corresponding to the binary mentioned above. Therefore, the company must retain the source code for at least three years after the product is sold.
{{% /alert %}}

#### 2-3 Installation Information Obligation

If the binary is distributed together with a User Product, provide the Installation Information.

- User Product: An embedded device such as an electronic device
- Installation Information: All information and methods the user needs to build the source code and reinstall it on the product

{{% alert title="Usage Restriction" color="warning" %}}
For most User Products, providing Installation Information is impossible for security reasons. Therefore, software distributed as a User Product should not use AGPL-3.0 open source.
{{% /alert %}}

### Case 3. Remote Network Interaction

If you (1) modify open source under the AGPL-3.0 license and (2) the modified version interacts with remote users over a network:

- You must provide a network server from which remote users can download the source code of the modified version.
- The source code here is the same in scope as that required in "2-2. Source Code Provision Obligation" above.

{{% alert title="Caution When Providing SaaS" color="warning" %}}
Even when developing a network server (SaaS, cloud service) that does not distribute binaries, using AGPL-3.0 open source requires disclosure of the source code, so it should be avoided whenever possible.
{{% /alert %}}

## Differences from GPL-3.0

AGPL-3.0 is a license that adds a network use clause to GPL-3.0.

* **GPL-3.0**: Source code disclosure obligation only when distributing binaries
* **AGPL-3.0**: Source code disclosure obligation when distributing binaries AND when providing a service over a network

This clause is intended to prevent circumvention of GPL's source code disclosure obligation by providing software as SaaS or a cloud service.

## License Compatibility

### Compatibility with Major Licenses

| License to Combine | Compatible | Remarks |
|-------------------|----------|------|
| MIT | Compatible | The entire project becomes AGPL-3.0 |
| Apache-2.0 | Compatible | The entire project becomes AGPL-3.0 |
| GPL-3.0 | Compatible | The entire project becomes AGPL-3.0 |
| LGPL-3.0 | Compatible | The LGPL portion can remain LGPL |
| Proprietary | Incompatible | Cannot be used in commercial software/SaaS |

{{% alert title="The Strongest Copyleft" color="info" %}}
AGPL-3.0 has the strongest Copyleft clause. When combined with other GPL-family licenses, the entire project must follow AGPL-3.0.
{{% /alert %}}

## References

* [AGPL-3.0 License Full Text](https://www.gnu.org/licenses/agpl-3.0.html)
* [SPDX License List - AGPL-3.0](https://spdx.org/licenses/AGPL-3.0-only.html)
* [GNU AGPL FAQ](https://www.gnu.org/licenses/agpl-3.0.html#faq)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/AGPL-3.0-only.txt)
