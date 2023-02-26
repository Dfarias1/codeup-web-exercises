function showMultiplicationTable(a){
	for(let b = 1; b <= 10; b++){
		console.log(a + " a " + b + " = " +(a*b))
	}
}

showMultiplicationTable(7)

for(let x = 0; x < 10; x++){
	let random = Math.ceil(Math.random() * (200 - 20) + 20);
	if (random % 2 !== 0) {
		console.log(random + " is odd ");}
	else {
		console.log(random + " is even ")
	}
}

for(let z = 1; z <= 9; z++){
	let iString = "";
	for(let y = 1; y <= z; y++){
		iString += z;
	}
	console.log(iString);
}

for(let z = 1; z <= 9; z++){
	console.log(z);
}

for (let z = 100; z >= 5; z = z - 5){
	console.log(z);
}