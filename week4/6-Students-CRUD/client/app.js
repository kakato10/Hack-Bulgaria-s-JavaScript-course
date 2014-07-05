'use strict';
$(document).ready(function() {

  var studentsDb = [];
  var $elementToChange;
  var generateCourseParagraph = function(course) {
    var courseParagraphSource = $("#course-paragraph-template").html();
    var courseParagraphTemplate = Handlebars.compile(courseParagraphSource);
    return courseParagraphTemplate({"info":course});
  };

  var generateDeleteButton = function() {
    return $(".delete-button").html();
  };

  var generateUpdateButton = function() {
    return $(".update-button").html();
  };

  var generateOkButton = function() {
    return $(".ok-btn-td").html();
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
  };

  var getUpdateData = function(fn) {
    return {
      "facultyNumber" : fn,
      "name" : $("#" + fn).children('.name').children(".update-name-box").val(),
      "courses" : $("#" + fn).children('.courses').children(".update-courses-box").val().split(',')
    };
  };

  var generateInputNameField = function() {
    return $("#name-input").html();
  };

  var generateInputCoursesField = function() {
    return $("#courses-input").html();
  };

  var getDataBase = function(student) {
    $.getJSON('http://localhost:3030/students', function(students, textStatus) {
      studentsDb = students;
      if (student === undefined){
        $('#table-container').append(generateTable(students));
      } else {
        console.log(generateTable([student]))
        $("#" + student.facultyNumber).replaceWith(generateTable([student]));
      }
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
    if(items.length === 1) {
      console.log(allRows);
    }
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
    $elementToChange = $(this).parent().parent();
    $.ajax({
      url: "http://localhost:3030/student/" + fn,
      type: "GET",
      contentType: "application/json"
    }).done(function(data) {
      var student = data;
      var courses = [];
      student.courses.forEach(function(course) {
        courses = courses.concat(course);
      });
      courses = courses.join(',');
      console.log($elementToChange.children('.name'))
      $elementToChange.children('.name').replaceWith(generateInputNameField());
      $elementToChange.children('.courses').replaceWith(generateInputCoursesField());
      $elementToChange.children('.name').children(".update-name-box").val(student.name);
      $elementToChange.children('.courses').children(".update-courses-box").val(courses);
      $("#" + student.facultyNumber).append(generateOkButton());
    });
  });
  $(document).on("click", ".ok", function(){
    var fn = $(this).parent().parent().attr("id");
    $.ajax({
      url: "http://localhost:3030/student",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(getUpdateData(fn))
    }).done(function(data){
      $.ajax({
      url: "http://localhost:3030/student/" + fn,
      type: "GET",
      contentType: "application/json"
    }).done(function(data){
        var student = data
        console.log(student);
        getDataBase(student)
      });
    });
  });
  $(document).on("click", ".delete-btn", function(){
    var fn = $(this).parent().parent().attr("id");
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
