// Return count of substrings within a string (no using built in functions)
function countSubstring(string, substr) {
  let count = 0;
  let i = 0;
  let j = 0;

  while (i < string.length) {
    if (string[i] === substr[j]) {
      while (j < substr.length) {
        j ++;
        i++;
        if (string[i] !== substr[j]) {
          j = 0;
          break
        } 

        if (j === substr.length - 1) {
          count += 1
          j = 0;
          break;
        }
      }
      
    }
    i ++;
  }
  return count;
}
module.exports = countSubstring;