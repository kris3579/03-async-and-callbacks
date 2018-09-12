'use strict';

const arithmetic = require('../arithmetic');

describe('Add two numbers together', () => {
  test('Success with two numbers', () => {
    const output = arithmetic.add(15, 20);
    expect(output).toEqual(35);
  });
  test('Input other than a number', () => {
    const output = arithmetic.add(5, 'string');
    expect(output).toBeNull();
  });
});

describe('Find the difference between two numbers', () => {
  test('Success with two numbers', () => {
    const output = arithmetic.sub(20, 15);
    expect(output).toEqual(5);
  });
  test('Input other than a number', () => {
    const output = arithmetic.sub(5, 'string');
    expect(output).toBeNull();
  });
});
