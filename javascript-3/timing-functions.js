// setTimeout is a higher order function that will execute the callback
// AFTER X amount of milliseconds
// setInterval is a higher order function that will execute the callback
// EVERY X amount of milliseconds

// The setTimeout/setInterval function receives 2 parameters
// 1. a callback
// 2. a number which represents milliseconds

setTimeout(() => {
  console.log('Hello World')
}, 5000)

// Ready, Set, Go!
console.log('Ready')
setTimeout(() => console.log('Set'), 1000)
setTimeout(() => console.log('Go!'), 2000)

// If we put 'Ready' after setTimeout, setTimeout is not going to block our
// code while it's waiting to invoke the callback
setTimeout(() => console.log('Set'), 1000)
setTimeout(() => console.log('Go!'), 2000)
console.log('Ready')

// setInterval returns an id which you can pass to clearInterval to cancel it
const id = setInterval(() => console.log('Hello World'), 1000)
setTimeout(() => clearInterval(id), 10000)

// Dual odd and even counters:
let count = 0
setInterval(() => {
    count++
    if (count % 2 === 0) console.log(count)
}, 1000)
setInterval(() => {
    if (count % 2 !== 0) console.log(count)
}, 1000)

// Blast-off countdown
let count = 10
const id = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!')
    clearInterval(id)
  } else {
    console.log(count--)
  }
}, 1000)