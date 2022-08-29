// ADD CODE HERE
const countBy = (arr, cb) => {
  const result = {}; // { odd: 2, even: 1 }
  for (let i = 0; i < arr.length; i++) {
    const key = cb(arr[i]);
    
    result[key] = result[key] + 1 || 1;
  }
	return result;
}
// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
