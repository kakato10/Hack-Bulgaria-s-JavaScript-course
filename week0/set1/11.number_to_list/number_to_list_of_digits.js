'use strict';
var number_to_list = function(n){
    n = n.toString();
	n = n.split('');
	n.map(function(number) {
		return parseInt(number, 10);
	});
	return n;
};

exports.number_to_list = number_to_list;
