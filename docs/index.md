---
title: StackToIT Documentation
description: Install StackToIT, run an assessment, and work through the migration package it writes for STACKIT.
---

StackToIT reads infrastructure definitions, assesses their migration to STACKIT, and writes an assessment, a STACKIT Terraform draft and an ordered migration plan. It runs on your machine and changes nothing in any cloud.

## Start here

- [Quickstart](getting-started/quickstart.md): run your first assessment with one command.
- [Installation](getting-started/installation.md): verify and install the command-line tools.
- [AWS to STACKIT](guides/aws-to-stackit.md): go from an AWS Terraform root module to a migration package.
- [Azure to STACKIT](guides/azure-to-stackit.md): go from an Azure Terraform root module to a migration package.
- [Google Cloud to STACKIT](guides/google-cloud-to-stackit.md): go from a Google Cloud Terraform root module to a migration package.
- [VMware to STACKIT](guides/vmware-to-stackit.md): go from an RVTools export to a migration package.

## Reference

- [CLI reference](cli/index.md): every command, its inputs, options and outputs.
- [Results and deliverables](concepts/outputs.md): read the report, Terraform draft, decisions and execution plan.
- [Exit codes](cli/exit-codes.md): handle each result in automation.

## See a complete run

The [AWS Retail Store example](https://stacktoit.com/examples/aws-retail-store/) shows a full StackToIT run on a public Terraform project, with every generated file.
