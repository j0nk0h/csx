// ADD CODE HERE
function multiMap(valueArr, cbArr) {
  return valueArr.reduce((result, item) => {
    if (!result[item]) result[item] = [];
    cbArr.forEach(cb => result[item].push(cb(item)));
    return result;
  }, {});
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
