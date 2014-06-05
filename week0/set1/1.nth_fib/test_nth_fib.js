"use strict";

var nth_fib = require("./nth_fib").nth_fibonacci;

exports.testFibForOne = function(test) {
  test.equal(1, nth_fib(1));
  test.done();
};

exports.testFibForTwo = function(test) {
  test.equal(1, nth_fib(1));
  test.done();
};

exports.testFibForThree = function(test) {
  test.equal(2, nth_fib(3));
  test.done();
};

exports.testFibForTen = function(test) {
  test.equal(55, nth_fib(10));
  test.done();
};
