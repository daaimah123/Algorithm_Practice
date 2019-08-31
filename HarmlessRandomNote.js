/* ========================= HARMLESS RANDOM NOTE =========================

Take in 2 parameters: the first will be the note as a string and the second will be the magazine text as a string. Determine if your magazine text has enough words in it to create your note text. If so, return true. If not, return false.

Key Concepts: How to use an object as a hash table, Time Complexity & Big O Notation
*/

//assumptions made for brute force - no uppercasing or punctation

function harmelessRandsomeNote (noteText, magazineText){
    //turn each text string into an array of words
    const noteArr = noteText.split(' ');
    const magArr = magazineText.split(' ');
    //use hash table to find out how many of each word 
    const magObj = {};
    //access each word in the array(s)
    magArr.forEach(word => {
        //if current word not present as a property on obj, create new  property ob obj with the current word and start word at zero count 
        if(!magObj[word]) magObj[word] = 0;
        //if current word present, increment count by 1
        magObj[word]++;
     })
    //is it possible to make the note text from the magazine text (bool)
    let notePossible = true;
    noteArr.forEach(word => {
        //if current word present in magazine object count, decriment by 1
        if(magObj[word]){ 
            magObj[word]--;
            //check if there are enough number of current word in mag obj to make note text
            if(magObj[word] < 0) notePossible = false;
        }
        //if current word not present, then its not possible to make the note text (bool)
        else notePossible = false;
    });
    console.log( notePossible);
}

/* ========================= TESTING ========================= */

// Test 1
harmelessRandsomeNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')

// Test 2 - the word clown added to note text
// harmelessRandsomeNote('clown this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')

// Test 3 - the word puerto removed from magazine text
// harmelessRandsomeNote('this is a secret note for you from a secret admirer', 'rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')

/* ========================= TIME COMPLEXITY =========================

linear O(n) => two non-nested loops
O(n) + O(m) => two diff variables can be used to describe the complexities for each loop (O(n + m) OR O(n))
    O(n) => loop one loops through elements of the magazine array
    O(m) => loop two loops through elements of the note array
*/