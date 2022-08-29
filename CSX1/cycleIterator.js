// ADD CODE HERE
const cycleIterator = (arr) => {
  let idx = 0;
  
  return () => {
    if (idx === arr.length) idx = 0;

    const stored = arr[idx];
    idx++;

    return stored;
  }
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
