(function(){
	"use strict";

	let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	let planetsArray = planetsString.split("|")

	/**
	 * TODO:
	 * Convert planetsString to an array, and save it in a variable named
	 * planetsArray.
	 * console.log planetsArray to check your work
	 */

	console.log(planetsArray);

	/**
	 * TODO:
	 * Create a string with <br> tags between each planet. console.log() your
	 * results. Why might this be useful?
	 */
	let planetsHTML = planetsArray.join("<br>")
	console.log(planetsHTML)
	 /** BONUS:
	 * Create another string that would display your planets in an undordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */

	let ulPlanets = "";
	let liString;
	planetsArray.forEach(function (planet) {
		if (planet === planetsArray[0]) {
			ulPlanets += "<ul>";
		}
		liString = "<li>" + planet + "</li>";
		ulPlanets += liString;
		if (planet === planetsArray[planetsArray.length - 1]){
			ulPlanets += "</ul>";
		}
	})
	ulPlanets += "/ul";
	console.log(ulPlanets)

})();