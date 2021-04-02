/**
 * @typedef Player
 * @type {Object}
 * @property {string} uuid A UUID.
 * @property {string} displayname A username.
 * @property {?string} rank A staff or donator rank.
 * @property {?string} packageRank A monthly rank.
 * @property {?string} newPackageRank A monthly rank?
 * @property {number} firstLogin The first login in UNIX.
 * @property {number} lastLogin The last login in UNIX.
 * @property {number} lastLogout The last logout in UNIX.
 * @property {object} stats All player statistics.
 */

/**
 * @typedef FriendEntry
 * @type {object}
 * @property {string} _id The internal MongoDB document identification number.
 * @property {string} uuidSender The UUID of the player that sent the friend request.
 * @property {string} uuidReceiver The UUID of the player that received the friend request.
 * @property {number} started A UNIX timestamp of the request time.
 */

/**
 * @typedef GameEntry
 * @type {Object}
 * @property {number} date A UNIX timestamp of when the game started.
 * @property {number} ended A UNIX timestamp of when the game ended.
 * @property {string} gameType The game type.
 * @property {string} mode The game sub-genre.
 * @property {string} map The map that was played.
 */

/**
 * @typedef GuildMember
 * @type {Object}
 * @property {string} uuid A UUID.
 * @property {string} rank Guild rank.
 * @property {number} joined A UNIX timestamp of when the user joined the guild.
 * @property {number} questParticipation ????
 * @property {Object.<string, number>} expHistory Daily experience history.
 */

/**
 * @typedef GuildRank
 * @type {Object}
 * @property {string} name The name of the rank.
 * @property {boolean} default Whether the rank is given by default.
 * @property {string | null} tag ????
 * @property {number} created A UNIX timestamp of when the rank was created.
 * @property {number} priority The rank's position in the hierarchy.
 */

/**
 * @typedef Guild
 * @type {Object}
 * @property {string} _id Guild identification key.
 * @property {string} name The name of the guild.
 * @property {number} coins Current number of coins.
 * @property {number} coinsEver Total number of coins attained.
 * @property {number} created A UNIX timestamp of the guild creation date.
 * @property {GuildMember[]} members A list of guild members.
 * @property {?number} legacyRanking ????
 * @property {number} exp Guild experience.
 * @property {Object.<string, number>} achievements A list of achievements.
 * @property {string} name_lower A lowercase version of the guild name.
 * @property {GuildRank[]} ranks A list of guild ranks.
 * @property {string} description The guild's description.
 * @property {string[]} preferredGames A list of preferred games.
 * @property {string} tagColor The tag colour in the tablist.
 * @property {string} tag The tag.
 * @property {Object.<string, number>} guildExpByGameType The guild experience received from each game.
 */

/**
 * @typedef OneTimeAchievement
 * @type {Object}
 * @property {string} name The name of the achievement.
 * @property {string} description The description of the achievement.
 * @property {number} points The number of points received upon completion.
 * @property {number} gamePercentUnlocked The decimal percentage of players that have unlocked the achievement that have also played the game.
 * @property {number} globalPercentUnlocked The decimal percentage of players that have unlocked the achievement globally.
 */

/**
 * @typedef TieredAchievement
 * @type {Object}
 * @property {string} name The name of the achievement.
 * @property {string} description The description of the achievement.
 * @property {Array.<{ tier: number, points:  number, amount: number }>} tiers The achievement tiers.
 */

/**
 * @typedef Achievement
 * @type {Object}
 * @property {Object.<string, OneTimeAchievement>} one_time One-time achievements.
 * @property {Object.<string, TieredAchievement>} tiered Tiered achievements.
 * @property {number} total_points Total points gained from completing all achievements.
 * @property {number} total_legacy_points Total legacy points gained from completing all achievements.
 */

/**
 * @typedef Challenge
 * @type {Object}
 * @property {string} id The challenge identification key.
 * @property {string} name The name of the challenge.
 * @property {Array.<{ type: string, amount: number }>} rewards A list of challenge awards.
 */

/**
 * @typedef Quest
 * @type {Object}
 * @property {string} id The quest identification key.
 * @property {string} name The name of the quest.
 * @property {string} description The description of the quest.
 * @property {Array.<{ type: string, amount: number }>} rewards The rewards given after completing the quest.
 * @property {Array.<{ id: string, type: string, integer: number }>} objectives The quest objectives.
 * @property {Array.<{ type: string }>} requirements The quest requirements.
 */

