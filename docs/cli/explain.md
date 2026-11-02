---
title: explain
description: Trace resource classifications and design decisions to their supporting evidence.
---

`explain` reads the artifacts of a completed assessment and reports the reasoning chain behind a resource, decision or semantic claim.

## Syntax

```sh
stacktoit explain RUN_DIR UNIT|DEC-ID|semantic:ID [--output text|json]
```

## Explain a resource

```sh
stacktoit explain ./terraform-stacktoit 'UNIT_ADDRESS'
```

Replace `UNIT_ADDRESS` with an exact unit address shown in the assessment.

## Explain a decision

```sh
stacktoit explain ./terraform-stacktoit 'DEC-IDENTIFIER'
```

Replace `DEC-IDENTIFIER` with a decision identifier from the generated register.

## Machine-readable explanation

```sh
stacktoit explain ./terraform-stacktoit 'UNIT_ADDRESS' --output json
```

Depending on the selected subject, the explanation can include trace stages, the classification, relevant properties, the decision records and the evidence or equivalence statements that support the assessment.

This command reads run artifacts only. It does not update decisions, generate a new draft or change cloud infrastructure.
