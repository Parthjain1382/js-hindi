//Date and Time in js

//all dates started from  January 1, 1970, UTC
const date = new Date();

// console.log(date.toString() ); //2021-07-07T06:45:00.000Z
// console.log(date.toDateString() ); //Wed Jul 07 2021
// console.log(date.toLocaleDateString() ); //2021-07-07T06:45:00.000Z

const lastDate = new Date('2021-07-07');
console.log(lastDate.toLocaleString() ); 


//timestamps
const dateNow = Date.now();  //time elasped from 1970
// console.log(dateNow); 

console.log(lastDate.getTime());


console.log("date, dateNow, comparison",date.getTime(),dateNow,dateNow == date.getTime()); 
//these above can be used to compare between two dates these are not equal because at 
// the time of execution date is created first then dateNow so the time difference is there between them.  