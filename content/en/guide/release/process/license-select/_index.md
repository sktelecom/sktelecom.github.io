---
title: "License Selection"
linkTitle: "License Selection"
weight: 40
type: docs
description: >
  How to choose an open source license for the project you release.
---

## Default: Apache-2.0

SK Telecom applies Apache-2.0 by default. As a permissive license with a patent grant, it suits projects a company releases.

## When to Consider Another License

- The ecosystem favors a specific license. Following community convention eases adoption.
- There is a dependency on a copyleft library such as GPL. You may have to follow the dependency's obligations.

## Permissive vs. Copyleft

- Permissive licenses (Apache-2.0, MIT, BSD) require little more than attribution and do not force a license on derivative works.
- Copyleft licenses (GPL, LGPL, MPL) can require derivative or combined works to be released under the same terms. The scope of the obligation varies by license.

## Check Dependency Compatibility

Make sure the chosen license does not conflict with the licenses of your dependencies. For example, a strong copyleft dependency can make a permissive release impossible. For per-license obligations, see the license obligations section under "Using," and request an OSRB review if the decision is unclear.

## References

- [choosealicense.com](https://choosealicense.com)
- [SPDX License List](https://spdx.org/licenses/)
