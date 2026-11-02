---
title: Validation
description: When StackToIT runs OpenTofu validation, how it is isolated, and what each result means.
---

StackToIT validates the source and the generated draft with OpenTofu when the machine meets the conditions below. You do not need to enable it.

## Conditions

Both validations need OpenTofu on `PATH`, a network-denied sandbox on this host, and the provider packages in a local mirror (`--provider-mirror DIR`) or plugin cache (`TF_PLUGIN_CACHE_DIR`). Nothing is downloaded during validation.

| Validation | Also needs |
| --- | --- |
| Source | A `.terraform.lock.hcl` recording the packages, and every remote module available to the run |
| Draft | Every provider the draft pins, at its exact version, for this platform |

The sandbox uses `sandbox-exec` on macOS, and Landlock and seccomp in namespaces on Linux. A provider mirror does not replace the sandbox.

Prepare a mirror with OpenTofu, then pass it to the assessment:

```sh
tofu providers mirror ./provider-mirror
stacktoit assess ./terraform --provider-mirror ./provider-mirror
```

## Results

| Result | Meaning | Exit code |
| --- | --- | --- |
| `VALID` | OpenTofu accepted the configuration | `0` |
| `NOT_RUN` | A condition was not met; the reason is named. This is neither a pass nor a failure of the source. | `0`, or `7` with `--validate` or `--strict` |
| `INVALID` | OpenTofu rejected the configuration. A rejected draft is kept. | `3`, or `0` when every source error comes from a missing input and the run is the partial package |

## Options

| Option | Effect |
| --- | --- |
| `--no-validate` | Skip validation of the source and the draft |
| `--validate` | End the run with exit code `7` if validation cannot run; the report is still written |
| `--provider-mirror DIR` | Use a local provider mirror |

`--validate` and `--no-validate` cannot be used together.

See [Exit codes](../cli/exit-codes.md) and [Offline environments](../guides/offline.md).
