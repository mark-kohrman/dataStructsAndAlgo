const someRecursive = require('../../recursion/someRecursive');

test('return true if any value in array is greater than 10', () => {
  expect(someRecursive([1,2,11,8], val => val > 10)).toBeTruthy();
});

test('return false if all values in array are even', () => {
  expect(someRecursive([10,2,4,8], val => val % 2 !== 0)).toBeFalsy();
});