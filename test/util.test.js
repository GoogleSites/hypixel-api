const Util = require('../classes/Util');

test('sleep for 0ms', () => {
	expect(Util.sleep(0)).resolves.toBe(true);
});

test('instantiate class', () => {
	expect(() => new Util()).toThrow();
});

test('decompress to nbt', () => {
	expect(Util.decompressToNBT({
		data: 'H4sIAAAAAAAAAONiYOBkYMzkYmBgYGEAAQCp5xppEQAAAA==',
		type: 0
	})).resolves.toEqual(expect.objectContaining({
		type: 'compound',
		name: '',
		value: expect.any(Object)
	}));

	expect(Util.decompressToNBT({
		data: 'H4sIAAAAAAAAAONiYOBkYMzkYmBgYGEAAQCp5xppEQAAAA==',
		type: 1
	})).rejects.toBeDefined();
});