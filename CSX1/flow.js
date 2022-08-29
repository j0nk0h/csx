function flow(input, funcArray) {

}

// To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// function flow(input, funcArray, idx = 0) {
// 	if (!funcArray[idx]) return input;
// 	return flow(funcArray[idx](input), funcArray, idx + 1)
// }

const flow = (input, funcArray) => {
  if (!funcArray.length) return input;
  return flow(funcArray[0](input), funcArray.slice(1))
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
