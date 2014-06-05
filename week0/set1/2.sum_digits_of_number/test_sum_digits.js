'use strict';

var sum_digits = require('./sum_digits').sum_digits;

exports.testSumDigits1 = function (test) {
  test.equal(43, sum_digits(1325132435356));
  test.done();
};

exports.testSumDigits2 = function (test) {
  test.equal(6, sum_digits(123));
  test.done();
};

exports.testSumDigits3 = function (test) {
  test.equal(6, sum_digits(6));
  test.done();
};

exports.testSumDigits4 = function (test) {
  test.equal(1, sum_digits(-10));
  test.done();
};


// sum_of_digits(1325132435356) === 43
// sum_of_digits(123) === 6
// sum_of_digits(6) === 6
// sum_of_digits(-10) === 1
