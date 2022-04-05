const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
for (let key in checkObj) {
  if (checkObj[key] === 1) {
    found = 1
  } 
}
console.log(found)