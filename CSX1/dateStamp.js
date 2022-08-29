// ADD CODE HERE
const dateStamp = cb => {
  
  return (...arg) => {
    const date = new Date;
    
    return {
      date: date.toDateString(),
      output: cb(...arg)
    }
  }
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
