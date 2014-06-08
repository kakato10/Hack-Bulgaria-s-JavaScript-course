'use strict';
$(document).ready(function() {
  var students_db =[];
  var to_move = [];
  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
    students_db = students;
    students_db.forEach(function(student) {
          var $student = $('<option>').text(student.name);
          $student.attr('value', student.name);
          $student.attr('id', student.id);
          $student.attr('class', 'student');
          $('#first-menu').append($student);
        });
  });
  $('#first-menu').on('change', function(){
    to_move = $(this).val();
  });
  $('#to-second').on('click', function(){
    send('to-second');
  });
  $('#second').on('change', function(){
    to_move = $(this).val();
  });
  $('#to-first').on('click', function(){
    send('to-first');
  });
  var send = function(button) {
    var to;
    if (button ==='to-second') {
      to = 'second-menu';
    } else {
      to = 'first-menu';
    }
    var id;
    to_move.forEach(function(moving) {
      students_db.forEach(function(student) {
      if (student.name === moving) {
        id = student.id;}
      });
      var $std = $('#' + id);
      $('#' + to).append($std);
    });
  };
});
