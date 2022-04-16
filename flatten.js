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
//flatten nested arrays into one array
const flatten = function(arrays) {
  let flattenedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      for (let x of arrays[i]) {
        flattenedArray.push(x);
      }
    } else {
      flattenedArray.push(arrays[i]);
    }
  } return flattenedArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));