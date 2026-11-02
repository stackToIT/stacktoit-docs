---
title: assess
description: Analyze source infrastructure and generate STACKIT assessment and migration artifacts.
---

`assess` is the primary StackToIT command. It reads an infrastructure source, analyzes its resources and dependencies, and creates a report, target draft and execution package as applicable.

## Syntax

```sh
stacktoit assess [SOURCE] [OUTPUT] [options]
```

`SOURCE` defaults to the current directory. Without an explicit output path, StackToIT creates a sibling folder named after the source with a `-stacktoit` suffix.

## Examples

Assess the current root module:

```sh
stacktoit assess
```

Assess a selected Terraform directory:

```sh
stacktoit assess ./terraform
```

Select an output directory:

```sh
stacktoit assess ./terraform ./migration
stacktoit assess ./terraform --out ./migration
```

Use local dependencies only:

```sh
stacktoit assess ./terraform --offline
```

Write an assessment without a target draft or execution package:

```sh
stacktoit assess ./terraform --analysis-only
```

Skip validation or require strict exit codes:

```sh
stacktoit assess ./terraform --no-validate
stacktoit assess ./terraform --strict
```

## Common options

| Option | Description |
| --- | --- |
| `--offline` | Prevent network requests |
| `--analysis-only` | Write the assessment without the migration execution package |
| `--no-validate` | Skip the automatic OpenTofu validation attempts |
| `--profile NAME` | Select a profile when using a project |
| `--strict` | Return non-zero for partial or unverified results |
| `--verbose` | Include detailed engineering console output |
| `--format json` | Write JSON Lines to standard output |
| `--out DIR` | Set the output directory |

## Outputs

The main deliverables include `index.html`, `assessment.json`, `decisions.json`, `target-plan.json`, `execution-plan.json`, `terraform/` and `execution/`. The actual file set depends on the source and run options.

The command does not automatically apply the Terraform draft or run cloud migration steps. Review the generated plan, resolve decision requests and follow the relevant change-control procedure before carrying out migration work.

See [all assess options](assess-options.md) and [results and deliverables](../concepts/outputs.md).
