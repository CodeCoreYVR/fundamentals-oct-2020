// jQuery Lab: http://bit.ly/jquery-lab

 // Select all shapes
$('.shape') // returns jquery wrapped set
document.querySelector('.shape') // querySelector only returns the single Node of the first element that matches the selector
document.querySelectorAll('.shape') // querySelectorAll returns a NodeList (includes Text Nodes) that matches the selector
document.getElementsByClassName('shape') // getElementsByClassName return an HTML collection that matches the class name (no "." prepending the name)

$(".shape.black") // Select all black shapes
$('.shape').length // Returns the count of all shapes
$(".shape.black").length // Returns the count of all black shapes

// Get the count of all black and blue shapes
$(".shape.black").length + $(".shape.blue").length 
$(".shape.black, .shape.blue").length

$("h1") // select all h1 elements (should only be one h1 according to HTML rules)
$(".circle.small") // select all small circles

$("h1")[0] // returns the element node itself (which can call DOM methods for elements)
$("h1").eq(0) // returns the element wrapped in a set at that index, so you chain jQuery methods on it like this:
$("h1").eq(0).hide()

// Get the "href" attribute of the first link on the page
$("a").eq(0).attr("href") // passing only one argument to .attr() returns us the value of the attribute
$("a")[0].getAttribute("href") // since [] notation will give us the element itself, we need to call the DOM method to get the attribute

// When reading an attribute, only the first element's attribute is returned
$("a").attr("href")

// passing in a second argument to attr() will change the attribute value for all elements of the selected set
$("a").attr("href", "http://www.codecore.ca")

// Change all the links class to highlight
$("a").attr("class", "highlight")

document.querySelectorAll("a").forEach(node => {
  node.setAttribute("class", "highlight")
})

// Change all shape's class to highlight
// If we do the following, it will replace all existing classes
$(".shape").attr("class", "highlight")

// Add or remove a class
$(".shape").addClass("highlight")
$(".shape").removeClass("highlight")
$(".shape").toggleClass("highlight")

// note: .forEach is a NodeList method, can't be called on HTMLCollections
// which are returned from getElementsByTagName, getElementsByClassName
document.querySelectorAll(".shape").forEach(node => {
  node.classList.add("highlight")
  node.classList.remove("highlight")
  node.classList.toggle("highlight")
})

// Remove all blue shapes
$(".blue.shape").remove() // removes from the DOM
$(".blue.shape").hide() // sets display: none but it's still in the DOM

document
  .querySelectorAll(".blue.shape")
  .forEach(node => node.remove())

document
  .querySelectorAll(".blue.shape")
  .forEach(node => node.style.display = "none")

$("#orange-container .shape").remove() // Remove all shapes in the orange container
$(".small.circle.red").remove() // Remove all small red circles

// Get the html contents of the reset button
$("#reset").html() 
document.getElementById("reset").innerHTML

// Try to get the html contents of all the links
$("a").html() // this only gets the contents of the first matched element

// One way to read all contents
// each() is a jQuery method
// The callback in each() takes in the index
$("a").each(function(index) {
  console.log($("a").eq(index).html())
})

// Set the content of the reset button to say "Launch Missiles!"
$("#reset").html("Launch Missiles!")

// Change all the h1 tags to say "[Your name] is cool!"
const name = prompt("What is your name?")
$("h1").html(`${name} is cool!`)

document.querySelectorAll("h1").forEach(node => {
  node.innerHTML = `${name} is cool!`
})

// Select all children of the purple container
$("#purple-container").children()
document.querySelector("#purple-container").children // returns HTML collection of child elements
document.querySelector("#purple-container").childNodes // returns Node List including text nodes

// Select the green container using "parent"
$('.medium.red.diamond.shape').parent() // the red diamond unique on the page

// Select <li> tags that have anchor tags nested
$("li a") // $("li a") will select all anchors as descendants of all <li>
$("li a").parent() // calling parent() on that set will return all the parents wrapped in a set
$("a").closest("li") // closest() selects the closest ancestor that matches the selector

// Effects
$('.container').slideUp()
$('.container').fadeOut()
$('.container').fadeIn()

// When any shape is clicked, log "shape clicked" to the console
// "click" is the name of the event
// The second argument is a callback, also known as the event handler
// It will be invoked when the event fires
$(".shape").on("click", function() {
  console.log("shape clicked")
})

document.querySelectorAll(".shape").forEach(node => {
  node.addEventListener("click", function() {
    console.log("shape clicked")
  })
})

// When our mouse enters a blue circle, log "blue circle: go away!"
$(".circle.blue").on("mouseenter", function() {
  console.log("blue circle: go away!")
})

document.querySelectorAll(".blue.circle").forEach(node => {
  node.addEventListener("mouseenter", function() {
    console.log("blue circle: go away!")
  })
})

// When our mouse leaves a blue circle, log "blue circle: goodbye!"
$(".circle.blue").on("mouseleave", function() {
  console.log("blue circle: goodbye!")
})

document.querySelectorAll(".blue.circle").forEach(node => {
  node.addEventListener("mouseleave", function() {
    console.log("blue circle: goodbye!")
  })
})

// each callback has access to an event object as its first parameter
// it has properties that describe the event that triggered
// event.currentTarget and "this" both refer to the element that the event listener was attached to
$("tr").on("mouseenter", function(event) {
  // These are DOM elements:
  console.log(this)
  console.log(event.currentTarget)

  // These are jQuery sets:
  console.log($(this))
  console.log($(event.currentTarget))
})


// When a mouse enters any <tr>, set its class to "highlight"
$("tr").on("mouseenter", function() {
  $(this).attr("class", "highlight")
})

// We don't need to use "this" in the DOM because we have access the node that iterate over in the callback
document.querySelectorAll("tr").forEach(node => {
  node.addEventListener("mouseenter", function() {
    console.log("The element that the event was attached:", node)
    node.setAttribute("class", "highlight")
  })
})

// When a mouse leaves any <tr>, set its class to ""
$("tr").on("mouseleave", function() {
  $(this).attr("class", "")
})

// We don't need to use "this" in the DOM because we have access the node that iterate over in the callback
document.querySelectorAll("tr").forEach(node => {
  node.addEventListener("mouseleave", function() {
    console.log("The element that the event was attached:", node)
    node.setAttribute("class", "")
  })
})

// When a shape is clicked, log its "class" attribute to the console
$(".shape").on("click", function() {
  console.log($(this).attr("class"))
})

document.querySelectorAll(".shape").forEach(node => {
  node.addEventListener("click", function() {
    console.log(node.getAttribute("class"))
  })
})

// When a shape is clicked, hide it
$(".shape").on("click", function() {
  $(this).hide()
})

document.querySelectorAll(".shape").forEach(node => {
  node.addEventListener("click", function() {
    node.style.display = "none"
  })
})

// When any shape is clicked, remove its container
$(".shape").on("click", function() {
  $(this).parent().remove()
})

document.querySelectorAll(".shape").forEach(node => {
  node.addEventListener("click", function() {
    node.parentElement.remove()
  })
})