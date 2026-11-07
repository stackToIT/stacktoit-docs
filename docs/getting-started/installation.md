---
title: Installation
description: Install and verify the StackToIT command-line tools.
---

StackToIT is delivered as a private pilot bundle under the StackToIT Private Pilot License. To request one, [discuss a pilot](https://stacktoit.com/en/#pilot).

## Platforms

The bundle holds one archive per platform:

| Archive | Platform |
| --- | --- |
| `stacktoit_<version>_darwin_arm64.tar.gz` | macOS on Apple Silicon |
| `stacktoit_<version>_linux_amd64.tar.gz` | Linux on x86-64 |
| `stacktoit_<version>_linux_arm64.tar.gz` | Linux on ARM64 |

## Verify the archive

Check the archive against `checksums.txt`:

```sh
shasum -a 256 -c checksums.txt --ignore-missing    # Linux: sha256sum -c checksums.txt --ignore-missing
```

To prove that the checksums come from the sender, verify their signature with [cosign](https://docs.sigstore.dev/cosign/) and the public key you received separately:

```sh
cosign verify-blob --key cosign.pub --bundle checksums.txt.sigstore.json \
  --insecure-ignore-tlog=true checksums.txt
```

The `--insecure-ignore-tlog` option is needed because the signature is not written to a public log.

## Install

```sh
tar -xzf stacktoit_<version>_<os>_<arch>.tar.gz
./stacktoit version
```

The archive holds three executables. Keep them together in one directory, anywhere on your `PATH`.

| Executable | Purpose |
| --- | --- |
| `stacktoit` | Assessment, planning, reports and command-line operations |
| `stacktoit-prices` | Optional retrieval of public price data |
| `stacktoit-discover` | Optional AWS inventory collection using your AWS CLI |

The `version` command prints the binary, knowledge-base, schema and provider versions. Use these details when reviewing an assessment or contacting support.

## Optional tools

- **OpenTofu** is used for source and draft validation when the required sandbox and provider packages are available.
- **AWS CLI** is used only for optional live inventory collection through `stacktoit discover aws`.

Neither an AWS credential nor a STACKIT credential is required for a normal Terraform assessment.

Next: [Quickstart](quickstart.md).
