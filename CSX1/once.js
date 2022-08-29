// ADD CODE HERE
const once = cb => {
  let storedOutput;
  let calledOnce = false;
  
  return input => {
    if (!calledOnce) {
    	storedOutput = cb(input);
      calledOnce = true;
    }
    return storedOutput;
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const addTwo = num => {
  return num + 2;
}
const addByTwoOnce = once(addTwo); 

/*
(input) => {     // storedOutput = 7, calledOnce = true, cb = addTwo
    if (!calledOnce) {
    	storedOutput = cb(input);
      calledOnce = true;
    }
    return storedOutput;
  }
*/

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
