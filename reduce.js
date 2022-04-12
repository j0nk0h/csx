// ADD CODE HERE

// Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// ADD CODE HERE
const reduce = (array, cb, initial) => {
  let acc = initial;
  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i])
  }
  return acc;
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
