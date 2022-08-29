// ADD CODE HERE
const censor = () => {
  const savedPair = {};
  return (arg1, arg2) => {
    if (arg2 === undefined) {
      for (let key in savedPair) {
        arg1 = arg1.replace(key, savedPair[key])
      }
      return arg1;
    }
    savedPair[arg1] = arg2
  }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
/* savedPair = { 'dogs': 'cats', 'quick': 'slow' } 
(arg1, arg2) => {
    if (arg2 === undefined) {
      for (let key in savedPair) {
        return arg1.replace(key, savedPair[key])
      }
    }
    savedPair[arg1] = arg2
  }
// ADD CODE HERE
const censor = () => {
  const savedPair = {};
  return (arg1, arg2) => {
    if (arg2 === undefined) {
      for (let key in savedPair) {
        arg1 = arg1.replace(key, savedPair[key])
      }
      return arg1;
    }
    savedPair[arg1] = arg2
  }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
/* savedPair = { 'dogs': 'cats', 'quick': 'slow' } 
(arg1, arg2) => {
    if (arg2 === undefined) {
      for (let key in savedPair) {
        return arg1.replace(key, savedPair[key])
      }
    }
    savedPair[arg1] = arg2
  }
