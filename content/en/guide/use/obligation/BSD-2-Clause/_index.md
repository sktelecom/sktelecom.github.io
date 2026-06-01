---
title: "BSD-2-Clause Guide"
linkTitle: "BSD-2-Clause"
weight: 10
type: docs
description: "The [BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause) license, also called the BSD 2-Clause \"Simplified\" License, is a Permissive license that does not require disclosure of source code. It is more concise than BSD-3-Clause."
---

SPDX Identifier: `BSD-2-Clause`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form    
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact.  
> - Redistribution in binary form    
>   - Notice obligation: Generate an open source notice and enclose it when redistributing the binary.    

</div>
{{% /alert %}}

## License Statement in Source Code

Open source under the BSD-2-Clause license generally carries the following statement at the top of the source code.

~~~
Copyright (c) <YEAR>, <OWNER>
All rights reserved.
 
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
 
1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.
 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the BSD-2-Clause license in source form, observe the following.

#### 1-1 Notice Obligation
* Copyright notice
* Provide a copy of the license
* Warranty disclaimer notice

In other words, keep the copyright, license, and so on within the source code intact.

### Case 2. Redistribution in Binary Form

When building open source under the BSD-2-Clause license and redistributing it in binary form only, observe the following.

#### 2-1 Notice Obligation
* Copyright notice
* Provide a copy of the license
* Warranty disclaimer notice

Generate an open source notice containing the above and enclose it when redistributing the binary.

## License Compatibility

The BSD-2-Clause license is the most concise among the BSD licenses and is compatible with most licenses.

### Compatibility with Major Licenses

| License to Combine | Compatible | Remarks |
|-------------------|----------|------|
| MIT | Compatible | A similar license |
| Apache-2.0 | Compatible | Keeping the Apache-2.0 patent clause is recommended |
| GPL-2.0/3.0 | Compatible | The entire project becomes GPL |
| Proprietary | Compatible | Can be used in commercial software |

## References

* [BSD-2-Clause License Full Text](https://opensource.org/licenses/BSD-2-Clause)
* [SPDX License List - BSD-2-Clause](https://spdx.org/licenses/BSD-2-Clause.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/BSD-2-Clause.txt)
