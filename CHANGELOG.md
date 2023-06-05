# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- CJS-ESM interoperability.

## [0.1.1] - 2022-10-27

### Fixed

- Rollup regression.

## [0.1.0] - 2022-10-27

### Added

- Allow defining typescript project with `-p` parameter to define a different `tsconfig.ts` file. p.eg: `package-build -p tsconfig.build.json`. This is useful to have a `tsconfig.json` in the root to allow IDE and library implementation to get a project file including files even if they won't be included in the NPM package (.spec, .test, .stories). Otherwise, a project including these files will transform every file defined, even those not desired in the final bundle, not only forcing to exclude them explicitly but increasing compilation times and errors. By default `tsconfig.json` will be used as it usually does.

## [0.0.2] - 2021-11-02

- Initial version
