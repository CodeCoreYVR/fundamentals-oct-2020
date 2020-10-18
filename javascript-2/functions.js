// JS Functions:
// A container for a piece of code that can be executed whenever
// The arguments are the values that are passed to the function when called
// The parameters are the 'variables' that hold the values of the arguments that were passed to the function call
// which you can use within the function's code

// Defining a function
// Function syntax:
// Function declaration/statement
function functionName(param1, param2) {
  // function body (your code goes here)
  // the params can be used in your code
  return // expression
}

// Function expression:
// A function without a name is called an anonmyous
// We declare a variable and assign it an anonmyous function as its value
const functionExpression = function(param1, param2) {
  // code
  return // expression
}

// Invoke/call/execute
// it returns a value, which is the expression after the return statement
// 1 and 2 are the arguments passed to this function call
// param1 and param2 will hold the values of these arguments
functionName(1, 2)
let a = functionName(5, 6) // saved the returned value to a variable

// Get the function definition:
functionName

// Any code after the return statement will not run
function afterReturnExample() {
  return "I'm returned and I exit the function"
  console.log("I will not print")
  return "This will not be returned"
}

// If you don't have a return statement, the function will return undefined when called
function returnUndefined(param1, param2) {
  alert("This function does something")
  // This function will return undefined because the
  // return statement is omitted
}

// Arrow function (ES6+) 
const arrow = (param1, param2) => {
  // code
  return // expression
}

// Exercises
function insult(name) {
  return `${name}, you doofus!`
}

const increment = function(num) {
  return num + 1
}

const repeat = (string, number) => {
  return string.repeat(number)
}
// or
function repeat(string, number) {
  let repeatedString = ""
  for (let i = 1; i <= number; i++) {
    repeatedString += string // repeatedString = repeatedString + string
  }

  return repeatedString
}

repeat("a", 5)
// 1. "" = "" + 'a'
// 2. "a" = "a" + "a"
// 3. "aa" = "aa" + "a"
// 4. "aaa" = "aaa" + "a"
// 5. "aaaa" = "aaaa" + "a"
// Final string: "aaaaa"
