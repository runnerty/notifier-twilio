"use strict";

const Notification = global.NotificationClass;
const TwilioClient = require("twilio");

class twilioNotifier extends Notification {
  constructor(notification) {
    super(notification);
  }

  send(notification) {
    let _this = this;
    let sms = new TwilioClient(notification.account, notification.token);
    sms.messages.create({
      to: notification.to,
      from: notification.from,
      body: notification.message
    })
      .then(function () {
        _this.end();
      });
  }
}

module.exports = twilioNotifier;