class PersonClass {
	constructor(first, last) {
    // add code here
		this.firstName = first;
    this.lastName = last
  }
  
  greet = () => {
    console.log('hello')
  }
	// add code here

}

const george = new PersonClass('George', 'Weasley');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'

console.log(george)