/**
 * @typedef GuildPermission
 * @type {Object}
 * @property {string} name The name of the permission.
 * @property {string} description The description of the permission.
 * @property {{ name: string }} item The permission item in-game.
 */

/**
 * @typedef SkyblockCollectionTier
 * @type {Object}
 * @property {number} tier The tier number.
 * @property {number} amountRequired The required number of a certain item to complete the collection tier.
 * @property {string[]} unlocks The rewards for completing the tier.
 */

/**
 * @typedef SkyblockCollection
 * @type {Object}
 * @property {string} name The name of the collection.
 * @property {number} maxTiers The maximum number of tiers in the collection.
 * @property {SkyblockCollectionTier[]} tiers The collection tiers.
 */

/**
 * @typedef SkyblockSkillTier
 * @type {Object}
 * @property {number} level The skill level.
 * @property {number} totalExpRequired The experience required to reach the level.
 * @property {string[]} unlocks The rewards for completing the level.
 */

/**
 * @typedef SkyblockSkill
 * @type {Object}
 * @property {string} name The skill name.
 * @property {string} description The skill description.
 * @property {number} maxLevel The maximum level of the skill.
 * @property {SkyblockSkillTier[]} levels The skill levels.
 */

/**
 * @typedef SkyblockNews
 * @type {Object}
 * @property {{ material: string }} item The item displayed in the Minecraft inventory.
 * @property {string} link The link to the news thread.
 * @property {string} text The date of the news.
 * @property {string} title The title of the news.
 */

/**
 * @typedef HypixelBinaryData
 * @type {Object}
 * @property {number} type The type of data (usually 0).
 * @property {string} data A base64-encoded and gzipped string of data.
 */

/**
 * @typedef AuctionBid
 * @type {Object}
 * @property {string} auction_id The UUID of the auction.
 * @property {string} bidder The UUID of the bidder.
 * @property {string} profile_id The profile id of the bidder.
 * @property {number} amount The bid amount.
 * @property {number} timestamp A UNIX timestamp of when the bid was placed.
 */

/**
 * @typedef Auction
 * @type {Object}
 * @property {string} _id The internal MongoDB document id.
 * @property {string} uuid The auction UUID.
 * @property {string} auctioneer The UUID of the player that auctioned the item.
 * @property {string} profile_id The profile UUID of the player that auctioned the item.
 * @property {number} start A UNIX timestamp of when the auction started.
 * @property {number} end A UNIX timestamp of when the auction ends.
 * @property {string} item_name The name of the item.
 * @property {string} item_lore The lore of the item.
 * @property {string} extra Extra information about the item.
 * @property {string} category The category of the auction.
 * @property {string} tier The tier of the item.
 * @property {number} starting_bid The starting bidding price.
 * @property {HypixelBinaryData} item_bytes The item data.
 * @property {boolean} claimed Whether the auction has been claimed.
 * @property {string[]} claimed_bidders A UUID list of all bidders.
 * @property {number} highest_bid_amount The highest bid.
 * @property {AuctionBid[]} bids The auction bids.
 */

/**
 * @typedef EndedAuction
 * @type {Object}
 * @property {string} auction_id The UUID of the auction.
 * @property {string} seller The UUID of the player that auctioned the item.
 * @property {string} seller_profile The profile UUID of the player that auctioned the item.
 * @property {string} buyer The UUID of the buyer.
 * @property {number} timestamp A UNIX timestamp of the time that the item was bought.
 * @property {number} price The sell price of the item.
 * @property {boolean} bin Whether the item was purchased through Buy-It-Now.
 * @property {string} item_bytes A base64-encoded gzipped string of item data.
 */

/**
 * @typedef SkyblockBazaarSummary
 * @type {Object}
 * @property {number} amount Number of items.
 * @property {number} pricePerUnit Price per item.
 * @property {number} orders Number of orders.
 */

