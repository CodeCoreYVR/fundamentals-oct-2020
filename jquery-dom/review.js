// A higher order function is a function that either:
// - takes in a function as a parameter
// - returns a function

function runFunc(func) { // function definition
  return func()
}

function sayBye() { // function defintion
  console.log("Bye")
}

// invoke the higher order function runFunc()
// sayBye is the callback (the function passed in as an argument)
runFunc(sayBye) 

// callback is an anonymous arrow function that we define directly in the argument 
// when you invoke the higher order function. It's commonly used to tell a higher order
// function the piece of code to run, but normally you wouldn't call this function
// elsewhere in your program unlike the other functions that you've defined 
// with a name
const sayHi = runFunc(() => { 
  // returns a function definition
  // In arrow functions, if the function body is on the same line
  // then that expression is returned
  return () => "Hi" 
})

sayHi() // "hi"

// Built in array map
// map is a higher order function which returns a new array
// it takes in a callback as the first argument
// and iterates by calling the callback on every element in the array
// The return value is what will be mapped to the new array
// "Hi" is returned from the callback
["a", "b", "c", "d"].map(() => "Hi") // ["Hi", "Hi", "Hi", "Hi"]
[0, 1, 2, 3].map(function() { return "Hi" }) // ["Hi", "Hi", "Hi", "Hi"]

// num is a parameter that represents the current element we're iterating over
[0, 1, 2, 3].map(function(num) {
  return num ** 2
}) // [0, 1, 4, 9]

// The callback in forEach doesn't do anything with the return value
// instead it just runs a piece of code stored in the callback
// on every element in the array, similarly to a for loop
[0, 1, 2, 3].forEach(function(num) {
  console.log(num * 2)
})

for (let num of [0, 1, 2, 3]) {
  console.log(num * 2)
}

function map(arr, func) {
  const newArr = [];
  for (let j = 0; j < arr.length; j++) {
    const newElement = func(arr[j]) // the return value of the callback is the new element in the new array
    newArr.push(newElement)
  }
  return newArr;
}

// Stretch: Array of functions
function mapStretch(arr, arrOfFuncs) {
  const newArr = []
  for (let element of arr) { // loops through every element in the array
    for (let func of arrOfFuncs) { // for every element, loop through the array of functions and call the function on the element
      element = func(element)
      // e.g mapStretch([1, 2], [num => num * 2, num => num - 2])
      // 1st iteration of outer loop, element is 1
        // two iterations in nested loop of the arrayOfFuncs
          // element = func(1) // 2
          // element = func(2) // 0
      // 2nd iteration of outer loop, element is 2
        // two iterations in nested loop of the arrayOfFuncs
            // element = func(2) // 4
            // element = func(4) // 2
    }
    newArr.push(element)
  }

  return newArr
}

// for..in loop iterates over every key in an object
const obj = {
  key1: 'a',
  key2: 'b',
}
for (let key in obj) {
  console.log("key:", key)
  console.log("value:", obj[key])
}

// for..of loop iterates over every value
const arr = ["a", "b", "c"]
for (let value of arr) {
  console.log("value:", value)
}