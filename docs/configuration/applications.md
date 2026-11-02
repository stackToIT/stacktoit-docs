---
title: Application mapping
description: Assign infrastructure resources to explicit business applications.
---

An application mapping file groups assessed resources by user-provided selectors. StackToIT does not infer application ownership or criticality from resource names.

## Example

Create `applications.yaml`:

```yaml
applications:
  - id: payments
    name: Payments
    selectors:
      - module.payments.*
    environment: production
    owners:
      business: finance
      technical: payments-platform
    business_criticality: critical
    availability:
      rto: 30m
      rpo: 5m
      downtime_tolerance: 15m
  - id: storefront
    selectors:
      - module.web.*
```

Then assess the estate with:

```sh
stacktoit assess ./terraform --applications ./applications.yaml
```

The report shows matched units, unassigned units, overlapping selectors and values you explicitly supplied. Values not provided remain unprovided; RTO, RPO and downtime tolerance are recorded as written instead of calculated from Terraform.

Use this file when the migration needs application ownership and context for architecture review.
