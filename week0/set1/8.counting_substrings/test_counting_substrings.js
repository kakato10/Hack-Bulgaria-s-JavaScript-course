'use strict';

var count_substrings = require('./counting_substring').count_substrings;

exports.testCounting1 = function(test) {
  test.equal(2, count_substrings('This is a test string', 'is'));
  test.equal(2, count_substrings('babababa', 'baba'));
  test.equal(3, count_substrings('JavaScript is an awesome language to program in!', 'o'));
  test.equal(0, count_substrings('We have nothing in common!', 'really?'));
  test.equal(2, count_substrings('This is this and that is this', 'this'));
  test.done();
};

