import { fibonnaci } from '../../solutions/example/fibonacci';

test('computes fibonacci value for smaller numbers ', () => {
  expect(fibonnaci(0)).toBe(1);
  expect(fibonnaci(1)).toBe(1);
});

test('computes fibonacci value for bigger numbers', () => {
  expect(fibonnaci(27)).toBe(317811);
});

test('throw error if number is negative', () => {
  expect(() => fibonnaci(-1)).toThrow('Number must be positive');
});

test('throw error if parameter is not a number', () => {
  expect(() => fibonnaci('this is not a number you were looking for')).toThrow(
    'Parameter must be a number',
  );
});
