//Write Code
// function fib (n) {
//   let arr = [1,1];
//   if (n === 1 || n === 2 ) {
//     return 1;
//   }

//   if (n === 0 ) {
//     return 0;
//   }
//   function fiboTracker(trackerInputArray) {
//     let i = trackerInputArray.length - 1;
//     let currentSum = trackerInputArray[i] + trackerInputArray[i - 1];
//     trackerInputArray.push(currentSum);
//     //stop when i >= n - 2 b/c length of array already starts w/ 2 [1,1]
//     if (i >= n - 2) {
//       arr = trackerInputArray;
//       return;
//     }
//     fiboTracker(trackerInputArray);
//   }
//   fiboTracker(arr);
//   return arr[arr.length - 1];
// }
// module.exports = fib;

//Refactor
function fib(n) {
  if (n <= 2) {
    return 1;
  }
console.log(n);
  return fib(n-2) + fib(n-1);
}
fib(6);
module.exports = fib;
//fib(4) +                                         fib (5);
// fib(2)  +     fib(3)                         fib(3) +     fib(4)
//return 1      fib(1) + fib(2)
