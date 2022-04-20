const flatten = require('../../recursion/flatten');

test('return true if any value in array is greater than 10', () => {
  expect(flatten([1,2,3,[4,5]])).toEqual([1,2,3,4,5]);
});

test('return false if all values in array are even', () => {
  expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1,2,3,4,5]);
});