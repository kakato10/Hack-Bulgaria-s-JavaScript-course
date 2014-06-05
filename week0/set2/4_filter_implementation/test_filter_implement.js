'use strict';

var filter = require('./filter_impl').filter;

exports.testfilter = function(test) {
  test.equal('1,3', filter(function(a) {return a % 2;},
   [1, 3 ,4]).toString());
  test.done();
};
