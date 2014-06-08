'use strict';
$(document).ready(function() {
  var counter = 0;
  $('#search-button').on('click', function(){
    var url = $('#search-input').val();
    var $div = $('<div>').attr('class', 'row');
    var $img = $('<img>').attr('src', url);
    $img.attr('class', counter);
    counter = counter + 1;
    $img
    .load(function() {
      $div.append($img);
      $('div#insert').append($div);
    })
    .error(function(){
      alert('Ouchhhh something went wrong!');
    });
    $img.on('click', function(){
      console.log('lqlqlq');
      $img.remove();
    });
  });
  $('#search-input').on('keyup', function(event){
      console.log(event);
      if(event.keyCode === 13) {
        $('#search-button').trigger('click');
      }
    });
});
