//local and global scope in js

//let -> block scope
//var -> function scope
//const -> block scope

//scope level and mini hoisting


//In nested Function, child can use the variable from parent but parent cannot use the variable from child

// function one(){

//   let name = "pranay"

//   function two(){
//     let name2 = "Ashok"
//     console.log(name);
//   }

//   console.log(name2); //this can't be accessed
//   two();
// }

// one()

// Hositing and function declaration types 

//1st type : Normal Type,in this case function is hoisted and can be called before the function declaration


console.log(addOne(1))

function addOne(num){
  return num + 1  
}

const addTwo = function addTwo(num){
  return num + 2
}

addTwo(2)

//2. using function expression

//anomymous fuction expression 
const addTwo2 = function (num) {
  if (num <= 0) return 0;
  return addTwo2(num - 1) + 2; 
}

//named function expression
const addTwo3 = function addTwoNamed(num) {
  if (num <= 0) return 0;
  return addTwoNamed(num - 1) + 2; // ✅ Works fine (name inside function body)
};

