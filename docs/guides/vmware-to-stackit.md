---
title: VMware to STACKIT
description: Assess a VMware RVTools export and prepare its STACKIT migration plan.
---

This guide describes the path from a VMware RVTools export to a reviewable STACKIT migration package. VMware input maturity is stated in [Supported source formats](../getting-started/introduction.md); run `stacktoit version` to see it for your build.

## Assess the export

```sh
stacktoit assess ./rvtools.xlsx ./vmware-migration
```

StackToIT reads the file on your computer. It installs nothing in the VMware environment and does not connect to vCenter. If the input type is not detected, add `--input rvtools`.

## Understand the mapping

| VMware | STACKIT target | Classification |
| --- | --- | --- |
| Virtual machine | Server, volumes and network interfaces on Compute Engine | `RECONFIGURE` |
| VM template | STACKIT image | `REPLATFORM` |
| Port group | STACKIT network | `RECONFIGURE` |

## Plan the rehost

- Export each disk and convert it to `qcow2` or `raw`. STACKIT imports no other disk format.
- Upload the disk as an image and boot it as a server. Additional disks become volumes.
- Replace VMware Tools and the vmxnet3 and PVSCSI drivers with the drivers the STACKIT image needs.

## Supply what RVTools does not contain

RVTools exports no subnet masks, so set each IP prefix explicitly, and keep it if the machines keep their addresses. VLAN IDs and virtual switches have no meaning on STACKIT.

The draft asks for machine types, disk sizes and server addresses. Answer these in `review/`.

RVTools describes infrastructure, not application behavior. Get application dependencies and cutover timing from the workload owners.

## Review target and execution artifacts

- Open `index.html` and inspect the architecture and decision findings.
- Review `terraform/` and `target-plan.json` with the target platform team.
- Read `execution-plan.json` and `execution/` for sequencing, prerequisites and operator actions.

Continue with [Review migration decisions](review-decisions.md).
