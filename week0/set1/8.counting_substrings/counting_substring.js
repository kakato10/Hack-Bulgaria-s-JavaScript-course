'use strict';
var count_substrings = function (haystack, needle) {

  var re = new RegExp(needle,'g');
  if (haystack.match(re)){
    return haystack.match(re).length;
  } else {
    return 0;
  }
};
exports.count_substrings = count_substrings;

