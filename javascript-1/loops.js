// while loop

// Loops are used to run a piece of code many times

// Initialize value e.g. let i = 1
// while ( condition / expression ) {
  // code will run while condition is true
  // after each iteration we change the initializer
  // e.g. i++

  // after code block is run, it will go back and check the 
  // condition to see if it should run again
// }

// for loop
// for (initializer ; condition ; afterthought/iterator) {
  // code block that runs while the condition is truthy
// }

// Log the numbers from 1 to 100 to the console:
let i = 1
while ( i <= 100 ) {
  console.log(i)
  i++
}

// The above while loop behaves like the following for loop:
// But i is not scoped to the global scope like in the while loop, only to each iteration
for (let i = 1; i <= 100; i++) {
  console.log(i)
}

// If there is only one line of code in the for/while loop,
// you can write it without braces and on the same line:
for (let i = 1; i <= 100; i++) console.log(i)

// Log all even numbers from 0 to 100 to the console:
let i = 0
while ( i <= 100 ) {
  console.log(i)
  i += 2
}
// or 
let i = 0
while ( i <= 100 ) {
  if ( i % 2 === 0 ) {
    console.log(i)
  }
  i++
}

// The break statement breaks out of the entire loop
// and continues on with the program
let result = 0
for (let i = 5; i < 10; i++) {
  result += i
  if (i % 3 === 0) break
}

// continue will terminate the current iteration, ignoring any code after the continue statement
// and moves to the next iteration
for (let i = 0; i <= 10; i++) {
  if (i % 3 === 0) continue 
  // The following will be ignored if continue statement is hit
  console.log(i)
}

// Print the numbers that are between 0 and 100 that are divisible by 3
for (let i = 0; i <= 100; i++) {
  if (i % 3 !== 0) continue 
  // This following will be ignored if continue statement is hit
  console.log(i)
}

// A do while loop will run once before checking the condition
do {
  console.log('this will run')
} while (false)

