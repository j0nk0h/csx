function addN(arr, n){
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + n
  }
  return arr
} 

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
