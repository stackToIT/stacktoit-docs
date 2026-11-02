---
title: Project configuration
description: Define a reusable StackToIT project with stacktoit.yaml and named profiles.
---

Use `stacktoit.yaml` to describe a reusable migration project. A project can keep its source, profile-specific variable files, target environments and run output together.

## Example

Create `stacktoit.yaml` at the root of your project:

```yaml
schema_version: "0.2"
source:
  root: terraform
  kind: terraform
profiles:
  - name: production
    var_files:
      - env/production.tfvars
  - name: staging
    var_files:
      - env/staging.tfvars
default_profile: production
runs_dir: runs
```

This example assumes the `terraform/` and `env/` directories are inside the project directory. Paths are relative to the project and must stay inside its boundary.

## Run the project

```sh
stacktoit assess --project ./my-migration
stacktoit assess --project ./my-migration --profile staging
```

If more than one profile exists and none is selected or configured as the default, StackToIT requires an explicit profile choice.

## Project behavior

- The `source` object identifies the Terraform root module.
- `profiles` define named sets of variable files and optional profile-specific information.
- `default_profile` names the selected profile when none is passed on the CLI.
- `runs_dir` organizes output from multiple assessments.
- The project can also specify typed input files, evidence and target environment descriptions.

Project mode already describes the source, so do not mix `--project` with a positional `SOURCE` argument or incompatible source-file overrides.

For an ad hoc assessment, use `stacktoit assess ./terraform` instead; a project file is optional.
