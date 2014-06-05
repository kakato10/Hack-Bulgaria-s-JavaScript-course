'use strict';

var map = require('./map_impl').map;

exports.testmap = function(test) {
  var arr = [1, 2, 5];
  test.equal('2,3,6', map(function(a) {return a + 1;}, arr).toString());
  test.done();
};
