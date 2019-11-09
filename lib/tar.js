// tar
const fs = require('fs');
const tar = require('tar');
const ora = require('ora');
const chalk = require('chalk');
const crypto = require('crypto');

const spinnerTar = ora('making tarball').start();
const hash = crypto.createHash('sha256');

module.exports = function tarDir(dir, tarName, callback) {
  // todo tar has wrong timestamp
  tar
    .c(
      {
        gzip: true,
        file: tarName
      },
      [dir]
    )
    .then(() => {
      spinnerTar.succeed('tar done');
      const input = fs.createReadStream(tarName);
      let tarFileHash = '';
      input.on('readable', () => {
        const data = input.read();
        if (data) {
          hash.update(data);
        } else {
          tarFileHash = hash.digest('hex');
          console.log(chalk.default(tarFileHash));
        }
      });
      callback(tarName, input, tarFileHash);
    })
    .catch(err => {
      spinnerTar.fail('tar failed');
      console.log(chalk.red(err));
    });
};
