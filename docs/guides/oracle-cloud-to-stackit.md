---
title: Oracle Cloud to STACKIT
description: Assess an Oracle Cloud Infrastructure Terraform environment and prepare its STACKIT migration plan.
---

This guide describes the path from an Oracle Cloud Infrastructure (OCI) Terraform estate to a reviewable STACKIT migration package.

## Assess the Terraform estate

```sh
stacktoit assess ./oci-terraform
```

StackToIT reads Terraform and OpenTofu root modules that use the `oracle/oci` provider. It does not connect to an Oracle Cloud tenancy.

The mappings below were checked against version 9.11.0 of the `oracle/oci` provider. Commit the dependency lock file (`.terraform.lock.hcl`) with the root module: without a lock file entry for `oci`, the report warns that the provider version a plan would use is not proven.

## Understand what this adapter covers

The adapter gives the core services below a [classification](../concepts/classifications.md), a proposed target and a reason. StackToIT writes a STACKIT Terraform draft for your architects to review. Any other Oracle Cloud resource is classified `MANUAL_REVIEW`, for your architects to decide.

| Oracle Cloud | STACKIT target | Classification |
| --- | --- | --- |
| Compute instance (`core_instance`) | Compute Engine | `RECONFIGURE` |
| Block volume | Block Storage | `RECONFIGURE` |
| VCN, subnet | STACKIT network | `RECONFIGURE` |
| Network security group, security list | Security group | `RECONFIGURE` |
| Public IP | Public IP | `RECONFIGURE` |
| Load balancer | Application Load Balancer | `RECONFIGURE` |
| Network load balancer | Network Load Balancer | `RECONFIGURE` |
| OKE cluster, OKE node pool | Kubernetes Engine (SKE) | `REPLATFORM` |
| Oracle Database (DB system), Autonomous Database | Another engine after a conversion, or self-managed Oracle under your own licence | `REDESIGN` |
| MySQL HeatWave | MariaDB | `REPLATFORM` |
| OCI Database with PostgreSQL | PostgreSQL Flex | `REPLATFORM` |
| NoSQL Database | MongoDB Flex, after a redesign | `REDESIGN` |
| OCI Cache | Key Value Store (Valkey) | `RECONFIGURE` |
| Object Storage | Object Storage | `RECONFIGURE` |
| File Storage | File Storage (SFS) | `REPLATFORM` |
| Streaming | Self-managed broker on SKE | `CONTAINERIZE` |
| Queue | RabbitMQ | `REPLATFORM` |
| Vault key, Vault secret | KMS, Secrets Manager | `RECONFIGURE` |
| Functions | SKE or Cloud Foundry | `CONTAINERIZE` |
| DNS | DNS | `RECONFIGURE` |
| OpenSearch | OpenSearch | `REPLATFORM` |
| Logging | Logs | `RECONFIGURE` |
| Big Data Service | Lakehouse on Object Storage, or self-managed engines on SKE | `REDESIGN` |
| IAM users, groups and policies, NAT gateway, internet gateway, instance pool | Decided by an architect | `MANUAL_REVIEW` |

For OKE clusters, the report also lists the SKE Kubernetes versions with their release and expiry dates as of the day they were read, and which of them suit a landing.

## Review the plan

- Open `index.html` and inspect the architecture and decision findings.
- Read `engineering/architect-report.md` for each unit's target, reason and the settings left to you.
- Read `migration/technical-sequencing.md` for the order of the units in waves, and `migration/data-movement.md` for the stateful units whose data-movement method you choose.

Source prices are available for AWS only. For an Oracle Cloud source, the cost view does not state a comparison with Oracle Cloud prices.

Continue with [Review migration decisions](review-decisions.md).
