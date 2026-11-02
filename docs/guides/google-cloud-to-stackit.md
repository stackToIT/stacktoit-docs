---
title: Google Cloud to STACKIT
description: Assess a Google Cloud Terraform environment and prepare its STACKIT migration plan.
---

This guide describes the path from a Google Cloud Terraform estate to a reviewable STACKIT migration package. Google Cloud input maturity is stated in [Supported source formats](../getting-started/introduction.md); run `stacktoit version` to see it for your build.

## Assess the Terraform estate

```sh
stacktoit assess ./gcp-terraform
```

StackToIT reads Terraform and OpenTofu root modules that use the Google provider. It does not connect to a Google Cloud project.

## Understand the mapping

Each resource gets a [classification](../concepts/classifications.md), a proposed target and a reason. The treatment depends on the configuration of the resource.

| Google Cloud | STACKIT target | Usual classification |
| --- | --- | --- |
| Compute Engine | Compute Engine | `RECONFIGURE` |
| Google Kubernetes Engine | Kubernetes Engine (SKE) | `REPLATFORM` |
| Cloud SQL | PostgreSQL Flex, MariaDB or SQLServer Flex | `REPLATFORM` |
| AlloyDB | PostgreSQL Flex | `REPLATFORM` |
| Cloud Storage | Object Storage | `RECONFIGURE` |
| Memorystore for Redis | Key Value Store (Valkey) | `RECONFIGURE` or `REPLATFORM` |
| Pub/Sub | RabbitMQ | `REPLATFORM` |
| Cloud Run | SKE or Cloud Foundry | `CONTAINERIZE` |
| BigQuery | Lakehouse on Object Storage, or a self-managed warehouse | `REDESIGN` |
| Spanner | PostgreSQL Flex, or self-managed distributed SQL | `REDESIGN` |
| Bigtable | Self-managed wide-column store on SKE, or MongoDB Flex | `REDESIGN` |

## Review database access

Read the `network` block of each database in `terraform/`. A Cloud SQL instance with `ipv4_enabled = false` is private, and its STACKIT endpoint scope is a decision: left unset, the STACKIT API makes the endpoint `PUBLIC`. Decide the scope for each such database before you apply anything, and list its clients in the `_allowed_cidrs` variable.

## Review the network

Firewall policies and Cloud NAT change their model on STACKIT. Read the route and firewall decisions in `index.html` with your network architect.

## Review target and execution artifacts

- Open `index.html` and inspect the architecture and decision findings.
- Review `terraform/` and `target-plan.json` with the target platform team.
- Read `execution-plan.json` and `execution/` for sequencing, prerequisites and operator actions.

Source prices are available for AWS only. For a Google Cloud source, the cost view does not state a comparison with Google Cloud prices.

Continue with [Review migration decisions](review-decisions.md).
