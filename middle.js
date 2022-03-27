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
  //store result
  let middleElement = [];
  //empty array
  if (arr.length <= 2 && arr.length >= 0) {
    return middleElement;
  } else if (arr.length % 2 === 1) {
  //condition of odd array
  //return 1 middle element
    middleElement.push(arr[Math.floor(arr.length / 2)]);
  //if array is even
  } else if (arr.length % 2 === 0) {
  //return 2 elements
    middleElement.push(arr[Math.floor((arr.length / 2) - 1)]);
    middleElement.push(arr[Math.floor(arr.length / 2)]);
  } return middleElement;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3]));// => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]