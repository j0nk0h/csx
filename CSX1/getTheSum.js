function getTheSum(arr){
  // ADD CODE HERE
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum;
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