/**
 * @typedef SkyblockBazaarQuickStatus
 * @type {Object}
 * @property {string} productId The item ID of the product.
 * @property {number} sellPrice Current sell price based on weighted average of top 2% of orders by volume.
 * @property {number} sellVolume Number of items being sold.
 * @property {number} sellMovingWeek Number of items put up for sale within the past week.
 * @property {number} sellOrders Number of active sell orders.
 * @property {number} buyPrice Current buy price based on weighted average of top 2% of orders by volume.
 * @property {number} buyVolume Number of items being bought.
 * @property {number} buyMovingWeek Number of items bought within the past week.
 * @property {number} buyOrders Number of active buy orders.
 */

/**
 * @typedef SkyblockBazaar
 * @type {Object}
 * @property {string} product_id Item ID of the product.
 * @property {SkyblockBazaarSummary[]} sell_summary A summary of sell orders.
 * @property {SkyblockBazaarSummary[]} buy_summary A summary of buy orders.
 * @property {SkyblockBazaarQuickStatus} quick_status A summary of the product.
 */

/**
 * @typedef SkyblockInvitation
 * @type {Object}
 * @property {number} timestamp A UNIX timestamp of when the invitation was sent.
 * @property {string} invited_by The UUID of the inviter.
 * @property {boolean} confirmed Whether the invitation has been confirmed.
 * @property {string} confirmed_timestamp A UNIX timestamp of when the invitation was confirmed.
 */

/**
 * @typedef SkyblockObjective
 * @type {Object}
 * @property {'ACTIVE' | 'COMPLETE'} status The status of the objective.
 * @property {number} progress A decimal percent of the progress of the objective.
 * @property {number} completed_at A UNIX timestamp of when the objective was completed.
 */

/**
 * @typedef SkyblockQuest
 * @type {Object}
 * @property {'ACTIVE' | 'COMPLETE'} status The status of the objective.
 * @property {number} activated_at A UNIX timestamp of when the objective was started.
 * @property {number} activated_at_sb ????
 * @property {number} completed_at A UNIX timestamp of when the objective was completed.
 * @property {number} completed_at_sb ????
 */

/**
 * @typedef SkyblockPet
 * @type {Object}
 * @property {string | null} uuid The UUID of the pet.
 * @property {string} type The type of the pet.
 * @property {number} exp The amount of pet experience.
 * @property {boolean} active Whether the pet is active.
 * @property {string} tier The pet tier.
 * @property {string} heldItem The held item by the pet.
 * @property {number} candyUsed The amount of candy used by the pet.
 * @property {string | null} skin The skin of the pet.
 */

/**
 * @typedef SkyblockMember
 * @type {Object}
 * @property {number} last_save A UNIX timestamp of the last time that the data was saved.
 * @property {HypixelBinaryData} inv_armor The player's armour data.
 * @property {HypixelBinaryData} fishing_bag The player's fishing bag data.
 * @property {HypixelBinaryData} quiver The player's quiver data.
 * @property {HypixelBinaryData} ender_chest_contents The player's ender chest data.
 * @property {HypixelBinaryData} wardrobe_contents The player's wardrobe data.
 * @property {HypixelBinaryData} potion_bag The player's potion bag data.
 * @property {HypixelBinaryData} personal_vault_contents The player's personal vault data.
 * @property {HypixelBinaryData} inv_contents The player's inventory data.
 * @property {HypixelBinaryData} talisman_bag The player's talisman bag data.
 * @property {HypixelBinaryData} candy_inventory_contents The player's candy inventory data.
 * @property {SkyblockInvitation} coop_invitation The invitation attached to the member and island.
 * @property {number} first_join The first time that the player joined.
 * @property {number} first_join_hub ????
 * @property {any} stats
 * @property {Object.<string, SkyblockObjective>} objectives A list of active or completed objectives.
 * @property {string[]} tutorial The components of the tutorial that have been completed.
 * @property {Object.<string, SkyblockQuest>} quests A list of active or completed quests.
 * @property {number} coin_purse The amount of money in the player's purse.
 * @property {number} last_death A UNIX timestamp representing the time of their last death.
 * @property {string[]} visited_zones A list of visited zones.
 * @property {number} fairy_souls_collected The number of fairy souls collected.
 * @property {number} fairy_souls Current fairy soul count.
 * @property {number} fairy_exchanges The number of fairy exchanges.
 * @property {any} slayer_bosses
 * @property {SkyblockPet[]} pets The player's pets.
 * @property {any} dungeons
 * @property {string[]} crafted_generators All crafted generators.
 * @property {number} fishing_treasure_caught The amount of fishing treasure caught.
 * @property {number} death_count Number of deaths.
 * @property {string[]} achievement_spawned_island_types ????
 * @property {any} slayer_quest
 * @property {any} slayer_bosses
 * @property {any} griffin
 * @property {any} jacob2
 * @property {any} experimentation
 * @property {number} experience_skill_runecrafting Experience gained in the runecrafting skill.
 * @property {number} experience_skill_combat Experience gained in the combat skill.
 * @property {number} experience_skill_mining Experience gained in the mining skill.
 * @property {number} experience_skill_alchemy Experience gained in the alchemy skill.
 * @property {number} experience_skill_farming Experience gained in the farming skill.
 * @property {number} experience_skill_taming Experience gained in the taming skill.
 * @property {number} experience_skill_enchanting Experience gained in the enchanting skill.
 * @property {number} experience_skill_fishing Experience gained in the fishing skill.
 * @property {number} experience_skill_foraging Experience gained in the foraging skill.
 * @property {number} experience_skill_carpentry Experience gained in the carpentry skill.
 * @property {string[]} unlocked_coll_tiers A list of all unlocked collection tiers.
 * @property {number} wardrobe_equipped_slot The selected wardrobe slot.
 * @property {Object.<string, number>} collection A list of item counts for collections.
 * @property {any} sacks_counts
 */

