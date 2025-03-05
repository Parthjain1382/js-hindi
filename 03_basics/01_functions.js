//Functions in js


//if not return anything then it will return undefined

const functReturn = function addTwoNumber(){

}

function addTwoNumber(){

}


//functions with objects and arrays

//rest operator, can be used to pass any number of arguments and make it into an array

function calculateCartPrice(val1 , val2 ,...items){
  return items
}

// console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9,10));

function handleObject(anyObject){
  console.log(anyObject);
  console.log(anyObject.name);
  anyObject.name = 'John Doe';

}

let user = {
  name: 'John',
  age: 22
}

handleObject(user);
console.log("user Name",user);