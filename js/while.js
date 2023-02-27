let i = 1;
while(i < 65536){
	i *= 2
	console.log(i)
}

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
let soldCones;
do{
	soldCones = Math.floor(Math.random() * 5) + 1;
	if(allCones < soldCones) {
		console.log("cannot sell you " + soldCones + " cones i only have " + allCones);
		continue;
	}
    allCones -= soldCones;
	console.log(soldCones + " cones sold...")
}while(allCones > 0)
console.log("yay! i sold the all!")


