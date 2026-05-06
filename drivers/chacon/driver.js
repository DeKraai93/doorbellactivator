'use strict';

const DriverChaconNewTransmitter = require('../../lib/DriverChaconNewTransmitter');

module.exports = class extends DriverChaconNewTransmitter {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('QH-885Z2:received')
      .registerRunListener(async (args, state) => {
        return state.state === '1';
      });
  }

};
