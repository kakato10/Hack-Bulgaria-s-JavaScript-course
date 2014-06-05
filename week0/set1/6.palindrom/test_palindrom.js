'use strict';

var is_palindrom = require('./palindrom').is_palindrom;

exports.is_palindrom1 = function(test) {
  test.equal(true, is_palindrom(1));
  test.done();
};

exports.is_palindrom2 = function(test) {
  test.equal(false, is_palindrom(42));
  test.done();
};

exports.is_palindrom3 = function(test) {
  test.equal(true, is_palindrom(100001));
  test.done();
};

exports.is_palindrom4 = function(test) {
  test.equal(true, is_palindrom(999));
  test.done();
};

exports.is_palindrom5 = function(test) {
  test.equal(false, is_palindrom(123));
  test.done();
};
