'use strict';

var wordsHistogram = function(str) {
  var result = {};
  var pattern = /^[0-9a-z]|\s+$/;
  str = str.toLowerCase();
  str = str.split('');
  str = str.filter(function(a) {
    return pattern.test(a);});

  str = str.toString();
  str = str.replace(/,/g, '');
  console.log (str);
  str = str.split(' ');
  str.forEach(function (a) {
    if (a in result) {
      result[a] = result[a] + 1;
    } else {result[a] = 1;}
  });
  return result;
};

exports.wordsHistogram = wordsHistogram;
