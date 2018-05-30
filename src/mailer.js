const nodemailer = require('nodemailer');

module.exports = class Mailer {
    constructor(meta, contents, smtpConnection) {
        this.meta = meta;
        this.contents = contents;
        this.smtpConnection = smtpConnection;
    }

    send(meta, contents, smtpConnection) {
        meta = {
            from: 'Fred Foo <foo@example.com>',
            to: 'bar@example.com',
            subject: 'Hello'
        }

        contents = {
            text: 'Hello world',
            html: '<b>Hello world</b>'
        }

        let options = Object.assign({}, meta, contents);

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'vrwfskw2o4hhk6x7@ethereal.email',
                pass: '94AzrJfHKR3wPxUB8r'
            }
        });

        transporter.sendMail(options, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    }
}