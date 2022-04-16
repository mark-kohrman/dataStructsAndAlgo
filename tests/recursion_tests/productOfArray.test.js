const productOfArray = require('../../recursion/productOfArray');

test('return product of array to be 60', () => {
  expect(productOfArray([1,2,3,10])).toBe(60);
});

test('return product of array to be 6', () => {
  expect(productOfArray([1,2,3])).toBe(6);
});

