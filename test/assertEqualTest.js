const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');


//assertEqual
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(13, 13);
assertEqual(13, 14);
//head
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// eslint-disable-next-line space-in-parens
assertEqual(head([]), );

//tail
const numbers = [1,2,3,4];
console.log(tail(numbers));
const words = ["Hello", "Lighthouse", "Labs"];
console.log(tail(words));


