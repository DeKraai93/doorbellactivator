'use strict';

const { RFSignal } = require('homey-rfdriver');

module.exports = class RFSignalChacon extends RFSignal {

  static FREQUENCY = '433';

  static commandToDeviceData(command) {
    return {
      address: command.address,
      channel: command.channel,
      unit: command.unit,
    };
  }

};