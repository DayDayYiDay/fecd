#!/usr/bin/env node

const program = require('commander');

const tarDir = require('../../lib/tar');
const uploadFile = require('../../lib/upload');
const pkg = require('../../package');
const fecdInfo = require('../../.fecd');

const projName = pkg.name;
const tarName = `${`${new Date()
  .toISOString()
  .replace(/T/, ' ')
  .replace(/\..+/, '')}_${projName}`}.tar.gz`;

function debug(value, dummyPrevious) {
  console.log(value, dummyPrevious);
}

function myParseInt(value, dummyPrevious) {
  // parseInt takes a string and an optional radix
  console.log(value, dummyPrevious);
  return parseInt(value, 10);
}
// require('../src/fecd');

program.version(pkg.version);

const [, , ...args] = process.argv;
console.log(`Hello ${args}`);
program
  .option('-d, --deploy <value>', 'dir to deploy', debug, 'dist')
  .option('-i, --integer <number>', 'integer argument', myParseInt)
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza', 'blue');

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ custom-help --help');
  console.log('  $ custom-help -h');
});

program.parse(process.argv);
if (process.argv.length === 2) program.outputHelp();
// if (program.deploy) console.log(program.opts());
// if (program.small) console.log('- small pizza size');
// if (program.pizzaType) console.log(`- ${program.pizzaType}`);

function upload(name, tabBall, shaHash) {
  uploadFile(fecdInfo.server, name, tabBall, shaHash);
}

tarDir(fecdInfo.dir, tarName, upload);
