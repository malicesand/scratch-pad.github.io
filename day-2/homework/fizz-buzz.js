// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
/*
I: number
O: prints numbers 1 to 100
C: multiples of three print 'Fizz'; multiples of 5 prints 'Buzz'
E: multiples of 3 and 5 print 'FizzBuzz'
 */
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//create for loop to iterate through numbers 1-100
    for (var i = 1; i <= 100; i++) {
        // create conditional chain to print according to condition
        // if multiple of 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // print 'FizzBuzz'
            console.log('FizzBuzz');
            // else if multiple of 3 
        }   else if (i % 3 === 0) {
            // print 'Fizz'
            console.log('Fizz');
            // else if multiple of 5 
        }   else if (i % 5 === 0) {
            // print 'Buzz'
            console.log('Buzz');
            // else 
        } else {
            // print number
            console.log(i);
        }
    }





    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}