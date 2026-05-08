'use strict';

const RFSignalChacon = require('./RFSignalChacon');

const SIGNATURES = [
  [3, 4, 2, 1, 2, 1],
  [4, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1],
];

const MAX_ERRORS = 0;
const COOLDOWN_MS = 2000;

let lastAcceptedAt = 0;

function findSignature(payload) {
  for (const signature of SIGNATURES) {
    for (let i = 0; i <= payload.length - signature.length; i++) {
      let errors = 0;

      for (let j = 0; j < signature.length; j++) {
        if (payload[i + j] !== signature[j]) {
          errors++;

          if (errors > MAX_ERRORS) {
            break;
          }
        }
      }

      if (errors <= MAX_ERRORS) {
        return {
          index: i,
          signature,
        };
      }
    }
  }

  return null;
}

module.exports = class RFSignalChaconNew extends RFSignalChacon {
  static ID = 'chacon-qh-885z2';

  static payloadToCommand(payload) {
		const now = Date.now();

		console.log('RX ACTIVE length:', payload.length, 'payload:', payload);

		const match = findSignature(payload);

		if (!match) {
			console.log('RX ignored - signature not found');

				return {
					address: 'ignored',
					channel: '0',
					unit: '0',
					state: '0',
					payload,
				};
		}

		if (now - lastAcceptedAt < COOLDOWN_MS) {
			console.log('RX ignored - valid duplicate during cooldown');

			return {
				address: 'ignored',
				channel: '0',
				unit: '0',
				state: '0',
				payload,
			};
		}

		lastAcceptedAt = now;

		console.log(
			'RX MATCH - signature found at index:',
			match.index,
			'signature:',
			match.signature,
		);

		return {
			address: 'chacon-qh-885z2-doorbell',
			channel: '1',
			unit: '1',
			state: '1',
			payload,
			signatureIndex: match.index,
			signature: match.signature,
		};
	}

  static createPairCommand() {
    console.log('Pairing started');

    return {
      address: 'chacon-qh-885z2-doorbell',
      channel: '1',
      unit: '1',
      state: '1',
    };
  }
};