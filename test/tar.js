const chai = require('chai');
const fs = require('fs');
const rimraf = require('rimraf');

const tarDir = require('../lib/tar');

const expect = chai.expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      tarDir('dist', 'test.tar.gz', (tarName, file) => {
        var stats = fs.statSync('test.tar.gz');
        var fileSizeInBytes = stats["size"]
        expect(fileSizeInBytes).to.be.above(0)
        rimraf(tarName, () => {});
      })
    });
  });
});
