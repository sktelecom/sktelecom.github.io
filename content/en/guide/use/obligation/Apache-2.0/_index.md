---
title: "Apache-2.0 Guide"
linkTitle: "Apache-2.0"
weight: 10
type: docs
description: "[Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0) is an open source license created by the [Apache Software Foundation](https://www.apache.org/). It is a Permissive license that does not require disclosure of source code."
---

SPDX Identifier: `Apache-2.0`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form    
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact.    
>   - Include a notice of the modifications. (e.g., include the modification date and modified content as comments)    
> - Redistribution in binary form    
>   - Notice obligation: Generate an open source notice and enclose it when redistributing the binary.    

</div>
{{% /alert %}}

## License Statement in Source Code

Open source under the Apache-2.0 license generally carries the following statement at the top of the source code.

~~~
Copyright [yyyy] [name of copyright owner]
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the Apache-2.0 license in source form, observe the following.

#### 1-1 Notice Obligation
* Provide a copy of the license
* Retain information such as copyright, patent, and trademark notices.
* If a NOTICE file is included, retain it.

In other words, redistribute while keeping the copyright/license information stated in the source code intact.

{{% alert title="Obligations upon Modification" color="success" %}}
If you add to or modify part of the open source code, observe the following.

* Include a notice of the modifications. (e.g., include the modification date and modified content as comments)

{{% /alert %}}

### Case 2. Redistribution in Binary Form

When building open source under the Apache-2.0 license and redistributing it in binary form only, observe the following.

#### 2-1 Notice Obligation
* Provide a copy of the license
* Retain information such as copyright, patent, and trademark notices.
* If a NOTICE file is included, retain it.

Generate an open source notice containing the above and enclose it when redistributing the binary.

## License Compatibility

The Apache-2.0 license includes an explicit patent grant clause, making it compatible with most licenses.

### Compatibility with Major Licenses

| License to Combine | Compatible | Remarks |
|-------------------|----------|------|
| MIT | Compatible | Keeping Apache-2.0 is recommended |
| GPL-3.0 | Compatible | The entire project becomes GPL-3.0 |
| GPL-2.0 | Incompatible | Patent clause conflict |
| LGPL-3.0 | Compatible | Recommended for dynamic linking |
| Proprietary | Compatible | Can be used in commercial software |

{{% alert title="Caution" color="warning" %}}
Apache-2.0 is not compatible with GPL-2.0, because the patent grant clause of Apache-2.0 conflicts with GPL-2.0. It is compatible with GPL-3.0.
{{% /alert %}}

## References

* [Apache License 2.0 Full Text](http://www.apache.org/licenses/LICENSE-2.0)
* [SPDX License List - Apache-2.0](https://spdx.org/licenses/Apache-2.0.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/Apache-2.0.txt)
