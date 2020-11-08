// localStorage and sessionStorage are key-value pairs
// They exist for a specific domiain for a specific browser on your machine
// The values can only be strings, but if you want to use objects we can 
// use JSON.stringify and JSON.parse()

// Set a key value
sessionStorage.setItem("key", "value")
localStorage.setItem("key", "value")

// Get a value from a key
sessionStorage.getItem("key")
localStorage.getItem("key")

// sessionStorage has the same method names as below, but the data gets 
// deleted when the browser tab closes
// localStoarge exists until we delete it using code
localStorage.removeItem("key")

// Cookies are limited to 4KB for the whole object
// The exist until they expire (we set the expiration date)
// They are sent along with every request to the server
// The server also sends back cookies after modifying them
// e.g. a server can use cookies to authenticate 
// cookies are specific for each domain and browser

// No easy way out of the box to use cookies:
// We would usually use an external library to handle them
document.cookie