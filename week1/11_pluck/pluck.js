'use strict';

var pluck = function(prop, arr){
  var result = [];
  arr.forEach(function(a) {result.push(a[prop]);});
  return result;
};

exports.pluck = pluck;
