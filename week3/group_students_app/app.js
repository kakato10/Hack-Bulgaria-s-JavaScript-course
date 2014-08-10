'use strict';
$(document).ready(function() {

  var
    studentsDb = [],
    studentsByCourse,
    $tableContainer = $("#table-container"),
    $btnContainer = $("#btn-container"),
    $groupsModalContent = $("#groups-modal-content");


  var groupBy = function(f, arr){
    var keys =[],
    result = {};
    arr.forEach(function(a){
      keys.push(f(a));
    });
    keys.forEach(function(key) {
      if(!(key in result)){
        result[key] = arr.filter(function(a){
          return f(a) === key;
        });
      }
    });
    return result;
  };

  var groupByCourses = function(a) {
    if ( a.courses.some(function(course){
      return course.name === "Frontend JavaScript" && course.group === 1;
    })) {
      return "Frontend JavaScript - 1";
    } else if ( a.courses.some(function(course){
      return course.name === "Frontend JavaScript" && course.group === 2;
    })) {
      return "Frontend JavaScript - 2";
    } else if ( a.courses.some(function(course){
      return course.name === "Core Java" && course.group === 1;
    })) {
      return "Core Java - 1";
    } else if ( a.courses.some(function(course){
      return course.name === "Core Java" && course.group === 2;
    })) {
      return "Core Java - 2";
    } else if ( a.courses.some(function(course){
      return course.name === "Angular JS" && course.group === 2;
    })) {
      return "Angular JS - 2";
    }
  };


  var generateCourseParagraph = function(course, group) {
    return '<p>' + course + ' - ' + group + '</p>';
  };

  var generateId = (function() {
    var count = 0;
    return function() {
      count = count + 1;
      return count;
    }
  } () );

  var getRandomIndex  = function(max) {
  return Math.floor(Math.random() * (max + 1));
  };

  var generateGroups = function (data, count) {
    var
      groups = [],
      count = count || 2,
      students = data.filter(function(student){
        return true;}),
      counter = 1,
      group = [];
    while (students.length >= count) {
      group = [];
      counter = 1;
      while (counter <= count) {
        group.push(students.splice(getRandomIndex(students.length - 1), 1)[0]);
        counter = counter + 1;
        if (counter > count) {
          groups.push(group);
          group = [];
        }
      }
    }
    if(students.length !== 0){
      groups.push(students);
    }
    return groups;
  };

  var changeAvailability = function(id, availability) {
    studentsDb.forEach(function(student) {
      if (student.id.toString() === id) {
        student.available = availability;
      }
    });
  };

  var sortAlphabetically = function(data) {
    return data.sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });
  };
  var sortData = function(data) {

    var
      studentsAvailable = data.filter(function(student) {
        return student.available === true;
      }),
      studentsUnavailable = data.filter(function(student) {
        return student.available === false;
      });
    return studentsAvailable.concat(studentsUnavailable);
  };

  var showGroups = function(groups) {
    var
      $groupsModal = $("#groups-modal"),
      toAppend = "",
      groupHeaderSource = $("#group-header").html(),
      groupHeaderTemplate = Handlebars.compile(groupHeaderSource),
      memberRowSource = $("#member-row").html(),
      memberRowTemplate = Handlebars.compile(memberRowSource);

    groups.forEach(function(group, index){
      toAppend = toAppend + groupHeaderTemplate({
        id: index
      });
      group.forEach(function(member){
        toAppend = toAppend + memberRowTemplate({
          name: member.name
        });
      })
    });
    $groupsModalContent.append(toAppend);
    $groupsModal.modal("show");
  }

  var generateTable = function(items) {
    var allRows = '';
    items.forEach(function(item){
    var studentCourses = '';
    if (item.courses.length > 1) {
      item.courses.forEach(function(course) {
          studentCourses = studentCourses + generateCourseParagraph(course.name, course.group);
        });
      } else if(item.courses.length === 1) {
        studentCourses = generateCourseParagraph(item.courses[0].name, item.courses[0].group);
      }
      var buttonClass = '';
      if (item.available === true) {
        buttonClass ='success';
      } else {
        buttonClass ='danger';
      }
      var tableSource = $('#table-template').html();
      var tableTemplate = Handlebars.compile(tableSource);
      var studentToDisplay = {
        'id' : item.id,
        'name' : item.name,
        'courses' : studentCourses,
        'github' : item.github || 'Not given',
        'here' : buttonClass,
        'availability' : item.available
      };
      if (item.available === true) {
        studentToDisplay.availability = "here";
      } else {
        studentToDisplay.availability = "missing";
      }
      var tableHtml = tableTemplate(studentToDisplay);
      allRows = allRows + tableHtml;
    });
  return allRows;
  };

  $.getJSON('https://hackbulgaria.com/api/students/', function(students, textStatus) {
      studentsDb = sortAlphabetically(students);
      studentsDb.forEach(function(student){
        student.id = generateId();
      });
      studentsDb = sortData(studentsDb);
      studentsByCourse = groupBy(groupByCourses, studentsDb);
      for (var key in studentsByCourse) {
        if (key !== undefined) {
          $tableContainer.append(generateTable(studentsByCourse[key]));
        }
      }
  });

  $('.course').on('click', function() {
    var
      searchedCourse = $(this).text(),
      studentsToDisplay,
      searchedGroup;

    searchedCourse = searchedCourse.split(' ');
    searchedGroup = searchedCourse[searchedCourse.length - 1];
    searchedCourse.pop();
    searchedCourse = searchedCourse.join(' ');
    studentsToDisplay = studentsDb.filter(function(student) {
      return student.courses.some(function(course) {
        return (course.name === searchedCourse) && (course.group.toString() === searchedGroup) &&student.available === true;
      });
    });
    $(".course").remove();
    $tableContainer.empty();
    $btnContainer.append($("#group-input-template").html());
    studentsDb = sortData(studentsToDisplay);
    $tableContainer.append(generateTable(studentsDb));
  });

  $(document).on('click', '.available' ,function() {
    if ($(this).text() === 'here') {
      $(this).removeClass('btn-success');
      $(this).addClass('btn-danger');
      $(this).text('missing');
      changeAvailability($(this).parent().parent().attr('id'), false);
    } else {
      $(this).removeClass('btn-danger');
      $(this).addClass('btn-success');
      $(this).text('here');
      changeAvailability($(this).parent().parent().attr('id'), true);
    }
  });

  $(document).on('click', "#group-btn", function() {
    var
      count = $('#group-box').val() || 2,
      groups = generateGroups(studentsDb, count);

    $groupsModalContent.empty();
    showGroups(groups);
  });

  $(window).scroll(function(){
    $btnContainer
      .stop()
      .animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );
  });
});
