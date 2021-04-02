const Util = require('../classes/Util');

test('sleep for 0ms', () => {
	expect(Util.sleep(0)).resolves.toBe(true);
});

test('instantiate class', () => {
	expect(() => new Util()).toThrow();
});