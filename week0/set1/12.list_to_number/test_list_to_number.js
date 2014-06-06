'use strict';

var list_to_number = require('./list_to_number').list_to_number;

exports.testListToNumber = function(test){
  test.equal(123, list_to_number([1,2,3]));
  test.equal(99999,list_to_number([9,9,9,9,9]));
  test.equal(123023, list_to_number([1,2,3,0,2,3]));
  test.equal(123, list_to_number([0,1,2,3]));
  test.done();
};
