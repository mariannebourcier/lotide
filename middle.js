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


//return array with only middle element/s
//1-2 elements = empty array
// odd numbers of elements = single middle element
// even numbers of elements = two middle elements

const middle = function(arr) {
  let middleElement = [];

  if (arr.length <= 2 && arr.length >= 0) {
    return middleElement;
  } else if (arr.length % 2 === 1) {
    middleElement.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    middleElement.push(arr[Math.floor((arr.length / 2) - 1)]);
    middleElement.push(arr[Math.floor(arr.length / 2)]);
  } return middleElement;
};


module.exports = middle;