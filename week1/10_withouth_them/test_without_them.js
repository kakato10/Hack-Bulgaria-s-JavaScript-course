'use strict';

var without = require('./without_them').without;

exports.testWithout = function(test) {
  test.deepEqual([1,2], without([3], [1,2,3]));
  test.done();
};
