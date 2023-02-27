// let name = "joe";
// let myFirstArray  = [true, false, 12, "bill", name];
//
// // getting length
// console.log(myFirstArray.length)
// // getting index of array
// console.log('my 3rd index is ' + myFirstArray[2])
// console.log('my first index is ' + myFirstArray[0])
// // this will return undefined because the index of 12 does not exist in the array
// console.log('this is an out of bounds element(exception) ' + myFirstArray[12])

// Iterating through arrays
let namesArray = ["Bob", "Joe", "mama", "guts", "will"];

//loop through the array and log the values using regular enhanced for loop
// //loop through the array and log the values
// for (let i = 0; i < name.length; i++) {
// 	let greeter = "hello " + name[i];
// 	console.log(greeter);
// }

//loop through array and log values via for-each loop
namesArray.forEach(function (nameCurrentIndex){
	let greeter = "hello " + nameCurrentIndex;
	console.log(greeter);
})
