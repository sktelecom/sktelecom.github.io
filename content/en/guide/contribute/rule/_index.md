---
title: "SK Telecom Open Source Contribution Rules"
linkTitle: "Contribution Rules"
weight: 11
type: docs
description: >
  Explains SK Telecom's open source contribution rules.
---
SK Telecom respects the value of collaborating with the open source community and, to that end, encourages its members to contribute to external open source projects. However, there are several rules that must be followed to protect SK Telecom's intellectual property and to prevent unintentional copyright infringement.

{{% alert title="Inquiries" color="success" %}} If any situation seems somehow undesirable, do not hesitate to contact the OSPO: [Support (opensource@sktelecom.com)](https://sktelecom.github.io/about/contact/) {{% /alert %}}

## Obtain Approval
From a copyright perspective, open source contribution grants the open source project the right to modify, use, and distribute the author's work. In some cases, you may even have to assign your copyright to the open source project. Generally, however, the copyright of works created during employment is owned by the employer. That is, works created by SK Telecom members are owned by SK Telecom. A member contributing a work to open source at their own discretion can create unnecessary copyright infringement issues.

Therefore, if there is an open source project you want to contribute to, follow the review request and approval process before your first contribution, in accordance with SK Telecom's open source contribution policy.

* [Open Source Contribution Process](/en/guide/release/process)

## Contribute Only Code You Have the Right to Contribute
Contribute only code you have the right to contribute. That is, contribute code you wrote yourself. You must not contribute third-party code at your own discretion.

## Be Careful About Disclosing Intellectual Property
Do not contribute code or documents where there is a concern about disclosing the company's intellectual property, such as sensitive information or patents.

If the code you want to contribute contains a company patent, confirm whether it is permissible to contribute this patent to the project under an open source license. If anything is unclear, contact the OSPO.

## Do Not Contribute Substandard Code
Do not contribute substandard code. This can affect the company's reputation.

## Be Careful When Signing a CLA
Some open source projects require all contributors to sign a CLA (Contributor License Agreement). This is an agreement that seeks contributors' consent in order to reduce copyright disputes that may arise as the project manages works from many contributors. Projects led by large companies typically require signing a CLA.

CLAs differ from project to project, but they mainly contain agreement to the following.

~~~
- I (or my company) have the right to contribute the contribution I am about to contribute to the project. (That is, I am the author of this contribution.)
- I (or my company) grant the project the authority to modify, distribute, and manage my contribution.
- I (or my company) will not revoke the authority I have granted.
- I (or my company) grant the project the authority to change the license in the future as needed.
~~~

In addition, although it is rare, some CLAs require agreement to the following condition.

~~~
- I (or my company), upon contributing my contribution, assign my copyright to the project or the project's managing organization.
~~~

To protect its intellectual property, SK Telecom does not permit contributions to open source projects that require copyright assignment. To make this determination, if an open source project you want to contribute to requires signing a CLA, you must request an OSPO review before signing: Open Source Contribution Process.

Most CLAs are not problematic to sign, so the approval process does not take long.

## Indicate Copyright
The intellectual property of works created by a member during their employment is, by default, owned by the company. Therefore, when contributing code to an external open source project, members must indicate SK Telecom's copyright.

When contributing one or more files, indicate the copyright and license at the top of the file as follows.

~~~
Copyright 2021 SK TELECOM CO., LTD.
SPDX-License-Identifier: {$SPDX_license_name}
~~~

* Here, $SPDX_license_name is written according to the license policy of the relevant open source project.
* However, if you are merely modifying existing code for purposes such as bug fixes, there is no need to indicate copyright for that code modification.
* For detailed copyright and license notation rules, refer to the following page: [Copyright and License Notice Within Files](/en/guide/release/process/copyright)

## Use Your Company Email
When contributing to open source projects, do not use your personal email; use your SK Telecom email. Through this, (1) members gain a sense of responsibility that they are communicating with the community on behalf of the company, and (2) SK Telecom can improve its recognition as a company that actively contributes to the open source community.

* For how to set up your email on GitHub, refer to the following [Link](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address).
