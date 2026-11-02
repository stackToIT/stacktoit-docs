---
title: Exit codes
description: Interpret command outcomes and automation results.
---

StackToIT uses distinct exit codes for normal completion, usage errors, input problems, verification and validation conditions.

| Exit code | Meaning |
| --- | --- |
| `0` | Report published successfully, including an allowed partial assessment |
| `1` | Runtime or operational error |
| `2` | Invalid command usage or arguments |
| `3` | Source or draft validation rejected the configuration |
| `4` | Incomplete source under strict rules, or an input refusal that cannot be partially reported |
| `5` | Output folder locked or in conflict with another run |
| `6` | Bundle or evidence pack refused, or a run fails verification |
| `7` | Required validation could not run, or strict validation/readiness requirements were not met |

An `assess` report can be written even when the exit code is non-zero. Automation should record the exit code **and** retain the generated artifacts where they exist.

For more demanding gates:

```sh
stacktoit assess ./terraform --strict --format json
```

`--strict` makes partial and unverified outcomes visible to orchestration systems as failures without suppressing the report.
