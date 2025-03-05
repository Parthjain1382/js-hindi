//Objects  

//singleton Object
const userInfo = new Object()


u1 = {1: 'one', 2: 'two'}
u2 = {3: 'three', 4: 'four'}


u3 = {...u1, ...u2}

//Objects methods in js 

// console.log(Object.keys(u1)); //keys , returns arrays
// console.log(Object.values(u2)); //values, returns arrays
// console.log(Object.entries(u2)); //entries, returns arrays , every key value pair is an array which is stored in another array
// console.log(u1.hasOwnProperty(1)); //true



//destructuring objects

let course = {
  courseName: 'JS',
  duration: '2 months',
  fee: 2000
}
let {courseName} = course;
console.log(courseName);


//Api Concept