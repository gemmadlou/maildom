const {
    isEmail
} = require('../src/helpers');

describe('Helpers', () => {
    describe('isEmail', () => {
        it('should return true for a valid email', () => {
            let email = 'test@test.com';
            expect(isEmail(email)).toBe(true);
        });
    })
})