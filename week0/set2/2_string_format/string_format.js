'use strict';

var string_format = function(string, dict) {
  var key,
  new_string = '',
  i = 0;
  string = string.split(' ');
  for (key in dict) {
    for (i; i < string.length; i++) {
      if (string[i] === '(' + key + ')') {
        string[i] = dict[key];
        }
    }
    i = 0;
  }
  for (i ; i < string.length; i++)
  {
    if (i === string.length - 1) {
       new_string = new_string + string[i];
    } else {new_string = new_string + string[i] + ' ';}
  }
  return new_string;
};

exports.string_format = string_format;
