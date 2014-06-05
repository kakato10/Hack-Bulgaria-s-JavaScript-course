'use strict';

var nth_fibonacci = function (x) {
  if (x === 1 || x === 2) {
    return 1;
  }
  return nth_fibonacci(x - 1) + nth_fibonacci(x - 2);
};

exports.nth_fibonacci = nth_fibonacci;
