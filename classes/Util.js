module.exports = class Util {
	constructor() {

	}

	static sleep(ms) {
		return new Promise(r => setTimeout(r, ms, true));
	}
}