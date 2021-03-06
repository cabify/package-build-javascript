#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');

const args = process.argv.slice(2);

const buildPath = path.join(__dirname, '..', 'build.js');
const buildingPackagePath = process.cwd();

const result = spawn.sync('node', [buildPath, ...args], {
  stdio: 'inherit',
  cwd: buildingPackagePath,
});

if (result.signal) {
  /* eslint-disable no-console */
  if (result.signal === 'SIGKILL') {
    console.log(
      'The build failed because the process exited too early. ' +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.',
    );
  } else if (result.signal === 'SIGTERM') {
    console.log(
      'The build failed because the process exited too early. ' +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.',
    );
  }
  /* eslint-enable */
  process.exit(1);
}
process.exit(result.status);
