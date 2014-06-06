'use strict';

var is_increasing = function(seq) {
	var greatest;
	var result = true;
	seq.forEach(function(element) {
		if (element <= greatest) {
			result = false;
		} else if(greatest === undefined){
      greatest = element;
    } else {
			greatest = element;
		}
  });
	return result;
};

exports.is_increasing = is_increasing;
