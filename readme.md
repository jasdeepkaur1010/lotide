# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jasdeepkaur1010/lotide`

**Require it:**

`const _ = require('@jasdeepkaur1010/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: It takes in two arrays and check if they match each other.
* `function2(eqArrays)`: It takes in two arrays and returns true or false, based on a perfect match.
* `function3(assertEqual)`: It takes in two values, compare them and print out a message telling us if they match or not.
* `function4(assertObjectsEqual)`: It takes in two objects and logs an appropriate message to the console depending on whether the objects match or not.
* `function5(countLetters)`: It takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `function6(countOnly)`: It takes in a collection of items and return counts for a specific subset of those items.
* `function7(eqObjects)`: It takes in two objects and returns true or false, based on a perfect match.
* `function8(findKey)`: It takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `function9(findKeyByValue)`: It takes in an object and a value, then scan the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `function10(flatten)`: It takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `function11(head)`: It takes in an array and returns the first item in the array.
* `function12(index)`: It has all the lotide functions and loads them in one shot.
* `function13(letterPositions)`: It returns all the indices (zero-based positions) in the string where each character is found.
* `function14(map)`: It creates a new array populated with the results of calling a provided function on every element in the calling array.
* `function15(middle)`: It takes in an array and return the middle-most element(s) of the given array.
* `function16(tail)`: It takes in an array and returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `function17(takeUntil)`: It keeps collecting items from a provided array until the callback provided returns a truthy value.
* `function18(without)`: It returns a subset of a given array, removing unwanted elements.