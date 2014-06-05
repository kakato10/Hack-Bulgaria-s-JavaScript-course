'use strict';

var zip = require('./zip').zip;

exports.testZip = function(test) {
  var result = [[1,1], [3,2], [5,3]];
  var arr1 = [1,3,5];
  var arr2 = [1,2,3];
  test.deepEqual(result.toString(), zip(arr1, arr2).toString());
  test.done();
};
