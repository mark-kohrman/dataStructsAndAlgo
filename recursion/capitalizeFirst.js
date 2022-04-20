function capitalizeFirst (arrayOfStrings) {
  if (arrayOfStrings[0][0] !== arrayOfStrings[0][0].toUpperCase()) {
    let firstString = arrayOfStrings.shift();
    firstString = firstString.charAt(0).toUpperCase() + firstString.slice(1);
    arrayOfStrings.push(firstString);
    return capitalizeFirst(arrayOfStrings);
  } else {
    return arrayOfStrings
  }
}
module.exports = capitalizeFirst;