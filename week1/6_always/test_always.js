'use strict';

var always = require('./always').always;

exports.testAlways = function(test) {
  test.equal(5, always(5)());
  test.equal(true, always(true)());
  test.deepEqual([1,2], always([1,2])());
  test.done();
};
