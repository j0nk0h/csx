function getRemainder(num1, num2) {
  // INSERT CODE HERE
  if (num1 > num2) {
    return num1 % num2 
  } else {
    return num2 % num1
  }
}

// Uncomment the lines below to test your code
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
