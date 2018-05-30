'use strict';

const main = require('./src/main');

const response = (callback, event) => (code, message) => {
  callback(null, {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: message,
      input: event,
    })
  });
}

module.exports.email = (event, context, callback) => {
  let responder = response(callback, event);

  main().then(response => responder(200, 'Email sent successfully'))
    .catch(error => responder(400, error.message));
};