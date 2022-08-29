const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
  for (let key in sumMe) {
    // console.log(sumMe[key])
    if (typeof(sumMe[key]) === 'number') {
      // console.log('hi')
      total = total + sumMe[key]
    }
  }
  console.log(total)