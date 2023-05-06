import { describe, expect, it } from '@jest/globals';
import { sumTwoNumbers } from './sumTwoNumbers';

describe('sumTwoNumbers function', () => {
  test('test 1+1 equals 2', () => {
    expect(sumTwoNumbers(1, 1)).toBe(2);
  });

  test('allow only positive integers', () => {
    expect(() => {
      sumTwoNumbers(-1, 1);
    }).toThrow('Error: only positive integers');
  });
});

test('is a number', () => {
  const num1 = 1;
  expect(Number.isInteger(num1)).toBeTruthy();
});
