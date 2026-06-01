---
title: "BSD-4-Clause Guide"
linkTitle: "BSD-4-Clause"
weight: 10
type: docs
description: "The [BSD-4-Clause](https://directory.fsf.org/wiki/License:BSD-4-Clause) license, also called the BSD \"Original\" or \"Old\" License, is the original form of the BSD license. Although it does not require disclosure of source code, it includes an advertising clause that makes its use problematic."
---

SPDX Identifier: `BSD-4-Clause`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form    
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact.  
>   - Include the following statement in all advertising that mentions features or use of the BSD-4-Clause open source  
      <i>"This product includes software developed by the &lt;organization&gt;."</i>
> - Redistribution in binary form    
>   - Notice obligation: Generate an open source notice and enclose it when redistributing the binary.  
>   - Include the following statement in all advertising that mentions features or use of the BSD-4-Clause open source  
      <i>"This product includes software developed by the &lt;organization&gt;."</i>

</div>
{{% /alert %}}

## License Statement in Source Code

Open source under the BSD-4-Clause license generally carries the following statement at the top of the source code.

~~~
Copyright (c) <year>, <copyright holder>
All rights reserved.
 
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
 
1. Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software
must display the following acknowledgement:
This product includes software developed by the <organization>.
4. Neither the name of the <organization> nor the
names of its contributors may be used to endorse or promote products
derived from this software without specific prior written permission.
 
THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the BSD-4-Clause license in source form, observe the following.

#### 1-1 Notice Obligation
* Copyright notice
* Provide a copy of the license
* Warranty disclaimer notice
* Include the following statement in all advertising that mentions features or use of the BSD-4-Clause open source   
<i>"This product includes software developed by the &lt;organization&gt;."</i>

In other words, keep the copyright, license, and so on within the source code intact.

### Case 2. Redistribution in Binary Form

When building open source under the BSD-4-Clause license and redistributing it in binary form only, observe the following.

#### 2-1 Notice Obligation
* Copyright notice
* Provide a copy of the license
* Warranty disclaimer notice
* Include the following statement in all advertising that mentions features or use of the BSD-4-Clause open source   
<i>"This product includes software developed by the &lt;organization&gt;."</i>

Generate an open source notice containing the above and enclose it when redistributing the binary.

## License Compatibility

Due to the advertising clause, BSD-4-Clause has compatibility issues with other licenses.

### Compatibility with Major Licenses

| License to Combine | Compatible | Remarks |
|-------------------|----------|------|
| MIT | Compatible | The advertising clause must be retained |
| Apache-2.0 | Compatible | The advertising clause must be retained |
| GPL-2.0/3.0 | Incompatible | The advertising clause conflicts with GPL |
| Proprietary | Compatible | The advertising clause must be complied with |

{{% alert color="warning" %}}

Open source projects such as FreeBSD, NetBSD, and BSD originally applied BSD-4-Clause, but after recognizing the problem with the "advertising clause" they changed their license to BSD-3-Clause, BSD-2-Clause, and so on.

* FreeBSD: changed to BSD-2-Clause - http://www.gnu.org/licenses/bsd.html
* NetBSD: changed to BSD-2-Clause - http://www.netbsd.org/about/redistribution.html#why2clause
* BSD: changed to BSD-3-Clause - ftp://ftp.cs.berkeley.edu/pub/4bsd/README.Impt.License.Change

{{% /alert %}}

## References

* [BSD-4-Clause License Full Text](https://directory.fsf.org/wiki/License:BSD-4-Clause)
* [SPDX License List - BSD-4-Clause](https://spdx.org/licenses/BSD-4-Clause.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/BSD-4-Clause.txt)
