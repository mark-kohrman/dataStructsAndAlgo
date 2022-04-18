function isPalindrome(string) {
  let reversedString = "";

  function reverseHelper(stringHelper) {
    if (stringHelper.length <= 0) {
      return;
    }
    reversedString += stringHelper[stringHelper.length - 1];

    reverseHelper(stringHelper.slice(0, -1));
  }

  reverseHelper(string);
  if (string === reversedString) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;