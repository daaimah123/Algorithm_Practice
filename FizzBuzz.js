/*          FizzBuzz
Step 1 - function that takes in number as a parameter and log out every number from 1 to the number parameter. 
Step 2 - if number is divisible by 3, print out Fizz instead of number
Step 3 - if number is divisible by 5, print out Buzz instead of number
Step 4 - if number is divisible by 3 & 5, print out FizzBuzz instead of number 
*/

// Key concepts: modulus operator, gives you the remainder of a number after the number has been divided by another number

function FizzBuzz(num){
    for (let i = 1; i <= num; i++){
        //Step 4
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz'); //alt: (i % 15 === 0)
        //Step 2
        else if(i % 3 === 0) console.log('Fizz');
        //Step 3
        else if (i % 5 === 0) console.log('Buzz');
        //Step 1
        else console.log(i);
    }     
}

//test
FizzBuzz(20);

























// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz