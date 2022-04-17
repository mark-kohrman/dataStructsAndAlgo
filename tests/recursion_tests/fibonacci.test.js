const fib = require('../../recursion/fibonacci');

test('return the the 6th fibonacci number 8', () => {
  expect(fib(6)).toBe(8);
});

test('return the 10th fibonacci number 55', () => {
  expect(fib(10)).toBe(55);
});

test('return 1 if n is 2', () => {
  expect(fib(2)).toBe(1);
});

