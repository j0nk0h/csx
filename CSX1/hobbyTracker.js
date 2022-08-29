function hobbyTracker(hobbies) {
  let cacheObj = {};
  for (let i = 0; i < hobbies.length; i++) {
    cacheObj[hobbies[i]] = 0
  }
  
  return (hob, hours) => { // hob: 'baking', hours: 1
    if (hob === undefined) {
      for (let key in cacheObj) {
        cacheObj[key] = 0
      }
      return 'tracker has been reset!';
    }
    cacheObj[hob] += hours; // { 'baking': 4}
		return cacheObj;
  }
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
updateHobbies('baking', 1)
/* cacheObj = { yoga: 0, baking: 0, piano: 2 } 
(hob, hours) => {
		cacheObj[hob] = hours;
    if (!hours) {
      return 'tracker has been reset';
    }
    
		return cacheObj; 
*/
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
