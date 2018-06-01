# Maildom

[![Maintainability](https://api.codeclimate.com/v1/badges/92f9e2ecc18ac0c30cb2/maintainability)](https://codeclimate.com/github/gemmadlou/maildom/maintainability) 

Node-based serverless SMTP emailer.

## Getting set up

#### With a custom profile

```
serverless config credentials --provider aws --key {} --secret {} --profile {}
```

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