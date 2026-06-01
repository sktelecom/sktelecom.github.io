---
title: "MIT Guide"
linkTitle: "MIT"
weight: 10
type: docs
description: "The [MIT](https://opensource.org/licenses/MIT) license was created by the Massachusetts Institute of Technology (MIT) and is a representative Permissive license that does not require disclosure of source code."
---

SPDX Identifier: `MIT`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - Redistribution in source form
>   - Notice obligation: Redistribute while keeping the copyright/license information stated in the source code intact.
> - Redistribution in binary form
>   - Notice obligation: Generate an open source notice and include it when redistributing the binary.

</div>
{{% /alert %}}

## License Text in the Source Code

Open source under the MIT license generally includes the following text at the top of the source code.

~~~
Copyright (c) <year> <copyright holders>
 
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
~~~

## Obligations by Use Case

### Case 1. Redistribution in Source Form

When redistributing open source under the MIT license in source form, observe the following.

#### 1-1 Notice Obligation
* Copyright notice
* Provide a copy of the license

That is, keep the copyright, license, and so on within the source code intact.

### Case 2. Redistribution in Binary Form

When building open source under the MIT license and redistributing it only in binary form, observe the following.

#### 2-1 Notice Obligation
* Copyright notice
* Provide a copy of the license

Generate an open source notice that includes these items and include it when redistributing the binary.

## License Compatibility

The MIT license is compatible with most other licenses.

### Compatibility with Major Licenses

| Combining License | Compatible | Notes |
|-------------------|------------|-------|
| Apache-2.0 | Compatible | Retaining the Apache-2.0 patent clause is recommended |
| GPL-2.0/3.0 | Compatible | The entire project becomes GPL |
| LGPL-2.1/3.0 | Compatible | Recommended with dynamic linking |
| Proprietary | Compatible | Can be used in commercial software |

{{% alert title="Caution" color="warning" %}}
If MIT-licensed code is included in a GPL project, the entire project must follow the GPL license. This is because the Copyleft conditions of the GPL impose stronger constraints than MIT.
{{% /alert %}}

## References

* [MIT License Full Text](https://opensource.org/licenses/MIT)
* [SPDX License List - MIT](https://spdx.org/licenses/MIT.html)
* [OSADL License Checklist](https://www.osadl.org/fileadmin/checklists/unreflicenses/MIT.txt)
