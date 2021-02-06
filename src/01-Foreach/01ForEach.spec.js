const {
    GetTotal,
    CreateFullName
} = require('./01ForEach');
const numbers = require('../mocks/numbers.json');
const people = require('../mocks/people.json');

describe('ForEach test suite', function() {
    test('Shold calculate the total of a numbers array', function(){
        expect(GetTotal(numbers)).toBe(15);
    });

    test('Items should contain fullName property', function(){
        const result = CreateFullName(people);
        expect(result[0].fullName).toBe('Jonh Doe');
        expect(result[1].fullName).toBe('Linus Torvas');
    });
});