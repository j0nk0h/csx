function disemvowel(string) {
  // ADD CODE HERE
  let result = '';
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  for (let i = 0; i < string.length; i++) {
    if (!vowels[string[i].toLowerCase()]) {
      result += string[i];
    }
  }
  return result;
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
