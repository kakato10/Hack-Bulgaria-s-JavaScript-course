'use strict';

var count_vowels = require('./count_vowels').count_vowels;

exports.testCountVowels = function(test) {
  test.equal(3,count_vowels('JavaScript'));
  test.equal(8, count_vowels('Theistareykjarbunga'));
  test.equal(0, count_vowels('grrrrgh!'));
  test.equal(22, count_vowels('Github is the second best thing that happend to programmers, after the keyboard!'));
  test.equal(8, count_vowels('A nice day to code!'));
  test.done();
};
