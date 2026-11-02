---
title: Quickstart
description: Assess a Terraform root module and open the migration report.
---

The standard workflow requires one command. Run it from the directory containing the Terraform or OpenTofu root module, or pass the path explicitly.

## 1. Assess your source

```sh
stacktoit assess ./terraform
```

StackToIT reads the root module and resolves its resources and dependencies. By default, it writes a migration assessment and the associated STACKIT migration package.

The result is written beside the source, in a folder named `terraform-stacktoit/`.

You can also run:

```sh
stacktoit assess
stacktoit assess ./terraform ./migration
stacktoit assess ./terraform --out ./migration
```

The first form uses the current directory. The second and third forms explicitly select the output folder.

## 2. Open the report

Open the generated `index.html` file in your browser:

```text
terraform-stacktoit/index.html
```

Begin with the migration summary, then inspect mapped resources, differences, architectural decisions and execution prerequisites.

## 3. Review the deliverables

```text
terraform-stacktoit/
  index.html
  assessment.json
  decisions.json
  target-plan.json
  execution-plan.json
  terraform/
  execution/
```

This is a simplified view of the main outputs; additional files are generated for analysis, financial modeling and evidence.

## 4. Inspect a specific finding

Use `explain` with a unit address or decision identifier found in the report:

```sh
stacktoit explain ./terraform-stacktoit 'UNIT_ADDRESS'
```

Substitute the actual unit address from your report.

## 5. Verify the run

```sh
stacktoit verify ./terraform-stacktoit
```

Verification checks the published files and their internal consistency. It does not claim that the target infrastructure has been deployed or approved.

To see what a finished run looks like before you start, open the [AWS Retail Store example](https://stacktoit.com/examples/aws-retail-store/).

Learn more: [assess reference](../cli/assess.md) and [results and deliverables](../concepts/outputs.md).
