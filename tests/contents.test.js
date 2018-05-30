const Contents = require('../src/contents');

describe('Contents', () => {
    it('should accept plain string email', () => {
        let contents = new Contents('Hello world');
        expect(contents.plainEmail).toBe('Hello world');
    });

    it('should not accept empty plain email', () => {
        let contents = new Contents('');
        expect(contents.message).toBe('email cannot be empty');
    });

    it('Should be immutable', () => {
        let contents = new Contents('Hello world');
        contents.plainEmail = '123';
        expect(contents.plainEmail).toBe('Hello world');
    });
});