// ADD CODE HERE

// Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// ADD CODE HERE
const compareArr = (array1, array2) => {
  const result = [];
  const array2Obj = {};
  
  for (let i = 0; i < array2.length; i++) {
    array2Obj[array2[i]] = true;
  }
  
  console.log(array2Obj)
  
  for (let j = 0; j < array1.length; j++) {
    if (array2Obj[array1[j]]) result.push(array1[j])
  }
  
  return result;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
