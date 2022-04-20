const capitalizeFirst = require('../../recursion/capitalizeFirst');

test('return array with capitalized Dog, Cat, Monkey strings', () => {
  expect(capitalizeFirst(['dog', 'cat', 'monkey'])).toEqual(['Dog', 'Cat', 'Monkey']);
});

test('return array with capitalized Car, Banana, Taco strings', () => {
  expect(capitalizeFirst(['car','taco','banana'])).toEqual(['Car','Taco','Banana']);
});