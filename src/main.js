const Meta = require('./meta');
const Contents = require('./contents');
const SMTPConnection = require('./smtp-connection');
const Mailer = require('./mailer');

const response = (code = 500, message = 'Server error', event) => {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: message,
      input: event,
    })
  }
}

const successResponse = (event) => response(200, 'Email sent successfully', event);

const errorResponse = (error, event) => response(200, error.message, event);

module.exports = (options) => {
    let serialize = Object.assign({}, options);

    let meta = new Meta('Fred Foo', 'foo@example.com', 'bar@example.com', 'Hello');
    let contents = new Contents('Hi world!');
    let connection = new SMTPConnection(
        587,
        'smtp.ethereal.email',
        'vrwfskw2o4hhk6x7@ethereal.email',
        '94AzrJfHKR3wPxUB8r'
    );

    let mailer = new Mailer(meta, contents, connection);

    return mailer.send();
}