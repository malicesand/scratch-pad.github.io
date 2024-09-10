// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/**
 * I: array
 * O: array values printed to console
 * C: for loop to iterate forward
 * E: none detected
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // create for loop to iterate forward over input array 
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: array
O: values printed in reverse to console
C: for loop to iterate backwards thru array
E: none detected
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // create for loop to iterate backwards thru array
  for (var i = array.length-1; i >= 0; i--) {
    // print values to console
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Object
O: Array
C: use Object.keys(object) method
E: none found
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
// declare variable to contain our output and assign it the value of an empty array
var output = [];
  // use function method to get an array of object keys
  return output = Object.keys(object);
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: Object
O: Object Keys printed to console
C: use for in loop
E: n/a
 */

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create for in loop to iterate through the keys of an object
  for (var keys in object) {
    // call log with keys
    console.log(keys);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Object
O: Array
C: For in loop
E: n/a
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
// create var to contain our output; assign it the value of an empty array
var output = [];
  // create for in loop to iterate thru objects key/value pairs
  for (var keys in object) {
    // return array of values using bracket notation
    output.push(object[keys]);
  }
  // return output
  return output
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I: Object
O: Object values printed to console
C: Use for in loop and call console
E: n/a
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create for in loop to iterate through key/value pairs in object
  for (var keys in object) {
    //call console to print values using bracket notation
    console.log(object[keys]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: Object
O: Number
C: use Object.keys() method and .length
E: n/a
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
// declare variable to contain our output
var keysCount
// assign keysCount to the experssion Object.keys().length 
keysCount = Object.keys(object).length;
// return keysCount
return keysCount
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: Object
O: Values printed to console in reverse
C: Use Object.values(), for loop, and console call
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
// create var to hold our values array and assign the expression Object.values
var valuesArr = Object.values(object);
  // create for loop to iterate throught the values array in reverse  
  for (var i = valuesArr.length-1; i >=0; i--) {
    // call console to print values
    console.log(valuesArr[i]);
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}