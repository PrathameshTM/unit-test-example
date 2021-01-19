const { sum, multiply, divide } = require('../operations');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 21)).toBe(3);
});
test('adds 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});
test('adds 1 / 2 to equal 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
});