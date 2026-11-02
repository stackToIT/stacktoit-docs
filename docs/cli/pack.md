---
title: pack
description: Create a shareable Migration Evidence Pack from a completed assessment.
---

`pack` packages the files of a published run that are recorded in its verified manifest. It includes a pack manifest with information about the run and file hashes.

## Syntax

```sh
stacktoit pack RUN_DIR --out FILE.zip
```

## Example

```sh
stacktoit pack ./terraform-stacktoit --out ./migration-evidence.zip
```

The command verifies the run's manifest before producing the archive. It refuses inconsistent or incomplete run folders, and does not overwrite an existing output ZIP. Save the pack outside `RUN_DIR`.

The pack contains published assessment and migration artifacts, not an automatic copy of your original Terraform source. Review package contents and the data-handling policy before distribution.

For read-only verification without packaging, use [`stacktoit verify`](verify.md).
