console.log('Hello, world!');

function repeater(char) {

}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));

console.log('Hello, world!');

function repeater(char) { 
	if (char.length === 5) {
  	return char;
  }
  return repeater(char + char[0]);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));

// const testStr = 'gggg'
