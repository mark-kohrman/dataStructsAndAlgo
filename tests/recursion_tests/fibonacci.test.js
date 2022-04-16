const fibo = require('../../recursion/fibonacci');

test('return the the 6th fibonacci number 8', () => {
  expect(fibo(6)).toBe(8);
});

test('return the 10th fibonacci number 55', () => {
  expect(fibo(10)).toBe(55);
});

test('return return 0 if n is 0', () => {
  expect(fibo(0)).toBe(0);
});

test('return 1 if n is 2', () => {
  expect(fibo(2)).toBe(1);
});

