// ADD CODE HERE
const subtractTwo = num => {
  return num - 2;
}

const map = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
