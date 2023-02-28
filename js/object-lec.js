//------------------------------------making objects custom object-------------------------------------
// will define a new dog object by using new keyword to make a new object prototype
// let dog = new Object();

// making an object using object literal notation, {} will define a new object.
let dog ={};

//--------------------------setting object properties(to custom objects)-------------------------------
// defining/ initializing property named breed belonging  to the dog object( first time we call/name the property is where the declaration happens

dog.breed = "german shepard";
// calling object property
console.log(dog.breed);
//reinitializing breed property (you can do this by calling the object followed my property name)
dog.breed = "pit bull";
//displaying dog breed by referencing property
console.log(dog.breed);
//PROPERTIES ARE ONLY ACCESSIBLE THROUGH YOUR OBJECT
// the snippit below will throw me an error, because I cannot access breed(property) without accessing dog(object first
//console.log(breed);

// --------- array notation------------
// the value inside of [] will be my property name
//I must have property name in double/single qoutes in order to define the property
// we are declaring/initializing color property for dog object using array notation
dog["color"] = "black";
//displaying dog color by referencing property
console.log(dog["color"]);

// you can set the properties of your object while initializing your object as shown below:
let cat = {
	name: "Fin",
	color: "black",
	gender: "female"
}
console.log(cat.color)
console.log(cat["gender"]);

//----------------------------Nesting values(data structures)---------------------------------
let shelters = {
	name: "myShelter",
	location: "Dallas, tx",
	rating: 5,
	// nesting an array in our object
	shelteredAnimals: ["dogs", "cats", "birds", "hamsters"],
	//nesting a list objects within an array in our object
	employees: [
		{
			name: "Steve Jones",
			position: "clerk",
			skills: "customer service"
		},
		{
			name: "Joe Adams",
			position: "mouth runner",
			skills: "customer service"
		},
		{
			name: "Apollo Creed",
			position: "team lead",
			skills: ["customer service"]
		},
	],
	//nesting an object in our object
	manager: {
		name: "Daniel Farias",
		position: "mouth runner",
	}
}

//accessing manager name
console.log(shelters.manager.name);
//accessing first index of sheltered animal within the shleter object
console.log(shelters.shelteredAnimals[0]);
//accessing first employee name
console.log(shelters.employees[0].name);
//accessing first employee skill
console.log(shelters.employees[0].skills[0]);

shelters.employees.forEach(function (employee){
	console.log("good morning "+ employee.name);
	employee.skills.forEach(function (skill){
		console.log("your skill set is " + skill)
		})
})

//--------------------------------------Assigning functions to objects--------------------------------
//assigning function to cat object as property(this function is now a method because it belongs to an object)
// cat.meow =function meow(){
// 	alert("meow");
// }
// console.log(cat)


// calling our meow function by accessing our cat object(needs () after function name in order to call function)
// cat.meow();

//------------------------------keyword---------------------------------
cat.meow =function meow(){
	alert(this.name + " goes MEOW!");
}

cat.meow();

//------------------------extra(storing function as property use case)--------
let user = {
	userName: "danTHEman69",
	email: "daniel.h.farias2@gmail.com",
	password: "password",
	greeter: function () {
		alert("hello " + this.userName + " welcome to your batcave :)")
	}
}
user.greeter()