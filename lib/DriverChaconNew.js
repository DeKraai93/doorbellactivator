'use strict';

const { RFDriver } = require('homey-rfdriver');
const RFSignalChaconNew = require('./RFSignalChaconNew');

module.exports = class DriverChaconNew extends RFDriver {

  static SIGNAL = RFSignalChaconNew;

  onInit() {
    super.onInit?.();

    this.log('🚀 Driver initialized');
    this.log('SIGNAL:', this.constructor.SIGNAL?.ID);
  }

};