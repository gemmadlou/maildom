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
    let serialize = Object.assign({
      senderEmail: '',
      senderName: '',
      recipientEmail: '',
      subjectLine: '',
      content: '',
      smtp: {
        port: 587,
        host: ''
      }
    }, options);

    let meta = new Meta(
      serialize.senderName, 
      serialize.senderEmail, 
      serialize.recipientEmail,
      serialize.subjectLine
    );
    
    let contents = new Contents(serialize.content);

    let connection = new SMTPConnection(
        serialize.smtp.port,
        serialize.smtp.host,
        serialize.smtp.user,
        serialize.smtp.pass
    );

    let mailer = new Mailer(meta, contents, connection);

    return mailer.send();
}