let calls = "";

const jerry = (str) => {
  return kramer(str + "Jerry");
}

const george = (str) => {
  return elaine(str + 'George')
}

const elaine = (str) => {
  return str + 'Elaine'
}

const kramer = (str) => {
  return george(str + 'Kramer')
}

// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'