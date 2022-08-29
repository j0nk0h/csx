function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	// add code here
  const person = new PersonConstructor();
	person.name = name;
  person.age = age;
  return person;

}

const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
