const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨🤨🤨 Assertion Failed: ${actual} !== ${expected}`);
  }

};
//compare the object values and return true or false depending if they are a match or not

let eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  }
  return false;
};

//two obj are equal when they have same num of keys
//value for each key in one obj is same as value of same key in other obj
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
    else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2)); // => false