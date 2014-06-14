'use strict';

String = require('./string').String;

exports.testStringCapitalize = function(test) {
  test.equal('LQLQLQ', 'lqlqlq'.capitalize());
  test.done();
};

exports.testStringDasharize = function(test) {
  test.equal('lq-lq', 'lq_lq'.dasharize());
  test.done();
}

exports.testStringTimes = function(test) {
  test.equal('lqlqlq', 'lq'.times(3));
  test.done();
}

exports.testStringBlank = function(test) {
  test.equal(true, ''.blank());
  test.equal(true, '   '.blank());
  test.equal(false, '   l'.blank());
  test.done();
}
