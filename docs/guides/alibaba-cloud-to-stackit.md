---
title: Alibaba Cloud to STACKIT
description: Assess an Alibaba Cloud Terraform environment and prepare its STACKIT migration plan.
---

This guide describes the path from an Alibaba Cloud Terraform estate to a reviewable STACKIT migration package.

## Assess the Terraform estate

```sh
stacktoit assess ./alibaba-terraform
```

StackToIT reads Terraform and OpenTofu root modules that use the `aliyun/alicloud` provider. It does not connect to an Alibaba Cloud account.

## Understand what this adapter covers

The adapter gives the core services below a [classification](../concepts/classifications.md), a proposed target and a reason. StackToIT writes a STACKIT Terraform draft for your architects to review. Any other Alibaba Cloud resource is classified `MANUAL_REVIEW`, for your architects to decide.

| Alibaba Cloud | STACKIT target | Classification |
| --- | --- | --- |
| ECS (`instance`) | Compute Engine | `RECONFIGURE` |
| Cloud disk | Block Storage | `RECONFIGURE` |
| VPC, vSwitch | STACKIT network | `RECONFIGURE` |
| Security group | Security group | `RECONFIGURE` |
| Elastic IP | Public IP | `RECONFIGURE` |
| CLB, NLB | Network Load Balancer | `RECONFIGURE` |
| ALB | Application Load Balancer | `RECONFIGURE` |
| ACK | Kubernetes Engine (SKE) | `REPLATFORM` |
| ApsaraDB RDS, by `engine` | PostgreSQL Flex, MariaDB or SQLServer Flex | `REPLATFORM` |
| PolarDB | Chosen by its compatible engine | `REDESIGN` |
| ApsaraDB for Redis | Key Value Store (Valkey) | `RECONFIGURE` |
| ApsaraDB for MongoDB | MongoDB Flex | `REPLATFORM` |
| OSS | Object Storage | `RECONFIGURE` |
| NAS | File Storage (SFS) | `REPLATFORM` |
| Message Queue for RabbitMQ | RabbitMQ | `REPLATFORM` |
| RocketMQ | RabbitMQ, after a redesign | `REDESIGN` |
| Message Queue for Kafka | Self-managed broker on SKE | `CONTAINERIZE` |
| KMS key, KMS secret | KMS, Secrets Manager | `RECONFIGURE` |
| Function Compute | SKE or Cloud Foundry | `CONTAINERIZE` |
| DNS, CDN | DNS, CDN | `RECONFIGURE` |
| Elasticsearch | OpenSearch | `REPLATFORM` |
| Simple Log Service | Logs | `RECONFIGURE` |
| MaxCompute, AnalyticDB | Lakehouse on Object Storage, or a self-managed warehouse | `REDESIGN` |
| Tablestore, HBase | Self-managed wide-column store on SKE, or MongoDB Flex | `REDESIGN` |
| RAM, NAT gateway, Auto Scaling | Decided by an architect | `MANUAL_REVIEW` |

## Review the plan

- Open `index.html` and inspect the architecture and decision findings.
- Read `execution-plan.json` and `execution/` for sequencing and operator actions.

Source prices are available for AWS only. For an Alibaba Cloud source, the cost view does not state a comparison with Alibaba Cloud prices.

Continue with [Review migration decisions](review-decisions.md).
