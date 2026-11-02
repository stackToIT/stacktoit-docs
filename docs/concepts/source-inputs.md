---
title: Source inputs
description: Understand supported source types and optional assessment context.
---

## Infrastructure sources

`assess` accepts a Terraform or OpenTofu root module, a VMware RVTools export, or a SourceBundle archive explicitly selected with `--input bundle`.

For a normal root module, point StackToIT at the directory that declares your infrastructure. StackToIT reads Terraform configuration, variables and applicable local and remote modules. Remote modules are resolved from existing local sources first, with network retrieval used when necessary unless `--offline` is set.

## Optional context

| Input | What it contributes |
| --- | --- |
| Variable files (`--var-file`) | Values in addition to standard Terraform variable files |
| Design inputs (`--inputs`) | Typed answers to migration decisions that can affect generated artifacts |
| Architect review (`--decisions`) | Review and acceptance records, tracked separately from design inputs |
| Target environment (`--target-environment`) | Describes what already exists on the target and what may be reused |
| Applications (`--applications`) | Explicit application-to-resource groupings |
| AWS inventory (`--aws-inventory`) | Optional comparison of source Terraform and observed AWS inventory |
| Cost assumptions (`--assumptions`) | Financial-model assumptions not determined by source configuration |

Not every assessment needs these files. The standard invocation discovers and reads the source without requiring a long list of flags.

## Source privacy

A standard assessment runs locally and does not upload the Terraform repository. Optional live AWS discovery is a separate command that runs with credentials provided to the user's own AWS CLI.
