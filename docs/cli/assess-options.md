---
title: assess options
description: Detailed option groups for the main assessment command.
---

Run `stacktoit assess --help-all` for the full option reference of the installed binary. The groups below explain the options commonly used in advanced projects.

## Source and dependencies

| Option | Meaning |
| --- | --- |
| `--offline` | Prohibit outbound network requests |
| `--input auto\|terraform\|rvtools\|bundle` | Specify or detect source input type |
| `--var-file FILE` | Read an additional variable file; repeatable |
| `--omitted-inputs FILE` | Declare intentionally omitted source inputs |
| `--provider-mirror DIR` | Select a local provider mirror or plugin cache |
| `--fetch-timeout DURATION` | Set the remote module retrieval time budget |
| `--validate-source` | Require source validation with OpenTofu |
| `--validate-proxy-env` | Pass explicitly permitted proxy settings to validation and download processes |

## Target and financial model

| Option | Meaning |
| --- | --- |
| `--target-environment FILE` | Supply target environment facts and constraints |
| `--target-evidence ID=FILE` | Provide target evidence referenced by the environment; repeatable |
| `--validate` | Require draft validation to run |
| `--no-validate` | Skip automatic OpenTofu validation |
| `--price-cache DIR` | Select a price-cache location |
| `--assumptions FILE` | Supply financial-model assumptions |

## Decisions, ownership and comparison

| Option | Meaning |
| --- | --- |
| `--inputs FILE` | Supply typed design answers |
| `--decisions FILE` | Supply architect review records |
| `--applications FILE` | Supply explicit application groupings |
| `--progress FILE` | Supply a migration progress journal |
| `--aws-inventory FILE` | Compare source Terraform with a collected AWS inventory |
| `--environment-id ID` | Name the environment this source belongs to, so progress records stay bound to it |

## Project mode

| Option | Meaning |
| --- | --- |
| `--project DIR` | Read a project from `DIR/stacktoit.yaml` |
| `--profile NAME` | Select the project profile |

Project mode reads its source and relevant input files from the project definition; it cannot be mixed with positional source arguments.

## Output and automation

| Option | Meaning |
| --- | --- |
| `--out DIR` | Select the output directory |
| `--replace` | Replace previous generated content in a reused output folder |
| `--keep-previous` | Keep the previous run in `OUT/previous-<run id>/` (the default) |
| `--export-permissions private\|shared` | Control generated file permissions |
| `--format text\|json` | Select human-readable or JSON Lines console output |
| `--verbose` | Print detailed engineering output after the summary |
| `--strict` | Return a non-zero code for partial or unverified results |
| `--analysis-only` | Write the assessment without the migration package |

Older positive options such as `--fetch-modules`, `--allow-incomplete` and `--convert` are still accepted for compatibility with older scripts. For normal assessments, these behaviors are handled by default and do not need to be enabled.

## Benchmark options

`--units FILE` and `--blind` support controlled benchmarks. They are not needed for a standard customer migration assessment.
