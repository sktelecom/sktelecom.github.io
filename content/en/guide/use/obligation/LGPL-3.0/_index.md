---
title: "LGPL-3.0 Guide"
linkTitle: "LGPL-3.0"
weight: 10
type: docs
description: "The [Free Software Foundation](http://www.fsf.org/) released [LGPL-3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html) in 2007. LGPL-3.0 has obligations similar to LGPL-2.1, but additionally requires the provision of Installation Information when distributing with a User Product."
---

SPDX Identifier: `LGPL-3.0-only` or `LGPL-3.0-or-later`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form 
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact. 
>     - Obligations when modifying 
>       - Apply LGPL-3.0 to the added/modified portions.
>       - Include a notice of the modifications. (e.g., include the modification date and content in comment form)
> - Redistribution in binary form 
>   - Notice obligation: Generate an open source notice and include it when redistributing the binary. 
>     - Obligations when modifying
>       - Apply LGPL-3.0 to the added/modified portions.
>       - Include a notice of the modifications. (e.g., include the modification date and content in the open source notice)
>     - Obligation to provide source code
>       - <span class="-text-warning">Provide the **complete** source code corresponding to the binary (library).</span>
>       - Provide a <span class="-text-warning">build environment</span> that allows users to build an identical library from the disclosed source code of the LGPL library.
>   - **Obligation to provide installation information: If you distribute the library with a User Product, provide Installation Information.**

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft Characteristics" color="info" %}}
LGPL-3.0 is a Weak Copyleft license. The obligation to disclose source code arises only when the LGPL library itself is modified, and applications that use it via dynamic linking (Dynamic Link) do not need to be disclosed. Therefore, it can also be used in commercial software.
{{% /alert %}}

## License Text in the Source Code

Open source under the LGPL-3.0 license generally includes the following text at the top of the source code.

~~~
Copyright (C) <year> <name of author>
 
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
 
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.
 
You should have received a copy of the GNU Lesser General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the LGPL-3.0 license in source form, observe the following.

#### 1-1 Notice Obligation
* Provide a copyright notice
* Provide a warranty disclaimer
* Provide a copy of the license

That is, redistribute while keeping the copyright/license information stated in the source code intact.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

1. Apply LGPL-3.0 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and content in comment form)

{{% /alert %}}

### Case 2. Redistribution in Binary (Library) Form

When building open source under the LGPL-3.0 license and redistributing it only in binary form, observe the following.

#### 2-1 Notice Obligation
* Provide a copyright notice
* Provide a warranty disclaimer
* Provide a copy of the license

Generate an open source notice that includes the above and include it when redistributing the library.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

1. Apply LGPL-3.0 to the added/modified portions.
2. Include a notice of the modifications. (e.g., include the modification date and content in the open source notice)

{{% /alert %}}

#### 2-2 Obligation to Provide Source Code

Provide the source code corresponding to the binary (library). In doing so, observe the following.

1. LGPL-3.0 requires that derivative works also apply LGPL-3.0 and disclose their source code. Referring to the content below, disclose the source code of both the LGPL-3.0 open source and the derivative work.

{{% alert title="Scope of LGPL-3.0 Derivative Works" color="warning" %}}
The general scope of LGPL-3.0 derivative works is as follows.

* Files modified/added within the library

The following are not considered derivative works of LGPL-3.0.

* A program that uses the LGPL-3.0 library via Dynamic Link
* In Java, a program that imports an LGPL-3.0 JAR file is also not considered a derivative work of LGPL-3.0. (http://www.gnu.org/licenses/lgpl-java.html)
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

#### 2-3 Obligation to Provide Installation Information

If you distribute the library with a User Product, provide Installation Information.

- User Product: An embedded device such as an electronic appliance
- Installation Information: All the information and methods that a user needs to build the source code and reinstall it on the product

{{% alert title="Usage Restriction" color="warning" %}}
For most User Products, it is impossible to provide Installation Information for security reasons. Therefore, LGPL-3.0 open source should not be used in software distributed as a User Product.
{{% /alert %}}

## Major Improvements over LGPL-2.1

LGPL-3.0 retains the core principles of LGPL-2.1 while improving the following.

* **Explicit patent grant**: Explicitly stipulates the grant of contributors' patent licenses
* **Apache-2.0 compatibility**: Resolves the compatibility issue with Apache-2.0
* **Anti-Tivoization**: Adds the obligation to provide Installation Information for User Products

## License Compatibility

### Compatibility with Major Licenses

| Combining License | Compatible | Notes |
|-------------------|------------|-------|
| MIT | Compatible | Usable in commercial software with dynamic linking |
| Apache-2.0 | Compatible | Compatible, unlike LGPL-2.1 |
| GPL-3.0 | Compatible | The GPL portion remains GPL |
| LGPL-2.1 | Conditional | Compatible only if LGPL-2.1-or-later |
| Proprietary | Conditional | Usable with dynamic linking |

{{% alert title="Apache-2.0 Compatibility" color="info" %}}
Unlike LGPL-2.1, LGPL-3.0 is compatible with Apache-2.0. This is because a patent grant clause has been explicitly added.
{{% /alert %}}

## References

* [LGPL-3.0 License Full Text](https://www.gnu.org/licenses/lgpl-3.0.en.html)
* [SPDX License List - LGPL-3.0](https://spdx.org/licenses/LGPL-3.0-only.html)
* [GNU LGPL FAQ](https://www.gnu.org/licenses/gpl-faq.html#LGPL)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/LGPL-3.0-only.txt)
