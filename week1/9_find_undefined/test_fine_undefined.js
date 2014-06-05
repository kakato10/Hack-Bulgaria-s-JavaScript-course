'use strict';

var find = require('./find_undefined').find;

exports.testFind = function(test) {
  var f = function(a) {return a % 2 === 0;};
  test.equal(4, find(f ,[4,5,6]));
  test.equal(undefined, find(f,[3,3,3]));
  test.done();
};
