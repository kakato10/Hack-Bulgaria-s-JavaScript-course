'use strict';
$(document).ready(function() {
  var intervalID ;
  var time = {};
  var timeRunning = {};
  $('#count-up').on('click', function(){
    getUsersTime();
    window.clearInterval(intervalID);
    timeRunning.minutes = 0;
    timeRunning.seconds = 0;
    intervalID = window.setInterval(function() {countUp(time);}, 1000);
  });
  $('#count-down').on('click', function(){
    getUsersTime();
    window.clearInterval(intervalID);
    timeRunning.minutes = time.minutes;
    timeRunning.seconds = time.seconds;
    intervalID = window.setInterval(function() {countDown(time);}, 1000);
  });
  $('#reset').on('click', function(){
    window.clearInterval(intervalID);
    time = {};
    timeRunning = {};
    $('#second-second-digit').text(0);
    $('#second-first-digit').text(0);
    $('#minute-second-digit').text(0);
    $('#minute-first-digit').text(0);
  });
  var getUsersTime = function(){
    time.minutes = parseInt($('#minutes').val(),10) || 0;
    time.seconds = parseInt($('#seconds').val(),10) || 0;
  };
  var countUp = function(stop_time){
    timeRunning.seconds = timeRunning.seconds + 1;
    if (timeRunning.seconds === 60) {
      timeRunning.minutes = timeRunning.minutes + 1;
      timeRunning.seconds = 0;
    }
    if (timeRunning.minutes === stop_time.minutes && timeRunning.seconds === stop_time.seconds){
      window.clearInterval(intervalID);
      timeRunning.minutes = 0;
      timeRunning.seconds = 0;
    }
    changeClock();
  };
  var countDown = function(){

    if (timeRunning.seconds === 0 && timeRunning.minutes !== 0) {
      timeRunning.minutes = timeRunning.minutes - 1;
      timeRunning.seconds = 59;
    } else if (timeRunning.minutes === 0 && timeRunning.seconds === 0){
      window.clearInterval(intervalID);
      timeRunning.minutes = 0;
      timeRunning.seconds = 0;
    } else {
      timeRunning.seconds = timeRunning.seconds - 1;
    }
    changeClock();
  };
  var changeClock = function(){
    $('#second-second-digit').text(timeRunning.seconds % 10);
    $('#second-first-digit').text(parseInt(timeRunning.seconds / 10, 10));
    $('#minute-second-digit').text(timeRunning.minutes % 10);
    $('#minute-first-digit').text(parseInt(timeRunning.minutes / 10, 10));
  };
});


