---
title: score
description: Evaluate architect-reviewed benchmark sheets.
---

`score` processes architect-reviewed `review.csv` files and produces benchmark measurements. It is primarily useful for repeatable evaluation of mapping quality, rather than normal migration operation.

## Syntax

```sh
stacktoit score [--baseline-minutes N] REVIEW.csv...
```

## Example

```sh
stacktoit score --baseline-minutes 120 ./review.csv
```

`--baseline-minutes` supplies the architect review baseline for the benchmark. Keep benchmark results separate from a customer's migration readiness decision; a score is not evidence of an approved execution plan.
