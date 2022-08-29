// ADD CODE HERE
const saveOutput = (cb, pass) => {
  const storage = {};
  
  return input => {
    if (input === pass) {
      return storage;
    } 
    storage[input] = cb(input);
    return cb(input);
  }
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
/* cb = multiplyBy2 pass = 'boo' storage = { 2: 4, 9: 18 }
input => {
    if (input === pass) {
      return storage;
    } 
    storage[input] = cb(input);
    return cb(input);
  }
*/
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
