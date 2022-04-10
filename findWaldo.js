// ADD CODE HERE
const findWaldo = obj => {
  for (let key in obj) {
    if (key === 'Waldo') {
      return obj[key]
    }
  }
  return "Where's Waldo?"
}

// Uncomment these to check your work!
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
