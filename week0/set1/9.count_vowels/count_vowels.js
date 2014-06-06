'use strict';
var count_vowels = function(str) {
	str = str.toLowerCase();
  var re;
	var count = 0;
	var vowels = ['a','e','i','o','u','y'];
	vowels.forEach(function(vowel){
    re = new RegExp(vowel, 'g');
    if (str.match(re)) {
      count = count + str.match(re).length;
    }
	});
	return count;
};

exports.count_vowels  = count_vowels;
