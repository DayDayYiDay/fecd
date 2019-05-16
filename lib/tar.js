// tar
const fs = require('fs');
const tar = require('tar');
const ora = require('ora');
const chalk = require('chalk');

const spinnerTar = ora('making tarball').start();

module.exports = function tarDir(tarName, callback) {
  tar
    .c(
      {
        gzip: true,
        file: tarName
      },
      ['dist']
    )
    .then(() => {
      spinnerTar.succeed('tar done');
      callback(tarName, fs.createReadStream(tarName));
    })
    .catch(err => {
      spinnerTar.fail('tar failed');
      console.log(chalk.red(err));
    });
};
