const countSubstring = require('../../string_search/naiveStringSearch');

test('return 2 if two substrings of "bru" are in the searched string', () => {
  expect(countSubstring('bruce and bruno went to breakfast', 'bru')).toEqual(2);
});

test('return 4 if four substrings of jo are in the searched string', () => {
  expect(countSubstring('jo my friend and jojo went along and were jolly', 'jo')).toEqual(4);
});

test('return 0 if no substrings of are in the searched string', () => {
  expect(countSubstring('apples and oranges', 'bananas')).toEqual(0);
});