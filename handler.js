'use strict';

const Mailer = require('./src/mailer');

module.exports.test = () => {
  let mailer = new Mailer;
  mailer.send();
}

module.exports.email = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
