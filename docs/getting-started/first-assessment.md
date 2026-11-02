---
title: Your first assessment
description: Follow an assessment from source selection to decision review.
---

## Before you run

Choose a Terraform or OpenTofu root module, not an arbitrary subdirectory of a larger configuration. Keep its `.terraform.lock.hcl` and relevant variable files available where possible. For RVTools, use the export file or CSV directory as the source.

## Run an assessment

```sh
stacktoit assess ./infrastructure
```

The command's console summary identifies the assessed source, completion status, migration decisions and the report's location. For a more detailed engineering console:

```sh
stacktoit assess ./infrastructure --verbose
```

To run without network access:

```sh
stacktoit assess ./infrastructure --offline
```

Offline mode uses only source files and locally available dependencies. Missing information is identified in the resulting report rather than silently assumed.

## Read the outcome in order

1. **Summary:** inspect the source completeness and overall migration requirements.
2. **Resource findings:** review treatment, target mapping and relevant differences.
3. **Decisions:** identify choices that require confirmation or design input.
4. **Target design:** inspect the Terraform draft and any target assumptions.
5. **Execution plan:** review sequencing, manual actions, verification and rollback conditions.

A generated execution package is not an approved change request. Keep normal architecture review and change-control procedures in place.

## Continue the assessment

A run provides answer templates for design inputs and decisions. Maintain your completed answers outside the generated report directory and supply them in a subsequent assessment as applicable:

```sh
stacktoit assess ./infrastructure --inputs ./my-inputs.yaml
```

For architectural decisions, consult [Review migration decisions](../guides/review-decisions.md).
