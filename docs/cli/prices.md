---
title: prices
description: Inspect, refresh and import the local price data used in migration cost modeling.
---

`prices` manages the local cache used by the cost model. An assessment can obtain missing public pricing information automatically when network access is allowed.

## Inspect cached prices

```sh
stacktoit prices status
```

## Refresh public price data

STACKIT public pricing:

```sh
stacktoit prices refresh --provider stackit
```

AWS public pricing for a selected region:

```sh
stacktoit prices refresh --provider aws --region eu-central-1
```

An optional `--offer` selects an AWS offer family. A custom cache directory can be supplied with `--price-cache DIR`.

## Import pricing

Import a price sheet owned by your organization:

```sh
stacktoit prices import --sheet ./my-prices.json
```

Or import a price snapshot file. It is checked against its SHA-256, given with `--sha256` or in a `FILE.sha256` beside it, and nothing is written if a check fails:

```sh
stacktoit prices import --snapshot ./snapshot-prices.tar.gz
```

The financial view is an estimate based on applicable price data and explicit assumptions, not a cloud provider invoice. If a price cannot be sourced, the corresponding line remains unpriced with its reason.
