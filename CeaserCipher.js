/* ========================= CEARSAR CIPHER =========================
Take in two parameters, a string and a number. Shift every letter in given string by the number passed in. Ability to handle negative numbers.

Key Concepts: understanding forEach vs for loops uses
*/

function ceasarCipher(str, num){
    //handle numbers < -26 || > 26
    num = num % 26;
    //lowercase entire string
    const lowerCaseStr = str.toLowerCase();
    //create array of valid character set (lowercase letters in correct order)
    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //iterate over each letter in lowercased string and shift it correct number of places
    let newStr = '';
    for (var i = 0; i < lowerCaseStr.length; i++){
        //find current letter
        const currentLetter = lowerCaseStr[i];
        //if current letter is a space char, add to new string
        if(currentLetter === ' '){
            newStr += currentLetter;
            continue;
        }
        //determine position of current letter
        const currentIndex = alphabetArr.indexOf(currentLetter);
        //shift current letter by number passed into algorithm
        let newIndex = currentIndex + num;
        //handle for if index becomes greater than 25 (num of alphabet indexes)
        // or less than 0 (shifting backwards) by looping alphabet back to beginning index
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        //handling for uppercase letters
        if(str[i] === str[i].toUpperCase()){
            newStr += alphabetArr[newIndex].toUpperCase()
        }
        else newStr += alphabetArr[newIndex]
    }
    return newStr;
}

console.log(ceasarCipher('Daaimah', 1));

/* ========================= TESTING ========================= */
console.log(ceasarCipher('Zoo Keeper', 2)); //Bqq Mggrgt
console.log(ceasarCipher('Big Car', -16)); //Lsq Mkb
console.log(ceasarCipher('Javascript', -900));//Tkfkcmbszd