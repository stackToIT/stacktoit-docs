---
title: Review migration decisions
description: Record design choices and regenerate a migration package using reviewed inputs.
---

Some migration decisions depend on information that the source infrastructure does not establish. StackToIT writes a decision register and input templates so these choices can be reviewed explicitly.

## Separate answers from approvals

**Inputs** answer specific configuration requests and can affect the generated target draft. **Decision reviews** record an architect's acceptance or rejection of a documented choice. A review alone does not rewrite the Terraform draft or authorize execution.

## Recommended workflow

1. Run an assessment and inspect `inputs-template.yaml` and `decisions-template.yaml`.
2. Copy the relevant template outside the generated run folder and fill the requested fields without changing their identifiers or bindings.
3. Rerun with the appropriate file or files.
4. Inspect the report again for applied, open, invalid or stale decisions.

```sh
stacktoit assess ./terraform --inputs ./my-inputs.yaml
stacktoit assess ./terraform --inputs ./my-inputs.yaml --decisions ./my-decisions.yaml
```

The assessment validates input files and reports answers that cannot be applied. Reviews tied to a different source or decision basis may be shown as stale.

## Important distinction

A design decision that has not been applied to the generated target state does not become an executable migration step merely because the review was recorded. Review the newly generated execution plan after every change to inputs or decisions.

See [assess options](../cli/assess-options.md) and [explain](../cli/explain.md).
