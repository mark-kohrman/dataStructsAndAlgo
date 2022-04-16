//Clarify
//Fibnacci is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 where the current # is calculated by the sum of the two previous numbers... So in the example above 6 would be the input if 8 was the final out put bc it's the 6th number in that sequence
//input is 6.... output is 8
//input is 10... output is 55

//Visualize
// may want to make an array to track the index more easily
// the input parameter will be n where n is how much addition we do in the array
//input = 6
//if input is 1 or 2 return 1 // other wise return sum of two previous numbers until n is reached


//Write Code
function fib (n) {
  let arr = [1,1];
  if (n === 1 || n === 2 ) {
    return 1;
  }

  if (n === 0 ) {
    return 0;
  }
  function fiboTracker(trackerInputArray) {
    let i = trackerInputArray.length - 1;
    let currentSum = trackerInputArray[i] + trackerInputArray[i - 1];
    trackerInputArray.push(currentSum);
    if (i >= n - 2) {
      arr = trackerInputArray;
      return;
    }
    fiboTracker(trackerInputArray);
  }
  fiboTracker(arr);
  return arr[arr.length - 1];
}
// fib (10);
module.exports = fib;

//Refactor