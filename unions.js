// ADD CODE HERE
const union = arrayOfArrays => {
  // compare each array
  let result = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      if (!result.includes(arrayOfArrays[i][j])) {
        result.push(arrayOfArrays[i][j]);
      }
    }
  }
  return result;
  // return new array with all elements
  // if there are duplicates, add only once to the new array while preserving element order
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
