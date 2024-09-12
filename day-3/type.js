// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/*
I: single parameter
O: boolean
C: use array.isArray() method
E: n/a
 */

function isArray(value) {
    // YOUR CODE BELOW HERE //
    // invoke array.isArray() method passing value as parameter
    return Array.isArray(value)
    // return method
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
/*
*I: single parameter
*O: boolean
*C: determine if condition typeof === 'object' is true for the input data type 
*E: use conditional chain to eliminate arrays, null, dates 
 */

// create function isObject that takes in one parameter value and returns true or false dependent on data type of value
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // if condition Array.isArray(value) is met     
    if (Array.isArray(value)) {
        // return false
        return false
    // if condition value instanceof Date is met     
    } if (value instanceof Date) {
        // return false
        return false
    // if condition null is met for value    
    } if (value === null) {
        // return false
        return false
    // if condition typeof === 'object' is met     
    } if (typeof value === 'object') {
        // return true
        return true
    // else
    } else {
        // return false
        return false
    }

    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
*I: single parameter
*O: boolean
*C: if parameter data type is array or object intended as collection, return true 
*E: use conditional chain to eliminate null values and dates
 */

// create function isObject passes one parameter against condition, returning boolean dependent upon data type
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // if condition value instanceof Date is met     
    if (value instanceof Date) {
        // return false
        return false
    // if condition null is met for value    
    } if (value === null) {
        // return false
        return false
    // if condition typeof === 'object' is met     
    } if (typeof value === 'object') {
        // return true
        return true
    // else
    } else {
        // return false
        return false
    }
 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 

/*
* I: single parameter called value
* O: String 
* C: invoke the methods typeof, instanceof, and isArray
* E: arrays, null values, and dates require conditional chain and strict comparisons 
**/

// create function that takes in one value and returns its data type as a string value
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // if typeof strictly equals string
    if (typeof value === 'string'){
        // return string
        return 'string';   
    // if isArray condition is true
    } if (Array.isArray(value)) {
        // return array
        return 'array';
    // if typeof strictly equals number
    } if (typeof value === 'number') {
        // return 'number'
        return 'number'
    // if typeof strictly equals boolean
    } if (typeof value === 'boolean') {
        // return 'boolean'
        return 'boolean'
    // if value strictly equals null
    } if (value === null) {
        // return 'null'
        return 'null'
    // if typeof strictly equals function
    } if (typeof value === 'function') {
        // return 'function'
        return 'function'
    // if value is instanceof Date
    } if (value instanceof Date) {
        //return 'date'
        return 'date'
    // else if value strictly equals object
    } else if (typeof value === 'object') {
        // return object
        return 'object'
    // else
    } else {
        // return 'undefined'
        return 'undefined'
  }

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}