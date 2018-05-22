const list = require('../lib/list.js');

describe('something', () => {
  it('should return 0', () => {
    const expected = 0;
    const actual = list();
    expect(actual).toBe(expected);
  });
});