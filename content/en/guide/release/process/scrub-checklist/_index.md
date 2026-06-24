---
title: "Code Scrubbing Checklist"
linkTitle: "Code Scrubbing Checklist"
weight: 30
type: docs
description: >
  Removing sensitive information and secrets before release.
---

Before releasing, remove sensitive information from the code and the commit history. Check the items below.

## Checklist

- [ ] Remove author names and emails from comments
- [ ] Remove internal information: file paths, hostnames, IP addresses
- [ ] Remove secrets: passwords, tokens, API keys, certificates
- [ ] Remove internal URLs and references to internal systems
- [ ] Run an automated secret scan
- [ ] Remove sensitive information left in the commit history

## Secret Scanning

Manual review misses things. Run an automated secret scanner such as gitleaks, and include it in the pre-release pipeline where possible.

```bash
$ gitleaks detect --source . --redact
```

## Cleaning the Commit History

If a secret was ever committed, deleting it from the current file does not remove it from history. Remove it from history with git filter-repo.

```bash
$ git filter-repo --invert-paths --path secrets.env
```

Rewriting history changes every commit hash and affects existing clones and shared history, so do it only in a fresh repository prepared for release.

## Search Examples

To quickly scan for leftover keywords:

```bash
$ grep -rIn -e "password" -e "token" -e "BEGIN PRIVATE KEY" .
```
