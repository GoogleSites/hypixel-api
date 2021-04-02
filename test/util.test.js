const Util = require('../classes/Util');

test('sleep for 0ms', async () => {
	const result = await Util.sleep(0);

	expect(result).toBe(true);
});