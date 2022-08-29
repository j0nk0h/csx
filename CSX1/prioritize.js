// ADD CODE HERE
const prioritize = (arr, cb) => {
  const tValues = [];
  const fValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) { 
      tValues.push(arr[i])
    } else {
      fValues.push(arr[i])
    }
  } 
  return tValues.concat(fValues);
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
