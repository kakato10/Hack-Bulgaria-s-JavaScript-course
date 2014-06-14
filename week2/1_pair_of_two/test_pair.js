'use strict';

var Pair = require('./pair').Pair;

exports.testPairEquals = function(test) {
  var p1 = Pair(1, 2);
  var p2 = Pair(3, 4);
  test.equal(false, p1.equals(p2));
  p1 = Pair(1, 2);
  test.equal(true, p1.equals(p1));
  test.throws(function() {p1.equals(1);});
  test.done();
};

exports.testPairToString = function(test) {
  var p1 = Pair(1, 2);
  test.equal('(1, 2)', p1.toString());
  test.done();
};

exports.testToList = function(test) {
  var p1 = Pair(1, 2);
  test.deepEqual([1,2], p1.toList());
  test.done();
};

exports.testCombine = function(test) {
  var f = function(left, right) {
    return left + right;
  };
  var p1 = Pair(1, 2);
  test.equal(3, p1.combine(f));
  test.done();
};

