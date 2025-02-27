
let name = "Pranay"  
name2 = 'anay'

//Understanding the window Object
// window is a global object in browsers.
// It represents the browser window/tab and contains properties/methods for interacting with it.
// Any implicitly declared global variable becomes a property of window.

//Data Types

/**primitive data types 7 (call by value )
 * boolean
 * BigInt
 * number
 * string
 * symbol
 * null
 * undefined 
 */

let symbol = Symbol("symbol")
let symbol1 = Symbol("symbol")
console.log(symbol == symbol1) //false, every Symbol is unique


let bigNumber = 234234234123423424124141413412n

console.log(bigNumber)
/** Non-primitive data types 3 (call by reference)
 * object 
 * array (Type of object)
 * function (Type of object)
 */

let obj = {
  name: 'John',
  age : 25
}

const obj2 = obj

obj2.name = 'Doe'

console.log(obj.name) //Doe
console.log(obj2.name) //Doe


const addNumber = function name(params) {
  return addNumber;
}

console.log(typeof addNumber) //function
console.log(typeof bigNumber)


// Stack and heap memory 
// stack memory is used for primitive data types
// heap memory is used for non-primitive data types 


let personDetails = {
  name: "pranay",
  age: 12
}

let personDetails2 = personDetails   //here both are refering to same object in the heap memory 
personDetails2.name = "John"   //changing the name of personDetails2 will also change the name of personDetails



let personDetails3 = {
  name: "pranay",
  age: 12
}

let personDetail4 = personDetails3

personDetail4.age = 24

console.log(personDetails3)
console.log(personDetail4)  