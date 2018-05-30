const SMTPConnection = require('../src/smtp-connection');

describe('SMTP Connection', () => {
    let port = 587;
    let host = 'smtp.some.host';
    let authUser = 'someuser@email.com';
    let authPass = 'somepassword';

    it('should create an SMPT Connection object', () => {
        let connection = new SMTPConnection(port, host, authUser, authPass);
        expect(connection.port).toBe(port);
        expect(connection.host).toBe(host);
        expect(connection.user).toBe(authUser);
        expect(connection.password).toBe(authPass);
    });

    it('Should be immutable', () => {
        let connection = new SMTPConnection(port, host, authUser, authPass);
        connection.port = '';
        expect(connection.port).toBe(port);
    });
});