// ADD CODE HERE
const after = (num, cb) => {
	let counter = 1;
  
	return input => {
    if (counter === num) {
      return cb(input);
    } 
    
    counter++;
  }
}


// UNCOMMENT THESE LINES TO TEST YOUR WORK
const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);
/* counter = 2, num = 3, cb = called;
 input => {
    if (counter < num) {
      counter++;
    } else {
      return cb(input);
    }
  }
*/
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
