// Primitive Data Types
// Number
// String
// Boolean
// null
// undefined

// Examples of numbers
5
-5
-15.2342342
7.56
Infinity
-Infinity
NaN

// Strings
"This uses double quotes"
'I\'m a single quote string'
`This uses backticks`
"This will go \n on a new line" 
"one" + "two" // "onetwo"
"5" + 4 // "54"
4 + "5" // "45"

// Only with backticks can you use string interpolation
`There are ${5 + 8} students in the room`

// Only with backticks can you create multiline strings
`
  This is 
  a multiline
  string
`

// Get the length of a string
"abc".length

// We can access characters in a string with bracket notation
"abc"[2] // "c"
"abc"[1 + 1] // "c"
"abc"[-1] // undefined

// We cannot mutate strings
let s = 'bobbi'
s[4] = 'y'
s // 'bobbi'

// parse a string into a number
parseInt("123") // 123
parseInt("123abc") // 123
parseInt("abc") // NaN
parseInt("10.75845645") // 10
parseFloat("10.75845645") // 10.75845645
Number("123") // 123
Number(true) // 1
Number(false) // 0

// Remove beginning and trailing spaces
"    hello world      ".trim() // "hello world"

// Booleans
true
false
