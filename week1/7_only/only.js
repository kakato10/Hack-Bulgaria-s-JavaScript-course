'use strict';
var only = function(type, arr) {
  return arr.every(function(x) {return type === typeof(x);});
};

exports.only = only;
