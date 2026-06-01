---
title: "LGPL-2.1 Guide"
linkTitle: "LGPL-2.1"
weight: 10
type: docs
description: "[LGPL-2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html), the representative Weak Copyleft license created by the [Free Software Foundation](http://www.fsf.org/), requires disclosure of source code upon redistribution, but if you use an LGPL Library via Dynamic Link, your own code is not included in the disclosure scope."
---

SPDX Identifier: `LGPL-2.1-only` or `LGPL-2.1-or-later`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form 
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact. 
>     - Obligations when modifying 
>       - Apply LGPL-2.1 to the added/modified portions.
>       - Include a notice of the modifications. (e.g., include the modification date and content in comment form)
> - Redistribution in binary form 
>   - Notice obligation: Generate an open source notice and include it when redistributing the binary. 
>     - Obligations when modifying
>       - Apply LGPL-2.1 to the added/modified portions.
>       - Include a notice of the modifications. (e.g., include the modification date and content in the open source notice)
>     - Obligation to provide source code
>       - <span class="-text-warning">Provide the **complete** source code corresponding to the binary (library).</span>
>       - Provide a <span class="-text-warning">build environment</span> that allows users to build an identical library from the disclosed source code of the LGPL library.

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft Characteristics" color="info" %}}
LGPL-2.1 is a Weak Copyleft license. The obligation to disclose source code arises only when the LGPL library itself is modified, and applications that use it via dynamic linking (Dynamic Link) do not need to be disclosed. Therefore, it can also be used in commercial software.
{{% /alert %}}

## License Text in the Source Code

Open source under the LGPL-2.1 license generally includes the following text at the top of the source code.

~~~
Copyright (C) year name of author
 
This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.
 
This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.
 
You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the LGPL-2.1 license in source form, observe the following.

#### 1-1 Notice Obligation
* Provide a copyright notice
* Provide a warranty disclaimer
* Provide a copy of the license

That is, redistribute while keeping the copyright/license information stated in the source code intact.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

1. Apply LGPL-2.1 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and content in comment form)

{{% /alert %}}

### Case 2. Redistribution in Binary (Library) Form

When building open source under the LGPL-2.1 license and redistributing it only in binary form, observe the following.

#### 2-1 Notice Obligation
* Provide a copyright notice
* Provide a warranty disclaimer
* Provide a copy of the license

Generate an open source notice that includes the above and include it when redistributing the library.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

1. Apply LGPL-2.1 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and content in the open source notice)

{{% /alert %}}

#### 2-2 Obligation to Provide Source Code

Provide the source code corresponding to the binary (library). In doing so, observe the following.

1. LGPL-2.1 requires that derivative works also apply LGPL-2.1 and disclose their source code. Referring to the content below, disclose the source code of both the LGPL-2.1 open source and the derivative work.

{{% alert title="Scope of LGPL-2.1 Derivative Works" color="warning" %}}
The general scope of LGPL-2.1 derivative works is as follows.

* Files modified/added within the library

The following are not considered derivative works of LGPL-2.1.

* A program that uses the LGPL-2.1 library via Dynamic Link
* In Java, a program that imports an LGPL-2.1 JAR file is also not considered a derivative work of LGPL-2.1. (http://www.gnu.org/licenses/lgpl-java.html)
{{% /alert %}}

2. Provide a build environment that allows users to build an identical library from the disclosed source code of the LGPL library. This includes the following.
   * Tool chain information
   * Build scripts
   * Build instructions (README)

3. When distributing an Executable created by Static Linking the LGPL library, provide the object code that makes up the executable so that users can modify the LGPL library and regenerate the executable. ([#LGPLStaticVsDynamic](https://www.gnu.org/licenses/gpl-faq.en.html#LGPLStaticVsDynamic))

Instead of the source code, you may provide a Written Offer. It must include the following statements.

1. The written offer is valid for 3 years after the product is sold.
2. It is provided to anyone.
3. No charge is made. (excluding costs incurred for delivering the source)

{{% alert color="warning" %}}
If you later receive a request for source code based on the written offer, you must provide the source code corresponding to the binary mentioned above. Therefore, the company must retain the source code for at least 3 years after the product is sold.
{{% /alert %}}

## Dynamic Linking vs Static Linking

The key point of LGPL-2.1 is that the scope of source code disclosure differs depending on the linking method.

* **Dynamic Link**: Only the LGPL library is disclosed; the application code does not need to be disclosed
* **Static Link**: The LGPL library + object code must be provided

For commercial software development, the use of dynamic linking is recommended.

## License Compatibility

### Compatibility with Major Licenses

| Combining License | Compatible | Notes |
|-------------------|------------|-------|
| MIT | Compatible | Usable in commercial software with dynamic linking |
| Apache-2.0 | Incompatible | Patent clause conflict |
| GPL-2.0 | Compatible | The GPL portion remains GPL |
| LGPL-3.0 | Conditional | Compatible only if LGPL-2.1-or-later |
| Proprietary | Conditional | Usable with dynamic linking |

{{% alert title="Conditions for Use in Commercial Software" color="info" %}}
If you use an LGPL-2.1 library via dynamic linking, it can also be used in commercial software. However, if you modify the LGPL library itself, you must disclose the source code of the modified portion.
{{% /alert %}}

## References

* [LGPL-2.1 License Full Text](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)
* [SPDX License List - LGPL-2.1](https://spdx.org/licenses/LGPL-2.1-only.html)
* [GNU LGPL FAQ](https://www.gnu.org/licenses/gpl-faq.html#LGPL)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/LGPL-2.1-only.txt)
