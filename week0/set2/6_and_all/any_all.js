'use strict';

var any = function (f, arr) {
  var i = 0;
  for (i; i < arr.length; i++) {
    if (f(arr[i])) {
      return true;
    }
  }
  return false;
};

var all = function (f, arr) {
  var i = 0;
  for (i; i < arr.length; i++) {
    if (! (f(arr[i]))) {
      return false;
    }
  }
  return true;
};

exports.any = any;
exports.all = all;
