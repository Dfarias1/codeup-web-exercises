"use strict";

function getUserLastCommit(username) {
	let url = `https://api.github.com/users/${username}/events/public`;

	// console.log(url);

	return fetch(url, {headers: {'Authorization': PROMISE_TOKEN}})
		.then((response) => response.json())
		.then((listOfEvents)=>{
			console.log(listOfEvents);
			for(let event of listOfEvents) {
				if(event.type ==='PushEvent'){
					return event.created_at;
				}
			}
		})
}

console.log(getUserLastCommit('dfarias1'));

