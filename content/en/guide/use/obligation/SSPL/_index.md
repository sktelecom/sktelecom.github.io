---
title: "SSPL Guide"
linkTitle: "SSPL"
weight: 10
type: docs
description: "The Server Side Public License (SSPL) is a Source Available license created by MongoDB in 2018. It is not an OSI-approved open source license and imposes very strong restrictions on the provision of commercial SaaS."
---

SPDX Identifier: `SSPL-1.0`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - **SSPL is not OSI-approved open source**
> - Redistribution in source form
>   - Notice obligation: Retain the copyright/license information
>   - When modifying: The same obligations as AGPL-3.0
> - Redistribution in binary form
>   - Notice obligation + provision of source code
>   - The same obligations as AGPL-3.0
> - **Additional obligations when providing SaaS**
>   - Disclose the SSPL software + all software needed to operate the service
>   - Including infrastructure management tools, operations scripts, etc.

</div>
{{% /alert %}}

{{% alert title="SSPL Use Prohibited" color="danger" %}}
SSPL is a "Source Available" license that has not been approved by the OSI (Open Source Initiative). When providing commercial SaaS, it carries an obligation to disclose virtually all service infrastructure, so it cannot be used in any of SK Telecom's products and services.
{{% /alert %}}

## What Is SSPL?

SSPL (Server Side Public License) is a license that MongoDB created in 2018 to prevent cloud providers such as AWS from offering MongoDB as a commercial service.

### Differences from AGPL-3.0

| Item | AGPL-3.0 | SSPL |
|------|----------|------|
| OSI approval | Approved | Rejected |
| Network service | Disclose AGPL code + linked code | Disclose the entire service operation infrastructure |
| Disclosure scope | Application layer | Down to infrastructure management tools |

SSPL modifies AGPL-3.0 Section 13 to require, when providing a service, the disclosure of all of the following:
- The SSPL software itself
- All software that interacts with the service
- The management software needed to operate the service
- Infrastructure provisioning, monitoring, backup tools, etc.

## Major Use Cases

### MongoDB's License Change
- **Before October 2018**: AGPL-3.0
- **After October 2018**: SSPL-1.0

### Other Projects Adopting SSPL
- Graylog
- Some NoSQL databases

## Why Did the OSI Not Approve It?

In 2019, the OSI decided not to recognize SSPL as open source:

1. **Overly broad disclosure requirement**: The scope of "everything needed to operate the service" is unclear
2. **Violation of non-discrimination**: It effectively prohibits a specific business model (SaaS)
3. **Restriction on free use**: Providing a commercial cloud service is practically impossible

## Reasons for the Usage Restriction

If you provide a service using SSPL software, you must disclose all of the following:

1. The source code of the SSPL software
2. The service application code
3. Kubernetes configurations
4. Terraform scripts
5. Monitoring tools (Prometheus, Grafana, etc.)
6. CI/CD pipelines
7. Backup and recovery systems

Since this would require disclosing all of SK Telecom's core infrastructure information, its use is not possible.

## Alternatives

If you need to use SSPL software, please consider the following alternatives.

### MongoDB
- **MongoDB Community Edition**: SSPL
- **Alternative 1**: MongoDB Atlas (MongoDB's official cloud service)
- **Alternative 2**: PostgreSQL + JSON features
- **Alternative 3**: FerretDB (a MongoDB-compatible AGPL project)

### Graylog
- **Graylog Open Source**: SSPL
- **Alternative 1**: Elasticsearch + Kibana (Elastic License 2.0, separate review required)
- **Alternative 2**: Grafana Loki (AGPL-3.0)

## References

* [SSPL License Full Text](https://www.mongodb.com/licensing/server-side-public-license)
* [SPDX License List - SSPL-1.0](https://spdx.org/licenses/SSPL-1.0.html)
* [OSI's Decision to Reject SSPL](https://opensource.org/node/1099)
* [MongoDB License Change Announcement](https://www.mongodb.com/blog/post/mongodb-now-released-under-the-server-side-public-license)
