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
//find index position of specified letter in a string

const letterPositions = function(sentence) {
  let results = {};
  sentence = sentence.replaceAll(' ', '');
  for (let i = 0; i < sentence.length; i++) {
  
    let letters = sentence[i];
    if (results[letters]) {
      results[letters].push(i);
    } else {
      results[letters] = [i];
    }
  } return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));