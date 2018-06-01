# Maildom

[![Maintainability](https://api.codeclimate.com/v1/badges/92f9e2ecc18ac0c30cb2/maintainability)](https://codeclimate.com/github/gemmadlou/maildom/maintainability) [![codecov](https://codecov.io/gh/gemmadlou/maildom/branch/master/graph/badge.svg)](https://codecov.io/gh/gemmadlou/maildom)

Node-based serverless SMTP emailer.

## Reason for this project

When working with Jamstack or static html websites, additional functionality like
sending off emails require a server or at least, SaaS.

If all you want is an endpoint that takes a few fields and sends off an email, it's a nice alternative that doesn't require the maintenance of a server.

## Pre-requisites

* Serverless (version ^1.27.3)
* Node (version 8)
* NPM
* AWS Account (with IAM access)
* SMTP Email 
  ([Using a fake SMTP email for testing](#testing-locally))

## Getting set up

#### With a custom profile

```
serverless config credentials --provider aws --key XXXXXXX --secret XXXXXXX --profile XXXXXXX
```

> Note, profile is optional

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

- [x] Send query parameters
- [x] Use AWS Environment variables to set smtp information
- [ ] Unhappy paths especially for nicer error responses
- [ ] Dynamic variables in serverless.yml to make it multi-environment friendly and reusable across multiple projects

## Roadmap

- [ ] An easy npm installation of the lambda service

## License

[GPLv2.1](https://github.com/gemmadlou/maildom/blob/master/LICENSE)

> Here's a nice 4 minute [explanation](https://www.youtube.com/watch?v=JlIrSMzF8T4) of the difference between GPL and the Lesser GPL. This library uses the Lesser GPL.

## Author

Gemma Black

Twitter: @GemmaBlackUk