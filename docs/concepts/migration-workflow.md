---
title: Migration workflow
description: The stages of a StackToIT migration assessment and delivery package.
---

StackToIT organizes infrastructure migration into a structured sequence:

| Stage | Output |
| --- | --- |
| Discover | Source inventory and resource dependencies |
| Analyze | Findings about existing configuration and requirements |
| Map | Candidate STACKIT services and resource treatments |
| Plan | Target design, decisions and ordered migration steps |
| Generate | STACKIT Terraform draft, API procedures and manual tasks |
| Execute package | Operator-facing files with prerequisites and required actions |
| Verify | Checks and records for the generated package and subsequent migration activities |

This is a planning and execution-artifact workflow, not an automatic cloud deployment. The generated package can include tasks that must wait for configuration answers, an architect's review or manual prerequisites.

## Source of decisions

The migration report distinguishes facts read from the source, assessments supported by the knowledge base, user-provided assumptions and decisions that need review. Unresolved values are not treated as approval.

## Where to begin

Use `stacktoit assess` to generate an assessment. Open its HTML report first, then inspect the target plan and execution plan. Use `stacktoit explain` to trace individual classifications and `stacktoit verify` to verify the published run folder.
