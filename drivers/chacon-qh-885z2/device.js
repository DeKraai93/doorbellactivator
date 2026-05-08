'use strict';

const { RFDevice } = require('homey-rfdriver');

class DeviceChaconNewTransmitter extends RFDevice {
  static RX_ENABLED = true;

  async onCommandFirst(command) {
    // Zet status aan
    await this.setCapabilityValue('alarm_generic', true);

    // Reset bestaande timer
    if (this._resetTimer) {
      clearTimeout(this._resetTimer);
    }

    // Zet status na 2 seconden weer uit
    this._resetTimer = setTimeout(async () => {
      try {
        await this.setCapabilityValue('alarm_generic', false);
      } catch (err) {
        this.error(err);
      }
    }, 2000);

    // Trigger flow
    await this.homey.flow
      .getDeviceTriggerCard('QH-885Z2:received')
      .trigger(this, {}, command);
  }

  async onCommandMatch(command) {
    return command?.address === 'chacon-qh-885z2-doorbell';
  }
}

module.exports = DeviceChaconNewTransmitter;