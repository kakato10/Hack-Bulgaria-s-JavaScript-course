'use strict';

var only = require('./only').only;

exports.test = function(test) {
  test.equal (true, only('string', ['a', 'b']));
  test.equal (false, only('string', ['a', true]));
  test.done();
};
