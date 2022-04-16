//compare the values of two arrays and return true or false depending on the result
let eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
