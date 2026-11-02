---
title: Huawei Cloud to STACKIT
description: Assess a Huawei Cloud Terraform environment and prepare its STACKIT migration plan.
---

This guide describes the path from a Huawei Cloud Terraform estate to a reviewable STACKIT migration plan. Huawei Cloud input maturity is stated in [Supported source formats](../getting-started/introduction.md); run `stacktoit version` to see it for your build.

## Assess the Terraform estate

```sh
stacktoit assess ./huawei-terraform
```

StackToIT reads Terraform and OpenTofu root modules that use the `huaweicloud/huaweicloud` provider. It does not connect to a Huawei Cloud account.

## Understand what this adapter covers

The adapter gives the core services below a [classification](../concepts/classifications.md), a proposed target and a reason. It does not write STACKIT Terraform for this source yet. Any other Huawei Cloud resource is classified `MANUAL_REVIEW`, for your architects to decide.

| Huawei Cloud | STACKIT target | Classification |
| --- | --- | --- |
| ECS (`compute_instance`) | Compute Engine | `RECONFIGURE` |
| EVS (`evs_volume`) | Block Storage | `RECONFIGURE` |
| VPC, subnet | STACKIT network | `RECONFIGURE` |
| Security group | Security group | `RECONFIGURE` |
| EIP | Public IP | `RECONFIGURE` |
| Shared load balancer | Network Load Balancer | `RECONFIGURE` |
| Dedicated ELB | Application or Network Load Balancer | `MANUAL_REVIEW` |
| CCE | Kubernetes Engine (SKE) | `REPLATFORM` |
| RDS, by `db.type` | PostgreSQL Flex, MariaDB or SQLServer Flex | `REPLATFORM` |
| GaussDB | PostgreSQL Flex or MariaDB, after a conversion | `REDESIGN` |
| DCS | Key Value Store (Valkey) | `RECONFIGURE` |
| DDS | MongoDB Flex | `REPLATFORM` |
| OBS | Object Storage | `RECONFIGURE` |
| SFS Turbo | File Storage (SFS) | `REPLATFORM` |
| DMS for RabbitMQ | RabbitMQ | `REPLATFORM` |
| DMS for RocketMQ | RabbitMQ, after a redesign | `REDESIGN` |
| DMS for Kafka | Self-managed broker on SKE | `CONTAINERIZE` |
| KMS, CSMS | KMS, Secrets Manager | `RECONFIGURE` |
| FunctionGraph | SKE or Cloud Foundry | `CONTAINERIZE` |
| DNS, CDN | DNS, CDN | `RECONFIGURE` |
| CSS | OpenSearch | `REPLATFORM` |
| LTS | Logs | `RECONFIGURE` |
| DWS, MRS, DLI | Lakehouse on Object Storage, or a self-managed warehouse | `REDESIGN` |
| IAM, NAT gateway, Auto Scaling | Decided by an architect | `MANUAL_REVIEW` |

## Review the plan

- Open `index.html` and inspect the architecture and decision findings.
- Read `execution-plan.json` and `execution/` for sequencing and operator actions.

Source prices are available for AWS only. For a Huawei Cloud source, the cost view does not state a comparison with Huawei Cloud prices.

Continue with [Review migration decisions](review-decisions.md).
