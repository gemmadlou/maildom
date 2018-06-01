'use strict';

const main = require('./src/main');

const response = (callback) => (code, message, data) => {
  callback(null, {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: message,
      data: data
    })
  });
}

module.exports.email = (event, context, callback) => {

  let body = JSON.parse(event.body);
  let data = Object.assign({}, {
    senderEmail: process.env.SENDER_EMAIL,
    senderName: process.env.SENDER_NAME,
    recipientEmail: body.email,
    subjectLine: body.subject,
    content: body.content,
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  let responder = response(callback);

  main(data)
    .then(response => responder(200, 'Email sent successfully', response))
    .catch(error => responder(400, error.message));
};