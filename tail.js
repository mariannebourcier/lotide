//return all elements of an array except for the first one
const tail = function(element) {
  if (element.length < 2) {
    return [];
  }
  return element.slice(1);
};

//console.log(tail([1,2,3])); => [2,3]
//console.log(tail([1])); => []

module.exports = tail;