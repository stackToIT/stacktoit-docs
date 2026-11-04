# StackToIT Documentation

Technical documentation for [StackToIT](https://stacktoit.com), published at <https://stacktoit.com/docs/>.

Start at [docs/index.md](docs/index.md). Every page is plain Markdown and its links work on GitHub.

| Folder | Content |
| --- | --- |
| [`docs/getting-started`](docs/getting-started) | Introduction, installation, quickstart, first assessment |
| [`docs/guides`](docs/guides) | AWS, Azure, Google Cloud, VMware, Huawei Cloud, Alibaba Cloud and Oracle Cloud to STACKIT, reviewing decisions, offline environments |
| [`docs/concepts`](docs/concepts) | Migration workflow, source inputs, classifications, outputs |
| [`docs/configuration`](docs/configuration) | `stacktoit.yaml`, design inputs and decisions, application mapping |
| [`docs/cli`](docs/cli) | Every command, its options and the exit codes |
| [`docs/operations`](docs/operations) | Security and network access, validation, automation, troubleshooting |

Complete example runs are in [stackToIT/stacktoit-examples](https://github.com/stackToIT/stacktoit-examples).

To check the pages:

```sh
node scripts/check-docs.mjs
```

## Licence

All rights reserved. See [LICENSE.md](LICENSE.md).
