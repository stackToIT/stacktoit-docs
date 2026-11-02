---
title: version and help
description: Inspect the CLI build, embedded knowledge base and available command options.
---

## Version

```sh
stacktoit version
stacktoit version --output json
```

The version result identifies the binary build, source provider versions, STACKIT provider version, knowledge base and output schema information. Record it alongside assessment artifacts for reproducibility.

## Help

```sh
stacktoit help
stacktoit help assess
stacktoit assess --help-all
stacktoit help --all
```

- `help` shows the primary usage and command index.
- `help assess` explains the assessment options and their behavior.
- `assess --help-all` includes advanced assessment options.
- `help --all` prints the complete CLI reference, including the command descriptions and exit codes.

If the published documentation and the installed binary differ, use the installed command's help for the exact build being run.
