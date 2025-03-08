//Immediately Invoked function expression 

//it's runs immediately after it's defined
//self-invoking anonymous function

//normal function 
function sayHello(){
    console.log('Hello');
}

const name = "pranay"


//IIFE
(function(){
    console.log('IIFE');
})();


((name) => {
    console.log(`IIFE with arrow function ${name}`);
})


//declaration and invocation at the same time 