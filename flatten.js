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
//create function that flattens arrays into one array
const flatten = function(arrays) {
  //create variable to store new array
  let flattenedArray = [];
  //loop through array
  for (let i = 0; i < arrays.length; i++) {

    //verify which element is an array
    if (Array.isArray(arrays[i])) {
      //add to storing variable

      for (let x of arrays[i]) {
        flattenedArray.push(x);
      }
    } else {
      flattenedArray.push(arrays[i]);
    }
    //return storing variable
  } return flattenedArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));