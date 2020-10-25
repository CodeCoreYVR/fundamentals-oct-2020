const car = {
  doors: 4,
  speed: 200,
  park: function() { 
    console.log("parking...")
  },
  // ES6 Shorthand
  stop() {
    console.log('Stopping...')
  },
}

car.speed // 200
car["doors"] // 4
car.park // returns the method definition
car.stop() // 'Stopping...'