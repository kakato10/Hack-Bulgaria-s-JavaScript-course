'use strict';

var filter = function (pred, arr) {
  var i = 0,
  counter = 0,
  result = [];
  for (i; i < arr.length; i++){
    if (pred(arr[i])) {
      result[counter] = arr[i];
      counter = counter + 1;
    }
  }
  return result;
};

exports.filter = filter;
