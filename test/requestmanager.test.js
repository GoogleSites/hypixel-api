const RequestManager = require('../classes/RequestManager');

const manager = new RequestManager('4ccbc899-71c7-4554-994d-05638279e4a7');

test('hiding key', () => {
	expect(manager.hideKey('2931ba88-3ccd-4504-9d53-94021c723e06')).toMatch(/^\*{8}-\*{4}-\*{4}-\*{4}-[a-z0-9]{12}$/);
});

test('rotating key', () => {
	expect(manager.rotate()).toMatch(/^[a-z0-9]{8}-[a-z0-9]{4}-4[a-z0-9]{3}-[a-z0-9]{4}-[a-z0-9]{12}$/);
});

test('sending a request', async () => {
	const test = await manager.request('/resources/achievements');

	expect(test).toEqual(expect.objectContaining({
		data: expect.any(Object),
		status: 200
	}));
});

test('validate status function', () => {
	expect(manager.noop()).toBe(true);
});

test('providing no keys', () => {
	expect(() => new RequestManager()).toThrow();
});

test('providing invalid keys', () => {
	expect(() => new RequestManager('abc')).toThrow();
});

test('an invalid key format', () => {
	expect(manager.request('/resources/achievements', { key: 'fake-key' })).rejects.toEqual(expect.any(String));
});

test('an invalid key', () => {
	expect(manager.request('/key', { key: '00000000-0000-4000-0000-000000000000' })).rejects.toEqual(expect.any(String));
});

test('the same request multiple times', async () => {
	const first = manager.request('/guild', { name: 'The Sloths' });
	const second = await manager.request('/guild', { name: 'The Sloths' });

	expect((await first).headers).toMatchObject(second.headers);
});

test('response cache', async () => {
	await manager.request('/guild', { name: 'The Sloths' });

	expect(manager.request('/guild', { name: 'The Sloths' })).resolves.toEqual(expect.objectContaining({
		data: expect.any(Object),
		status: 200,
		cached: expect.any(Number)
	}));
});

test('skipping the cache on the same player twice', async () => {
	await manager.request('/player', { name: 'GoogleSites' });

	expect(manager.request('/player', { name: 'GoogleSites' }, true)).rejects.toEqual(expect.any(String));
});

jest.setTimeout(120000);