'use strict';

var sum_min_max = require('./sum_min_max').sum_min_max;

exports.testSum1 = function(test){
  test.equal (10, sum_min_max([1,2,3,4,5,6,8,9]));
  test.done();
};

exports.testSum2 = function(test){
  test.equal (90, sum_min_max([-10,5,10,100]));
  test.done();
};

exports.testSum3 = function(test){
  test.equal (2, sum_min_max([1]));
  test.done();
};
