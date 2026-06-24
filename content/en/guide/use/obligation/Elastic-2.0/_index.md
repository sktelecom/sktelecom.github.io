---
title: "Elastic License 2.0 Guide"
linkTitle: "Elastic-2.0"
weight: 10
type: docs
description: "Elastic License 2.0 is a Source Available license created by Elastic in 2021. It restricts cloud providers such as AWS from offering commercial services while providing terms that are less restrictive than SSPL."
---

SPDX Identifier: `Elastic-2.0`

{{% alert title="Summary of Obligations" color="primary" %}}
<div class="-bg-100 p-3">

> - **Elastic-2.0 is not OSI-approved open source**
> - **Prohibited uses**:
>   - Providing it as a managed service (Managed Service)
>   - Using it as a core feature of a competing product
>   - Circumventing licensing/protection mechanisms
> - **Permitted uses**:
>   - Internal use
>   - Integrating it into your own service/product (when not a competing service)
>   - Modification and redistribution (when the conditions are observed)

</div>
{{% /alert %}}

{{% alert title="Caution When Using Elastic-2.0" color="warning" %}}
Elastic License 2.0 has three Limitations:
1. **Prohibition on providing a managed service**: You may not provide Elasticsearch/Kibana as a service
2. **Prohibition on circumventing the license**: You may not remove the software's protection mechanisms
3. **Trademark use restriction**: You may not use the Elastic trademark in a misleading way

Be sure to consult the OSRB before including it in a product/service.
{{% /alert %}}

## What Is Elastic License 2.0?

Elastic License 2.0 (ELv2) is the license that Elastic introduced in 2021 when it changed the license of Elasticsearch and Kibana from Apache-2.0.

### Background of the License Change

**Before January 2021**: Apache-2.0
- AWS provided Elasticsearch as a managed service (Amazon Elasticsearch Service)
- This infringed on Elastic's revenue model

**After January 2021**: Elastic License 2.0 + SSPL dual license
- Restricted AWS from providing the managed service
- Result: AWS forked it as OpenSearch

## The Three Limitations

### 1. Prohibition on Providing a Managed Service

**Prohibited:**
Providing the substantial functionality of the software as a service to third parties

**Specific examples:**

Prohibited cases:
- Providing "Elasticsearch as a Service"
- Providing "Managed Kibana"
- Providing Elasticsearch clusters to customers as a managed offering

Permitted cases:
- Using Elasticsearch as the backend of your own service
- Implementing internal search functionality
- Building a log analysis system

### 2. Prohibition on Use as a Core Feature of a Competing Product

**Prohibited:**
Circumventing the software's functionality or creating a competing product

**Specific examples:**

Prohibited cases:
- Circumventing the restrictions on Elasticsearch's paid features
- Removing the license check of X-Pack features
- Developing a product that provides Elastic's commercial features for free

Permitted cases:
- A general application that uses Elasticsearch as a search engine
- Developing log collection and analysis tools

### 3. Trademark Use Restriction

**Prohibited:**
Using the Elastic trademark in a misleading way

**Specific examples:**

Prohibited cases:
- "Powered by Elasticsearch" (without official approval)
- "Elasticsearch Compatible" (potentially misleading)

Permitted cases:
- "Works with Elasticsearch" (a factual statement)
- "Built on Elasticsearch technology" (a clear factual statement)


## References

* [Elastic License 2.0 Full Text](https://www.elastic.co/licensing/elastic-license)
* [SPDX License List - Elastic-2.0](https://spdx.org/licenses/Elastic-2.0.html)
* [Elastic License 2.0 FAQ](https://www.elastic.co/licensing/elastic-license/faq)
* [Elastic vs AWS: Background of the License Change](https://www.elastic.co/blog/why-license-change-aws)