/**
 * @typedef SkyblockBankTransaction
 * @type {Object}
 * @property {number} amount The number of coins moved in the transaction.
 * @property {number} timestamp A UNIX timestamp of when the transaction occurred.
 * @property {'WITHDRAW' | 'DEPOSIT'} action The transaction type.
 * @property {string} initiator_name The name of the player (including colour codes).
 */

/**
 * @typedef SkyblockCommunityUpgrade
 * @type {Object}
 * @property {string} upgrade The upgrade type.
 * @property {number} tier The tier of the upgrade.
 * @property {number} started_ms A UNIX timestamp of when the upgrade started.
 * @property {string} started_by The UUID of player that started the upgrade.
 * @property {number} claimed_ms A UNIX timestamp of when the upgrade was claimed.
 * @property {string} claimed_by The UUID of the player that claimed the upgrade.
 * @property {boolean} fasttracked Whether the upgrade was fast-tracked.
 */

/**
 * @typedef SkyblockProfile
 * @type {Object}
 * @property {string} profile_id The profile UUID.
 * @property {Object.<string, SkyblockMember>} members A list of island members.
 * @property {string} cute_name The name of the Skyblock realm.
 * @property {{ balance: number, transactions: SkyblockBankTransaction[] }} transactions A list of bank transactions.
 * @property {SkyblockCommunityUpgrade[]} community_upgrades A list of community upgrades.
 * @property {string} game_mode The game mode.
 */

/**
 * @typedef Booster
 * @type {Object}
 * @property {string} _id The MongoDB internal identiciaton key of the document.
 * @property {string} purchaserUuid The UUID of the player that activated the booster.
 * @property {number} amount The booster multiplier.
 * @property {number} originalLength The length of the booster when it started (in seconds).
 * @property {number} length The remaining time for the booster in seconds.
 * @property {number} gameType The game that the booster is for.
 * @property {number} dateActivated A UNIX timestamp of when the booster was activated.
 * @property {string[] | boolean | undefined} stacked Whether the booster stacked on another one, or the players that have stacked the booster.
 */

/**
 * @typedef GameCount
 * @type {Object}
 * @property {number} players The number of players playing the game.
 * @property {Object.<string, number> } modes The number of players in each sub-genre of the game mode.
 */

/**
 * @typedef Leaderboard
 * @type {Object}
 * @property {string} path The leaderboard type.
 * @property {string} prefix The leaderboard timespan.
 * @property {string} title The title of the leaderboard.
 * @property {string} location The leaderboard location (X,Y,Z).
 * @property {number} count The number of players on the leaderboard.
 * @property {string[]} leaders The player UUIDs on the leaderboard.
 */

/**
 * @typedef Punishments
 * @type {Object}
 * @property {number} watchdog_lastMinute Watchdog bans in the past minute.
 * @property {number} staff_rollingDaily Staff bans in the past day.
 * @property {number} watchdog_total Total Watchdog bans.
 * @property {number} watchdog_rollingDaily Watchdog bans in the past day.
 * @property {number} staff_total Total staff bans.
 */

