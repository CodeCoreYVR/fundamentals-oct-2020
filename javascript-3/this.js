// In the chrome console, "this" in the global scope
// is the window object
// this // window object
// window.prompt === prompt // true

const can = {
  a: 1,
  b: 2,
  c: 3,
  touchThis() {
    return this
  }
}

can.touchThis() // returns can object

// "this" will refer to something else if the method is separated from is obj
// this is called implicit binding of "this"
// the rule of thumb is that "this" will refer to the left of the dot
const cant = {}
cant.touchThis = can.touchThis
cant.touchThis() // return cant object

// Similarly, when we define a function, it doesn't know what param is
// until we invoke it and pass it an argument
function someFunc(param) {
  console.log('param:', param)
  console.log('this:', this)
}

cant.someFunc = someFunc
cant.someFunc([1, 2, 3])
// param: [1, 2, 3]
// this: cant object

someFunc(250)
// param: 250
// this: global object

const counter = {
  step: 1,
  count: 0,
  set(n) {
    this.count = n
  },
  inc() {
    return this.count += this.step
  },
  dec() {
    return this.count -= this.step 
  },
  now() {
    return this.count
  },
  setStep(n) {
    this.step = n
  },
  reset() {
    this.count = 0
  },
}

const car = {
  doors: 4,
  speed: 200,
  stop() {
    if (this.speed > 120) console.log('Screeeetch') 
    else if (this.speed > 80) console.log('RRrch') 
    else if (this.speed > 0) console.log('sh') 
    else console.log('Yikes, I don\'t know how fast I\'m going!!')
  },
  stopStretch() {
    if(typeof this.speed === 'number' ){
      let nume=[];
      
      for(let i=0; i<this.speed; i++){
        nume.push("e")
      }
      const num=nume.join("");
      let scr="Scr"+num+"tch!!";
      console.log(scr)
    }
  }
}