const nbt = require('prismarine-nbt');

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

		return (await nbt.parseAs(Buffer.from(data, 'base64'), 'big')).data;
	}

	/**
	 * Converts catacomb experience into a level.
	 * @param {number} experience The amount of catacomb experience.
	 * @returns {number} The catacomb level.
	 */
	static calculateCatacombLevel(experience) {
		return experience <= 50 ? 0
			: experience <= 125 ? 1
			: experience <= 235 ? 2
			: experience <= 395 ? 3
			: experience <= 625 ? 4
			: experience <= 955 ? 5
			: experience <= 1425 ? 6
			: experience <= 2095 ? 7
			: experience <= 3045 ? 8
			: experience <= 4385 ? 9
			: experience <= 6275 ? 10
			: experience <= 8940 ? 11
			: experience <= 12700 ? 12
			: experience <= 17960 ? 13
			: experience <= 25340 ? 14
			: experience <= 35640 ? 15
			: experience <= 50040 ? 16
			: experience <= 70040 ? 17
			: experience <= 97640 ? 18
			: experience <= 135640 ? 19
			: experience <= 188140 ? 20
			: experience <= 259640 ? 21
			: experience <= 356640 ? 22
			: experience <= 488640 ? 23
			: experience <= 668640 ? 24
			: experience <= 911640 ? 25
			: experience <= 1239640 ? 26
			: experience <= 1684640 ? 27
			: experience <= 2284640 ? 28
			: experience <= 3084640 ? 29
			: experience <= 4149640 ? 30
			: experience <= 5559640 ? 31
			: experience <= 7459640 ? 32
			: experience <= 9959640 ? 33
			: experience <= 13259640 ? 34
			: experience <= 17559640 ? 35
			: experience <= 23159640 ? 36
			: experience <= 30359640 ? 37
			: experience <= 39559640 ? 38
			: experience <= 51559640 ? 39
			: experience <= 66559640 ? 40
			: experience <= 85559640 ? 41
			: experience <= 109559640 ? 42
			: experience <= 139559640 ? 43
			: experience <= 177559640 ? 44
			: experience <= 225559640 ? 45
			: experience <= 285559640 ? 46
			: experience <= 360559640 ? 47
			: experience <= 453559640 ? 48
			: experience <= 569809640 ? 49
			: 50;
	}

	/**
	 * Converts network experience into a network level.
	 * @param {number} experience The amount of network experience.
	 * @returns {number} The network level.
	 */
	static networkLevel(experience) {
		return (Math.sqrt(experience + 15312.5) - 125 / Math.sqrt(2)) / (25 * Math.sqrt(2));
	}

	/**
	 * Converts network level into network experience.
	 * @param {number} experience The network level.
	 * @returns {number} The network experience required for that level.
	 */
	static networkExperience(level) {
		return Math.pow(level * 25 * Math.sqrt(2) + 125 / Math.sqrt(2), 2) - 15312.5;
	}
}

module.exports = Util;