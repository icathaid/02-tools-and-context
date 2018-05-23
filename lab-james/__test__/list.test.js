'use strict';
const Listerine = require('../lib/list.js');

describe('list module', () => {
    it('should return -1 no matter what', () => {
        const expected = -1;
        const actual = Listerine();
        expect(actual).toEqual(expected);
    });
});