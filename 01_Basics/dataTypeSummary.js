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