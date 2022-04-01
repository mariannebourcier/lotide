//function that creates a slice of array
//with elements from beginning on array
//callback will take in array elements until return true
//take in array to use
//keep going until reach value callback

const takeUntil = function(array, callback) {
//result variable empty array
  let results = [];
  //loop through array
  for (let length of array) {
    //if reach element, stop, push to results array
    //return result
    if (callback(length)) {
      return results;
    } results.push(length);
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);//=> [1, 2, 5, 7, 2]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);//=> ['I\'ve', 'been', 'to', 'Hollywood']

const eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

assertArraysEqual(takeUntil(data2,x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);