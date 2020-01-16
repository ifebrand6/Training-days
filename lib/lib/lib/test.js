'use strict';

var countString = '';
var i = 0;

do {
    countString = countString + i;
    i++;
} while (i < 5);

console.log(countString);

var delayed = function delayed() {};

var delay = function delay() {};