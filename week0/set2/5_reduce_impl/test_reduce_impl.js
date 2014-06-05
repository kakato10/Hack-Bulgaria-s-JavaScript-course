'use strict';

var reduce = require('./reduce_impl').reduce;

exports.testReduce = function(test) {
  var arr = [1, 2, 4],
  f = function (a,b) {return a+b;};
  test.equal(10, reduce(f, arr, 3));
  test.done();
};
