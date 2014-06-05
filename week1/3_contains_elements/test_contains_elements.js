'use strict';

var containsAll = require('./contains_elements').containsAll;

exports.testContainsAll = function(test){
  test.equal(true, containsAll(['a','b','c'], ['a','b','c','d']));
  test.equal(true, containsAll(['a','d','c'], ['a','b','c','d']));
  test.done();
};
