---
title: Assessment classifications
description: Read migration treatments and supporting findings correctly.
---

A resource assessment contains a migration classification and supporting findings. The classification describes the type of work anticipated, not an authorization to perform it.

| Classification | Interpretation |
| --- | --- |
| `DIRECT` | A direct target mapping is identified |
| `RECONFIGURE` | A corresponding target capability requires configuration changes |
| `REPLATFORM` | The workload or component moves to a different platform model |
| `CONTAINERIZE` | The proposed treatment includes moving the workload to containers |
| `REDESIGN` | Architectural changes are required for the target |
| `MANUAL_REVIEW` | An engineer or architect must resolve a question before proceeding |
| `BLOCKED` | The currently evaluated migration path cannot be completed as proposed |

Read the detailed property-level findings, target services, review requirements, and evidence attached to the resource. A classification alone does not communicate all requirements.

## Inspect a finding

```sh
stacktoit explain ./terraform-stacktoit 'UNIT_ADDRESS'
```

Use the exact address shown in the report. You can also explain decision IDs and semantic evidence identifiers.

A migration plan's readiness depends on more than individual resource classes: decisions, input completeness, dependencies, validation and manual prerequisites also matter.
