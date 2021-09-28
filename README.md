<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Twilio SMS notifier for [Runnerty]:

For use with [twilio] SMS services. More info: [twilio on NPM]

### Installation:

Through NPM

```bash
npm i @runnerty/notifier-twilio
```

You can also add modules to your project with [runnerty]

```bash
npx runnerty add @runnerty/notifier-twilio
```

This command installs the module in your project, adds example configuration in your [config.json] and creates an example plan of use.

If you have installed [runnerty] globally you can include the module with this command:

```bash
runnerty add @runnerty/notifier-twilio
```

### Configuration sample:

Add it in the notification section of the [config.json] file. More information [here](https://docs.runnerty.io/notifiers):

```json
{
  "id": "twilio_default",
  "type": "@runnerty-notifier-twilio",
  "account": "AC1234567890",
  "token": "ABC123",
  "from": "+99123456789"
}
```

### Plan sample:

Add add it to any [chain](https://docs.runnerty.io/chain) or [process](https://docs.runnerty.io/process) notification event. More information [here](https://docs.runnerty.io/notifiers):

```json
{
  "id": "twilio_default",
  "to": "+99123456789",
  "message": "Process @GETVALUE(PROCESS_ID) Running!"
}
```

[runnerty]: https://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/notifier-twilio.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/notifier-twilio
[npm-image]: https://img.shields.io/npm/v/@runnerty/notifier-twilio.svg
[david-badge]: https://david-dm.org/runnerty/notifier-twilio.svg
[david-badge-url]: https://david-dm.org/runnerty/notifier-twilio
[config.json]: https://docs.runnerty.io/config/
[notifiers]: https://docs.runnerty.io/notifiers
[plan.json]: https://docs.runnerty.io/plan/
[twilio]: http://www.twilio.com
[twilio on npm]: https://www.npmjs.com/package/twilio
