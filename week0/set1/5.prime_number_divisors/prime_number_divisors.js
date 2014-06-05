'use strict';

var checking = function(n) {
  var number_of_divisors = 2, t = n - 1 ;
  while (t != 1) {
    if (n % t === 0) {
      number_of_divisors = number_of_divisors + 1;
    }
    t = t - 1;
  }

  return is_prime(number_of_divisors);
};


var is_prime = function(x) {
   if (x === 1) {
    return false;
   }
   var k;
   if (x < 0) {
    k = -1 * x;
   }
   else {k = x - 1;}
   while (k != 1) {
    if (x % k  === 0) {
      return false;
    }
    k = k - 1;
   }
   return true;
};

exports.checking = checking;

