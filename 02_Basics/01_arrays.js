//Arrays and their methods

/** Info on Arrays
 * array is a type of objects
 * resizable in js
 * mixed Data Types 
 * shallow copy (same reference point)
*/

//define array
let numArr1 = [1,2,3,"apple"];
let myHeroesArr = new Array("Ironman", "Thor", "Hulk", "Captain America", "Black Widow", "Hawkeye");


//Methods of Array 

numArr1.push(4); //adds the element at the end of the array
numArr1.pop() //removes from the end of the array   
numArr1.shift(); //removes from the start of the array
numArr1.unshift(0); //adds the element at the start of the array,
//but the problem occurs if there are 10,000 element, it will take longer time 

numArr1.includes(3); //true, boolean , checks if the element is present in the array or not
numArr1.indexOf(3); //2, returns the index of the element in the array, number

console.log(typeof numArr1.join());  //conce everthing into string seperated by comma

//slice vs splice
//slice does not change the original array
//splice changes the original array
// toSpliced() to not change the original array 

let nuArr2 = numArr1.slice(1,3) //2,3, returns the elements from 1 to 3
console.log("original Array", numArr1)
console.log(nuArr2);

// let numArr3 = numArr1.splice(1,3)
// console.log("original Array", numArr1)
// console.log(numArr3);

console.log(numArr1.slice(2, -2)); 

