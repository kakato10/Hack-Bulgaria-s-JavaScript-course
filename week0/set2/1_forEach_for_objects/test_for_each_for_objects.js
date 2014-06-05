'use strict';

var forEach = require('./for_each_for_objects').forEach;

exports.testForEach1 = function(test){

  var info = {
      'name' : 'Rado',
      'age' : 23
  };
  test.equal( {'name' : 'Rado', 'age' : 23}, forEach(function (value, key)
    {console.log(key, value);}, info));
};
