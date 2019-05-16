const axios = require('axios');
const chalk = require('chalk');
const rimraf = require('rimraf');
const ora = require('ora');
const FormData = require('form-data');

const spinnerUpload = ora('Uploading').start();
module.exports = function uploadFile(url, tarName, tabBall) {
  const params = new FormData();
  params.append('file', tabBall);
  axios
    .post(url, params, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${params._boundary}`
      }
    })
    .then(() => {
      spinnerUpload.succeed('upload success');
      rimraf(tarName, () => {
        console.log(chalk.cyan('cleaned tarball'));
      });
    })
    .catch(err => {
      console.log(chalk.red(err));
      spinnerUpload.fail('upload error');
    });
}
