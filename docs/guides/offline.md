---
title: Offline environments
description: Run assessments without outbound network requests.
---

Use `--offline` when an assessment must use only local files and caches.

```sh
stacktoit assess ./terraform --offline
```

Offline mode downloads no remote modules, provider packages or price data. The source, local modules, local caches and offline validation still run.

## Prepare the machine

- Keep the source tree and its local modules available. A remote module that is not already in `.terraform/modules` or the local cache is reported as missing.
- Commit `.terraform.lock.hcl` and prepare a local provider mirror with `tofu providers mirror` if you need OpenTofu validation. See [Validation](../operations/validation.md).
- Run `stacktoit prices refresh` on the machine while it has network access, or add your own price sheet with `stacktoit prices import --sheet FILE`. See [prices](../cli/prices.md).

Check what the price cache holds:

```sh
stacktoit prices status
```

## Interpret unavailable evidence

A missing module or input is reported as missing or partial; unavailable pricing remains unpriced. A validation that cannot run is reported as not run, not as successful validation. Review these statuses before using the resulting migration plan.

See [Security and network access](../operations/security.md) and [prices](../cli/prices.md).
