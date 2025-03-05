//Objects in js

/**About Objects
 * 
 */



//creating an object

//1. using new keyword (using Constructor function) (singelton)

//2. Using object literal
// object keys are always stored as strings or Symbols
const sys = Symbol('sy1');

let userInfo = {
  "full Name": 'John',
  age: 22,
  [sys]: 'sys2',
}

//Accessing object properties
// console.log(userInfo.full Name); //Error
// console.log(userInfo['name']); //when property name has space

console.log( userInfo[sys]); //Symbol(sys)


userInfo.greeting = function(){
  return console.log(`Hello,${this['full Name']}`); 
}

console.log(userInfo.greeting()); //Hello