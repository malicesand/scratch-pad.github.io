// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

/**
 * I: Two integers
 * O: Returns an Array containing all integars between the two parameters, inclusively
 * C: Loops, storage variable, push() method 
 * E: if first argument is greater than the second, return the range in reverse order
 */

// create a function range that takes in two integars as it's parameters and returns an array containing the range between 
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // create storage array to contain the range and assign it the value of an empty array
    var array = [];
    // declare variable count and assign it the value of the start integar
    var count = start 
    // Create if statement chain where the first condition is met if the start variable is less than the end variable
    if (start < end) {
        // if start < end, initiate while loop that iterates forward through the range of integars between the parameters (inclusive)
        while (count <= end) {
            // push each integer to the storage array
            array.push(count);
            // increment the count +1 upon each iteration
            count++
        }
    // continue chain with reverse condition, where the start integar is greater than end
    } if (start > end) {
        // if start > end, initiate while loop that iterates backward through the range of integars between the parameters (inclusive)
        while (count >= end) {
            //push each integer into the storage array
            array.push(count);
            // decrement the count -1 upon each iteration
            count --;
        } 
         
    }
    return array
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}