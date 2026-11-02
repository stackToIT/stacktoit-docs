---
title: Security and network access
description: Understand local execution, dependency downloads and credential boundaries.
---

## Local assessment

`stacktoit assess` reads source configuration on the machine where it runs and writes the assessment and migration artifacts to a local output directory. It does not upload the source or deploy to the source or target cloud.

## Network behavior

By default, StackToIT may retrieve missing remote Terraform modules, provider packages and public price data that are needed for an assessment or validation. The source configuration is not uploaded as part of those operations.

Use offline mode to prevent outbound requests:

```sh
stacktoit assess ./terraform --offline
```

When dependency data is unavailable, the assessment identifies the missing evidence and affected output instead of silently assigning a successful status.

## Validation isolation

Where supported by the operating system and available providers, OpenTofu validation is attempted inside a network-denied sandbox. If that isolation or a required provider is unavailable, validation is reported as not run unless the user explicitly requires it.

## Optional AWS inventory

The `discover aws` command is distinct from assessment. It uses the user's own AWS CLI identity and collects read-only inventory data, which is then saved locally for comparison. Normal `assess` operation does not require AWS or STACKIT credentials.

## SourceBundle handling

`stacktoit bundle` displays a preview before packaging. Files are included according to their inclusion classes, but an included file's contents are not automatically rewritten to remove secrets. Review the preview and the files you choose to include before sharing the archive.
