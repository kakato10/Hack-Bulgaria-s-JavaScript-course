'use strict';

var is_increasing = require('./increasing_seq').is_increasing;

exports.testIsIncreasing = function(test) {
  test.equal(true, is_increasing([1,2,3,4,5]));
  test.equal(true, is_increasing([1]));
  test.equal(false, is_increasing([5,6,-10]));
  test.equal(false, is_increasing([1,1,1,1]));
  test.done();
};
