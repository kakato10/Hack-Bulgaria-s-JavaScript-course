'use strict';

var count_consonants = function(str) {
  str = str.toLowerCase();
  var re;
  var count = 0;
  var consonants = 'bcdfghjklmnpqrstvwxz';
  consonants = consonants.split('');
  consonants.forEach(function(consonant){
    re = new RegExp(consonant, 'g');
    if (str.match(re)) {
      count = count + str.match(re).length;
    }
  });
  return count;
};

exports.count_consonants  = count_consonants;
