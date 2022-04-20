function flatten(array) {
  let arrayOfStrings = array.toString();
  let flattenedArrayOfStrings = arrayOfStrings.split(",");
  let flattenedArray = [];

  function flattenHelper(helperArrayOfStrings) {
    let firstElement = helperArrayOfStrings.shift();
    flattenedArray.push(parseInt(firstElement));
    if (helperArrayOfStrings.length <= 0) {
      return;
    }
    flattenHelper(helperArrayOfStrings)
  }
  flattenHelper(flattenedArrayOfStrings);
  return flattenedArray;
}

module.exports = flatten