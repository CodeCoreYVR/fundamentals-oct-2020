// Declare a variable:
// {Keyword} {variableName}
let aVariable // undefined

// Declare and initialize:
// {Keyword} {variableName} = {value}
let anotherVariable = 123

// Difference between const and let
let letVariable = 0
letVariable = 1

// shorthand for letVariable = letVariable + 1
++letVariable // 2 

// const variables cannot be reassigned:
const num = 0
num++ // Uncaught TypeError: Assignment to constant variable

// If you declare a variable with const, you have to initialize it at the same time
const name // Uncaught SyntaxError: Missing initializer in const declaration

// How to define a string?
'Single quotes'
"Double quotes"
`Backticks`

// No difference between "" and '', other than escaping 
// the same quote inside of the string with '\'
'You\'re awesome' 

// Using backticks, we can interpolate
`5 + 5 = ${5 + 5}` // "5 + 5 = 10"

const multilineString = `
  Only backticks 
  allow for 
  multiline strings
`

// The difference between == and ===
// JS will try to coerce the operands into the same data type before comparing
2 == '2' // true

// Using ===, JS will not try to coerce
2 === '2' // false
