const { test } = require('@jest/globals');
const recursiveRange = require('../../recursion/recursiveRange');

test('return sum of numbers from 0 to 6 to be 21', () => {
  expect(recursiveRange(6)).toBe(21);
});

test('return product of array 0 10 to be 55', () => {
  expect(recursiveRange(10)).toBe(55);
});
