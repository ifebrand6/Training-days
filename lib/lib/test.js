'use strict';

var countString = '';
var i = 0;

do {
    countString = countString + i;
    i++;
} while (i < 5);

console.log(countString);

var delayed = function delayed() {
    i + 2;
};

var delay = function delay() {};