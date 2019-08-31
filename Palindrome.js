/* ========================= PALINDROME =========================
Take in given string, return true or false if a palindrome.
Key Concepts: string/array manipulation & string/array methods (.toLowerCase, .split, .push, .indexOf, .join, .reverse)
*/

function isPalindrome(string){
    //lowercase entire string
    string = string.toLowerCase();
    //create an array of single characters from string
    const charArr = string.split('');
    //create array of valid character set (lowercase letters without punctuations)
    const validCharArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //check each character, if present in valid character set (letters), push character into an array
    const lettersArr = [];
    charArr.forEach(char => {
        if(validCharArr.indexOf(char) > -1) lettersArr.push(char);
    });
    //compare string forward and backward
    if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
}

/* ========================= TESTING ========================= */

// Test 1
console.log(isPalindrome('Madam I\'m Adam'))

// Test2
console.log(isPalindrome('racecars'))

/* ========================= TIME COMPLEXITY ========================= 

O(n) => a conditional, a loop, and a two splits
O(n) + O(m) + O(l) => three diff variables can be used to describe the complexities (O(n + m + l) OR O(n))
    O(n) => two split statements share the same complexity so can be consolidated
    O(m) => conditional
    O(l) => forEach loop
*/