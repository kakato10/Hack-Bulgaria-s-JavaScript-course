'use strict';


var sum = function(a, b) {
  if (typeof(a) === 'number' && typeof(b) === 'number'){
    return a + b;
  }
  throw new TypeError('Expected numbers, got ' + typeof(a) + ' ' +typeof(b));

};

var concat = function(a, b) {
 if (typeof(a) === 'string' && typeof(b) === 'string'){
    return a + b;
  }
  throw new TypeError('Expected numbers, got ' + typeof(a) + ' ' +typeof(b));
};

exports.sum = sum;
exports.concat = concat;


