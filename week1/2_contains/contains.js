'use strict';
var contains = function (element, arr) {
  return arr.some(function(b){return b===element;});
};

exports.contains = contains;
