// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
//Write a function where it adds all the numbers down to 0 passed in

function recursiveRange(num){
  if (num === 0) {
    return 0;
  }

  return num + recursiveRange(num - 1);
}
module.exports = recursiveRange;