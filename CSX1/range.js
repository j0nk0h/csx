function getTheRange(arr){
  // ADD CODE HERE
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  
  return [min, max, max - min];
}

// Uncomment these to check your work!
