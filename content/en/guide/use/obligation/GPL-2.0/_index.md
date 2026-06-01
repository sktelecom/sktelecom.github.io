---
title: "GPL-2.0 Guide"
linkTitle: "GPL-2.0"
weight: 10
type: docs
description: "[GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html), the representative Copyleft license created by the [Free Software Foundation](http://www.fsf.org/) in 1991, requires disclosure of source code upon redistribution, so caution is needed when using it."
---

SPDX Identifier: `GPL-2.0-only` or `GPL-2.0-or-later`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form<br>
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact.
>     - Obligations when modifying<br>
>       - Apply GPL-2.0 to the added/modified portions.
>       - Include a notice of the modifications. (e.g., include the modification date and content in comment form)
> - Redistribution in binary form<br>
>   - Notice obligation: Generate an open source notice and include it when redistributing the binary.<br>
>     - Obligations when modifying
>       - Apply GPL-2.0 to the added/modified portions.
>       - Include a notice of the modifications. (e.g., include the modification date and content in the open source notice)
>     - Obligation to provide source code
>       - <span class="-text-warning">Provide the **complete** source code corresponding to the binary.</span>
>       - Provide a <span class="-text-warning">build environment</span> that allows binary users to build an identical binary from the disclosed source code.

</div>
{{% /alert %}}

{{% alert title="Copyleft Caution" color="warning" %}}
GPL-2.0 is a strong Copyleft license. A derivative work that includes GPL-2.0 code must, in its entirety, follow GPL-2.0 and must disclose its source code. Caution is needed when using it in commercial software development.
{{% /alert %}}

## License Text in the Source Code

Open source under the GPL-2.0 license generally includes the following text at the top of the source code.

~~~
Copyright (C) yyyy name of author
 
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.
 
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the GPL-2.0 license in source form, observe the following.

#### 1-1 Notice Obligation
* Provide a copyright notice
* Provide a warranty disclaimer
* Provide a copy of the license

That is, redistribute while keeping the copyright/license information stated in the source code intact.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

1. Apply GPL-2.0 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and content in comment form)

{{% /alert %}}

### Case 2. Redistribution in Binary Form

When building open source under the GPL-2.0 license and redistributing it only in binary form, observe the following.

#### 2-1 Notice Obligation
* Provide a copyright notice
* Provide a warranty disclaimer
* Provide a copy of the license

Generate an open source notice that includes the above and include it when redistributing the binary.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

1. Apply GPL-2.0 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and content in the open source notice)

{{% /alert %}}

#### 2-2 Obligation to Provide Source Code

Provide the source code corresponding to the binary. In doing so, observe the following.

1. GPL-2.0 requires that derivative works also apply GPL-2.0 and disclose their source code. Referring to the content below, disclose the source code of both the GPL-2.0 open source and the derivative work.

{{% alert title="Scope of GPL-2.0 Derivative Works" color="warning" %}}
The general scope of GPL-2.0 derivative works is as follows.

* Modified code
* A Module that runs in the same process as the GPL program
* A Library linked with the GPL program
* A Class that inherits from the GPL program

The following are not considered derivative works of the GPL.

* An independent program that merely coexists on the same medium, such as a CD, but does not interact with the GPL program at all ([#MereAggregation](https://www.gnu.org/licenses/gpl-faq.en.html#MereAggregation))
* A program that is separate from the GPL program and communicates with it via Pipe, Socket, IPC, or Command Line Arguments

{{% /alert %}}

2. Provide a build environment that allows binary users to build an identical binary from the disclosed source code. This includes the following.
   * Tool chain information
   * Build scripts
   * Build instructions (README)

Instead of the source code, you may provide a Written Offer. It must include the following statements.

1. The written offer is valid for 3 years after the product is sold.
2. It is provided to anyone.
3. No charge is made. (excluding costs incurred for delivering the source)

{{% alert color="warning" %}}
If you later receive a request for source code based on the written offer, you must provide the source code corresponding to the binary mentioned above. Therefore, the company must retain the source code for at least 3 years after the product is sold.
{{% /alert %}}

## License Compatibility

### Compatibility with Major Licenses

| Combining License | Compatible | Notes |
|-------------------|------------|-------|
| MIT | Compatible | The entire project becomes GPL-2.0 |
| Apache-2.0 | Incompatible | Patent clause conflict |
| GPL-3.0 | Conditional | Compatible only if GPL-2.0-or-later |
| LGPL-2.1 | Compatible | The LGPL portion can remain LGPL |
| Proprietary | Incompatible | Cannot be used in commercial software |

{{% alert title="Incompatibility with Apache-2.0" color="warning" %}}
GPL-2.0 is not compatible with Apache-2.0. This is because Apache-2.0's patent grant clause conflicts with GPL-2.0. If you need Apache-2.0 code, consider using GPL-3.0.
{{% /alert %}}

## References

* [GPL-2.0 License Full Text](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
* [SPDX License List - GPL-2.0](https://spdx.org/licenses/GPL-2.0-only.html)
* [GNU GPL FAQ](https://www.gnu.org/licenses/gpl-faq.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/GPL-2.0-only.txt)
