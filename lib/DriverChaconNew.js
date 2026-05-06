'use strict';

const { RFDriver } = require('homey-rfdriver');
const RFSignalChaconNew = require('./RFSignalChaconNew');

module.exports = class extends RFDriver {

  static SIGNAL = RFSignalChaconNew;

};