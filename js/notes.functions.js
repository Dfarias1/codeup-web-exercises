"use strict";

(function ()){
    alert("hello and welcome to my webpage!")
})();

// //-----------how to invoke(call) a function-------------------
// console.log("functions");
//
// alert("this is my functions notes");
//
//
// //------------------storing functions-----------------------------
// let userDay = prompt("how's your day going?");
//
// alert("I am having a" + userDay + " too!")
//
// //-------------------Defining a function-------------------------
// function greeter(name, message){
//     //-----------^^^parameter^^------------
//     return "Hello " + name + ", " +message + ".";
// }
//
// //----------calling a function----------------------------
// alert(greeter("will", "have a great day"));
// //--------------^^^^^^argument^^^^^^----------------------
//
//
//
// let name = prompt( "what is your name?");
// let message = prompt( "what would you like your message to be?");
//
// //----------------------Anonymous Functions-----------------------
// let greeter = function (name, message){
//     return "hello " + name + ", " + message + ",";
// }

//---------function scoping---------
let height = "3ft";
function jump(){
    name = "daniel";
    return name + " you jumped " + height;
}

console.log(jump());
console.log(name);