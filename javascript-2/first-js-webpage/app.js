document.write(`
  <p>
    Hello from external JS script
  </p>
`)

document.write("A message to the document")

console.log("A message to the console")

alert("A message from alert")

// Prompt the user for their name and alert them
const name = prompt("What is your name?")

alert(`Hello ${name}!`)
