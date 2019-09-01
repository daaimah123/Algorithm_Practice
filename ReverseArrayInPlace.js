/* ========================= REVERSE ARRAY IN PLACE ========================= 
Takes in array parameter and return the reversed array
Do not use array.reverse() method.

Key concepts: array manipulation vs creating new array and pushing in elements, temporary variable
*/

function reverseArrayInPlace(arr){
    //loop through half of array so swapping indexes does not correct itself after looping past half length
    for(let i = 0; i < arr.length / 2; i++){
        //want to swap last with first, second with second to last, etc
        let tempVar = arr[i];
        //set element equal to an element whose index number counterpart is the array length minus same index number from end of array
        arr[i] = arr[arr.length - 1 - i];
        //swap original position element with its counterpart by setting counterpart to replace temporary variable
        arr[arr.length - 1 - i] = tempVar;
    }
    console.log( arr);
}

reverseArrayInPlace(['Daaimah', 'Ameerah', 'Tibrey'])


/* ========================= TESTING ========================= */
reverseArrayInPlace(['This', 'is', 'an', 'array', '!'])
reverseArrayInPlace([1,2,3,4,5,6])

