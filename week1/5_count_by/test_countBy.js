"use strict";

var countBy = require("./countBy").countBy;
exports.testCountBy = function(test) {
  var arr = [1,2,3,4];
  var f = function(a) {
    if (a % 2 === 0) {return "even";}
    return "odd";
  };
  test.deepEqual ({
    "even" : 2,
    "odd" : 2,
  }, countBy(f, arr));
  test.done();
};

exports.testCountBy2 = function(test) {
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
  var result = {"Frontend JavaScript": 2,
   "Programming 101": 1,
  "Core Java":2
  };

  test.deepEqual(result , countBy(f, students));
  test.done();

};
