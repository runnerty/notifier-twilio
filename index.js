'use strict';

const Notifier = require('@runnerty/module-core').Notifier;
const TwilioClient = require('twilio');

class twilioNotifier extends Notifier {
  constructor(notification) {
    super(notification);
  }

  async send(notification) {
    try {
      const client = new TwilioClient(notification.account, notification.token);
      await client.messages.create({
        to: notification.to,
        from: notification.from,
        body: notification.message
      });
      this.end();
    } catch (err) {
      const endOptions = {
        end: 'error',
        messageLog: `Twilio notifier: ${err}`
      };
      this.end(endOptions);
    }
  }
}

module.exports = twilioNotifier;
