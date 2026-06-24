---
title: "Copyright and License Notices in Files"
linkTitle: "Copyright Notices"
weight: 20
type: docs
description: >
  How to add copyright and license notices to source files.
---

Copyright arises automatically when a work is created. To let others use it, you must grant a license. Because most open source licenses require a copyright notice, include a copyright notice and license identifier in every source file SK Telecom releases. The notation follows the REUSE standard.

## Copyright Notice

Add the following to the top of each source file.

```
SPDX-FileCopyrightText: Copyright {year} SK TELECOM CO., LTD.
```

- Use the first year of authorship for `{year}`.
- A contact or website is optional. This format matches the [copyright notation in the Contribution Rules](../../../contribute/rule/).

## License Identifier

Find the identifier in the SPDX License List and add it at the top of the file.

```
SPDX-License-Identifier: Apache-2.0
```

![license-list](license-list.png)

## Automation Tools

For many files, apply notices in bulk. To generate REUSE-standard SPDX tags (`SPDX-FileCopyrightText`, `SPDX-License-Identifier`), use `reuse annotate` from the [REUSE tools](https://reuse.software/).

```bash
$ reuse annotate --copyright "SK TELECOM CO., LTD." --license Apache-2.0 [filename]
```

[addlicense](https://github.com/google/addlicense) inserts a license header by default; use the `-s` option for the SPDX short form.

```bash
$ addlicense -s -c "SK TELECOM CO., LTD." -l apache [filename]
```

Example for applying to Java files in bulk:

```bash
$ find . -type f -name \*.java -exec addlicense -s -c "SK TELECOM CO., LTD." -l apache {} \;
```
