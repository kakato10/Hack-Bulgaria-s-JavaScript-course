'use strict';
$(document).ready(function() {

  var studentsDb = [];

  var generateCourseParagraph = function(course) {
    return '<p>' + course + '</p>';
  };

  var clearBox = function (elementID) {
      $("#" + elementID).empty();
  };
  var getData = function() {
    return {
      "facultyNumber" : $("#FN-box").val(),
      "name" : $("#name-box").val(),
      "courses" : $("#courses-box").val().split(',')
    };
  }
  var generateTable = function(items) {
    var allRows = '';
    items.forEach(function(item){
    var studentCourses = '';
    item.courses.forEach(function(course) {
      studentCourses = studentCourses + generateCourseParagraph(course);
    });
    var tableSource = $('#table-template').html();
    var tableTemplate = Handlebars.compile(tableSource);
    var studentToDisplay = {
      'FN' : item.facultyNumber,
      'name' : item.name,
      'courses' : studentCourses,
    };
    var tableHtml = tableTemplate(studentToDisplay);
    allRows = allRows + tableHtml;
    });
  return allRows;
  };

  $.getJSON('http://localhost:3030/students', function(students, textStatus) {
      studentsDb = students;
      $('#table-container').append(generateTable(students));
  });
  $("#create-btn").on("click", function(){
    $.ajax({
      url: "http://localhost:3030/student",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(getData())
    }).done(function(){
      $("#table-container").empty();
      $.getJSON('http://localhost:3030/students', function(students, textStatus) {
        studentsDb = students;
        $('#table-container').append(generateTable(students));
      });
    });
  });
  $("#update-btn").on("click", function(){
    $.ajax({
      url: "http://localhost:3030/student",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(getData())
    }).done(function(data){
      $("#table-container").empty();
      $.getJSON('http://localhost:3030/students', function(students, textStatus) {
        studentsDb = students;
        $('#table-container').append(generateTable(students));
      });
    });
  });
  $("#delete-btn").on("click", function(){
    console.log("http://localhost:3030/student/" + $("#FN-box").val());
    $.ajax({
      url: "http://localhost:3030/student/" + $("#FN-box").val(),
      type: "DELETE",
      dataType: "json"
    }).done(function(data){
      $("#table-container").empty();
      $.getJSON('http://localhost:3030/students', function(students, textStatus) {
        studentsDb = students;
        $('#table-container').append(generateTable(students));
      });
    });
  });


});
