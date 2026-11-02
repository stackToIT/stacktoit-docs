---
title: discover
description: Collect or import AWS inventory for comparison with Terraform.
---

`discover` provides an optional live AWS inventory for an assessment. The resulting inventory is written to `OUTPUT/review/aws-inventory.json`; a subsequent assessment can compare it to the Terraform source.

## Show collection commands

```sh
stacktoit discover commands
stacktoit discover commands --format sh
```

The output describes read-only AWS CLI commands and the data they collect. The shell format prints a collection script; it does not execute those commands itself.

## Collect using your AWS CLI

```sh
stacktoit discover aws ./terraform-stacktoit --region eu-central-1
```

Multiple regions can be selected by repeating `--region`. You can also select an AWS CLI profile with `--profile NAME`.

## Import existing inventory

AWS CLI output files:

```sh
stacktoit discover import aws-cli ./aws-collection ./terraform-stacktoit
```

AWS Config advanced-query result:

```sh
stacktoit discover import aws-config ./aws-config.json ./terraform-stacktoit
```

Use `--captured-at` with an RFC 3339 timestamp if you know the collection time. Use `--replace` only when replacing an existing inventory intentionally.

## Compare with the Terraform source

```sh
stacktoit assess ./terraform ./terraform-stacktoit
```

Normal `assess` does not require AWS credentials and does not query AWS APIs. `discover aws` uses the operator's AWS CLI credentials. Missing, incomplete, denied or throttled inventory reads are reported as such, not interpreted as evidence that resources are absent.
