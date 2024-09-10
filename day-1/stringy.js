// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/* 
I: Function takes in a string
O: Returns number representing length of input string
C: N/A
E: N/A
*/




function length(string) {
    // YOUR CODE BELOW HERE //
    // use stringlength to return number value
    return string.length
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I: String
O: New string where all the values are lowercase
C: N/A
E: N/A
*/ 
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // use toLowerCase() method to return output
    return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: String
O: New String with the values in Input string convereted to lower case
C: N/A
E: N/A
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // use toUpperCase() method to return output
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: String
O: New string that where the spaces in the input string are replaced with dashes
C: N/A
E: N/A
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // create variable to contain our output
        // use toLowerCase() Method to convert string to lower case
    var output = string.toLowerCase();
    // use replaceAll() method to change spaces with dashes
    //return dash case string
    return output.replaceAll(' ', '-');
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/* 
     I: String and a single character
     O: boolean value reliant on first character of string strictly equaling single character
     C: Case insensitive
     E:
*/  

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // create 2 empty arrays to contain split strings
    var newArrUpper = [];
    var newArrLower = [];
    // create two new variables and assign them the value of string converted to uppercase and lowercase
    var stringLower = string.toLowerCase();
    var stringUpper = string.toUpperCase();
    // use split() method with empty quotes to convert strings to arrays divided by characters
    newArrUpper = stringUpper.split(''); 
    newArrLower = stringLower.split('');
    // create if statement to compare first letter of string with char and returns true if first character strictly equals the the first index value of either array
    if (newArrUpper[0] === char || newArrLower[0] === char) {
        //return true if condition is true
        return true; 
    } else {
        // else return false
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
    /** 
     * I: 2 parameters: string value and a single character
     * O: boolean statement
     * C: function is case insensitive
     * E: n/a
     */

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // create 2 empty arrays to contain split strings
    var newArrUpper = [];
    var newArrLower = [];
    // create two new variables and assign them the value of string converted to uppercase and lowercase
    var stringLower = string.toLowerCase();
    var stringUpper = string.toUpperCase();
    // use split() method with empty quotes to convert strings to arrays divided by characters
    newArrUpper = stringUpper.split(''); 
    newArrLower = stringLower.split('');
    // create if statement to compare last letter of string with char and returns true if first character strictly equals the the first index value of either array
    if (newArrUpper[newArrUpper.length - 1] === char || newArrLower[newArrLower.length - 1] === char) {
     //return true if condition is true
     return true; 
    } else {
     // else return false
     return false;
 }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/**
 * 
 * I : @param {*} stringOne @param {*} stringTwo 
 * O : two parameter strings concatenated into one
 * C : n/a
 * E : n/a
 */

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create var to contain the output
    var output = '';
    // use String concat() method to combine strings one and two
    output = stringOne.concat(stringTwo);
    // return output
    return output
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/**
 * I:
 *  @param {*} stringOne 
 *  @param {*} stringTwo 
 * O: joined strings 
 * C: pull out string elements and store them in an array
 * E: n/a
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create var to which pulls out the arguments to create array
    var args = Array.from(arguments);
    // return array as a string using the join() method and empty quotes
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/**
 * I: @param {*} stringOne, @param {*} stringTwo 
 * O: longest of the two strings
 * C: none
 * E: none
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // construct if-else statements to return longest string
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } if (stringOne.length < stringTwo.length) {
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: 2 strings
O: number
C: use compareTo() method to compare strings lexicographically
E: 
 */

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create var to which pulls out the arguments to create array
    var args = Array.from(arguments);
    // use sort() method to arrange strings in alphabetical order
    args.sort()
    // use if-else statements to compare the strings
    if (stringOne === stringTwo) {
        // if stringOne strictly equals stringTwo return 0
        return 0
      // else if integar 0 of args is strictyly equal to stringOne return 1
    } else if (args[0] === stringOne) {
        return 1;
    // else if integar 0 of args is strictly equal to stringTwo return 2
    } else if (args[0] === stringTwo) {
        return -1
    }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/**
 * I: two strings
 * O: integar
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create var to which pulls out the arguments to create array
    var args = Array.from(arguments);
    // use sort() method to arrange strings in alphabetical order
    args.sort()
    // use if-else statements to compare the strings
    if (stringOne === stringTwo) {
     // if stringOne strictly equals stringTwo return 0
     return 0
   // else if integar 0 of args is strictyly equal to stringTwo return 1
    } else if (args[0] === stringTwo) {
     return 1;
 // else if integar 0 of args is strictly equal to stringOne return 2
    } else if (args[0] === stringOne) {
     return -1
    }

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}