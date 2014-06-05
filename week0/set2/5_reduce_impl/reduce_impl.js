'use strict';

var reduce = function (f, arr, start) {
  var i = 0;
  for (i; i < arr.length; i++){
    start = f(start, arr[i]);
  }
  return start;
};

exports.reduce = reduce;
