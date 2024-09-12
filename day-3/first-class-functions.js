// #!/usr/bin/env node

'use strict';

const { stubTrue } = require("lodash");

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/*
* I: base to test against (String or Number)
* O: return function
* C: function tests whether a given value is greater than the base
* E: n/a
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // create callback function greaterThanFilter that takes in a single parameter
    return function greaterThanFilter(value) {
        //create conditional chain to compare base and paramater
        if (value > base) {
            // return true if parameter is greater than base
            return true
        } else {
            // else returns false
            return false
        }
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */

/*
* I: base to test against (String or Number)
* O: Function that tests whether a given value is less than the base
* C: Function returns true or false
* E: conditional chain
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // create callback function lessThanFilter that takes in a single parameter
    return function lessThanFilter(value) {
        //create conditional chain to compare base and paramater
        if (value < base) {
            // return true if parameter is less than base
            return true
        } else {
            // else returns false
            return false
        }
   }   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/*
* I: single character
* O: Function that tests Input character against first character of a given String
* C: Function returns true or false?
* E: Case insensitive
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // create new variable to contain uppercase startsWith
        // assign value of startsWith.toUpperCase() 
    var startsUp = startsWith.toUpperCase();
    // create new variable to contain lowercase startsWith
        // assign value of startsWith.toLowerCase()
    var startsLow = startsWith.toLowerCase();
    // create callback function startsWithFilter that takes in a String as the parameter
    return function startsWithFilter(string) {
        // create new array and assign it the value of string.split('')
        var array = string.split('');
        // create conditional statement to compare the character at first index to startsUp and startsLow
        if (array[0] === startsUp || array[0] === startsLow) {
            //return true if array[0] === startsUp or startsLow
            return true
        } else {
            // else return false
            return false
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
/*
* I: single character
* O: Function that tests Input character against final character of a given String
* C: Function returns true or false?
* E: Case insensitive
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // create new variable to contain uppercase startsWith
        // assign value of startsWith.toUpperCase() 
    var endsUp = endsWith.toUpperCase();
    // create new variable to contain lowercase startsWith
        // assign value of startsWith.toLowerCase()
    var endsLow = endsWith.toLowerCase();
    // create callback function startsWithFilter that takes in a String as the parameter
    return function endsWithFilter(string) {
        // create new array and assign it the value of string.split('')
        var array = string.split('');
        // use revese() method to reverse elements in array 
        array.reverse();
        // create conditional statement to compare the final character at first index to endsUp and endsLow
        if (array[0] === endsUp || array[0] === endsLow) {
            //return true if array[0] === endsUp or endsLow
            return true
        } else {
            // else return false
            return false
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/*
* I: Array of Strings, Function designed to modify a String
* O: return the modified Array of Strings
* C: loop over strings
* E: 
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create variable to contain output and assign in the value of an empty array
    var output = []
    // create a for loop to iterate through the input array
    for (var i = 0; i < strings.length; i++) {
        // push the modification of each iteratated string into the output array
        output.push(modify(strings[i]));
    }
    // return output
    return output
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/**
 * I: Array of Strings and Function designed to test the String 
 * O: Returns a Boolean 
 * C: True if all Strings pass the test
 * E: Loop each string and pass each to test
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // create array to contain all strings that pass the test
    var testArr = [];
    // create for loop to iterate through the array
    for (var i = 0; i < strings.length; i++) {
        // create conditional statement which passes each array index through the test 
        if (test(strings[i]) === true) {
            // if condition is true for a given index, string is passed to the testArr
            testArr.push(strings[i]);
        }
    }
    // create conditional statement comparing length of testArr to input Array
    if (testArr.length === strings.length) {
        // return true if testArr is strictly equal to the input Array
        return true;
    } else {
        // if different lengths, return false
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}