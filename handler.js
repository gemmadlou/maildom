'use strict';

const main = require('./src/main');

const response = (callback, event) => (code, message, data) => {
  callback(null, {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: message,
      input: event,
      data: data
    })
  });
}

module.exports.email = (event, context, callback) => {
console.log(event)
  let body = {}; //JSON.parse(event.body);
  let environment = Object.assign({}, {
    senderEmail: process.env.SENDER_EMAIL,
    senderName: process.env.SENDER_NAME,
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  let responder = response(callback, event);

  main(Object.assign({}, body, environment)).then(response => responder(200, 'Email sent successfully', response))
    .catch(error => responder(400, error.message));
};