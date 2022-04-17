const isPalnindrome = require('../../recursion/palindrome');

test('return true for tacocat which is a palindrome', () => {
  expect(isPalnindrome('tacocat')).toBeTruthy();
});

test('return false for hello which is NOT a palindrome', () => {
  expect(isPalnindrome('hello')).toBeFalsy();
});