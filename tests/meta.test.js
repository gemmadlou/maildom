const Meta = require('../src/meta');

describe('Meta object', () => {
    let fromName = 'Tester';
    let fromEmail = 'test@test.com';
    let toEmail = 'jobloggs@email.com';
    let subject = 'Testing in jest';

    it('Should create meta object', () => {
        let meta = new Meta(fromName, fromEmail, toEmail, subject);
        expect(meta.senderName).toBe(fromName);
        expect(meta.senderEmail).toBe(fromEmail);
        expect(meta.recipientEmail).toBe(toEmail);
        expect(meta.subject).toBe(subject);
    });

    it('Should be immutable', () => {
        let meta = new Meta(fromName, fromEmail, toEmail, subject);
        meta.senderName = '123';
        expect(meta.senderName).toBe(fromName);
        expect(meta.senderEmail).toBe(fromEmail);
        expect(meta.recipientEmail).toBe(toEmail);
        expect(meta.subject).toBe(subject);
    });
})