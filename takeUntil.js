//function that creates a slice of array
//with elements from beginning of array
//callback will take in array elements until return true

const takeUntil = function(array, callback) {
  let results = [];
  for (let length of array) {
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

module.exports = takeUntil;

assertArraysEqual(takeUntil(data2,x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);