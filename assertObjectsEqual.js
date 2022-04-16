//compare two objects and return true or false depending if they are a match or not

let eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  } else {
    return false;
  }
};

const eqObjects = function(object1, object2) {
  //use object.keys function on both objects
  //compare their lengths => if not equal return false
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) return false;
  //in a loop, use Array.isArray on both values
  //to see if array comparisons need to be made
  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) return eqArrays(object1[key], object2[key]);
    //use eqArrays and if both values are arrays = return true
    else if (object1[key] !== object2[key]) return false;
    //else if values are primitives; use === to compare the two values
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};