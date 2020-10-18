// JS: Objects

// key/property - value pairs
// keys are strings (even though you don't see quotes)
// values can be any data-type
const myObj = {
  a: 5, 
  b: 6, 
  aProperty: "string",
}

// Using dot notation
myObj.a // 5
myObj.aProperty // "string"

const car = {
  doors: 5,
  colour: 'blue',
  // functions that are part of objects are called methods
  run: function() {
    console.log("running...")
  },
  // ES6 shorthand for methods
  openTrunk() {
    console.log("Trunk opened")
  },
}

// Using dot notation:
car.run // gives us the definition of the method
car.run() // running...

// Using bracket notation
car["doors"] // 5
car["openTrunk"]() // "Trunk opened"

// Trying to access a property that doesn't exist gives us undefined
car.driver // undefined

// We can reassign keys to different values
car.doors = 4
car["driver"] = "John" // doesn't matter if the key existed before or not

// Count characters in a string with an object
function countChars(str) {
  const output = {}

  for (let i = 0; i < str.length; i++) {
    if (output[str[i]]) {
      // output[str[i]]
      // output[str[0]]
      // output["t"]
      // undefined
      output[str[i]]++
    } else {
      output[str[i]] = 1
    }
  }

  return output
}

countChars("test")

// Exercises
// if there is only one param, the () is optional
// e.g. (person) => {} becomes person => {} 
const printPerson = person => {
  console.log(`${person.name} is ${person.age} years old`)
}

const getWordLengths = sentence => {
  const wordLengths = {}
  const words = sentence.split(" ")

  for (let word of words) {
    wordLengths[word] = word.length
  }
  
  return wordLengths
}

// for..in syntax will loop through every key/property in the object
for (let key in car) {
  console.log(`key: ${key}, value: ${car[key]}`)
}

// return an array of an object's keys or values
Object.keys(car)
Object.values(car)

// Delete a key/value pair by using the 'delete' keyword
delete car.doors

// Verify if the key exists in the object:
car.hasOwnProperty('doors')
car.hasOwnProperty('colour')

typeof {} // "object"
typeof [] // "object"
Array.isArray({}) // false
Array.isArray([]) // true

// object keys have to be unique
const obj = {
  a: 1, 
  b: 2,
  a: 3,
}

obj // {a: 3, b: 2}

// Shallow copy an object
const car2 = {...car}
const car3 = Object.assign({}, car)
