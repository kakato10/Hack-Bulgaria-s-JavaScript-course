'use strict';

var without = function(exclude, arr){
  return arr.filter(function(a) {
    return !(contains(a, exclude));});};

var contains = function (element, arr) {
  return arr.some(function(b){return b===element;});
};

exports.without = without;
