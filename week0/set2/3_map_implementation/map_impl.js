'use strict';

var map = function(f, arr) {
  var result =[],
  i = 0;
  for (i; i<arr.length; i++)
  {
    result[i] = f(arr[i]);
  }
  return result;
};

exports.map = map;

