// Say "Hello" 10 times
let count = 10

const id = setInterval(function() {
    console.log("Hello")
    if (count-- === 1) {
        clearInterval(id)
    }
}, 1000)

console.log("This logs first")

// Change circle colours to the value of the input using jQuery
// https://s3.amazonaws.com/codecore/jquery-lab/index.html
$("#form-1").submit(function(e) {
  const color = $("input[type=text]").val()   
  $(".circle").css("background-color", color)
})