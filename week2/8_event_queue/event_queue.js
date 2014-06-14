'use strict';

var eventBus = (function() {
  var eventTable = {};

  var addEvent = function(eventName, callback) {
    if (!(eventName in eventTable)) {
      eventTable[eventName] = [];
      eventTable[eventName].push(callback);
    } else {
      eventTable[eventName].push(callback);
    }
  };

  var removeEvent = function(eventName) {
    if(eventName in eventTable) {
      delete eventTable[eventName];
    }
  };

  var triggerEvent = function(eventName, args) {
    var callbacks = eventTable[eventName];
    var eventArgs = args || {};
    if(callbacks === undefined) {
      return 'There are is no such Event';
    }
    callbacks.forEach(function(callback) {
      callback.call(null, eventArgs);
    });
  };

  return {
    on : addEvent,
    remove : removeEvent,
    trigger : triggerEvent
  };
}());
