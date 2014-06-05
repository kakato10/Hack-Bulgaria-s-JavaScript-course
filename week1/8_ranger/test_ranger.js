'use strict';

var range = require('./ranger').range;

exports.testRange = function(test) {
  test.deepEqual([1,2,3,4], range(1,4));
  test.deepEqual([3,4], range(3,4));
  test.done();
};

