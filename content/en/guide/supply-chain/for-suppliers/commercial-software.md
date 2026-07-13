---
title: "Submitting an SBOM for Commercial Software and Finished Products"
linkTitle: "Commercial Software"
weight: 5
type: docs
description: >
  How to obtain an SBOM from the manufacturer and submit it when you supply commercial software or a finished product made by a third party.
---

This document is for suppliers that deliver commercial software or finished products they did not develop. In this case the supplier has no access to the source code, so the source-scan approach in [How to Generate an SBOM](../creation-guide/) does not apply. Obtain the SBOM from the original manufacturer and submit it.

Scanning the delivered equipment or its installed image with a tool is not an alternative. The commercial software has no package manager metadata, so its components come out without purls, vulnerability matching fails, and the SBOM is rejected.

## Scope

This applies when you supply third-party products in forms such as the following.

*   Commercial software resale: supplying licenses for packaged software developed by a third party (resellers, distributors)
*   Appliances and finished products: equipment shipped by the manufacturer with the OS and software preinstalled (e.g., storage, backup appliances, network equipment)
*   Systems that include third-party products: deliveries combining in-house components with commercial products

If part of the delivery is developed in-house, generate the SBOM for that part yourself following [How to Generate an SBOM](../creation-guide/), and submit the manufacturer's SBOM for the commercial part alongside it.

## Obtaining the SBOM from the manufacturer

Request an SBOM in CycloneDX or SPDX format from the original manufacturer (or developer). With regulations such as US Executive Order 14028 and the EU Cyber Resilience Act in force, most global manufacturers now have a process for providing per-product SBOMs. Including the following in your request speeds up the response.

*   Format: CycloneDX JSON (recommended) or SPDX
*   Target: the exact model name and version of the delivered product
*   Coverage: if the product ships with an OS, the OS packages must be included

Whether and how quickly a manufacturer can provide an SBOM varies, so request it during contract review to stay on the delivery schedule.

## Checking the received SBOM

An SBOM received from the manufacturer is reviewed by the same criteria as one you generate yourself. Before submitting, check the following.

1. Compliance with the [Submission Requirements](../requirements/): standard format and version, metadata, component names and versions, purls
2. The [Validation Checklist](../checklist/): purl coverage and the other required items
3. Version match: the top-level component in the SBOM matches the name and version of the product actually delivered

Then name the file and submit it following the [Submission Process](../submission/).

## If the product is a cluster

A product in which multiple nodes form one cluster (for example, distributed storage) is still submitted as one SBOM per product. For how to determine the SBOM unit, see the multi-node cluster section of [Server SBOM](../server-delivery/).

## If the manufacturer cannot provide an SBOM

If the manufacturer replies that it cannot provide an SBOM, contact [opensource@sktelecom.com](mailto:opensource@sktelecom.com) before generating and submitting one by other means.

## Related Documents

- [Submission Requirements](../requirements/): required formats and data fields
- [Validation Checklist](../checklist/): items to verify before submission
- [Submission Process](../submission/): naming conventions and submission channels
- [Server SBOM](../server-delivery/): the SBOM unit for multi-node clusters
