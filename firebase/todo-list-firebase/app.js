// If $() takes in a callback, it waits for the document 
// to finish loading before firing
$(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCK4h3Fmvw_ZzNqwaEBnlZg8uF7V8xzjxM",
    authDomain: "todo-oct-2020.firebaseapp.com",
    databaseURL: "https://todo-oct-2020.firebaseio.com",
    projectId: "todo-oct-2020",
    storageBucket: "todo-oct-2020.appspot.com",
    messagingSenderId: "736670246990",
    appId: "1:736670246990:web:9e71e63a8ffc17fbdbbb1f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const todoFirebaseRef = firebase.database().ref("/todos")

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
      // add an object representing the todo to the todos object
      todoFirebaseRef
        .push({
          name: todoInputValue,
          isComplete: false,
        })
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
    // Remove the todo from firebase on click
    const key = $(this).closest("button.list-group-item").data("id")
    todoFirebaseRef
      .child(key)
      .remove()
  })

  $(todoList).on("click", ".mark-complete-link", function(event) {
    const key = $(this).closest("button.list-group-item").data("id")
    const todoRef = firebase.database().ref(`todos/${key}`)

    todoRef
      .once("value") // reads the value of todos/key
      .then(function(record) {
        // Update the todo object's complete status
        todoRef.update({
          isComplete: !record.val().isComplete
        })
      })
  })

  // When a task is added to firebase, append a task to the list
  // The call will run everytime the page first loads and reads from the database
  // for every todo in the database, and it also runs every time a new todo is added
  // The callback has access to a record the child object
  // Access the record's key using record.key
  // Access values from record.val().keyName
  todoFirebaseRef
    .on("child_added", function(record) {
      todoList.append(`
        <button 
          data-id="${record.key}"
          type="button" 
          class="d-flex justify-content-between list-group-item list-group-item-action"
        >
          <span>${record.val().name}</span>
          <small>
            <a href="#" class="mark-complete-link">Mark Complete</a> 
            |
            <a href="#" class="delete-link">Delete</a>
          </small>
        </button>
      `)
    })

  todoFirebaseRef
    .on("child_removed", function(record) {
      $(`button[data-id=${record.key}]`).remove()
    })

  todoFirebaseRef
    .on("child_changed", function(record) {
      const isComplete = record.val().isComplete

      if (isComplete) {
        $(`button[data-id=${record.key}] a.mark-complete-link`) // selects the mark-complete-link
          .text("Mark Incomplete")
          
        $(`button[data-id=${record.key}]`) // selects list item with the specific id
          .children("span") // "span" will filter the children selected with a css selector (span tag)
          .css("text-decoration", "line-through")
          .css("color", "red")
      } else {
        $(`button[data-id=${record.key}] a.mark-complete-link`) // selects the mark-complete-link
          .text("Mark Complete")
          
        $(`button[data-id=${record.key}]`) // selects list item with the specific id
          .children("span") // "span" will filter the children selected with a css selector (span tag)
          .css("text-decoration", "none")
          .css("color", "black")
      }
    })
})