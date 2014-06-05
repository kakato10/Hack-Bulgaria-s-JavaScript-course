'use strict';

var sum_of_digits = function(n) {
  var sum = 0;
  if (n < 0) {
    n = n * (-1);
  }
  n = n.toString();
  n = n.split('');
  n.forEach(function(x) {
    sum = sum + parseInt(x, 10);
  });
  return sum;
};

exports.sum_digits = sum_of_digits;

