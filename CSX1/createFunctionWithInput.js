// ADD CODE HERE
const createFunctionWithInput = input => {
  return () => {
  	return input; 
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
