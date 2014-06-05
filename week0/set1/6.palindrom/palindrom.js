'use strict';

var is_palindrom = function(n) {
  var new_string = '';
  n = n.toString();
  var list_chars = n.split('');
  list_chars.forEach(function(x) { new_string = x + new_string;});
  if (n === new_string) {
    return true;
  }
  else {return false;}

};

exports.is_palindrom = is_palindrom;
