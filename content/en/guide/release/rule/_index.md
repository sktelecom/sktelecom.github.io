---
title: "SK Telecom Open Source Release Rules"
linkTitle: "Release Rules"
weight: 11
type: docs
description: >
  Describes SK Telecom's open source release rules.
---

SK Telecom respects the value of collaboration with open source communities and encourages releasing internal software as open source projects. However, there are several rules that must be observed in order to protect SK Telecom's intellectual property and to prevent unintended copyright infringement.

  - [Obtain Approval](#obtain-approval)
  - [Release Only Code You Have the Right to Release](#release-only-code-you-have-the-right-to-release)
  - [Be Careful About Exposing Intellectual Property](#be-careful-about-exposing-intellectual-property)
  - [Do Not Release Substandard Code](#do-not-release-substandard-code)
  - [Release Useful Code](#release-useful-code)
  - [Secure Resources](#secure-resources)
  - [Use Your Company Email](#use-your-company-email)

## Obtain Approval
From a copyright perspective, an open source release is the granting, through an open source license, of the right for anyone to modify/use/distribute the author's work. Generally, the copyright of a work created during employment is owned by the employer. That is, a work created by an SK Telecom member is owned by SK Telecom. If a member releases a work as open source arbitrarily, it can cause unnecessary copyright infringement issues.

Therefore, if you want to release software as open source, follow the review request and approval process in accordance with SK Telecom's open source release policy. [Open Source Release Process](/en/guide/release/process/)

If anything seems undesirable during the release process, do not hesitate to contact the OSPO.

## Release Only Code You Have the Right to Release
You do not have the right to release code that you did not write.

One of the worst situations that can occur in an open source project is the inclusion of legally problematic code in the project. Code that the company does not have the right to distribute, or code that infringes IP such as another company's patents, can cause legal problems. Therefore, when preparing the code to be released, verify the origin of all code and remove any code that could be problematic.

## Be Careful About Exposing Intellectual Property
Do not release code or documents that raise concerns about exposing the company's intellectual property, such as sensitive information or patents.

If the code you want to release contains a company patent, verify whether it is acceptable to release that patent under an open source license. If anything is ambiguous, contact the OSPO.

## Do Not Release Substandard Code
The readability and maturity of code serve as a measure of whether it is ready to be released as open source. Immature code causes the project to lose the community's trust.

That said, the code does not have to be perfect. If you try to prepare the code to be perfect, you may never be able to start at all. Prepare it to the best level possible in the given environment and release it. Once the community becomes active, external contributors will participate in improving the code.

## Release Useful Code
To become a successful project, it must also be useful to others. If a similar project already exists, it is better to participate in the existing project than to create a new one. Even if it is a project driven by a competitor, collaboration is important in open source. By participating and collaborating together, everyone can have excellent code.

You should not assume that the community will manage code unconditionally just because you release it, even if it is no longer useful. The open source community is not an organization that manages old code on your behalf. In fact, if a company repeatedly releases unattractive code, it will lose trust in the open source world, and later, even if it releases other code as open source, developers will pay no attention.

You should be able to expect that the open source you release will be a project that (1) provides differentiated value to the open source community, (2) solves problems the community has not been able to solve, and (3) can attract positive attention by showcasing our technical capabilities.

* If it is code that you were unable to use in an actual product or service, it is best not to release it as open source either. If you cannot persuade people to use it even in our own products, it is not easy to persuade others to use it.
* Do not release code that addresses a problem the open source community has already solved. In such a case, it is better to contribute to an existing open source project.

If you determine that the code you want to release can be useful externally as well, continue with the release process.

## Secure Resources
You must secure the resources, including developers, that need to be allocated to the project.

* In the early stages, you need developers at a level similar to a typical in-house project.
* You also need developers who can quickly review external contributions.
* In addition, the roles of the legal and marketing teams are needed.
* You must also secure a budget for the infrastructure required to maintain and manage the project. This includes tools for project hosting such as GitHub.

If you cannot create an environment with sufficient resources, it is best not to release the project as open source.

## Use Your Company Email
When engaging in open source release activities, do not use a personal email; use your SK Telecom email. Through this, (1) members gain a sense of responsibility that they are communicating with the community on behalf of the company, and (2) SK Telecom can improve its recognition as a company that actively engages in open source community release activities.

For how to set up your email on GitHub, refer to the following [Link](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address).
