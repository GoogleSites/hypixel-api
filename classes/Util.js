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
}

module.exports = Util;