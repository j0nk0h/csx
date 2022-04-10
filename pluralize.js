// ADD CODE HERE
const pluralize = str => {
  let addS = [];
  for (let i = 0; i < str.length; i++) {
    addS.push(str[i] + 's')
  }
  return addS;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
