console.log("Hello from Javascript.")
alert("welcome to my website!")
let color = prompt("what is your favorite color?");
alert("Great, " + color + "is my favorite color too!");

let Mermaid = Number(prompt("How many days did you rent Little Mermaid"))
let Brother = Number(prompt("How many days did you rent Brother Bear?"))
let Hercules = Number(prompt("How many days did you rent Hercules?"))

let Total = (Mermaid + Brother + Hercules) * 3
alert("Your total amount is $" + Total)

let Google = Number(prompt("How much does Google pay per hour?"))
let Amazon = Number(prompt("How much does Amazon pay per hour?"))
let FB = Number(prompt("How much does Facebook pay per hour?"))

let GG = Number(prompt("How many hours did you work with GG?"))
let AMAZN = Number(prompt("How many hours did you work with Amazon?"))
let FaceBook = Number(prompt("How many hours did your work with Facebook?"))

let pay = (Google*(GG) + Amazon*(AMAZN) + FB*(FaceBook))
alert("your total amount paid is $" + pay)

let ItsFull = confirm("Is class full?")
let Conflict = confirm("Will class conflict?")
alert(!ItsFull && !Conflict)

alert("Product offer valid if a person buys more than 2 items.")
alert("No minimum purchase for premium members.")
