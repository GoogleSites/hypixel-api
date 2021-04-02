const RequestManager = require('../classes/RequestManager');

const manager = new RequestManager('your-api-key-here');

test('hide key', () => {
	expect(manager.hideKey('2931ba88-3ccd-4504-9d53-94021c723e06')).toMatch(/^\*{8}-\*{4}-\*{4}-\*{4}-[a-z0-9]{12}$/);
});

test('rotate key', () => {
	expect(manager.rotate()).toMatch(/^[a-z0-9]{8}-[a-z0-9]{4}-4[a-z0-9]{3}-[a-z0-9]{4}-[a-z0-9]{12}$/);
});

test('send request', async () => {
	const test = await manager.request('/resources/achievements');

	expect(test).toEqual(expect.objectContaining({
		data: expect.any(Object),
		status: 200,
		cached: expect.any(Number)
	}));
});