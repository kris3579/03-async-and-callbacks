'use strict';

const reader = require('../lib/reader');


describe('Add two numbers together', () => {
  test('Success with two numbers', () => {
    const output = reader.add(15, 20);
    expect(output).toEqual(35);
  });
  test('Input other than a number', () => {
    const output = reader.add(5, 'string');
    expect(output).toBeNull();
  });
});