const RequestManager = require('./RequestManager');

const USERNAME_REGEX = /^\w{1,16}$/;
const UUID_REGEX = /^[a-z0-9]{8}[a-z0-9]{4}4[a-z0-9]{3}[a-z0-9]{4}[a-z0-9]{12}$/;
const OBJECTID_REGEX = /^[a-z0-9]{24}$/;

class HypixelAPI {
	/**
   * @param {string[] | string} keys The API key(s).
   * @param {number} cacheFor The number of milliseconds to cache results.
   */
	constructor(keys, cacheFor = 300000) {
		this.manager = new RequestManager(keys, cacheFor);
	}

	/**
	 * Retrieve a username from a UUID.
	 * @param {string} uuid A player UUID.
	 * @returns {string} The username attached to the UUID.
	 * @throws {string} UUID must be valid.
	 */
	async getUsername(uuid) {
		if (typeof uuid !== 'string' || UUID_REGEX.test(uuid) === false)
			throw 'Invalid UUID provided.';

		const { data, status } = await this.manager.axios.get(`https://api.minetools.eu/uuid/${uuid}`, {
			baseURL: null
		});
		
		if (status !== 200 || data.status !== 'OK')
			throw 'Invalid UUID provided.';

		return data.name;
	}

	/**
	 * Retrieve a UUID from a username.
	 * @param {string} username A player username.
	 * @returns {string} The UUID attached to the username.
	 * @throws {string} Username must be valid.
	 */
	 async getUUID(username) {
		if (typeof username !== 'string' || USERNAME_REGEX.test(username) === false)
			throw 'Invalid username provided.';

		const { data, status } = await this.manager.axios.get(`https://api.minetools.eu/uuid/${username}`, {
			baseURL: null
		});

		if (status !== 200 || data.status !== 'OK')
			throw 'Invalid username provided.';

		return data.id;
	}

	/**
	 * Retrieve a UUID and username from a UUID or username.
	 * @param {string} username A player username or UUID.
	 * @returns {{ uuid: string, username: string }} A username and UUID.
	 * @throws {string} UUID or username must be valid.
	 */
	 async getUsernameAndUUID(query) {
		if (typeof query !== 'string' || UUID_REGEX.test(query) === false && USERNAME_REGEX.test(query) === false)
			throw 'Invalid username or UUID provided.';

		const { data, status } = await this.manager.axios.get(`https://api.minetools.eu/uuid/${query}`, {
			baseURL: null
		});
		
		if (status !== 200 || data.status !== 'OK')
			throw 'Invalid username or UUID provided.';

		return { uuid: data.id, username: data.name };
	}

	/**
	 * Retrieve information about an API key.
	 * @param {string} key A Hypixel API key.
	 * @returns {{ key: string, owner: string, limit: number, queriesInPastMin: number, totalQueries: number }} API key information.
	 */
	async key(key) {
		const { data } = await this.manager.request('/key', { key });

		return data.record;
	}

	/**
	 * Retrieve a player's statistics.
	 * @param {string} query A username or UUID.
	 * @returns {Player} A player.
	 */
	async player(query) {
		const { uuid } = await this.getUsernameAndUUID(query);
		const { data } = await this.manager.request('/player', { uuid });

		return data.player;
	}

	/**
	 * Retrieve a player's friends list.
	 * @param {string} query A username or UUID.
	 * @returns {FriendEntry[]} The friend list.
	 */
	async friends(query) {
		const { uuid } = await this.getUsernameAndUUID(query);
		const { data } = await this.manager.request('/friends', { uuid });

		return data.records;
	}

	/**
	 * Retrieve a player's recent games.
	 * @param {string} query A username or UUID.
	 * @returns {GameEntry[]} The friend list.
	 */
	 async recentGames(query) {
		const { uuid } = await this.getUsernameAndUUID(query);
		const { data } = await this.manager.request('/recentgames', { uuid });

		return data.games;
	}

	/**
	 * Retrieve information about a player's session.
	 * @param {string} query A username or UUID.
	 * @returns {{ online: true, gameType: string, mode: string, map: string } | { online: false }} The session information.
	 */
	async status(query) {
		const { uuid } = await this.getUsernameAndUUID(query);
		const { data } = await this.manager.request('/status', { uuid });

		return data.session;
	}

