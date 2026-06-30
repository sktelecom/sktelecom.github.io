---
title: "SK Telecom Open Source Contribution Process"
linkTitle: "Contribution Process"
weight: 20
type: docs
description: >
  How to get a contribution approved and proceed.
---

In accordance with the SK Telecom [Contribution Rules](../rule/), members follow the process below when contributing to external open source projects. If your contribution falls under the cases that need no approval (see the [overview](../) decision flow), you may skip this process.

![process](./contribution-process.png)

## 1. Internal Approval Within Your Organization

Before starting to contribute to an open source project, obtain approval from the responsible executive or leader of your organization.

## 2. Request a Review

After internal approval, request a review from OSRB (opensource@sktelecom.com). Filling in the checklist below speeds up the review.

### Submission Checklist

- [ ] Open source project name
- [ ] Repository URL
- [ ] Project license
- [ ] Purpose of the contribution
- [ ] Summary of the contribution
- [ ] Internal approval status
- [ ] Whether the project requires a CLA or DCO

### GitHub Issue Template

Accepting requests through an internal issue tracker or GitHub organization with the template below lets contributors provide everything just by filling in the blanks.

```markdown
### Open Source Contribution Review Request

- Project name:
- Repository:
- License:
- Purpose:
- Summary of contribution:
- Internal approval (executive/leader):
- CLA/DCO required:
```

### Expected Turnaround

The review covers the license and any CLA. Simple checks finish quickly; cases that need further review take longer.

OSRB reviews the project's license and CLA and approves the request if there are no issues.

## 3. Scope After Approval

Once a project is approved, members may contribute to it at their own discretion thereafter. Request a new review when contributing to a different project.

## 4. Review the Project's Contribution Documents

The required process differs slightly between projects. Before contributing, check the project's CONTRIBUTING or README to understand the following.

- Guidelines on coding style, language, formatting, issue/ticket management, release timing, and so on
- Whether a CLA signature or a DCO Signed-off-by is required
- How patches are submitted (GitHub Pull Request or mailing list)

## 5. Submit Your Contribution

After improving your code per the [Contribution Rules](../rule/), [submit it](../submit/) in the way the project requires.
