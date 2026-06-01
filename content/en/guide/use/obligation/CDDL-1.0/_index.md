---
title: "CDDL-1.0 Guide"
linkTitle: "CDDL-1.0"
weight: 10
type: docs
description: "[CDDL-1.0](https://opensource.org/licenses/cddl1), also called the Common Development and Distribution License 1.0, is a Weak Copyleft license that requires disclosure of source code on a per-file basis."
---

SPDX Identifier: `CDDL-1.0`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form    
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact.  
>   - Obligations upon modification
>     - Apply CDDL-1.0 to the modified files. (There is no obligation to apply CDDL-1.0 to separately added files.)
> - Redistribution in binary form    
>   - Notice obligation: Generate an open source notice and enclose it when redistributing the binary.    
>   - Obligations upon modification  
>     - Apply CDDL-1.0 to the modified files. (There is no obligation to apply CDDL-1.0 to separately added files.)  
>     - Source code provision obligation  
>       - <span class="-text-warning">Provide the source code of the **files** that fall under CDDL-1.0 within the binary.</span>  

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft Characteristics" color="info" %}}
CDDL-1.0 is a per-file Weak Copyleft license. It is based on MPL, and the source code disclosure obligation arises only when a CDDL-1.0 file itself is modified. Separately added files do not need to be disclosed, so it can also be used in commercial software.
{{% /alert %}}

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the CDDL-1.0 license in source form, observe the following.

#### 1-1 Notice Obligation
* A copy of the license
* Retain legal notices such as copyright, patent, and trademark notices

In other words, redistribute while keeping the copyright/license information stated in the source code intact.

{{% alert title="Obligations upon Modification" color="success" %}}
If you add to or modify part of the open source code, observe the following.

* Apply CDDL-1.0 to the modified files. (There is no obligation to apply CDDL-1.0 to separately added files.)

{{% /alert %}}

### Case 2. Redistribution in Binary Form

When building open source under the CDDL-1.0 license and redistributing it in binary form only, observe the following.

#### 2-1 Notice Obligation
* Provide a copy of the license
* Retain legal notices such as copyright, patent, and trademark notices

Generate an open source notice containing the above and enclose it when redistributing the binary.

{{% alert title="Obligations upon Modification" color="success" %}}
If you add to or modify part of the open source code, observe the following.

* Apply CDDL-1.0 to the modified files. (There is no obligation to apply CDDL-1.0 to separately added files.)

{{% /alert %}}

#### 2-2 Source Code Provision Obligation

Provide the source code files that fall under CDDL-1.0 within the binary. In doing so, observe the following.

* CDDL-1.0 requires that content added within a file also be licensed under CDDL-1.0 and have its source code disclosed. Therefore, disclose the modified files as well as the original files under CDDL-1.0.

You can fulfill the source code provision obligation by informing users in the open source notice of how they can obtain the source code.

## MPL-Based License

CDDL-1.0 is a license created by Sun Microsystems (now Oracle) based on the Mozilla Public License (MPL).

* **MPL similarity**: Per-file Copyleft applies
* **Main usage**: Sun/Oracle projects (OpenSolaris, GlassFish, etc.)
* **Current status**: The use of CDDL is currently in decline

## License Compatibility

### Compatibility with Major Licenses

| License to Combine | Compatible | Remarks |
|-------------------|----------|------|
| MIT | Compatible | Only the CDDL files are disclosed |
| Apache-2.0 | Compatible | Only the CDDL files are disclosed |
| GPL-2.0/3.0 | Incompatible | Copyleft conflict |
| MPL-2.0 | Compatible | Similar per-file Copyleft |
| Proprietary | Compatible | Can be used as long as only the CDDL files are disclosed |

{{% alert title="Incompatibility with GPL" color="warning" %}}
CDDL-1.0 is not compatible with GPL-family licenses, because the Copyleft clauses of CDDL and GPL conflict with each other.
{{% /alert %}}

## References

* [CDDL-1.0 License Full Text](https://opensource.org/licenses/cddl1)
* [SPDX License List - CDDL-1.0](https://spdx.org/licenses/CDDL-1.0.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/CDDL-1.0.txt)
