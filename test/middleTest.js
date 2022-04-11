const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(['5']), '5');
  });
});
