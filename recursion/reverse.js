//write a function that reverses a string using recursion;
function reverse(string) {
  let reversedString = "";

  function reverseHelper(helperString) {
    if (helperString <= 0) {
      return;
    }

    reversedString += helperString[helperString.length - 1];
    helperString = helperString.slice(0,-1);

    reverseHelper(helperString);
  }
  reverseHelper(string)
  return reversedString;
}

module.exports = reverse;