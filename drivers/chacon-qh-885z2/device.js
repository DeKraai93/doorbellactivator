'use strict';

const { RFDevice } = require('homey-rfdriver');

class DeviceChaconNewTransmitter extends RFDevice {
  static RX_ENABLED = true;

  async onCommandFirst(command) {
    await this.homey.flow
      .getDeviceTriggerCard('QH-885Z2:received')
      .trigger(this, {}, command);
  }

  async onCommandMatch(command) {
    return command?.address === 'chacon-qh-885z2-doorbell';
  }
}

module.exports = DeviceChaconNewTransmitter;