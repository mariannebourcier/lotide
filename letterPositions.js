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

//return index position of letter, if duplicate return the two indexes in one array
//use for loop

const letterPositions = function(sentence) {
  //to store result
  let results = {};
  //ignore spaces
  sentence = sentence.replaceAll(' ', '');
  //for loop to go through
  for (let i = 0; i < sentence.length; i++) {
  
    let letters = sentence[i];
    //condition to add index
    if (results[letters]) {
      results[letters].push(i);
    } else {
      results[letters] = [i];
    }
  } return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));