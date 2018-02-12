"use strict";

const Notification = global.NotificationClass;
const SmsClient = require("twilio");

class smsNotifier extends Notification {
  constructor(notification) {
    super(notification);
  }

  send(notification) {
    let _this = this;
    let sms = new SmsClient(notification.account, notification.token);
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

module.exports = smsNotifier;