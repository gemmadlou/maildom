const { isEmail } = require('../src/helpers');

module.exports = class Meta {
    constructor(senderName, senderEmail, recipientEmail, subject) {

        if (!isEmail(senderEmail)) {
            return new Error('sender email is not valid');
        }

        if (!isEmail(recipientEmail)) {
            return new Error('recipient email is not valid');
        }

        if (senderName === undefined || senderName === '') {
            return new Error('sender name cannot be empty');
        }
        
        if (subject === undefined || subject === '') {
            return new Error('subject line cannot be empty');
        }

        this.senderName = senderName;
        this.senderEmail = senderEmail;
        this.recipientEmail = recipientEmail;
        this.subject = subject;
        Object.freeze(this);
    }
}