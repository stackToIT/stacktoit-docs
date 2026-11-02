---
title: CLI automation
description: Use machine-readable output and exit codes in automation.
---

The `assess` command supports JSON Lines output for integration with engineering pipelines and other tooling.

```sh
stacktoit assess ./terraform --format json > assessment-events.jsonl
```

Each line is a JSON record. The terminal summary is represented as a summary record; diagnostic messages are emitted as event records.

## Use strict mode in gates

```sh
stacktoit assess ./terraform --strict --format json > assessment-events.jsonl
```

The `--strict` option makes partial or unverified results return a non-zero exit code while still writing the report. This allows a pipeline to preserve artifacts for inspection even when the quality gate is not satisfied.

## Verify published artifacts

```sh
stacktoit verify ./terraform-stacktoit --output json
```

A verification result is not proof that a migration was executed in the cloud. It confirms the integrity and internal consistency of the published run.

See [Exit codes](../cli/exit-codes.md) for reliable handling of each result.
