'use strict';

var forEach = function(f, arg) {
  var i = 0,
  n = arg.length,
  key;

  if (Array.isArray(arg)) {
    for(i; i < n; i++) {
      f(arg[i], i, arg);
    }
  } else if (typeof(arg) === 'object') {
    for(key in arg) {
      f(arg[key], key, arg);
    }
  }
};


exports.forEach = forEach;
