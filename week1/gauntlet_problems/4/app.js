'use strict';
$(document).ready(function(){
  alert('lqlqlql');
  var students_db = [];
  var courses =[];
  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
    students_db = students;
    students_db.forEach(function(student){
      if(courses.indexOf(student.course) === -1){
        courses.push(student.course);
      }
    });
    courses.forEach(function(course){
      var $course = $('<option>').text(course);
      $course.attr('value', course);
      $('#course').append($course);
    });
  });
  $('select').on('change', function(){
      if ($(this).attr('id') === 'course'){
        $('#students').empty();
        $('#display-student').empty();
        var student_course = [];
        var selected_course = $(this).val();
        student_course = students_db.filter(function(student){
          return student.course === selected_course;
        });
        student_course.forEach(function(student) {
          var $student = $('<option>').text(student.name);
          $student.attr('value', student.name);
          $('#students').append($student);
        });
      } else if($(this).attr('id') === 'students'){
        var name = $(this).val();
        var the_student = students_db.filter(function(student){
          return student.name === name;
        });
        var $p = $('<p>').text(the_student[0].name + ' : ' + the_student[0].github);
        $('#display-student').append($p);
      }
    });
});
