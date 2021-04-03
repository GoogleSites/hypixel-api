const nbt = require('prismarine-nbt');
const { promisify } = require('util');
const zlib = require('zlib');

const gunzip = promisify(zlib.gunzip);

/**
 * @typedef HypixelBinaryData
 * @type {Object}
 * @property {number} type The type of data (usually 0).
 * @property {string} data A base64-encoded and gzipped string of data.
 */

class Util {
	constructor() {
		throw 'This class cannot be instantiated.';
	}

	/**
	 * Returns a promise that resolves after a certain number of milliseconds.
	 * @param {number} ms Number of milliseconds to sleep.
	 * @returns {Promise<true>} The promise.
	 */
	static sleep(ms) {
		return new Promise(r => setTimeout(r, ms, true));
	}

	/**
	 * Decompresses the base64-encoded and gzipped data from Hypixel and parses it into NBT.
	 * @param {HypixelBinaryData} data The data to parse.
	 * @returns {Promise<nbt.NBT>} The parsed NBT data.
	 */
	static async decompressToNBT({ data, type }) {
		if (type !== 0)
			throw `Unknown data type: ${type}`;

		try {
			const decompressed = await gunzip(Buffer.from(data, 'base64'));
			const { parsed } = await nbt.parse(decompressed);

			return parsed;
		} catch {
			throw 'Invalid data.';
		}
	}
}

module.exports = Util;