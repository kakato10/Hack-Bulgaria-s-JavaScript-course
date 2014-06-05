'use strict';

var is_prime = require('./is_prime').is_prime;

exports.testIsPrime1 = function(test) {
  test.equal(false, is_prime(1));
  test.done();
};

exports.testIsPrime2 = function (test) {
  test.equal(true, is_prime(2));
  test.done();
};

exports.testIsPrime3 = function (test) {
  test.equal(false, is_prime(8));
  test.done();
};

exports.testIsPrime4 = function (test) {
  test.equal(false, is_prime(21));
  test.done();
};

exports.testIsPrime5 = function (test) {
  test.equal(false, is_prime(-10));
  test.done();
};
