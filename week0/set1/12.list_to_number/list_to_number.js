'use strict';

var list_to_number = function(digits){
    var number = digits.reduce(function(digit, start) {
		return digit.toString() + start;}, '');
	return parseInt(number, 10);
};

exports.list_to_number = list_to_number;
