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
    getStudents(function(students, textStatus) {
      studentsDb = students;
      if (student === undefined){
        $('#table-container').append(generateTable(students));
      } else {
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
  return allRows;
  };

  var updateDatabase = function(newData, callback) {
    $.ajax({
      url: "http://localhost:3030/student",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(newData)
    }).done(function(data){
      callback(data);
    });
  };

  var deleteStudent = function(fn, callback) {
    $.ajax({
      url: "http://localhost:3030/student/" + fn ,
      type: "DELETE",
      dataType: "json"
    }).done(function(data){
      callback(data);
    });
  };

  var getStudents = function(callback, fn) {
    if (fn !== undefined){
      $.ajax({
        url: "http://localhost:3030/student/" + fn,
        type: "GET",
        contentType: "application/json"
      }).done(function(data){
        callback(data);
      });
    } else {
      $.ajax({
        url: "http://localhost:3030/students",
        type: "GET",
        contentType: "application/json"
      }).done(function(data, textStatus){
          callback(data, textStatus);
      });
    }
  };
  getDataBase();

  $("#create-btn").on("click", function(){
    updateDatabase(getData(), function(){
      $("#table-container").empty();
      getDataBase();
    });
  });

  $(document).on("click", ".update-btn", function(){
    var fn = $(this).parent().parent().attr("id");
    $(this).parent().parent().children(".ok-column").remove();
    $elementToChange = $(this).parent().parent();
    getStudents(function(data){
      var student = data;
      var courses = [];
      student.courses.forEach(function(course) {
        courses = courses.concat(course);
      });
      courses = courses.join(',');
      $elementToChange.children('.name').replaceWith(generateInputNameField());
      $elementToChange.children('.courses').replaceWith(generateInputCoursesField());
      $elementToChange.children('.name').children(".update-name-box").val(student.name);
      $elementToChange.children('.courses').children(".update-courses-box").val(courses);
      $("#" + student.facultyNumber).append(generateOkButton());
    }, fn);
  });

  $(document).on("click", ".ok", function(){
    var fn = $(this).parent().parent().attr("id");
    updateDatabase(getUpdateData(fn), function(data){
      getStudents(function(data){
        var student = data;
        getDataBase(student);
      }, fn);
    });
  });

  $(document).on("click", ".delete-btn", function(){
    var fn = $(this).parent().parent().attr("id");
    deleteStudent(fn, function(data) {
      $("#table-container").empty();
      getDataBase();
    })
  });
});
