/* eslint-disable no-console */

const minimist = require('minimist');
const rollup = require('rollup');
const getRollupConfig = require('./getRollupConfig');

const watch = (config) => {
  const watcher = rollup.watch(config);

  const eventHandler = (event) => {
    switch (event.code) {
      case 'START':
        console.log('Rollup watcher starting...');
        break;
      case 'BUNDLE_START':
        break;
      case 'BUNDLE_END':
        break;
      case 'END':
        console.log(
          `Rollup watcher finished bundling in ${event.duration}. Watching for changes...`,
        );

        break;
      case 'ERROR':
        console.error('Rollup watcher error', event);
        break;
      default:
        console.error('Rollup watcher unknown event', event);
    }
  };

  watcher.on('event', (event) => eventHandler(event));
};

const build = async (withWatch = false, project) => {
  const dirname = process.cwd();
  console.log(`Bundling ${dirname}`);
  const { input, output } = getRollupConfig(dirname, project);

  if (withWatch) {
    watch({ ...input, output });
  } else {
    try {
      const bundle = await rollup.rollup(input);
      await Promise.all(
        output.map(async (outputItem) => {
          console.log(`Bundling ${outputItem.format} into ${outputItem.file}`);
          return bundle.write(outputItem);
        }),
      );
    } catch (err) {
      console.error('ERROR BUNDLING: ', dirname);
      console.error(err);
      process.exit([1]);
      throw err;
    }
  }
};

const argv = minimist(process.argv.slice(2));

build(argv.w, argv.p);
