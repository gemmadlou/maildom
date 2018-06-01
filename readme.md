# Maildom

Node-based serverless SMTP emailer.

## Getting set up

#### With a custom profile

```
serverless config credentials --provider aws --key {} --secret {} --profile {}
```

## Deploying

```
serverless deploy
```

## ToDo

- [ ] Send query parameters
- [x] Use AWS Environment variables to set smtp information
- [ ] Unhappy paths