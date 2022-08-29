// ADD CODE HERE
const majority = (arr, cb) => {
  let tCounter = 0;
  let fCounter = 0;
  
  for (let i = 0; i < arr.length; i++) {
  	if (cb(arr[i])) {
      tCounter++;
    } else {
      fCounter++;
    }
  }
  
  return tCounter > fCounter;
}

// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
