//array extension part

let arr = [1,2,3,[4,5,[1]]]

console.log(arr[3][2][0])

//array methods


const arr2 = arr.concat([4,5,6]) //concatenates the array , also can use ... operator
const arr3 = [...arr, 4,5,6]


const arr5 = arr.copyWithin(1,2,3) //copies the elements from 2 to 3 and paste it at 1
const arr6 = arr.flatMap((x) => x * 2) //doubles the array, use flat2 and map
const arr4 = arr.flat() //flattens the array
console.log(Array.isArray(arr4))  //checkin if the array is array or not
console.log(Array.from('pranay')) //converts anything into array if not present like array then empty array
console.log(Array.from({name: 'pranay'})) //[]

let score1 = 100
let score2 = 200

console.log(Array.of(score1, score2)) //converts the elements into array


