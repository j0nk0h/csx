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
