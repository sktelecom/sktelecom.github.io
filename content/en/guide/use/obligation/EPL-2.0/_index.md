---
title: "EPL-2.0 Guide"
linkTitle: "EPL-2.0"
weight: 10
type: docs
description: "[EPL-2.0](https://www.eclipse.org/legal/epl-2.0), also called the Eclipse Public License 2.0, is a Weak Copyleft license that requires disclosure of source code on a per-module basis."
---

SPDX Identifier: `EPL-2.0`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form 
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact. 
>    - Obligations upon modification 
>      - Apply EPL-2.0 to the modified modules.
> - Redistribution in binary form 
>   - Notice obligation: Generate an open source notice and enclose it when redistributing the binary. 
>   - Obligations upon modification
>     - Apply EPL-2.0 to the modified modules.
>   - Source code provision obligation 
>     - <span class="-text-warning">Provide the source code files of the **modules** that fall under EPL-2.0 within the binary.</span>

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft Characteristics" color="info" %}}
EPL-2.0 is a per-module Weak Copyleft license. The source code disclosure obligation arises only when an EPL-2.0 module itself is modified, and separately added modules do not need to be disclosed. Therefore, it can also be used in commercial software.
{{% /alert %}}

## License Statement in Source Code

Open source under the EPL-2.0 license generally carries the following statement at the top of the source code.
```
This program and the accompanying materials are made available under the
terms of the Eclipse Public License v. 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0, or the Eclipse Distribution License
v. 1.0 which is available at
http://www.eclipse.org/org/documents/edl-v10.php.
```

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the EPL-2.0 license in source form, observe the following.

#### 1-1 Notice Obligation
* Provide a copy of the license
* Do not modify legal notices such as copyright, patent, trademark, warranty disclaimer, and indemnification notices

In other words, redistribute while keeping the license information stated in the source code intact.

{{% alert title="Obligations upon Modification" color="success" %}}
If you add to or modify part of the open source code, observe the following.

* Apply EPL-2.0 to the modified modules.

{{% /alert %}}

### Case 2. Redistribution in Binary Form

When building open source under the EPL-2.0 license and redistributing it in binary form only, observe the following.

#### 2-1 Notice Obligation
* Provide a copy of the license
* Do not modify legal notices such as copyright, patent, trademark, warranty disclaimer, and indemnification notices

Generate an open source notice containing the above and enclose it when redistributing the binary.

{{% alert title="Obligations upon Modification" color="success" %}}
If you add to or modify part of the open source code, observe the following.

* Apply EPL-2.0 to the modified modules.

{{% /alert %}}

#### 2-2 Source Code Provision Obligation

Provide the source code files of the modules that fall under EPL-2.0 within the binary. In doing so, observe the following.

* EPL-2.0 requires that content added within a module also be licensed under EPL-2.0 and have its source code disclosed. Therefore, disclose the original module as well as the content added/modified within the module under EPL-2.0.

You can fulfill the source code provision obligation by informing users in the open source notice of how they can obtain the source code.

## Per-Module Copyleft

The key characteristic of EPL-2.0 is that Copyleft applies on a per-module basis.

* **When modifying an EPL-2.0 module**: Disclose only that module under EPL-2.0
* **When adding a separate module**: The added module does not need to be disclosed
* **When combining with another license**: Combination is possible if the modules are separated

Because of these characteristics, Eclipse Foundation projects and commercial software can be developed together.

## License Compatibility

### Compatibility with Major Licenses

| License to Combine | Compatible | Remarks |
|-------------------|----------|------|
| MIT | Compatible | Only the EPL modules are disclosed |
| Apache-2.0 | Compatible | Only the EPL modules are disclosed |
| GPL-2.0 | Incompatible | Incompatible by default |
| GPL-3.0 | Conditional | Compatible when a Secondary License is designated |
| Proprietary | Compatible | Can be used as long as only the EPL modules are disclosed |

{{% alert title="Secondary License Clause" color="info" %}}
EPL-2.0 allows GPL-2.0 or GPL-3.0 to be designated as a Secondary License. In that case, it can also be used in GPL projects.
{{% /alert %}}

## References

* [EPL-2.0 License Full Text](https://www.eclipse.org/legal/epl-2.0)
* [SPDX License List - EPL-2.0](https://spdx.org/licenses/EPL-2.0.html)
* [Eclipse Foundation FAQ](https://www.eclipse.org/legal/eplfaq.php)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/EPL-2.0.txt)
