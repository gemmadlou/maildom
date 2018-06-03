const nodemailer = require('nodemailer');
const Meta = require('./meta');
const Contents = require('./contents');
const SMTPConnection = require('./smtp-connection');

module.exports = class Mailer {
    constructor(meta, contents, smtpConnection) {

        if (meta instanceof Meta === false) {
            return new Error('meta configuration is invalid');
        }

        if (contents instanceof Contents === false) {
            return new Error('contents configuration is invalid');
        }

        if (smtpConnection instanceof SMTPConnection === false) {
            return new Error('connection configuration is invalid');
        }
    
        this.meta = meta;
        this.contents = contents;
        this.connection = smtpConnection;
    }

    send() {
        return new Promise((resolve, reject) => {
            this.transporter().sendMail(this.options(), (error, info) => {
                if (error) {
                    return reject(error);
                }

                resolve(info);
            });
        });
    }

    transporter() {
        return nodemailer.createTransport({
            secure: this.connection.secure,
            host: this.connection.host,
            port: this.connection.port,
            auth: {
                user: this.connection.user,
                pass: this.connection.password
            }
        });
    }
    
    options() {
        return {
            from: `${this.meta.senderName} <${this.meta.senderEmail}>`,
            to: this.meta.recipientEmail,
            subject: this.meta.subject,
            text: this.contents.plainEmail
        }
    }
}