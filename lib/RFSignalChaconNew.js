'use strict';

const { RFUtil, RFError } = require('homey-rfdriver');
const RFSignalChacon = require('./RFSignalChacon');

module.exports = class extends RFSignalChacon {

  static ID = 'chacon-qh-885z2';

  // You could directly handle the payload as a string without parsing it into specific fields
  static payloadToCommand(payload) {
    console.log('Payload:', payload); // Just log or use the payload as-is
    return { payload }; // Return the payload without parsing
  }

  static createPairCommand() {
    // If pairing isn't required or has a different approach, adjust accordingly
    return {}; // Or return any other necessary structure
  }

};