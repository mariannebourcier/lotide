// create result variable

// 	find key by value => returns array of given objects property names , all the strings
// 	Object.keys
// 	store the key => in a new variable
// 	loop through the key array => to get the key we want when we use our callback
// 	for of loop
	
// 	if the key is a match with the callback function => find the right key
// 	push as the result variable => first match = push as result
// 	else return undefined
	
// 	return result

const findKey = function(object, callback) {
  let result = []
  
};









findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"