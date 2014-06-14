'use strict';
$(document).ready(function() {
  var intervalID ;
  var time = {};
  var time_running = {};
  $('#count-up').on('click', function(){
    get_users_time();
    time_running.minutes = 0;
    time_running.seconds = 0;
    intervalID = window.setInterval(function() {countUp(time);}, 500);
  });
  $('#count-down').on('click', function(){
    get_users_time();
    time_running.minutes = time.minutes;
    time_running.seconds = time.seconds;
    intervalID = window.setInterval(function() {countDown(time);}, 500);
  });
  $('#reset').on('click', function(){
    window.clearInterval(intervalID);
    time = {};
    time_running = {};
    $('#second-second-digit').text(0);
    $('#second-first-digit').text(0);
    $('#minute-second-digit').text(0);
    $('#minute-first-digit').text(0);
  });
  var get_users_time = function(){
    time.minutes = parseInt($('#minutes').val(),10) || 0;
    time.seconds = parseInt($('#seconds').val(),10) || 0;
  };
  var countUp = function(stop_time){
    time_running.seconds = time_running.seconds + 1;
    if (time_running.seconds === 60) {
      time_running.minutes = time_running.minutes + 1;
      time_running.seconds = 0;
    }
    if (time_running.minutes === stop_time.minutes && time_running.seconds === stop_time.seconds){
      window.clearInterval(intervalID);
      time_running.minutes = 0;
      time_running.seconds = 0;
    }
    change_clock();
  };
  var countDown = function(){

    if (time_running.seconds === 0 && time_running.minutes !== 0) {
      time_running.minutes = time_running.minutes - 1;
      time_running.seconds = 59;
    } else if (time_running.minutes === 0 && time_running.seconds === 0){
      window.clearInterval(intervalID);
      time_running.minutes = 0;
      time_running.seconds = 0;
    } else {
      time_running.seconds = time_running.seconds - 1;
    }
    change_clock();
  };
  var change_clock = function(){
    $('#second-second-digit').text(time_running.seconds % 10);
    $('#second-first-digit').text(parseInt(time_running.seconds / 10, 10));
    $('#minute-second-digit').text(time_running.minutes % 10);
    $('#minute-first-digit').text(parseInt(time_running.minutes / 10, 10));
  };
});