	/**
	 * Retrieve information about a guild.
	 * @param {string} query The guild id, guild name, or the uuid of a guild member.
	 * @returns {Guild} The guild.
	 * @throws {string} Guild UUID, member UUID, or name must be valid.
	 */
	async guild(query, type = 'name') {
		if (['name', 'player', 'id'].includes(type) === false)
			throw 'Invalid type. [name, player, id]';

		const error = typeof query !== 'string' ? 'Query must be defined.'
			: type === 'id' ? OBJECTID_REGEX.test(query) === false && 'Invalid guild identification key.'
			: type === 'player' ? UUID_REGEX.test(query) === false && 'Invalid player UUID.'
			: query.length > 32 && 'Invalid guild name.';

		if (error)
			throw error;

		const { data } = await this.manager.request('/guild', { [type]: query });

		return data.guild;
	}

	get resources() {
		return {
			achievements: this.resources_achievements.bind(this),
			challenges: this.resources_challenges.bind(this),
			quests: this.resources_quests.bind(this),
			guild: {
				achievements: this.resources_guilds_achievements.bind(this),
				permissions: this.resources_guilds_permissions.bind(this)
			},
			skyblock: {
				collections: this.resources_skyblock_collections.bind(this),
				skills: this.resources_skyblock_skills.bind(this)
			}
		};
	}

	/**
	 * Retrieve a list of all possible achievements.
	 * @returns {Object.<string, Achievement>} A list of all possible achievements.
	 * @private
	 */
	async resources_achievements() {
		const { data } = await this.manager.request('/resources/achievements', { key: null });

		return data.achievements;
	}

	/**
	 * Retrieve a list of all possible challenges.
	 * @returns { Object.<string, Challenge[]> } A list of all possible challenges.
	 * @private
	 */
	async resources_challenges() {
		const { data } = await this.manager.request('/resources/challenges', { key: null });

		return data.challenges;
	}

	/**
	 * Retrieve a list of all possible quests.
	 * @returns { Object.<string, Quest[]> } A list of all possible quests.
	 * @private
	 */
	async resources_quests() {
		const { data } = await this.manager.request('/resources/quests', { key: null });

		return data.quests;
	}

	/**
	 * Retrieve a list of all possible guild achievements.
	 * @returns {{ one_time: OneTimeAchievement[], tiered: TieredAchievement[] }} A list of all possible guild achievements.
	 * @private
	 */
	async resources_guilds_achievements() {
		const { data } = await this.manager.request('/resources/guilds/achievements', { key: null });

		return {
			one_time: data.one_time,
			tiered: data.tiered
		};
	}

	/**
	 * Retrieve a list of all possible guild permissions.
	 * @returns {Array.<{ en_us: GuildPermission }>} A list of all possible guild permissions.
	 * @private
	 */
	 async resources_guilds_permissions() {
		const { data } = await this.manager.request('/resources/guilds/permissions', { key: null });

		return data.permissions;
	}

	/**
	 * Retrieves a list of all Skyblock collections.
	 * @returns { Object.<string, { name: string, items: Object.<string, SkyblockCollection> }> } A list of all Skyblock collections.
	 * @private
	 */
	async resources_skyblock_collections() {
		const { data } = await this.manager.request('/resources/skyblock/collections', { key: null });

		return data.collections;
	}

	/**
	 * Retrieves a list of all Skyblock skills.
	 * @returns {Object.<string, SkyblockSkill>} A list of all Skyblock skills.
	 * @private
	 */
	async resources_skyblock_skills() {
		const { data } = await this.manager.request('/resources/skyblock/skills', { key: null });

		// https://github.com/HypixelDev/PublicAPI/issues/417
		return data.skills ?? data.collections;
	}

	get skyblock() {
		return {
			news: this.skyblock_news.bind(this),
			auction: this.skyblock_auction.bind(this),
			auctions: this.skyblock_auctions.bind(this),
			endedAuctions: this.skyblock_auctions_ended.bind(this),
			bazaar: this.skyblock_bazaar.bind(this),
			profile: this.skyblock_profile.bind(this),
			profiles: this.skyblock_profiles.bind(this)
		};
	}

