const calculator = require('./calculator')

describe('add function', () => {
    test('should return 4 if a = 2 and b = 2', () => {
        const a = 2;
        const b = 2;
        const expected = 4;
        const result = calculator.add(a, b);
        expect(result).toBe(expected)
    })

})