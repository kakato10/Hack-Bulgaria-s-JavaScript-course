var checkData = require("./corruptedData").checkData;
var data = require("./data");
exports.testCorruptedData = function(test) {
  var result = [[{ pk: 280,
  model: 'students.checkin',
  fields: { date: '2014-06-05', mac: '00:24:d7:39:3a:8c', student: 22 } }],
[{ pk: 387,
  model: 'students.checkin',
  fields: { date: '2014-06-07', mac: 'e0:2a:82:aa:02:a1', student: 1 } }],
[{ pk: 429,
  model: 'students.checkin',
  fields: { date: '2014-06-10', mac: '00:24:d7:39:3a:8c', student: 22 } }],
[{ pk: 452,
  model: 'students.checkin',
  fields: { date: '2014-06-12', mac: '78:92:9c:2e:44:0a', student: 36 } }],
[{ pk: 577,
  model: 'students.checkin',
  fields: { date: '2014-06-26', mac: 'e0:2a:82:aa:02:a1', student: 1 } }],
[{ pk: 592,
  model: 'students.checkin',
  fields: { date: '2014-06-26', mac: 'e0:2a:82:52:52:a4', student: 5 } }]]
  test.deepEqual(result.toString(), checkData(data).toString());
  test.done();
};


