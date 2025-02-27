//Number and Maths in Js

const score = 400;

const balance = new Number(100000);

console.log(typeof score); //number
console.log(typeof balance); //object 

//number methods

const num1 = balance.toExponential(); //1e+3
const num2 = balance.toFixed(2) //1000.00
const num3 = balance.toLocaleString('en-IN'); //1,00,000


//Maths in js 
const mathTest = Math.abs(balance); //make everthing positive 
const mathround = Math.round(3.4); //3 , chooses the closest integer
const mathceil = Math.ceil(3.4); //4 , always rounds up to the closest big integer
const mathfloor = Math.floor(3.4); //3 , always rounds down to the closest small integer
const mathrand = Math.random(); //random number between 0 and 1


//FORMULA for dice like questions

min = 10
max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //random number between 10 and 20