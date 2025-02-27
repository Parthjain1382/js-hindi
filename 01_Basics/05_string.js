//string manipulation
let name = "pranay"
let name3 = " John"
let name2 = new String("pranay")

console.log(typeof name) //string
console.log(typeof name2) //object


//method of strings in javascript 


let name4 = name.slice(0, 3)  //pra . returns the string from 0 to 3
let name5 = name3.trim() //removes the white spaces from the string
let name6 = name.concat(name3) //pranay John
let name7 = name.charAt(2) //a
let name8 = name.toUpperCase() //PRANAY
let name9 = name.toLowerCase() //pranay
let name10 = name.split('') //['p','r','a','n','a','y'] converts the string into array
let name11 = name.replace('a', 'o') //pronoy
let name12 = name.includes('a') //true
let name13 = name.search('a') //2
let name14 = name.indexOf('a') //2
let name15 = name.lastIndexOf('a') //4
let name16 = name.match('a') //a
let name17 = name.repeat(2) //pranaypranay
