'use strict';

var is_number_balanced = require('./is_number_balanced').is_number_balanced;

exports.testcheck1 = function (test) {
  test.equal(true, is_number_balanced(9));
  test.done();
};

exports.testcheck2 = function (test) {
  test.equal(true, is_number_balanced(11));
  test.done();
};

exports.testcheck3 = function (test) {
  test.equal(false, is_number_balanced(13));
  test.done();
};

exports.testcheck4 = function (test) {
  test.equal(true, is_number_balanced(121));
  test.done();
};

exports.testcheck5 = function (test) {
  test.equal(true, is_number_balanced(4518));
  test.done();
};

exports.testcheck6 = function (test) {
  test.equal(false, is_number_balanced(28471));
  test.done();
};

exports.testcheck7 = function (test) {
  test.equal(true, is_number_balanced(1238033));
  test.done();
};
