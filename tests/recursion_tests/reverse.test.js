const reverse = require('../../recursion/reverse');

test('return the word "hello" reversed as "olleh"', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('return the word "awesome" reversed as "emosewa"', () => {
  expect(reverse('awesome')).toBe('emosewa');
});