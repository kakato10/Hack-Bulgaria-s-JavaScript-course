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
      'delete-button' : '<button class="btn delete-btn">Delete student</button>',
      'update-button' : '<button class="btn update-btn">Update student</button>'
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
  $(document).on("click", ".update-btn", function(){
    var fn = $(this).parent().parent().attr("id");
    $.ajax({
      //start from here
      url: "http://localhost:3030/student/" + fn,
      type: "GET",
      contentType: "application/json"
    }).done(function(data) {
      $('.ok-column').remove();
      var student = data;
      var courses = [];
      student.courses.forEach(function(course) {
        courses = courses.concat(course);
      });
      courses = courses.join(',');
        $("#name-box").val(student.name);
      $("#courses-box").val(courses);
      $("#FN-box").val(student.facultyNumber);
      $("#" + student.facultyNumber).append('<td class="ok-column"><button class="ok">OK</button></td>');
    });

      //here should i still writing !!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  $(document).on("click", ".ok", function(){
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
        $('.ok-column').remove();
      });
    });
  });
  $(document).on("click", ".delete-btn", function(){
    var fn = $(this).parent().parent().attr("data-FN");
    $.ajax({
      url: "http://localhost:3030/student/" + fn ,
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
