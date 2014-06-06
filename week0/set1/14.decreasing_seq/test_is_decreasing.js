'use strict';

var is_decreasing = require('./is_decreasing').is_decreasing;

exports.testIsDecreasing = function(test){
  test.equal(true, is_decreasing([5,4,3,2,1]));
  test.equal(false, is_decreasing([1,2,3]));
  test.equal(true, is_decreasing([100, 50, 20]));
  test.equal(false, is_decreasing([1,1,1,1]));
  test.done();
};
