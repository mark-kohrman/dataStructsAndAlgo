//Accepts array and callback.. function returns true if single item in array is is accepted into the callback

function someRecursive(array, callback) {
  let result = false;

  function someHelper(helperArray) {
    if (callback(helperArray.pop()) === true) {
      result = true;
      return;
    }
    
    if (array.length === 0) {
      return;
    }
    someHelper(helperArray);
  }
  someHelper(array);

  return result;
}

module.exports = someRecursive;