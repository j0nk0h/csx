function factorial(num) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720

function factorial(num) {
	if (num === 1) return num;

  return num * factorial(num - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
