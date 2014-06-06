'use strict';

var count_consonants = require('./count_consonants').count_consonants;

exports.testCountconsonants = function(test) {
  test.equal(7,count_consonants('JavaScript'));
  test.equal(11, count_consonants('Theistareykjarbunga'));
  test.equal(7, count_consonants('grrrrgh!'));
  test.equal(44, count_consonants('Github is the second best thing that happend to programmers, after the keyboard!'));
  test.equal(6, count_consonants('A nice day to code!'));
  test.done();
};
