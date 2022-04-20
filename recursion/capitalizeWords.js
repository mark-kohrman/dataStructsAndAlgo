function capitalizeWords (arr) {
  let capitalizedResults = [];

  function capitalHelper(helperArr) {
    if (helperArr.length === 0) {
      return;
    }
    let shiftValue = helperArr.shift()
    capitalizedResults.push(shiftValue.toUpperCase());
    capitalHelper(helperArr);
  }
  capitalHelper(arr);

  return capitalizedResults
}

var cap = capitalizeWords(['bon', 'jon', 'lawn']);
console.log(cap);