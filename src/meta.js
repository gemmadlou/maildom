module.exports = class Meta {
    constructor(senderName, senderEmail, recipientEmail, subject) {
        this.senderName = senderName;
        this.senderEmail = senderEmail;
        this.recipientEmail = recipientEmail;
        this.subject = subject;
        Object.freeze(this);
    }
}