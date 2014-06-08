'use strict';
$(document).ready(function(){
  var user_answer = '';
  var keys = {
    '48' : 0, '49' : 1, '50' : 2,
    '51' : 3, '52' : 4, '53' : 5,
    '54' : 6, '55' : 7, '56' : 8,
    '57' : 9 };
  var number = generate_number();
  insert_number(number);
  $(document).keypress(function(event) {
    var key =event.keyCode.toString();
    if (key in keys) {
      $('#' + keys[key]).trigger('click');
    }
  });
  $('.number').on('click', function() {
    var $to_append = $(this).text();
    $('#answer').append($to_append);
    user_answer = $('#answer').text();
    if (check(number, user_answer)){
      alert('Good job you have done it!!!');
      number = generate_number();
      insert_number(number);
    }
  });
  $('#del').on('click', function() {
    var new_text = $('#answer').text();
    new_text = new_text.substring(0, new_text.length-1);
    $('#answer').text(new_text);
    user_answer = $('#answer').text();
  });

});
var check = (function (number, answer){
  return number === parseInt(answer,10);
});
var generate_number = function() {
  return Math.floor((Math.random() * 10000) + 1);
};

var insert_number = function(number) {
  $('#answer').empty();
  $('#insert-number').empty();
  var $number = $('<span>').text(number);
  $('#insert-number').text('Your number is:  ');
  $('#insert-number').append($number);
};
