---
title: Azure to STACKIT
description: Assess an Azure Terraform environment and prepare its STACKIT migration plan.
---

This guide describes the path from an Azure Terraform estate to a reviewable STACKIT migration package.

## Assess the Terraform estate

```sh
stacktoit assess ./azure-terraform
```

StackToIT reads Terraform and OpenTofu root modules written with the `azurerm` or `azapi` provider. It does not connect to an Azure account.

## Understand the mapping

Each resource gets a [classification](../concepts/classifications.md), a proposed target and a reason. The treatment depends on the configuration of the resource.

| Azure | STACKIT target | Usual classification |
| --- | --- | --- |
| Linux and Windows virtual machines | Compute Engine | `RECONFIGURE` |
| Azure Kubernetes Service | Kubernetes Engine (SKE) | `REPLATFORM` |
| Azure Database for PostgreSQL | PostgreSQL Flex | `REPLATFORM` |
| Azure SQL, SQL Managed Instance | SQLServer Flex | `REPLATFORM` |
| Storage accounts | Object Storage | `REPLATFORM` |
| Key Vault | Secrets Manager and KMS | `RECONFIGURE` |
| Azure Cache for Redis | Key Value Store (Valkey) | `RECONFIGURE` |
| Service Bus | RabbitMQ | `REPLATFORM` |
| App Service, Functions | Cloud Foundry or SKE | `REPLATFORM` or `CONTAINERIZE` |
| Cosmos DB | MongoDB Flex or PostgreSQL Flex (JSONB) | `REPLATFORM` or `REDESIGN` |
| Azure Firewall | Decided by an architect | `MANUAL_REVIEW` |

## Review database access

Read the `network` block of each database in `terraform/`. When the source is private or not proven public, the endpoint scope is a decision: left unset, the STACKIT API makes the endpoint `PUBLIC`. Decide the scope for each such database before you apply anything, and list its clients in the `_allowed_cidrs` variable.

## Review governance

Management groups map to STACKIT folders. Policy assignments have no managed counterpart, so plan them as policy as code in your delivery pipeline.

## Review target and execution artifacts

- Open `index.html` and inspect the architecture and decision findings.
- Review `terraform/` and `target-plan.json` with the target platform team.
- Read `execution-plan.json` and `execution/` for sequencing, prerequisites and operator actions.

Source prices are available for AWS only. For an Azure source, the cost view does not state a comparison with Azure prices.

Continue with [Review migration decisions](review-decisions.md).
