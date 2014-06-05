'use strict';

var any = require('./any_all'). any;
var all = require('./any_all'). all;

exports.testAny = function (test) {
  var arr1 = [1, 2, 3],
  arr2 = [1, 3, 5],
  f = function (a) {return (a + 1) % 2;};
  test.equal(true, any(f, arr1));
  test.equal(false, any(f, arr2));
  test.done();
};

exports.testAll = function (test) {
  var arr1 = [1, 2, 3],
  arr2 = [2, 4, 6],
  f = function (a) {return (a + 1) % 2;};
  test.equal(false, all(f, arr1));
  test.equal(true, all(f, arr2));
  test.done();
};
