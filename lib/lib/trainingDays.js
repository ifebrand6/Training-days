'use strict';

// The scope of `random` is too loose 

var getRandEvent = function getRandEvent() {
  var random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
var getTrainingDays = function getTrainingDays(event) {
  var days = {};
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};
var name = 'Nala';
// The scope of `name` is too tight 
var logEvent = function logEvent(name, event) {

  console.log(name + '\'s event is: ' + event);
};

var logTime = function logTime(name, days) {
  console.log(name + '\'s time to train is: ' + days + ' days');
};

var event = getRandEvent();
var days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);