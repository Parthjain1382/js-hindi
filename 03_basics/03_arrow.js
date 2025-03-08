
//this and arrow usecase in js  


//this refer to the current context 
const userInfo = {
  name: 'John',
  greeting: function(){
    // console.log(`Hello, ${this.name}`)
  }
}

userInfo.name = "pranay"
userInfo.greeting()

// console.log(this)

//this inside a function 
function addOne(){
  // console.log(this)
}

addOne()

//arrow function does not have its own this, it uses the this of the parent scope

//implicit return
const addThree = (num) => num + 3

//explicit return
const addTwo = (num1) => {

  const num2 = 2

  return num1 + 2  
}

console.log(addTwo(1))
  console.log(addThree(1))

  const arr = [1,2,3,4,5]


  const newArr = arr.map((item) => item * 2)

console.log(newArr)