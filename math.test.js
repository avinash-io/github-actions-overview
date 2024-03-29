const {add, division, multiply, subtract} = require('./math');

describe('Math.js test', () => {
    it("Should test add ", () => {
        expect(add(1, 2)).toBe(3);
    });

    it("Should test subtract ", () => {
        expect(subtract(2, 1)).toBe(1);
    });

    it("Should test multiply ", () => {
        expect(multiply(2, 2)).toBe(4);
    });

    it("Should test division ", () => {
        expect(division(4, 2)).toBe(2);
    });

});