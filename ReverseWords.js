/* ========================= REVERSE WORDS =========================
Take in a string, reverse each words in string and return new string. 
The string itself should not be reverse. Do not use reverse method.

Key Concepts: looping backwards
*/

function reverseWords(str){
    //split apart the string into an array by a space
    const separatedStrArr = str.split(' ');
    const reversedWordsArr = [];
    //work with each word in the array
    separatedStrArr.forEach(word => {
        //reverse each word
        let reversedStr = '';
        // var splitByChar = str.split('');
        for(let i = word.length -1; i >= 0; i--){
            reversedStr += word[i];
        }
        reversedWordsArr.push(reversedStr)
    });
    return reversedWordsArr.join(' ')
}

function reverse(str){
   
};

console.log(reverseWords('Daaimah is amazing'))

/* ========================= TESTING ========================= */
console.log(reverseWords('This is a string of words')) //sihT si a gnirts fo sdrow