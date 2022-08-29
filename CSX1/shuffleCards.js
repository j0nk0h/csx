function shuffleCards(topHalf, bottomHalf) {
  // YOUR CODE HERE
}



// UNCOMMENT TO TEST YOUR WORK
// const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
// const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
// console.log(shuffleCards(topHalf, bottomHalf));
//   /*-> ['Queen of Diamonds',
//         'Jack of Hearts',
//         'Five of Hearts',
//         'Ten of Spades',
//         'Ace of Spades',
//         'Eight of Clubs',
//       ]
function shuffleCards(topHalf, bottomHalf, shuffled = []) {
  // YOUR CODE HERE
  if (topHalf[0] === undefined) return shuffled.concat(bottomHalf);
  if (bottomHalf[0] === undefined) return shuffled.concat(topHalf);
	shuffled.push(topHalf[0]);
  shuffled.push(bottomHalf[0]);
  return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), shuffled);
}



// UNCOMMENT TO TEST YOUR WORK
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
//   /*-> ['Queen of Diamonds',
//         'Jack of Hearts',
//         'Five of Hearts',
//         'Ten of Spades',
//         'Ace of Spades',
//         'Eight of Clubs',
//       ]
