'use strict';
var number_to_list = require('./number_to_list_of_digits').number_to_list;

exports.testNumberToList = function(test){
  test.deepEqual([1, 2, 3], number_to_list(123));
  test.deepEqual([9, 9, 9, 9, 9], number_to_list(99999));
  test.deepEqual([1, 2, 3, 0, 2, 3], number_to_list(123023));
  test.done();
};
