---
title: "Consume Open Source"
linkTitle: "Consume"
weight: 10
type: docs
description: >
  Using open source correctly
---

Open source has become such a core element of software development that developing a product or service without using open source can be considered virtually impossible. By using open source, you can shorten software development time while also strengthening service stability and security. However, when you use open source, you must check what its license is and comply with the obligations the license requires.

This section explains how to take external open source and use it correctly in SK Telecom's products or services, along with the points that require attention.

## Considerations When Choosing Open Source to Use

If you have decided to use open source to implement a needed feature, which one should you choose among the several open source projects that offer similar functionality? Let's look at the points to consider from various angles.

* [Considerations When Choosing Open Source](/en/guide/use/choose)

## Open Source Compliance Activities
To avoid creating legal problems when a company develops products/services using open source, it must check the open source licenses and comply with what each license requires. These activities are called open source compliance. SK Telecom members must carry out appropriate compliance activities while using open source.

### What Is an Open Source License?
To use open source correctly, you must first understand copyright and open source licenses.

* Copyright protects software. When software is developed, copyright law prohibits anyone other than the copyright holder from using, copying, modifying, or distributing that software.
* The purpose of open source is to allow many people to freely use, modify, and distribute it. For this, a license that explicitly grants these rights is required. This is called an open source license, and software to which no open source license applies is not open source. If it is not open source, no one other than the copyright holder may use, copy, modify, or distribute that software.

For details about open source licenses, refer to the following page.
* [What Is an Open Source License?](/en/guide/use/license)

### Checking the License
An open source license can be checked in several ways, even without using analysis tools.  
For how to check the license of the open source you intend to use, refer to the following page.
* [Checking an Open Source License](/en/guide/use/check)

### Obligations by License
SK Telecom strongly encourages the use of open source when developing products/services. However, to protect SK Telecom's intellectual property, the obligations required by each open source license must be observed. SK Telecom members must understand these, check the license when using open source, and comply with the obligations. To learn which open source licenses require caution, see the following page.
* [Obligations by Open Source License](/en/guide/use/obligation)

### License Obligation Compliance Activities
When distributing SK Telecom's products/services that include open source, you must comply with what each open source license requires. Depending on the open source license, some require only notice obligations, while others go as far as requiring source code disclosure.

* Notice obligation: At a minimum, you must comply with the notice obligations required by most open source licenses, such as "copyright notice" and "license notice." For example, a mobile application distributed by SK Telecom can provide the required notices through an "About" page.
* Source disclosure obligation: When distributing software that includes open source under a Copyleft license that requires source code disclosure, you must either provide the source code directly to the user or provide a written offer to supply the source code upon the user's request.

Activities that minimize legal risk by complying with open source license obligations in this way are called open source compliance.

{{% alert title="Requesting an Open Source Notice" color="warning" %}}
For open source compliance activities such as issuing notices, SK Telecom development organizations should finalize the open source to be used at the analysis/design completion stage of the development process and then request a review through ITGO.

* http://link-removed

The responsible department (IPR Team, Legal & Compliance Management Group) reviews the request and issues the open source notice to be used for the notification.

{{% /alert %}}

## Open Source Security Vulnerability Review Activities
### Self-Inspection
#### Checking CVE
[CVE](https://cve.mitre.org/index.html) provides a database of known open source security vulnerabilities. You can search for the open source you intend to use in CVE to check whether it has any known security vulnerabilities.

#### Checking GitHub
GitHub, the representative open source repository, detects vulnerable dependencies in public repositories and generates [Dependabot](https://docs.github.com/en/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies) alerts.

### Requesting a Security Vulnerability Assessment
SK Telecom operates tools for assessing open source security vulnerabilities. You can request an assessment from the responsible department (Information Security).
* [Request an Open Source Security Vulnerability Assessment](http://link-removed/)

## SK Telecom Open Source Policy
For the SK Telecom open source policy, departmental R&R, and verification process, refer to the following page.
* [Open Source Review Process (internal only)](https://link-removed/)


---

{{% alert title="Inquiries" color="success" %}}
For inquiries/requests when using open source, contact the OSPO: [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/)
{{% /alert %}}
