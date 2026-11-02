---
title: Introduction
description: What StackToIT does and how to work with its migration package.
---

StackToIT is a command-line tool for planning infrastructure migration to STACKIT. It evaluates an existing source, maps infrastructure elements to target capabilities, and generates reviewable artifacts for migration planning and execution.

## Supported source formats

| Source | Input | Maturity |
| --- | --- | --- |
| AWS | Terraform or OpenTofu root module | Primary |
| Azure | Terraform or OpenTofu root module | Preview |
| VMware | RVTools export (`.xlsx` or CSV directory) | Preview |
| Google Cloud | Terraform or OpenTofu root module | Experimental |

A StackToIT SourceBundle created by the `bundle` command can hold a root module for assessment on another machine. `stacktoit version` states the input maturity of your build.

The assessment records each resource's proposed treatment and explains differences and decisions. Target output includes a STACKIT Terraform draft where appropriate and a structured migration execution package. Coverage varies by source provider and service; inspect the stated differences and all generated target network-access settings before deployment.

## What you receive

| Deliverable | Purpose |
| --- | --- |
| Interactive report (`index.html`) | Browse the estate, proposed target and work to be reviewed |
| Assessment data (`assessment.json`) | Machine-readable resource findings and classifications |
| STACKIT Terraform draft (`terraform/`) | Review and adapt the target infrastructure definition |
| Target and execution plans | Identify dependencies, phases, prerequisites and ordered steps |
| Decision register | Record design choices needing architectural review |
| Verification and evidence tools | Check the integrity of the generated run and prepare a shareable pack |

## Operating model

An assessment reads the source and writes output files. It may download required modules, providers and public pricing information unless offline mode is selected. It does **not** deploy to AWS or STACKIT, update cloud resources, or upload the source configuration.

Continue with [Installation](installation.md) or run the [Quickstart](quickstart.md).
