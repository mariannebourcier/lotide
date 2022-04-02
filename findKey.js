// create result variable

// 	find key by value => returns array of given objects property names , all the strings
// 	store the key => in a new variable
// 	loop through the key array => to get the key we want when we use our callback
// 	for of loop => for in loop
	
// 	if the key is a match with the callback function => find the right key
// 	push as the result variable => first match = push as result
// 	break after finding the result else return undefined
	
// 	return result

const findKey = function(object, callback) {
  let result = [];

  for (let key in object) {
    if (callback(object[key])) {
      result.push(key);
      break;
    }
  } return result;
};






console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");