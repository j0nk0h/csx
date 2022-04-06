const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;
  // ADD CODE HERE
  const objToArray = [];
  for (let key in checkObj) {
    objToArray.push(checkObj[key]);
  }
  for (let key in checkObj) {
    if (checkObj[key] % 6 === 0) {
      divBy6 = true;
    }
  }
  console.log(objToArray);
  console.log(divBy6);