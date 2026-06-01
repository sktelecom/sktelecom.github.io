---
title: "BSL Guide"
linkTitle: "BSL"
weight: 10
type: docs
description: "The Business Source License (BSL) is a Source Available license created by MariaDB. Its distinctive feature is that it automatically converts to an open source license after a certain period (usually 3-4 years)."
---

SPDX Identifier: `BUSL-1.1` (also referred to as BSL-1.1)

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - **BSL is not OSI-approved open source**
> - **Certain uses (specified in the Additional Use Grant) are restricted**
> - **Automatically converts to open source after the Change Date**
> - Non-commercial/internal use: Generally permitted
> - Commercial production use: License terms must be checked
> - When redistributing: Retain copyright and license information

</div>
{{% /alert %}}

{{% alert title="Caution When Using BSL" color="warning" %}}
BSL can have different terms for each project:
- **Additional Use Grant**: Which uses are permitted/restricted
- **Change Date**: When it converts to open source
- **Change License**: Which open source license it converts to

Be sure to check the LICENSE file of each BSL project and consult the OSPO.
{{% /alert %}}

## What Is BSL?

BSL (Business Source License) is a license created by MariaDB Corporation in 2013. Its core characteristic is that it is a time-limited license.

### How It Works

1. **Initial period** (before the Change Date)
   - Certain commercial uses are restricted
   - The source code is publicly available
   - Non-commercial/internal use is generally permitted

2. **Conversion period** (after the Change Date)
   - Automatically converts to a true open source license
   - Usually converts to Apache-2.0, GPL-2.0, MIT, etc.
   - All restrictions are lifted

## The Three Main Parameters of BSL

### 1. Additional Use Grant
Specifies the particular uses that are permitted.

Examples:
- "Services with 1,000 or fewer annual users are permitted"
- "Free use is allowed in non-production environments"
- "Use for the purpose of providing a competing service is prohibited"

### 2. Change Date
The date on which it converts to open source. Typically set to 3-4 years after release.

Example: If released on January 1, 2024, the Change Date is January 1, 2028.

### 3. Change License
The open source license it will convert to.

Typically:
- Apache-2.0 (most common)
- GPL-2.0
- MIT

## Major Projects Adopting BSL

### Databases
- **MariaDB** (some features): Change License GPL-2.0, Change Date 4 years after release
- **CockroachDB**: Change License Apache-2.0 or MIT, Change Date 3 years after release

### Others
- **Ceph** (some features)
- **MinIO** (some editions)
- **Sentry** (some features)
- **Akka** (since 2.7)

## Determining Whether Use Is Permitted

### Cases Generally Permitted

1. **Internal development/testing**
   - In-house development environments
   - Test servers
   - Prototype development

2. **Non-production uses**
   - Learning/research
   - Benchmarking
   - Proof of Concept (PoC)

3. **Cases specified in the Additional Use Grant**

### Cases That Are Restricted

1. **Commercial production use**
   - Services provided to customers
   - Inclusion in and sale of a product
   - Provision as SaaS

2. **Providing a competing service**
   - Providing a service that competes with the BSL software

### Cases Requiring Verification

Because the Additional Use Grant differs for each project, checking the LICENSE file of each project is essential.

## Use After the Change Date

Once the Change Date passes, it automatically converts to the Change License.

**Example: CockroachDB v20.1 (released May 2020)**
- Change Date: May 19, 2023
- Change License: Apache-2.0
- **From May 19, 2023, it can be used freely under Apache-2.0**


## References

* [BSL 1.1 Full Text](https://mariadb.com/bsl11/)
* [SPDX License List - BUSL-1.1](https://spdx.org/licenses/BUSL-1.1.html)
* [MariaDB BSL FAQ](https://mariadb.com/bsl-faq-mariadb/)
* [CockroachDB Licensing FAQs](https://www.cockroachlabs.com/docs/stable/licensing-faqs.html)
