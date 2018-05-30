module.exports = class Contents {
    constructor(plainEmail) {
        if (plainEmail === '' || plainEmail === undefined) {
            return new Error('email cannot be empty');
        }

        this.plainEmail = plainEmail;

        Object.freeze(this);
    }
}