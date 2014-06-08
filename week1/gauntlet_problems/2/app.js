'use strict';

$(document).ready(function(){
  var allParagraph = [];
  $('p').each(function(index, element) {
    allParagraph.push($(element).attr('class'));
  });
  $('#toggle-btn').on('click', function(){
    $('p').removeClass('highlight');
    var toHighlight = allParagraph.shift();
    $('.' + toHighlight).addClass('highlight');
    allParagraph.push(toHighlight);
  });
});
