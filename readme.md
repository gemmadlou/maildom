<p align="center">in progress...</p>

<h1 align="center">
  <a href="https://github.com/gemmadlou/maildom"><img src="./docs/img/maildom.jpg" alt="Markdownify" width="100%" style="max-width: 100%" title="Maildom" alt="Maildom"></a>
  <br>
</h1>

<p align="center">

[![Build Status](https://travis-ci.org/gemmadlou/maildom.svg?branch=master)](https://travis-ci.org/gemmadlou/maildom)  [![Maintainability](https://api.codeclimate.com/v1/badges/92f9e2ecc18ac0c30cb2/maintainability)](https://codeclimate.com/github/gemmadlou/maildom/maintainability) [![codecov](https://codecov.io/gh/gemmadlou/maildom/branch/master/graph/badge.svg)](https://codecov.io/gh/gemmadlou/maildom)

</p>

<h4 align="center">A serverless Nodejs SMTP email service using AWS Lambda & API Gateway.</a>

## Motivation

When working with <a href="https://jamstack.org/">Jamstack</a> or static html websites, additional functionality like
sending off emails require a server or at least, SaaS.

If all you want is an endpoint that takes a few fields and sends off an email, it's a nice alternative that doesn't require the maintenance of a server.

## Is it ready for production?

TLDR, I wish, but no.

You can take it and build on it if you like though.

#### What still needs doing?

* Unhappy paths and proper error responses.
* Also recaptcha is a helpful addition to prevent people spamming your Gateway.

## How to use it

Clone this repository and follow the "Get set up" guide.

## Pre-requisites

* [Serverless](https://serverless.com/framework/docs/getting-started/) (version ^1.27.3)
* Node (version 8)
* NPM
* AWS Account (with IAM access)  
  
  You will IAM credentials configured with AWS. You can use serverless to set these up:

  ```shell
  serverless config credentials --provider aws --key XXXXXXX --secret XXXXXXX
  ```
  
  If you have more than 1 set of credentials, you can create a new custom profile the Serverless way.

  ```shell
  serverless config credentials --provider aws --key XXXXXXX --secret XXXXXXX --profile XXXXXXX
  ```
* SMTP Email 
  ([Using a fake SMTP email for testing](#testing-locally))

## Get set up

* In the serverless.yml
  * Set the service name
  * Change the function name to be more relevant
  * Set your profile name or remove if irrelevant

## Testing locally

If you want to get testing with SMTP fast and don't yet have your own credentials, get a fake test email using the Ethereal Email service:

https://ethereal.email/

```shell
SMTP_USER=someusername \
SMTP_PASS=somepassword \
SMTP_HOST=smtp.ethereal.email \
SENDER_NAME=Thomas \
SENDER_EMAIL=the@tankengine.com \
node -e 'require("./handler").email({body: "{\"email\": \"123@abc.com\", \"subject\":\"What a wonderful world\", \"content\": \"Two little birds\\r\\nCame to my doorstep\"}"}, {}, () => {})'
```

## Deploying

```
serverless deploy
```

## ToDo

- [ ] 100% Code coverage
- [x] Send query parameters
- [x] Use AWS Environment variables to set smtp information
- [ ] Unhappy paths especially for nicer error responses
- [ ] Dynamic variables in serverless.yml to make it multi-environment friendly and reusable across multiple projects

## Roadmap

- [ ] An easy npm installation of the lambda service
- [ ] Optional re-captcha

## License

[GPLv2.1](https://github.com/gemmadlou/maildom/blob/master/LICENSE)

> Here's a nice 4 minute [explanation](https://www.youtube.com/watch?v=JlIrSMzF8T4) of the difference between GPL and the Lesser GPL. This library uses the Lesser GPL.

## Author

Gemma Black

Twitter: @GemmaBlackUk