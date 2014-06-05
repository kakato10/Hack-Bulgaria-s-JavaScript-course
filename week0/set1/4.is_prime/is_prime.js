'use strict';

var is_prime = function(n) {
   if (n === 1) {
    return false;
   }
   var x;
   if (n < 0) {
    x = -1 * n;
   }
   else {x = n - 1;}
   while (x != 1) {
    if (n % x === 0) {
      return false;
    }
    x = x - 1;
   }
   return true;
};

exports.is_prime = is_prime;
