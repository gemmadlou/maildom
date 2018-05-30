const Contents = require('../src/contents');
const SMTPConnection = require('../src/smtp-connection');
const Meta = require('../src/meta');
const Mailer = require('../src/mailer');

describe('Mailer', () => {
    let fromName = 'Tester';
    let fromEmail = 'test@test.com';
    let toEmail = 'jobloggs@email.com';
    let subject = 'Testing in jest';

    let port = 587;
    let host = 'smtp.some.host';
    let authUser = 'someuser@email.com';
    let authPass = 'somepassword';
    
    let meta = new Meta(fromName, fromEmail, toEmail, subject);
    let contents = new Contents('Hello world');
    let connection = new SMTPConnection(port, host, authUser, authPass);

    let mailer = new Mailer(meta, contents, connection);

    it('should construct with valid instances', () => {
        let mailer = new Mailer(meta, contents, connection);
        expect(mailer.meta).toBe(meta);
        expect(mailer.contents).toBe(contents);
        expect(mailer.connection).toBe(connection);
    });

    it('should fail if meta instance is not provided', () => {
        let mailer = new Mailer(contents, contents, connection);
        expect(mailer.message).toBe('meta configuration is invalid');
    });

    it('should fail if contents instance is not provided', () => {
        let mailer = new Mailer(meta, meta, connection);
        expect(mailer.message).toBe('contents configuration is invalid');
    });

    it('should fail if connection instance is not provided', () => {
        let mailer = new Mailer(meta, contents, meta);
        expect(mailer.message).toBe('connection configuration is invalid');
    });
});