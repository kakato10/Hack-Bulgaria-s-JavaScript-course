'use strict';

$(document).ready(function() {
  alert('Hooray, everything runs ok. You can remove this annoying alert from the code.');

  var groupBy = function(f, arr){
    var counter = 0,
    keys =[],
    result = {};
    arr.forEach(function(a){
      keys[counter] = f(a);
      counter = counter + 1;
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
  var students_db = [];
  var course = function(student) {
    return student.course;
  };

  var clearBox = function (elementID) {
      document.getElementById(elementID).innerHTML = '';
  };

  var generateTable = function(items) {
    var data=[];
    items.forEach(function(item){
      data.push(['<tr id="' + item.id.toString() + '">',
                  '<td>' , item.id, '</td>',
                  '<td>', item.name, '</td>',
                  '<td>', item.course, '</td>',
                  '</tr>'].join(''));
    });
    var table = ["<div class='row'>", "<div class='col-xs-12'>",
                "<table class='table'>",
                    '<thead>',
                    '<tr>',
                      '<th>', 'Id', '</th>',
                      '<th>', 'Name', '</th>',
                      '<th>', 'Course', '</th>',
                    '</tr>',
                    '</thead>',
                    '<tbody>',
                    data.join(''),
                    '</tbody>',
                    '</table>',
                    '</div></div>'];
    return table.join('');
  };
  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
      students_db = students;
      $('#table-container').append(generateTable(students));
  });

  $('#group-btn').on('click', function() {
    clearBox('table-container');
    var students_ordered = groupBy(course, students_db);
    var courses = Object.keys(students_ordered);
    courses.forEach(function(course) {
      $('#table-container').append(generateTable(students_ordered[course]));
    });
  });
    $('#search-btn').on('click', function() {
    students_db.forEach(function(student) {
      var tr = document.getElementById(student.id);
      tr.removeAttribute('class', '');
    });
    var searched = $('#search-box').val();
    var result = students_db.filter(function(student){
      return student.name.indexOf(searched) > -1;
    });
    console.log(result);
    result.forEach(function (match) {
      var tr = document.getElementById(match.id);
      tr.setAttribute('class', 'success');
    });
    // });
  });
});

//всеки <tr> да съдържа id на студента
