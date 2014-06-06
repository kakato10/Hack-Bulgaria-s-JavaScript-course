'use strict';

var is_decreasing = function(seq) {
	var smallest;
	var result = true;
	seq.forEach(function(element) {
		if (element >= smallest) {
			result = false;
		} else if (smallest === undefined) {
      smallest = element;
    } else {
			smallest = element;
		}
  });
	return result;
};

exports.is_decreasing = is_decreasing;
