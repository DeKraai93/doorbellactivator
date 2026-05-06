'use strict';

const { RFDevice } = require('homey-rfdriver');

// Combined class (all functionalities merged here)
class DeviceChaconNewTransmitter extends RFDevice {

  static RX_ENABLED = true;

  // Method from file 1: onCommandFirst
  async onCommandFirst(command) {
    // Trigger the flow whenever a command is received (no need to check for specific payloads)
    await this.homey.flow
      .getDeviceTriggerCard('QH-885Z2:received')
      .trigger(this, {}, command);
  }

  // Method from file 2: onCommandMatch
  async onCommandMatch(command) {
    const { address } = await this.getData();
    return address === command.address;
  }

  // You can add any custom logic from RFDevice class here if necessary.
}

module.exports = DeviceChaconNewTransmitter;
