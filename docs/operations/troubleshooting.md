---
title: Troubleshooting
description: Diagnose common source, validation, output and pricing conditions.
---

## A remote module is unavailable

Check the module source and network access. StackToIT first uses module data available in the source and local caches, then attempts permitted downloads. With `--offline`, only local data is available. The report identifies which resources depend on unavailable modules.

## Validation is marked NOT RUN

The summary names the reason. A common one is a missing `.terraform.lock.hcl`, because validation only uses the provider packages that file records. See [Validation](validation.md) for the conditions and the options that change them.

## Cost items are UNPRICED

A price may be absent, outside the selected scope or unavailable in the cache. Inspect the financial coverage information and then run:

```sh
stacktoit prices status
stacktoit prices refresh --provider stackit
```

For AWS prices, name the source region:

```sh
stacktoit prices refresh --provider aws --region eu-central-1
```

## Output folder is busy

A run ends with exit code `5` when its output folder is in use by another run. Choose a new folder with `--out`; do not remove lock files from an active run.

Reusing a finished output folder is allowed. The previous run moves to `OUT/previous-<run id>/`, or is removed with `--replace`.

## A decision remains open

Review `inputs-template.yaml` and `decisions-template.yaml`, supply a valid answer or review, and rerun the assessment. A review record is not itself a generated configuration change.

## A command or option is not recognized

Inspect the installed CLI version and the command's current help:

```sh
stacktoit version
stacktoit help
stacktoit help assess
stacktoit assess --help-all
```
