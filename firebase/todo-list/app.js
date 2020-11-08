// If $() takes in a callback, it waits for the document 
// to finish loading before firing
$(function() {
  const todoForm = $("#todo-form")
  const todoInput = $("#todo-input") 
  const todoList = $(".list-group")

  todoForm.submit(function(event) {
    // This will stop the default behaviour/action
    // of the form when submitted (in this case, refreshing the page)
    event.preventDefault()

    // trim() will remove beginning and trailling spaces
    // and it would also turn an empty spaces string into an empty string ""
    const todoInputValue = todoInput.val().trim()

    // If the todo value is an empty string "", it is falsey and will not add another list item
    if (todoInputValue) {
      todoList.append(`
        <button type="button" class="d-flex justify-content-between list-group-item list-group-item-action">
          <span>${todoInputValue}</span>
          <small>
            <a href="#" data-is-complete="false" class="mark-complete-link">Mark Complete</a> 
            |
            <a href="#" class="delete-link">Delete</a>
          </small>
        </button>
      `)
    }

    // Reset the form after adding to the list with either:
    this.reset() // DOM method
    todoInput.val("") // jQuery method
  })

  // The following will only add event listeners to elements that 
  // already exist in the DOM when the DOM first loads
  // When loading, there are no delete links on the page
  $(".delete-link").on("click", function(event) {
    $(this).closest("button.list-group-item").remove()
  })

  // The second optional param in .on() is a css selector string to filter
  // the descendants of the selected elements that trigger the event
  // The event handler doesn't get invoked unless the element matches the selector
  // that we clicked on. "this" refers the link that fired the event, not the todoList
  $(todoList).on("click", ".delete-link", function(event) {
    // .closest() will traverse up in the DOM and give us the 
    // first ancestor that matches the css selector
    $(this).closest("button.list-group-item").remove()
  })

  $(todoList).on("click", ".mark-complete-link", function(event) {
    const isComplete = $(this).data("is-complete")
    
    if (isComplete) {
      $(this)
        // data() and text() return the set that it was called on $(this)
        // so you can chain the jQuery methods
        .data("is-complete", false) 
        .text("Mark Complete")
        .parent()
        .siblings()
        // same with css(), it will return the siblings so you can chain it
        .css("text-decoration", "none")
        .css("color", "black")
    } else {
      $(this)
        .data("is-complete", true) 
        .text("Mark Incomplete")
        .parent()
        .siblings()
        .css("text-decoration", "line-through")
        .css("color", "red")
    }
  })

})