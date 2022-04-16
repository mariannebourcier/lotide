# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @marianne.bou/lotide`

**Require it:**

`const _ = require('@marianne.bou/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares two arrays and prints out a message telling us if they match or not.
* `assertEqual`: Compares two values and prints out a message telling us if they match or not.
* `assertObjectsEqual`: Compares two objects and prints out a message telling us if they match or not.
* `countLetters`: Takes in a sentence(string) and returns a count of each letters in the sentence.
* `countOnly`: Returns an object containing counts of everything that the input object listed.
* `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey`: Returns the first key for which the callback returns a truthy value in an object.
* `findKeyByValue`: Returns the first key that matches the given value of an object.
* `flatten`: Returns a flattened version of an array containing nested arrays of elements.
* `head`: Returns the first item in an array.
* `letterPosition`: Returns all the indexed positions of characters in a given string.
* `map`: Returns a new array based on the results of a callback function.
* `middle`: Returns the middle-most element(s) of an array.
* `tail`: Returns every element of an array except the first item.
* `takeUntil`: Creates a slice of array with elements taken from the beginning until the callback returns a truthy value.
* `without`: Returns a subset of a given array, removing unwanted elements.


Instruction

Once this library is downloaded from NPM, it can be used right away.
Simply call the needed function by typing _. followed by the name of the function and enter the parameters in the parentheses.

Example: `const results = _.tail([1, 2, 3]) // => [2, 3]`