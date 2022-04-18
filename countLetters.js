const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//count letters in a string and return the result

const countLetters = function(string) {
  let result = {};
  string = string.replaceAll(' ', '');

  for (let letters of string) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }

  return result;
};

//console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;