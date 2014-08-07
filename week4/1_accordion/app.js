$(document).ready(function(){
  (function($) {
    'use strict';
    $.fn.accordion = function() {
      var $accordion = this;
      $accordion.find('dd').hide();
      $accordion.on('click', 'dt', function(event) {
        event.preventDefault();
        var $ddToBeShown = $(this).next('dd');
        if (!$ddToBeShown.hasClass('selected-dd')) {
          $accordion.find('.selected-dd').removeClass('selected-dd').slideUp();
          $ddToBeShown.addClass('selected-dd').slideDown();
        }
      });
    };
  }(jQuery));
  $("#accordion" ).accordion();
});
