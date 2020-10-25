// A higher order function is a function that either:
// - takes in a function as an argument
// - returns a function

const runThree = func => {
  func()
  func()
  func()
}

const sayHi = () => {
  console.log('Hi!')
}

runThree(sayHi)
// Hi!
// Hi!
// Hi!

// With arrow functions, if you only have one line of an expression
// you can write it without braces, and that expression will be returned
// You can also optional omit the parenthesis if there's only one parameter
// e.g. (x) => {} becomes x => {}
// (2 * x) is implicity returned even though we don't see the return statement
const doubleIt = x => 2 * x

// const call = (num, func) => func(num)
const call = (num, func) => {
  return func(num)
}

// If a function is passed as an argument to another higher order function, 
// it's also known as a callback
call(10, doubleIt) // 20
call(5.3, Math.floor) // 5

// Stretch: Make call take in the number of times to call the function
const callStretch = (num, func, times) => {
  let accumulator = num
  for (let i = 1; i <= times; i++) {
    accumulator = func(accumulator)
  }

  return accumulator
}

// Anonymous functions are typically passed as an argument 
// to other higher order functions
callStretch(5, function(x) {
  return 2 * x
}, 3) // 40

callStretch(5, x => 2 * x, 3) // 40

// Built in array map() method
// When we call map, map will run the callback on every element
// in the array, and the return value for that callback will 
// be mapped to a new array as an element
[1, 2, 3].map(function(num) {
  return 2 * num 
}) // [2, 4, 6]

// or

[1, 2, 3].map(element => element * 2) // [2, 4, 6]

function map(arr, cb) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(cb(arr[i]))
  }
  return output
}

map([1, 2, 3], x => 2 * x) // [2, 4, 6]
map([1, 2, 3], x => x ** 3) // [1, 8, 27]

// Stretch: Array of functions
const functions = [
  function(x) { return x * 2 },
  function(x) { return x - 1 },
  function(x) { return x ** 2 },
]

function mapStretch(arr, arrayOfFuncs) {
  const output = []

  for (let element of arr) {
    for (let func of arrayOfFuncs) {
      element = func(element)
    }
    output.push(element)
  }
  return output
}

// Array of squares
map([1, 2, 3, 4, 5, 6, 7, 8, 9], x => x ** 2)

// Get word lengths 
map(["hello", "data", "eat cheese", "walking"], word => word.length ) // [ 5, 4, 10, 7 ]

// Rewrite map using forEach
function map(arr, cb) {
  const output = []
  // for (let i = 0; i < arr.length; i++) {
  //   output.push(cb(arr[i]))
  // }
  arr.forEach(function(element) {
    output.push(cb(element))
  })
  return output
}