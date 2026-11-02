---
title: Results and deliverables
description: Navigate a generated migration assessment and execution package.
---

A typical `assess` run writes an HTML report and a structured set of migration artifacts under its output directory.

## Key deliverables

| File or folder | Meaning |
| --- | --- |
| `index.html`, `pages/` | Interactive assessment workspace |
| `assessment.json` | Machine-readable assessment details and source findings |
| `workspace.json` | Data used by the report's workspace and run summary |
| `decisions.json` | Migration decision register |
| `manifest.json` | Inventory and integrity information for the published run |
| `target-plan.json` | Typed target plan for generated infrastructure |
| `execution-plan.json` | Ordered migration steps, conditions and dependencies |
| `terraform/` | Generated STACKIT Terraform draft |
| `execution/` | Operator instructions for Terraform, APIs, manual work and checks |
| `migration/roadmap.md` | Migration sequence and lifecycle activities |
| `executive/decisions.md` | Decision summary for review |
| `engineering/architect-report.md` | Detailed architectural findings |
| `financial/cost-model.json` | Cost-model data with explicit assumptions and coverage |

The precise set of files depends on the input and run options. For example, `--analysis-only` omits the Terraform draft and execution package.

## Review sequence

1. Read `index.html` for the overall migration summary and key decisions.
2. Inspect `assessment.json` or the resource pages for individual mappings and differences.
3. Review `decisions.json` and the input templates for unresolved choices.
4. Review `target-plan.json` and the Terraform draft with the target-platform team.
5. Review `execution-plan.json` and `execution/` for dependency order, manual actions, cutover and rollback conditions.
6. Check the published folder with `stacktoit verify` before relying on it as an unchanged record.

## Execution requires explicit action

Generated API scripts and Terraform apply instructions are written as part of an operator-facing package. StackToIT's `assess` command does not automatically run those actions against a cloud account.
