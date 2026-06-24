---
title: "SK Telecom Open Source Release Process"
linkTitle: "Release Process"
weight: 20
type: docs
description: >
  How to get a release approved, prepare it, and publish it.
---

The release process runs in four stages: get approval (A), prepare the code (B), set up the project (C), then release and operate it (D).

![release process](release-process.png)

## A. Release Approval

### Internal Approval Within Your Organization

To release software, obtain approval from the responsible executive or leader of your organization.

### Request a Review

After internal approval, request a review from OSRB (opensource@sktelecom.com). Fill in the checklist below.

- [ ] Link to the current source repository
- [ ] Link to the planned public repository
- [ ] Open source license to apply
- [ ] Expected business value of releasing
- [ ] Description of code not written by SK Telecom members
- [ ] Development team executive approval
- [ ] Product or service the code is used in
- [ ] Whether support staff are assigned after release
- [ ] Whether the release is ready
- [ ] Promotion plan (blog, conference, etc.)
- [ ] Related patents
- [ ] Security vulnerability review and remediation
- [ ] Export control classification (ECCN) check

Expected turnaround depends on the review scope.

## B. Release Preparation

### Decide the License

SK Telecom applies Apache-2.0 by default. A different license may apply, for example when the ecosystem favors a specific license or when there is a dependency on a GPL library. See [License Selection](license-select/) for the criteria.

### Separate Third-Party Code

Confirm SK Telecom has the right to redistribute, and move external libraries into a `third_party` directory with a LICENSE file in each.

```
[Root Directory]
|-- SKT source code
|-- ...
`-- third_party
    |-- [external library A]
    |   |-- LICENSE
    |   `-- ...
    `-- [external library B]
        |-- LICENSE
        `-- ...
```

### Copyright and License Notices

Add copyright and license notices to every source file, following the REUSE standard. See [Copyright and License Notice](copyright/). Include a LICENSE file in the project root: use the official copy for Apache-2.0, and obtain others from the [SPDX License List](https://spdx.org/licenses/).

### Code Scrubbing

Before releasing, remove author names and emails from comments, internal information (file paths, hosts, IPs), and secrets such as credentials. See the [Code Scrubbing Checklist](scrub-checklist/) for the items and automation.

### License and Security Review Request

Check for licenses with notice or source-disclosure obligations, third-party code you have no right to redistribute, and license conflicts. Also confirm whether any vulnerable open source is included. Request the review from OSRB.

### Export Control Classification (ECCN)

Because controlled technology such as cryptography may be included, check the export control classification before releasing. For a Korean company, the Foreign Trade Act strategic-item determination is the primary basis; if U.S.-origin technology is included, also check the ECCN under the U.S. Export Administration Regulations (EAR). If classification or review is needed, have the responsible department confirm it through OSRB.

## C. Project Setup

### Decide the Name

Choose a memorable name that conveys the project. See [Naming the Project](name/) for the criteria, including trademark checks.

### Repository and Infrastructure

A GitHub or GitLab repository is recommended. Request membership in the SK Telecom GitHub organization (https://github.com/sktelecom) through OSRB. Provide the following.

- Issue tracker
- Test automation: unit, integration, and end-to-end tests
- CI/CD: continuous build, deployment, and monitoring
- Website: for user guides and promotion (GitHub Pages recommended)
- Communication channels: do not discuss company confidential information in public channels

### Governance and CODE_OF_CONDUCT

Clearly define member roles. Add a CODE_OF_CONDUCT defining participant conduct, including non-discrimination, a safe environment, and how to report violations. Adopt the de facto standard Contributor Covenant, and set the reporting contact and enforcement procedure.

### Contributor Licensing Policy (CLA/DCO)

If you plan to accept external contributions, decide the contributor licensing policy. Adopt either a CLA (Contributor License Agreement) or a DCO (Developer Certificate of Origin) to clarify copyright and license rights. A DCO is a lightweight Signed-off-by certification; a CLA is a separate agreement. CLAs that require copyright assignment are restricted by company policy, so keep this consistent with the [CLA section of the Contribution Rules](../../contribute/rule/).

### Vulnerability Reporting (SECURITY.md)

A public project receives vulnerability reports from outside. Define the reporting path and response procedure in SECURITY.md.

```markdown
# Security Policy

## Reporting a Vulnerability
Do not open a public issue. Report privately to <security contact>.
We will respond within <response time>.

## Supported Versions
List the version ranges that receive security fixes.
```

Enable GitHub Private Vulnerability Reporting as the intake channel. Set the response time, the principle of coordinated disclosure, and the procedure for CVE assignment and security advisories.

### Documentation

Provide the following.

- README: what the project does, why it is useful, how to start, where to get help
- Development guide: how to build, test, coding conventions, CI/CD, release
- CONTRIBUTING: how to report bugs and propose features, dev setup, desired contributions, vision and roadmap, maintainer contact

## D. Release and Operation

### Final Checks Before Release

- Confirm all code and documents are in the repository
- Confirm the infrastructure is running, secure, and scalable
- Confirm developers can join the communication channels

### Release

Release publicly at https://github.com/sktelecom.

Releasing is hard to reverse. Once public, code can be copied and kept by others, so confirm that all pre-release checks are complete.

### Marketing and Community

Announce on relevant community mailing lists and forums, and promote through the tech blog, social media, and conferences. A project's success is gauged by participation and contributions, and building a community takes ongoing effort.

### Lifecycle Operation After Release

Releasing is not the end. Keep up the following.

- Regular health checks: respond to issues and PRs, maintain a release cadence
- Ongoing security and bug fixes: address reported vulnerabilities
- End of life (EOL): when no longer maintained, state the status clearly and archive the repository
