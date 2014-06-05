'use strict';

var checking = require('./prime_number_divisors').checking;

exports.test1 = function (test) {
  test.equal(true, checking(7));
  test.done();
};

exports.test2 = function (test) {
  test.equal(false, checking(8));
  test.done();
};

exports.test3 = function (test) {
  test.equal(true, checking(9));
  test.done();
};
