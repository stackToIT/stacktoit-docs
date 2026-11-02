---
title: CLI reference
description: Command-line reference for StackToIT assessments, migration packages and supporting tools.
---

The StackToIT CLI accepts a command followed by command-specific arguments and options.

```sh
stacktoit COMMAND [options]
```

## Commands

| Command | Purpose |
| --- | --- |
| [`assess`](assess.md) | Assess infrastructure and generate a migration package |
| [`bundle`](bundle.md) | Preview or package a source module as a SourceBundle |
| [`discover`](discover.md) | Collect or import an AWS inventory for comparison |
| [`explain`](explain.md) | Trace the findings for a resource, decision or semantic claim |
| [`verify`](verify.md) | Verify the integrity of a published run |
| [`pack`](pack.md) | Create a Migration Evidence Pack from a finished run |
| [`prices`](prices.md) | Inspect, refresh or import local pricing data |
| [`inputs`](inputs.md) | Migrate legacy answer files into a unified inputs file |
| [`score`](score.md) | Score architect-reviewed benchmark sheets |
| [`version`](version-help.md) | Inspect build and knowledge-base versions |
| `help` | Show usage and detailed command help |

Start with `assess`; supporting commands are used only when a workflow calls for them.

## Discover command-specific options

```sh
stacktoit help
stacktoit help assess
stacktoit assess --help-all
stacktoit help --all
```

For machine-readable assessment results, use `stacktoit assess --format json`. See [assess options](assess-options.md) and [exit codes](exit-codes.md).
