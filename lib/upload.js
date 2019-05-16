const axios = require('axios');
const chalk = require('chalk');
const rimraf = require('rimraf');
const ora = require('ora');
const FormData = require('form-data');

const spinnerUpload = ora('Uploading').start();
module.exports = function uploadFile(tarName, tabBall) {
  const params = new FormData();
  params.append('file', tabBall);
  axios
    .post('http://127.0.0.1:8080/upload', params, {
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
    .catch(() => {
      spinnerUpload.fail('upload error');
    });
}
