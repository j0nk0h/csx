function mergingElements(array1, array2) {
  // ADD CODE HERE
  let sum = [];
  
  for (let i = 0; i < array1.length; i++) {
    sum.push(array1[i] + array2[i]);
  } 

  return sum;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
