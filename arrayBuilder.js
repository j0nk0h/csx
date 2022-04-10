function arrayBuilder(obj) {
  // ADD CODE HERE
  let arr = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      arr.push(key)
    }
  }
  return arr;
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
