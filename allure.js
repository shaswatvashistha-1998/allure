const assert = require('assert');

describe('Sample Test Suite', function () {
  it('should demonstrate a passing test', function () {
    assert.strictEqual(1 + 1, 2);
  });

  it('should demonstrate a failing test', function () {
    assert.strictEqual(3 * 7, 21); // This will fail intentionally
  });

  it('should demonstrate a skipped test');
});
