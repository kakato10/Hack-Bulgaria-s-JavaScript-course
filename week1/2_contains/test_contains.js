'use strict';

var contains = require('./contains').contains;

exports.testContains = function(test){
  test.equal(true, contains('a', ['a','b','c']));
  test.equal(false, contains('d', ['a','b','c']));
  test.done();
};

