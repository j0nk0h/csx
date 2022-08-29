let calls = "";

function jerry(str) {
	return  "Jerry" + kramer(str);
}

function george(str) {
	return "George" + elaine(str);
}

function elaine(str) {
	return "Elaine" + calls
}

function kramer(str) {
	return "Kramer" + george(str)
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'