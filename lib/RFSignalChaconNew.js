'use strict';

const RFSignalChacon = require('./RFSignalChacon');

module.exports = class RFSignalChaconNew extends RFSignalChacon {

  static ID = 'chacon-qh-885z2';

  static payloadToCommand(payload) {
    // Alleen debug, GEEN filtering of interpretatie
    console.log('🔥 RX ACTIVE - payload:', payload);

    return {
      payload,
    };
  }

  static createPairCommand() {
    console.log('📡 Pairing started');

    return {};
  }

};
