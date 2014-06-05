'use strict';

var charsHistogram = function(str) {
  var result = {};
  var pattern = /^[0-9a-z]+$/;
  str = str.toLowerCase();
  str = str.split('');
  str = str.filter(function(a) {
    return pattern.test(a);});
  str.forEach(function (a) {
    if (a in result) {
      result[a] = result[a] + 1;
    } else {result[a] = 1;}
  });
  return result;
};

exports.charsHistogram = charsHistogram;
