---
title: Design inputs and decisions
description: Use generated templates to answer migration questions and record review decisions.
---

StackToIT writes answer templates derived from the current assessment. Their identifiers and binding information are specific to that assessment. Start from the generated files rather than inventing a new schema by hand.

## Design inputs

Copy the relevant entries from `inputs-template.yaml` to your maintained inputs file, fill the requested values, and rerun:

```sh
stacktoit assess ./terraform --inputs ./inputs.yaml
```

Inputs can influence the generated target artifacts when the installed version recognizes their topic and the answer is valid for the assessed source.

## Decision reviews

Use the generated `decisions-template.yaml` for architect review. Accepted decisions require the review's supporting details and evidence references; a review associated with a changed source or knowledge-base basis may become stale.

```sh
stacktoit assess ./terraform \
  --inputs ./inputs.yaml \
  --decisions ./decisions.yaml
```

A recorded review and an applied design input are separate. Always inspect the newly generated draft and execution plan after submitting answers.

For a guided procedure, see [Review migration decisions](../guides/review-decisions.md).
