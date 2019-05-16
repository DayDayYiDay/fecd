// import fs from 'fs';

import commander from 'commander';
// import uniq from 'lodash/uniq';
// import glob from 'glob';

import pkg from '../../package.json';

// Deploy Command
commander.option(
  '-d, --deploy [dirname]',
  'the dir you want to deploy, default is dist/',
);

commander.version(pkg.version);
commander.usage('[options]');

export default function parseArgv(args) {
  commander.parse(args);
  return {
    cliOptions: {
      outDir: '',
    },
  };
}
