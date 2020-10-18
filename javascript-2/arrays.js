// JS Arrays:
// Arrays are ordered collections of data

// Use square brackets [] to define an array
// Each element is separated by a comma
[1 + 2, 'string', true, [3, 4, 5]]

// You can also nest arrays
[1, [2, [3, [4, null]]]]

// Ways to work with arrays:
const arr = [1, 2, 3, 4, 5]
arr.length // 5
arr[0] // 1
arr[1 + 2] // 4

// Arrays are mutable
arr[4] = 100
arr // [1, 2, 3, 4, 100]

// Remove last element:
// .pop() does not take in any arguments and it removes the last element
// returns the element that was removed
arr.pop() // returns 100 
arr // [1, 2, 3, 4]

// Append elements: 
// .push() appends values/elements to the end of the array
// returns the new array length
arr.push(5, 6, 7) // 7
arr // [1, 2, 3, 4, 5, 6, 7]

// Remove first element:
// .shift() does not take in any arguments and it removes the first element
// returns the element that was removed
arr.shift() // 1
arr // [2, 3, 4, 5, 6, 7]

// Add to the beginning of the array:
// .unshift() adds elements to beginning
// returns the new array length
arr.unshift(0, 1) // 8
arr // [0, 1, 2, 3, 4, 5, 6, 7]

// .slice() returns a new array as a portion of the array that it was called on
// .slice(index1, index2)
// index1: The beginning index of the new array (inclusive)
// index2: The ending index of the new array (exlusive)
arr.slice(2, 5) // [2, 3, 4]
arr.slice(4) // [4, 5, 6, 7]

// It does not mutate the array that it was called on
arr // [0, 1, 2, 3, 4, 5, 6, 7]

// Looping over elements in an array
// Use [] and i to evaluate each element in letters
const letters = ['a', 'b', 'c', 'd']
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i])
}

// for..of
for (let letter of letters) {
  console.log(letter)
}

// Exercises 
const numbers = [0, 5, 6, -12]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

const words = ["apple", "dog", "computer", "cup"]
for (let word of words) {
  console.log(`${word} has ${word.length} characters`)
}

// join(string) (array method) joins together all elements in an array,
// separated by the argument "string" and returns that string
// it does not mutate the array that it was called on
words.join(" | ") // "apple | dog | computer | cup"

// .split(string) {string method} returns an array of strings 
// split by the argument "string" that you pass in, returns an array of every string that was split
"split can be called on strings".split(" ")

// Get a count of words in a sentence
const sentence = prompt("Enter a sentence") // a string
const words = sentence.split(" ") // an array
const wordCount = words.length // a number

const sequence = []
for (let i = 0; i <= 99; i++) sequence.push(i)
sequence.join("")
