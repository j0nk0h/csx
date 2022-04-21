function getLength(array, counter = 0) {
  if (array[0] === undefined) {
    return counter;
  }
  return getLength(array.slice(1), counter + 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
