// there are three type of variables in js 
// let , const and var

/**const 
 *  in  const reassigning is not possible 
 * but the reassignent of reference is possible 
 * 
 */


/**So var and let are two things
 * var is function scoped 
 * let is block scoped 
 */

//difference between let and var

var a = 30
console.log("the value of a is ",a)
function greet(){
  var a = 10;
  console.log(a)
  var a = 20;
  console.log(a)
  let b = 100

}

greet()