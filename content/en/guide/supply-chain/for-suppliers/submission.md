---
title: "SBOM Submission Process"
linkTitle: "Submission Process"
weight: 7
type: docs
description: >
  Explains the submission channels for the prepared SBOM file, the email template, and the post-submission process.
---

## 1. Submission Unit

The submission unit is one SBOM per product. A product where several nodes form one cluster is no exception; you do not need one per node.

*   If all nodes have the same configuration, generate from a single representative node and submit that.
*   If the installed software differs by node role (for example a management node and a storage node), generate per role and merge all of them into one submission.

A server generated as separate layers is likewise merged into one before submission. For how to merge, see [How to Generate an SBOM](../creation-guide/#merge-into-one-and-submit).

## 2. When to Submit
*   At initial delivery after concluding a software contract
*   When a major or minor version of the software is updated
*   When a regular submission schedule specified in the contract arrives

## 3. How to Submit

The SBOM file is submitted to SK Telecom's business unit and security team representatives via email (or a channel designated by the representative).

- Email subject: `[SBOM Submission] SupplierName_ProjectName_Version`
- Attachment: The generated SBOM file (password-protected archive files are not allowed)

Required information in the body:

1. Delivery contract number
2. Representative information (name, department, contact)
3. Project information (system name, detailed version)
4. Tool used and its version (e.g., BomLens, cdxgen)

## 4. Post-Submission Validation and Actions

The submitted SBOM is registered in TOSCA, the internal open source and SBOM management system, and then validated according to the procedure below. TOSCA is an internal system, so suppliers do not need access to it.

| Stage | Description | Processing Deadline |
| --- | --- | --- |
| Format validation | Check for missing required fields. Notify of rejection if not met | Within 3 days of receipt |
| Security vulnerability analysis | Automatically analyze whether Critical/High severity vulnerabilities are detected | - |
| Action request | Request a patch plan or a written justification when serious vulnerabilities are found | Critical: 7 days / High: 30 days |

The validation results and action requests are communicated to the supplier and the security team representative through the business unit representative.

## Related Documents

* [Validation Checklist](../checklist/): Essential items to verify before submission
* [Common Rejection Reasons](../rejection-reasons/): Identifying causes and remediating after a rejection
* [Submission Requirements](../requirements/): SBOM format and required data fields
* [Supplier Guide Home](/en/guide/supply-chain/for-suppliers/): View the full process flow
</content>
