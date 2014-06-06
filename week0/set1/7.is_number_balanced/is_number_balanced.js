'use strict';

var is_number_balanced = function(n) {
  var number_string = n.toString(),
  first_half, second_half,
  half_length = parseInt(number_string.length / 2, 10);
  if (number_string.length === 1)
  {
    return true;
  }
  else if (number_string.length % 2 === 1){
    first_half = number_string.substr(0, half_length + 1);
    second_half = number_string.substr(half_length , number_string.length);
  }
  else {
    first_half = number_string.substr(0, half_length);
    second_half = number_string.substr(half_length , number_string.length);
  }
  first_half = first_half.split('');
  second_half = second_half.split('');
  first_half = first_half.map(function(x) { return parseInt(x, 10);});
  second_half = second_half.map(function(x) { return parseInt(x, 10);});
  var f = function (a,b) {return a + b;};
  var x1 = first_half.reduce(f, 0);
  var x2 = second_half.reduce(f, 0);
  if (x1 === x2) {
    return true;
  }
  return false;
  };

exports.is_number_balanced = is_number_balanced;
