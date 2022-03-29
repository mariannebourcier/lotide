const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//function takes in object and value
//scan obj and return first key with given value
//no key value found, return undefined
const findKeyByValue = function(object, value) {
  //use object.keys function
  const array = Object.keys(object);
  for (let key of array) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);