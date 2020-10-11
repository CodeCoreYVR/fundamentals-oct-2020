/*
  Increment/decrement operators
  ++ --
  pre increment/decrement operators
  post increment/decrement operators
*/

let num = 0
console.log(`num is initialized with: ${num}\n`)
console.log(`When using preincrement, the value gets increased by one before printing it to the console, which changes the value to ${++num}\n`)
console.log(`current value of num: ${num}\n`)
console.log(`When using postincrement, the value gets increased by one, only after returning the current value. So it displays the current value of num: ${num++}, before adding 1 to num\n`)
console.log(`current value of num: ${num}\n`)

// Compound assignment operators:
let num2 = 10

// The following is shorthand for num2 = num2 * 2
num *= 2 // 20

// There are similar operators for all arithetic operators and more
// += -= *= /= %= **=
