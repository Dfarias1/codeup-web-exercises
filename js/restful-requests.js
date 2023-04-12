"use strict";
// GET a list of all post
fetch("http://localhost:3000/posts")
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.log(error))

//POST a new post to the DB
let newPost = {
	id: 2,
	title: "My first bog post",
	author: "Codeup"
}

fetch("http://localhost:3000/posts", {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	// convert JS object to JSON object
	body: JSON.stringify(newPost)
}).then(resp => resp.json())
  .then(data => console.log(data))
  .catch( error => console.log(error));