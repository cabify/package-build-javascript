const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve');
const command = require('rollup-plugin-command');
const { babel } = require('@rollup/plugin-babel');
const image = require('@rollup/plugin-image');
const ignoreImport = require('rollup-plugin-ignore-import');
const path = require('path');
const tsc = require('node-typescript-compiler');
const json = require('@rollup/plugin-json');

const compileTypings = (cwd) => () => {
  return tsc.compile({
    project: cwd,
    emitDeclarationOnly: true,
  });
};

module.exports = (dirname) => {
  const pkgPath = path.join(dirname, 'package.json');
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const pkg = require(pkgPath);

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

  const extensions = ['.js', '.jsx', '.ts', '.tsx'];

  return {
    input: {
      input: `${dirname}/src/index.ts`,
      external: (id) => {
        const moduleName = id.replace(dirname, '');
        const [namespace, packageName] = moduleName.split('/');

        if (namespace.startsWith('@')) {
          return external.includes(`${namespace}/${packageName}`);
        }
        return external.includes(namespace);
      },
      plugins: [
        command(compileTypings(dirname), { exitOnFail: true, wait: true }),
        resolve({ extensions }),
        commonjs(),
        babel({
          extensions,
          babelHelpers: 'runtime',
          include: ['src/**/*'],
          rootMode: 'upward',
        }),
        image(),
        json(),
        ignoreImport({
          // Ignore all .scss and .css file imports while building the bundle
          extensions: ['.scss', '.css'],
        }),
      ],
    },
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
  };
};
