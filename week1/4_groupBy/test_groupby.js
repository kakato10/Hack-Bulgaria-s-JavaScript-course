"use strict";

var groupBy = require("./groupby").groupBy;
exports.testGroupBy = function(test) {
  var arr = [1,2,3,4];
  var f = function(a) {
    if (a % 2 === 0) {return "even";}
    return "odd";
  };
  test.deepEqual ({
    "even" : [2, 4],
    "odd" : [1, 3],
  }, groupBy(f, arr));
  test.done();
};

exports.testGroupBy2 = function(test) {
  var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}];
  var f = function(student) {
  return student.course;
    };
  var result = { "Frontend JavaScript":
   [ { name: "Daniel Taskoff", course: "Frontend JavaScript" },
     { name: "Luboslava Dimitrova", course: "Frontend JavaScript" } ],
  "Programming 101": [ { name: "Elena Jeleva", course: "Programming 101" } ],
  "Core Java":
   [ { name: "Anton Antonov", course: "Core Java" },
     { name: "Nikola Dichev", course: "Core Java" } ] };

  test.deepEqual(result , groupBy(f, students));
  test.done();

};