	/**
	 * Retrieves a list of Skyblock news.
	 * @returns {SkyblockNews[]} A list of Skyblock news.
	 * @private
	 */
	async skyblock_news() {
		const { data } = await this.manager.request('/skyblock/news');

		return data.items;
	}

	/**
	 * Retrieves a list of auctions by player UUID, auction UUID, or profile UUID.
	 * @param {string} uuid The UUID.
	 * @param {'uuid' | 'player' | 'profile'} type The type of UUID to query. 
	 * @returns {Auction[]} A list of auctions.
	 * @throws {string} Invalid type or UUID.
	 * @private
	 */
	async skyblock_auction(uuid, type = 'player') {
		if (['uuid', 'player', 'profile'].includes(type) === false)
			throw 'Invalid type provided. [uuid, player, profile]';

		if (UUID_REGEX.test(uuid) === false)
			throw 'Invalid UUID provided.';

		const { data } = await this.manager.request('/skyblock/auction', { [type]: uuid });

		return data.auctions;
	}

	/**
	 * Retrieves a list of auctions and global auction statistics.
	 * @param {number} page The auction page number.
	 * @returns {{ page: number, totalPages: number, totalAuctions: number, lastUpdated: number, auctions: Auction[] }} A list of auctions and global auction statistics.
	 * @private
	 */
	async skyblock_auctions(page = 0) {
		const { data } = await this.manager.request('/skyblock/auctions', { page });

		return {
			page: data.page,
			totalPages: data.totalPages,
			totalAuctions: data.totalAuctions,
			lastUpdated: data.lastUpdated,
			auctions: data.auctions
		};
	}

	/**
	 * Retrieves a list of auctions that have ended.
	 * @returns {{ lastUpdated: number, auctions: EndedAuction[] }} A list of auctions that have ended.
	 * @private
	 */
	async skyblock_auctions_ended() {
		const { data } = await this.manager.request('/skyblock/auctions_ended');

		return {
			lastUpdated: data.lastUpdated,
			auctions: data.auctions
		};
	}

	/**
	 * Retrieves a list of all items listed on the bazaar.
	 * @returns {Object.<string, SkyblockBazaar>} A list of all items listed on the bazaar.
	 * @private
	 */
	async skyblock_bazaar() {
		const { data } = await this.manager.request('/skyblock/bazaar');

		return data.products;
	}

	/**
	 * Retrieves a Skyblock profile.
	 * @param {string} query A profile UUId.
	 * @returns {SkyblockProfile} A Skyblock profile.
	 * @private
	 */
	async skyblock_profile(profile) {
		const { data } = await this.manager.request('/skyblock/profile', { profile });

		return data.profile;
	}

	/**
	 * Retrieves a list of profiles attached to a user.
	 * @param {string} query A UUID or username.
	 * @returns {SkyblockProfile[]} A list of profiles attached to the player.
	 * @private
	 */
	async skyblock_profiles(query) {
		const { uuid } = await this.getUsernameAndUUID(query);
		const { data } = await this.manager.request('/skyblock/profiles', { uuid });

		return data.profiles;
	}

	/**
	 * Retrieves a list of active boosters.
	 * @returns {Booster[]} A list of active boosters.
	 */
	async boosters() {
		const { data } = await this.manager.request('/boosters');

		return data.boosters;
	}

	/**
	 * Retrieves a list of player count information.
	 * @returns {{ playerCount: number, games: Object.<string, GameCount> }} A list of playercounts per game, along with the total player count.
	 */
	async counts() {
		const { data } = await this.manager.request('/counts');

		return {
			playerCount: data.playerCount,
			games: data.games
		};
	}

	/**
	 * Retrieves all leaderboards.
	 * @returns { Object.<string, Leaderboard[]> } A list of all leaderboards.
	 */
	async leaderboards() {
		const { data } = await this.manager.request('/leaderboards');

		return data.leaderboards;
	}

	/**
	 * Retrieves current punishment statistics.
	 * @returns {Punishments} Current punishment statistics.
	 */
	async punishmentStats() {
		const { data } = await this.manager.request('/punishmentstats');

		return {
			watchdog_lastMinute: data.watchdog_lastMinute,
			staff_rollingDaily: data.staff_rollingDaily,
			watchdog_total: data.watchdog_total,
			watchdog_rollingDaily: data.watchdog_rollingDaily,
			staff_total: data.staff_total
		};
	}
}

module.exports = HypixelAPI;