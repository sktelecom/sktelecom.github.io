---
title: "MPL-2.0 Guide"
linkTitle: "MPL-2.0"
weight: 10
type: docs
description: "[MPL-2.0](http://www.mozilla.org/MPL/2.0/), also called the Mozilla Public License 2.0, is a Weak Copyleft license that requires disclosure of source code on a per-file basis."
---

SPDX Identifier: `MPL-2.0`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form 
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact. 
>     - Obligations when modifying
>       - Apply MPL-2.0 to the modified file.
> - Redistribution in binary form
>   - Notice obligation: Generate an open source notice and include it when redistributing the binary.
>     - Obligations when modifying
>       - Apply MPL-2.0 to the added/modified **file**.
>     - Obligation to provide source code
>       - <span class="-text-warning">Provide the source code of the **files** under MPL-2.0 within the binary.</span>

</div>
{{% /alert %}}

{{% alert title="Weak Copyleft Characteristics" color="info" %}}
MPL-2.0 is a per-file Weak Copyleft license. The obligation to disclose source code arises only when an MPL-2.0 file itself is modified, and separately added files do not need to be disclosed. Therefore, it can also be used in commercial software.
{{% /alert %}}

## License Text in the Source Code

Open source under the MPL-2.0 license generally includes the following text at the top of the source code.

~~~
This Source Code Form is subject to the terms of the Mozilla Public
License, v.2.0. If a copy of the MPL was not distributed with this file,
You can obtain one at https://mozilla.org/MPL/2.0/.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the MPL-2.0 license in source form, observe the following.

#### 1-1 Notice Obligation
* Provide or reference a copy of the license
* Do not modify legal notices

That is, redistribute while keeping the license information stated in the source code intact.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

* Apply MPL-2.0 to the modified file. (Separately added files are not obligated to apply MPL-2.0)

{{% /alert %}}

### Case 2. Redistribution in Binary Form

When building open source under the MPL-2.0 license and redistributing it only in binary form, observe the following.

#### 2-1 Notice Obligation
* Provide a copy of the license

Generate an open source notice that includes the above and include it when redistributing the binary.

{{% alert title="Obligations When Modifying" color="success" %}}
If you add to or modify part of the source code of the open source, observe the following.

* Apply MPL-2.0 to the modified file. (Separately added files are not obligated to apply MPL-2.0)

{{% /alert %}}

#### 2-2 Obligation to Provide Source Code

Provide the source code files under MPL-2.0 within the binary. In doing so, observe the following.

* MPL-2.0 requires that content added within a file also apply MPL-2.0 and disclose its source code. Therefore, disclose both the original file and the modified file by applying MPL-2.0.

You can fulfill the obligation to provide source code by indicating in the open source notice how users can obtain the source code.

## Per-File Copyleft

The key characteristic of MPL-2.0 is that Copyleft is applied on a per-file basis.

* **When modifying an MPL-2.0 file**: Disclose only that file under MPL-2.0
* **When adding a separate file**: The added file does not need to be disclosed
* **When combining with other licenses**: Combination is possible if the files are separated

Because of these characteristics, it can be used flexibly in commercial software development.

## License Compatibility

### Compatibility with Major Licenses

| Combining License | Compatible | Notes |
|-------------------|------------|-------|
| MIT | Compatible | Disclose only MPL files |
| Apache-2.0 | Compatible | Disclose only MPL files |
| GPL-2.0/3.0 | Compatible | Leverage the Secondary License clause |
| LGPL-2.1/3.0 | Compatible | Disclose only MPL files |
| Proprietary | Compatible | Usable as long as only MPL files are disclosed |

{{% alert title="Secondary License Clause" color="info" %}}
MPL-2.0 provides compatibility with GPL-2.0/3.0 through the Secondary License clause. If MPL-2.0 code is included in a GPL project, it can be relicensed under the GPL.
{{% /alert %}}

## References

* [MPL-2.0 License Full Text](http://www.mozilla.org/MPL/2.0/)
* [SPDX License List - MPL-2.0](https://spdx.org/licenses/MPL-2.0.html)
* [Mozilla MPL FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/MPL-2.0.txt)
