'use strict';

var sum = require('./sum_concat').sum;
var concat = require('./sum_concat').concat;

exports.testSum1 = function(test) {
  test.equal(3, sum(1,2));
  test.done();
};

exports.testSum2 = function(test) {
  test.throws(function() {sum('sub',2);});
  test.done();
};

exports.testSum3 = function(test) {
  test.throws(function() {sum('1','2');});
  test.done();
};

exports.testConcat1 = function(test) {
  test.throws(function() {concat(1,'sub');});
  test.done();
};

exports.testConcat2 = function(test) {
  test.throws(function() {concat(1,2);});
  test.done();
};

exports.testSConcat = function(test) {
  test.equal('12', concat('1','2'));
  test.done();
};


