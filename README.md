## @cabify/package-build

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Package build configuration based on Rollup to compile JS packages.

### Usage

Install this package as a dev dependency in your package, then create scripts in your `package.json` invoking it like this:

```
  "dist": "package-build",
  "dist:watch": "package-build -w",
```

NOTICE: this package doesn't clean your build directories in each run, so you'd probably want to append something like `rimraf` to your dependencies.

#### Parameters

- `-w` to watch the files.
- `-p` to define a different `tsconfig.ts` file. p.eg: `package-build -p tsconfig.build.json`.

### Publish a new version

- Update [CHANGELOG](./CHANGELOG.md) with new features, breaking changes, etc
- Check you're in `main` branch and everything is up-to-date.
- Go to [create a new release](https://github.com/cabify/package-build-javascript/releases/new), create a new tag (e.g. `v0.2.0` or `v0.2.0-beta.0` for pre-releases) and write a Title.
- The publish workflow will automatically set the package version from the tag and publish to npm with provenance.
- [Check on npm package webpage](https://www.npmjs.com/package/@cabify/package-build) that the version has been published successfully.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/alejandrofdiaz"><img src="https://avatars.githubusercontent.com/u/9197247?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=alejandrofdiaz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/alexgallardo"><img src="https://avatars.githubusercontent.com/u/7766614?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro Gallardo Escobar</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=alexgallardo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cicloon"><img src="https://avatars.githubusercontent.com/u/818328?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro León</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=cicloon" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/AlexTemina"><img src="https://avatars.githubusercontent.com/u/14157093?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex Temina</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=AlexTemina" title="Code">💻</a></td>
    <td align="center"><a href="http://www.ari.soy/"><img src="https://avatars.githubusercontent.com/u/29388744?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arian Zargaran</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=ArianZargaran" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Crismmgg"><img src="https://avatars.githubusercontent.com/u/56558107?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Crismmgg</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=Crismmgg" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/inspiratweb"><img src="https://avatars.githubusercontent.com/u/6814061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francisco Sánchez</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=inspiratweb" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jalopez"><img src="https://avatars.githubusercontent.com/u/259623?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Javier López</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=jalopez" title="Code">💻</a></td>
    <td align="center"><a href="https://valya.codes/"><img src="https://avatars.githubusercontent.com/u/7880641?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Valentin Berlin</b></sub></a><br /><a href="https://github.com/cabify/package-build-javascript/commits?author=valenber" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
