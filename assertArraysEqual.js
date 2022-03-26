let eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  } else {
    return false;
  }
};

let assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [3,2,3]);