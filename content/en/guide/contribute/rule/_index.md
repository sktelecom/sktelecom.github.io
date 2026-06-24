---
title: "SK Telecom Open Source Contribution Rules"
linkTitle: "Contribution Rules"
weight: 10
type: docs
description: >
  The rules to follow when contributing to external open source projects.
---

SK Telecom respects the value of collaborating with the open source community and encourages its members to contribute to external open source projects. However, there are several rules to follow in order to protect SK Telecom's intellectual property and to prevent unintentional copyright infringement.

## Obtain Approval

From a copyright perspective, an open source contribution grants the project the right to modify, use, and distribute the author's work. In some cases you may even have to assign your copyright to the project. Generally, the copyright of works created during employment is owned by the employer, so works created by SK Telecom members are owned by SK Telecom. Contributing at your own discretion can create unnecessary copyright-infringement issues.

Therefore, if there is a project you want to contribute to, follow the review request and approval steps in the [Contribution Process](../process/) before your first contribution.

## Contribute Only Code You Have the Right to Contribute

Contribute only code you wrote yourself. Do not contribute third-party code at your own discretion.

## Be Careful About Disclosing Intellectual Property

Do not contribute code or documents that risk disclosing the company's intellectual property, such as sensitive information or patents. If the code contains a company patent, confirm whether the patent may be contributed under the project's open source license. If anything is unclear, contact OSRB.

Note that when you contribute under a license with an explicit patent grant, such as Apache-2.0 or GPL-3.0, you may also grant a license to the company patents needed to implement the contributed code. If patents are involved, request an OSRB review before contributing.

## Do Not Contribute Substandard Code

Do not contribute substandard code. It can affect the company's reputation.

## Be Careful When Signing a CLA

Some projects require all contributors to sign a CLA (Contributor License Agreement). This agreement reduces copyright disputes that may arise as a project manages works from many contributors. Projects led by large companies typically require one.

CLAs differ from project to project, but they mainly ask you to agree to the following.

- I (or my company) have the right to contribute this contribution (that is, I am its author).
- I (or my company) grant the project the authority to modify, distribute, and manage my contribution.
- I (or my company) will not revoke the authority I have granted.
- I (or my company) grant the project the authority to change the license in the future.
- I (or my company) grant the project and its users a license to any patents embodied in the contribution.

In rare cases, some CLAs also require agreement to the following.

- I (or my company) assign my copyright to the project or its managing organization upon contributing.

To protect its intellectual property, SK Telecom does not permit contributions to projects that require copyright assignment. Therefore, if a project requires a CLA, request an OSRB review before signing. Most CLAs are fine to sign, so approval does not take long.

Many projects require a DCO (Developer Certificate of Origin) instead of a CLA. A DCO does not assign or separately grant copyright or patent rights; it certifies, through a Signed-off-by line in the commit, that the contribution is yours and that you have the right to contribute it. See [Submitting Contributions](../submit/) for how to sign off.

## Indicate Copyright

The intellectual property of works a member creates during employment is, by default, owned by the company. So when contributing code to an external project, indicate SK Telecom's copyright. When contributing one or more files, add the copyright and license at the top of the file as follows.

```
SPDX-FileCopyrightText: Copyright {year} SK TELECOM CO., LTD.
SPDX-License-Identifier: {SPDX_license_id}
```

- Use the file's creation year for `{year}`.
- Set `{SPDX_license_id}` according to the project's license policy.
- If you are only modifying existing code (for example, a bug fix), you do not need to add a copyright notice for that change.

This notation follows the REUSE standard and matches the format used in [Copyright and License Notice](../../release/process/copyright/).

## Use Your Company Email

When contributing, use your SK Telecom email rather than a personal one. This gives members a sense of responsibility for representing the company in the community, and it improves SK Telecom's recognition as an active open source contributor.
