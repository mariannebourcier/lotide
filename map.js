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

const words = ["ground", "control", "to", "major", "tom"];

//return new array with the callback value

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//Testing
const test1 = ["ground", "control", "to", "major", "tom", "hi"];
const test2 = ["ground", "control", "to", "major", "tom", "hello"];
const test3 = ["ground", "control", "to", "major", "tom", "bonjour"];
assertArraysEqual(map(test1, word => word[0]), ["g", "c", "t", "m", "t", "h"]);
assertArraysEqual(map(test2, word => word[0]), ["g", "c", "t", "m", "t", "h"]);
assertArraysEqual(map(test3, word => word[0]), ["g", "c", "t", "m", "t", "b"]);

