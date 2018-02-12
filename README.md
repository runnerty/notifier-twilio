# SMS notifier for [Runnerty]:

### Configuration sample:
```json
{
  "id": "sms_default",
  "type": "@runnerty-notifier-sms",
  "account": "AC1234567890",
  "token": "ABC123",
  "from": "+99123456789"
}
```

### Plan sample:
```json
{
  "id": "sms_default",
  "to": "+99123456789",
  "message": "Process @GETVALUE(PROCESS_ID) Running!"
}
```

For use with [twilio] SMS services. More info: [twilio on NPM]

[twilio]: http://www.twilio.com
[twilio on NPM]: https://www.npmjs.com/package/twilio
[Runnerty]: http://www.runnerty.io
