module.exports = class SMTPConnection {
    constructor(port, host, user, password) {
        this.port = port;
        this.host = host;
        this.user = user;
        this.password = password;
        Object.freeze(this);
    }
}