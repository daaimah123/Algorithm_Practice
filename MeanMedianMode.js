/* ========================= MEAN MEDIAN MODE ========================= 
Takes in a number array and return an object with three key properties (mean, median and mode).
Utilize 4 functions. 

Key concepts: Math Calculations and functional programming, .sort(), Math.floor(), for-in loop vs for loop
*/

function meanMedianMode(array){
    return {
        mean: getMean(array),
        median: getMedian(array),
        modes: getMode(array)
    }
}

function getMean(array){
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });
    const mean = sum / array.length;
    return mean;
}

function getMedian(array){
    array.sort(function(a,b){return a - b})
    let median;
    //handle odd num elements, take middle element as median
    if(array.length % 2 !== 0){
        //get middle element
        median = array[Math.floor(array.length / 2)]
    }else{
    //handle even num elements, take middle two elements and average elements
        const mid1 = array[(array.length / 2) - 1]
        const mid2 = array[array.length / 2]
        median = (mid1 + mid2) / 2;
    }
    return median
}

function getMode(array) {
    var modeObj = {};
    
    // create modeObj
    array.forEach(num => {
      if (!modeObj[num]) modeObj[num] = 0;
      modeObj[num]++;
    });
    
    // create array of mode/s 
    var maxFrequency = 0;
    var modes = [];
    for (var num in modeObj) {
      //check if num frequency is greater than max frequency
      if (modeObj[num] > maxFrequency) {
        //overwrite current mode array to have single higher frequency number
        modes = [num];
        maxFrequency = modeObj[num];
      }
      //if current num has same frequency as max frequency push into mode array
      else if (modeObj[num] === maxFrequency) modes.push(num);
    }
    //if nums appear at same frequency or same number of times
    if (modes.length === Object.keys(modeObj).length) modes = [];
    return modes;
  }


/* ========================= WITHOUT COMMENTS ========================= */

  function meanMedianMode(array){
    return {
        mean: getMean(array),
        median: getMedian(array),
        modes: getMode(array)
    }
}

function getMean(array){
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });
    const mean = sum / array.length;
    return mean;
}

function getMedian(array){
    array.sort(function(a,b){return a - b})
    let median;
    if(array.length % 2 !== 0){
        median = array[Math.floor(array.length / 2)]
    }else{
        const mid1 = array[(array.length / 2) - 1]
        const mid2 = array[array.length / 2]
        median = (mid1 + mid2) / 2;
    }
    return median
}

function getMode(array) {
    var modeObj = {};
    array.forEach(num => {
      if (!modeObj[num]) modeObj[num] = 0;
      modeObj[num]++;
    });
    var maxFrequency = 0;
    var modes = [];
    for (var num in modeObj) {
      if (modeObj[num] > maxFrequency) {
        modes = [num];
        maxFrequency = modeObj[num];
      }
      else if (modeObj[num] === maxFrequency) modes.push(num);
    }
    if (modes.length === Object.keys(modeObj).length) modes = [];
    return modes;
  }

/* ========================= TESTING ========================= */

console.log(meanMedianMode([9,10,23,10,23,9])) //{ mean: 14, median: 10, modes: [] }
console.log(meanMedianMode([1, 2, 1, 2, 3])) //{ mean: 1.8, median: 2, modes: [ '1', '2' ] }