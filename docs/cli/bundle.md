---
title: bundle
description: Preview and create a SourceBundle for an infrastructure assessment.
---

`bundle` prepares a portable ZIP archive of a Terraform or OpenTofu root module for assessment. It provides a file-inclusion preview so the sender can inspect what would be included.

## Syntax

```sh
stacktoit bundle ROOT [--out FILE.zip] [--acknowledge CLASS]... [--preview]
```

## Preview a bundle

```sh
stacktoit bundle ./terraform
```

Without `--out`, this command previews the bundle and writes no archive. `--preview` also suppresses writing if an output path was given.

## Create a bundle

```sh
stacktoit bundle ./terraform --out ./source-bundle.zip
```

The bundle contains the relevant root configuration and a manifest. Selected file classes can be included by explicit acknowledgement:

```sh
stacktoit bundle ./terraform --out ./source-bundle.zip --acknowledge variable_file
```

Accepted opt-in classes include `variable_file`, `referenced_input`, `module_downloaded` and `documentation`. The `module_local` class is also accepted but does not include local modules outside the root.

## Assess a SourceBundle

```sh
stacktoit assess --input bundle ./source-bundle.zip ./migration
```

Review the preview carefully. Bundle creation does not sanitize the contents of a file that is selected for inclusion. An existing output ZIP is not overwritten.
