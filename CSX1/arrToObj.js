function arrToObj(array, callback) {
  // ADD CODE HERE
  let result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i]] = callback(array[i])
  }
  return result;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
