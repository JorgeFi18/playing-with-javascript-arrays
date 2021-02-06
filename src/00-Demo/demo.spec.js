const demo = require('./demo');

describe('00-Demo', function() {
    test('Demo result should be 4', function(){
        const result = demo(2,2);
        expect(result).toBe(4);
    });
});