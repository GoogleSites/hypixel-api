const HypixelAPI = require('../classes/HypixelAPI');

const hypixel = new HypixelAPI('your-api-key-here');

test('get username', async () => {
	const username = await hypixel.getUsername('f7c77d999f154a66a87dc4a51ef30d19');

	expect(hypixel.getUsername()).rejects.toEqual(expect.any(String));
	expect(hypixel.getUsername('00000000000040000000000000000000')).rejects.toEqual(expect.any(String));
	expect(username).toEqual('hypixel');
});

test('get uuid', async () => {
	const uuid = await hypixel.getUUID('hypixel');

	expect(hypixel.getUUID()).rejects.toEqual(expect.any(String));
	expect(hypixel.getUUID('slimeball')).rejects.toEqual(expect.any(String));
	expect(uuid).toEqual('f7c77d999f154a66a87dc4a51ef30d19');
});

test('get username and uuid', async () => {
	const bothFromUUID = await hypixel.getUsernameAndUUID('f7c77d999f154a66a87dc4a51ef30d19');
	const bothFromUsername = await hypixel.getUsernameAndUUID('hypixel');

	expect(hypixel.getUsernameAndUUID(null)).rejects.toEqual(expect.any(String));
	expect(hypixel.getUsernameAndUUID('00000000000040000000000000000000')).rejects.toEqual(expect.any(String));

	expect(bothFromUUID).toEqual({
		username: 'hypixel',
		uuid: 'f7c77d999f154a66a87dc4a51ef30d19'
	});

	expect(bothFromUsername).toEqual({
		username: 'hypixel',
		uuid: 'f7c77d999f154a66a87dc4a51ef30d19'
	});
});

test('get key information', async () => {
	const information = await hypixel.key(hypixel.manager.rotate());

	expect(information).toBeDefined();
});

test('get player information', async () => {
	const playerFromUUID = await hypixel.player('f7c77d999f154a66a87dc4a51ef30d19');
	const playerFromUsername = await hypixel.player('hypixel');

	expect(playerFromUUID).toBeDefined();
	expect(playerFromUsername).toBeDefined();
});

test('get player friends', async () => {
	const friendsFromUUID = await hypixel.friends('f7c77d999f154a66a87dc4a51ef30d19');
	const friendsFromUsername = await hypixel.friends('hypixel');

	expect(friendsFromUUID).toBeDefined();
	expect(friendsFromUsername).toBeDefined();
});

test('get player recent games', async () => {
	const recentGamesFromUUID = await hypixel.recentGames('f7c77d999f154a66a87dc4a51ef30d19');
	const recentGamesFromUsername = await hypixel.recentGames('hypixel');

	expect(recentGamesFromUUID).toBeDefined();
	expect(recentGamesFromUsername).toBeDefined();
});

test('get player status', async () => {
	const statusFromUUID = await hypixel.status('f7c77d999f154a66a87dc4a51ef30d19');
	const statusFromUsername = await hypixel.status('hypixel');

	expect(statusFromUUID).toBeDefined();
	expect(statusFromUsername).toBeDefined();
});

test('get guild', async () => {
	const guildFromName = await hypixel.guild('The Sloths');
	const guildFromUUID = await hypixel.guild('52e57a1c0cf2e250d1cd00f8', 'id');
	const guildFromPlayer = await hypixel.guild('f7c77d999f154a66a87dc4a51ef30d19', 'player');

	expect(hypixel.guild()).rejects.toEqual(expect.any(String));
	expect(hypixel.guild('0123456789012345678901234567890123456789')).rejects.toEqual(expect.any(String));
	expect(hypixel.guild('0', 'id')).rejects.toEqual(expect.any(String));
	expect(hypixel.guild('00000000000000000000000000000000', 'player')).rejects.toEqual(expect.any(String));
	expect(hypixel.guild('00000000000000000000000000000000', 'invalid')).rejects.toEqual(expect.any(String));

	expect(guildFromName).toBeDefined();
	expect(guildFromUUID).toBeDefined();
	expect(guildFromPlayer).toBeDefined();
});

test('get resources', async () => {
	const achievements = await hypixel.resources.achievements();
	const challenges = await hypixel.resources.challenges();
	const quests = await hypixel.resources.quests();
	const guildAchievements = await hypixel.resources.guild.achievements();
	const guildPermissions = await hypixel.resources.guild.permissions();
	const skyblockCollections = await hypixel.resources.skyblock.collections();
	const skyblockSkills = await hypixel.resources.skyblock.skills();

	expect(achievements).toBeDefined();
	expect(challenges).toBeDefined();
	expect(quests).toBeDefined();
	expect(guildAchievements).toBeDefined();
	expect(guildPermissions).toBeDefined();
	expect(skyblockCollections).toBeDefined();
	expect(skyblockSkills).toBeDefined();
});

test('get skyblock news', async () => {
	const news = await hypixel.skyblock.news();

	expect(news).toBeDefined();
});

test('get skyblock auction by user', async () => {
	const auctionsFromPlayer = await hypixel.skyblock.auction('f7c77d999f154a66a87dc4a51ef30d19');
	const auctionsFromProfile = await hypixel.skyblock.auction('2007786d1c09440b9156e3a7a9d39041', 'profile');

	expect(hypixel.skyblock.auction('00000000000000000000000000000000')).rejects.toEqual(expect.any(String));
	expect(hypixel.skyblock.auction('00000000000040000000000000000000', 'invalid')).rejects.toEqual(expect.any(String));

	expect(auctionsFromPlayer).toBeDefined();
	expect(auctionsFromProfile).toBeDefined();
});

test('get skyblock auctions', async () => {
	const auctions = await hypixel.skyblock.auctions();

	expect(auctions).toBeDefined();
});

test('get skyblock ended auctions', async () => {
	const endedAuctions = await hypixel.skyblock.endedAuctions();

	expect(endedAuctions).toBeDefined();
});

test('get skyblock bazaar', async () => {
	const bazaar = await hypixel.skyblock.bazaar();

	expect(bazaar).toBeDefined();
});

test('get skyblock profile', async () => {
	const profile = await hypixel.skyblock.profile('2007786d1c09440b9156e3a7a9d39041');

	expect(profile).toBeDefined();
});

test('get skyblock profiles', async () => {
	const profilesWithUUID = await hypixel.skyblock.profiles('f7c77d999f154a66a87dc4a51ef30d19');
	const profilesWithUsername = await hypixel.skyblock.profiles('hypixel');

	expect(profilesWithUUID).toBeDefined();
	expect(profilesWithUsername).toBeDefined();
});

test('get boosters', async () => {
	const boosters = await hypixel.boosters();

	expect(boosters).toBeDefined();
});

test('get player counts', async () => {
	const counts = await hypixel.counts();

	expect(counts).toBeDefined();
});

test('get leaderboards', async () => {
	const leaderboards = await hypixel.leaderboards();

	expect(leaderboards).toBeDefined();
});

test('get punishment statistics', async () => {
	const punishmentStats = await hypixel.punishmentStats();

	expect(punishmentStats).toEqual(expect.objectContaining({
		watchdog_lastMinute: expect.any(Number),
		staff_rollingDaily: expect.any(Number),
		watchdog_total: expect.any(Number),
		watchdog_rollingDaily: expect.any(Number),
		staff_total: expect.any(Number)
	}));

	expect(1).toBe(1);
});