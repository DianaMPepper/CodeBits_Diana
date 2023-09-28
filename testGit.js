// test_hello.js
var assert = require('assert');
var hello = require('./hello.js');

describe('hello function', function() {
  it('test output', function() {
    assert.equal('hello world', hello('world'));
  });
});