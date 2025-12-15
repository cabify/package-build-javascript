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

module.exports = (dirname, project, options = {}) => {
  const { preserveModules = false } = options;
  const pkgPath = path.join(dirname, 'package.json');
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const pkg = require(pkgPath);

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

  const extensions = ['.js', '.jsx', '.ts', '.tsx'];

  const getOutputConfig = (format) => {
    const baseConfig = {
      sourcemap: true,
      interop: 'auto',
    };

    if (preserveModules) {
      return {
        ...baseConfig,
        dir: format === 'cjs' ? 'dist' : 'es2015',
        format,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      };
    }

    // Legacy mode: single bundle file
    return {
      ...baseConfig,
      file: format === 'cjs' ? pkg.main : pkg.module,
      format,
    };
  };

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
        command(compileTypings(project || dirname), {
          exitOnFail: true,
          wait: true,
        }),
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
    output: [getOutputConfig('cjs'), getOutputConfig('esm')],
  };
};
