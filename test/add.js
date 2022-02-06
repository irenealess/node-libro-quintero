/*
This defines a test suite for the "add" feature.
*/

const add = require('../src/add.js');

QUnit.module('Test add');

// Test case 1
QUnit.test('two numbers', assert => {
  assert.equal(add(1, 2), 3);
});