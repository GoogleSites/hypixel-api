const Hypixel = require('../classes/Hypixel');

const hypixel = new Hypixel('your-api-key-here');

test('punishment statistics', () => {
	return hypixel.punishmentStats().then(data => {
		expect(data).toEqual(expect.objectContaining({
			watchdog_lastMinute: expect.any(Number),
			staff_rollingDaily: expect.any(Number),
			watchdog_total: expect.any(Number),
			watchdog_rollingDaily: expect.any(Number),
			staff_total: expect.any(Number)
		}));
	});
});