'use strict';
$(document).ready(function() {

  var studentsDb = [];

  var generateCourseParagraph = function(course) {
    var courseParagraphSource = $("#course-paragraph-template").html();
    var courseParagraphTemplate = Handlebars.compile(courseParagraphSource);
    return courseParagraphTemplate({"info":course});
  };

  var generateDeleteButton = function() {
    return $("#delete-button").html();
  };

  var generateUpdateButton = function() {
    return $("#update-button").html();
  };

  var generateOkButton = function() {
    return $("#ok-btn-td").html();
  }

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
  var getDataBase = function() {
    $.getJSON('http://localhost:3030/students', function(students, textStatus) {
      studentsDb = students;
      $('#table-container').append(generateTable(students));
    });
  };

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
      'delete-button' : generateDeleteButton(),
      'update-button' : generateUpdateButton()
    };
    var tableHtml = tableTemplate(studentToDisplay);
    allRows = allRows + tableHtml;
    });
  return allRows;
  };

  getDataBase();
  $("#create-btn").on("click", function(){
    $.ajax({
      url: "http://localhost:3030/student",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(getData())
    }).done(function(){
      $("#table-container").empty();
      getDataBase();
    });
  });
  $(document).on("click", ".update-btn", function(){
    var fn = $(this).parent().parent().attr("id");
    $.ajax({
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
      $("#" + student.facultyNumber).append(generateOkButton());
    });
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
      getDataBase();
      $('.ok-column').remove();
    });
  });
  $(document).on("click", ".delete-btn", function(){
    var fn = $(this).parent().parent().data("FN");
    $.ajax({
      url: "http://localhost:3030/student/" + fn ,
      type: "DELETE",
      dataType: "json"
    }).done(function(data){
      $("#table-container").empty();
      getDataBase();
    });
  });
});
