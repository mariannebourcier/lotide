//compare two values and return true or false depending if they are a match or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${actual} !== ${expected}`);
  }

};


module.exports = assertEqual;