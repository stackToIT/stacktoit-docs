---
title: AWS to STACKIT
description: Assess an AWS Terraform environment and prepare its STACKIT migration plan.
---

This guide describes the common path from an AWS Terraform estate to a reviewable STACKIT migration package.

## Assess the Terraform estate

```sh
stacktoit assess ./aws-terraform
```

The assessment reads the Terraform configuration and its modules, builds a dependency graph, evaluates the migration of source resources, and writes the target assessment and migration package.

## Understand the mapping

Review the migration classification, the proposed target service, and whether each configuration property is retained, transformed or requires attention. A source resource may map to Terraform, an API procedure, a manual action, or a redesign decision. The report explains which path is proposed and why.

Do not interpret the presence of a Terraform draft as automatic approval to apply it.

## Add an optional AWS inventory

For a comparison between Terraform and AWS inventory, use `discover`:

```sh
stacktoit discover commands
stacktoit discover aws ./aws-terraform-stacktoit --region eu-central-1
stacktoit assess ./aws-terraform ./aws-terraform-stacktoit
```

`discover aws` uses your local AWS CLI credentials and read-only collection commands. `assess` itself does not connect to an AWS account. The inventory is saved in the output's review directory for comparison in the next assessment.

For an existing collection of AWS CLI output files, use `stacktoit discover import aws-cli` instead.

## Review target and execution artifacts

- Open `index.html` and inspect architecture and decision findings.
- Review `terraform/` and `target-plan.json` with the target platform team.
- Read `execution-plan.json` and `execution/` for sequencing, prerequisites and operator actions.
- Confirm any design choices and regenerate the assessment with the supplied inputs.
- Run `stacktoit verify` before archiving or sharing a finished assessment.

See [discover](../cli/discover.md), [assess](../cli/assess.md) and [Review migration decisions](review-decisions.md).
