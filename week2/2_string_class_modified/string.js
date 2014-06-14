'use strict';

String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasharize = function() {
  var the_list = this.split('');
  the_list = the_list.map(function(letter){
    if (letter === '_') {
      return letter ='-';
    } else {return letter;}
  });
  return the_list.join('');
};

String.prototype.times = function(amount) {
  return range(this, amount);
};

String.prototype.blank = function() {
  return this === '' || this.split('').every (function(element) {
    return element === ' ';
  });
};


exports.String = String

var range = function(from, to) {
  if (to === 1) {
    return from;
  } else {
    return from + range(from, to - 1);
  }
};
