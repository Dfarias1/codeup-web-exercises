let input;
while(true){
	input = Number(prompt("add odd number 1 - 50"));
	if(input % 2 === 1 && input >= 1 && input <= 50) {
		break;
	}
}

for(let a = 1; a <= 50; a += 2){
	if(a === input){
		console.log("number skipped!: " + a);
		continue;
	}
	console.log("this is a odd number " + a);
}