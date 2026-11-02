---
title: verify
description: Verify a published assessment run and compare it with another run.
---

`verify` checks a finished run against its manifest and checks whether the generated artifacts agree with each other.

## Syntax

```sh
stacktoit verify RUN_DIR [--same-as OTHER_RUN_DIR] [--output text|json]
```

## Verify a run

```sh
stacktoit verify ./terraform-stacktoit
```

## Compare two runs

```sh
stacktoit verify ./migration-new --same-as ./migration-previous
```

The comparison can identify the same run, the same inputs, content that cannot safely be compared or different inputs. When comparable files conflict, verification reports the difference.

## JSON output

```sh
stacktoit verify ./terraform-stacktoit --output json
```

Verification examines file integrity, expected schema versions and cross-artifact consistency. It does **not** provide a digital signature or prove that infrastructure changes occurred in the cloud. Exit code `0` means the verification succeeded; exit code `6` indicates refusal due to findings.
