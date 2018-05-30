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

    it('Should only accept valid sender email address', () => {
        let meta = new Meta(fromName, 'asad@asda', toEmail, subject);
        expect(meta.message).toBe('sender email is not valid');
    });

    it('Should only accept valid recipient email address', () => {
        let meta = new Meta(fromName, fromEmail, 'asad@asda', subject);
        expect(meta.message).toBe('recipient email is not valid');
    });

    it('Should only accept non-empty names', () => {
        let meta = new Meta('', fromEmail, toEmail, subject);
        expect(meta.message).toBe('sender name cannot be empty');
    });

    it('Should only accept non-empty subject lines', () => {
        let meta = new Meta(fromName, fromEmail, toEmail, '');
        expect(meta.message).toBe('subject line cannot be empty');
    });
});
