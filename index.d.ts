declare module 'hypixel-api-2' {
	export const version: string;

	export class HypixelAPI {
		/**
		 * @param {string[] | string} keys The API key(s).
		 * @param {*} cacheFor The number of milliseconds to cache results.
		 */
		constructor(keys: string[] | string, cacheFor?: any);
		manager: RequestManager;
		/**
		 * Retrieve a username from a UUID.
		 * @param {string} uuid A player UUID.
		 * @returns {string} The username attached to the UUID.
		 */
		getUsername(uuid: string): string;
		/**
		 * Retrieve a UUID from a username.
		 * @param {string} username A player username.
		 * @returns {string} The UUID attached to the username.
		 */
		getUUID(username: string): string;
		/**
		 * Retrieve a UUID and username from a UUID or username.
		 * @param {string} username A player username or UUID.
		 * @returns {{ uuid: string, username: string }} A username and UUID.
		 */
		getUsernameAndUUID(query: any): {
			uuid: string;
			username: string;
		};
		/**
		 * Retrieve information about an API key.
		 * @param {string} key A Hypixel API key.
		 * @returns {{ key: string, owner: string, limit: number, queriesInPastMin: number, totalQueries: number }} API key information.
		 */
		key(key: string): {
			key: string;
			owner: string;
			limit: number;
			queriesInPastMin: number;
			totalQueries: number;
		};
		/**
		 * Retrieve a player's statistics.
		 * @param {string} query A username or UUID.
		 * @returns {Player} A player.
		 */
		player(query: string): Player;
		/**
		 * Retrieve a player's friends list.
		 * @param {string} query A username or UUID.
		 * @returns {FriendEntry[]} The friend list.
		 */
		friends(query: string): FriendEntry[];
		/**
		 * Retrieve a player's recent games.
		 * @param {string} query A username or UUID.
		 * @returns {GameEntry[]} The friend list.
		 */
		recentGames(query: string): GameEntry[];
		/**
		 * Retrieve information about a player's session.
		 * @param {string} query A username or UUID.
		 * @returns {{ online: true, gameType: string, mode: string, map: string } | { online: false }} The session information.
		 */
		status(query: string): {
			online: true;
			gameType: string;
			mode: string;
			map: string;
		} | {
			online: false;
		};
		/**
		 * Retrieve information about a guild.
		 * @param {string} query The guild id, guild name, or the uuid of a guild member.
		 * @returns {Guild} The guild.
		 */
		guild(query: string): Guild;
		get resources(): {
			achievements: any;
			challenges: any;
			quests: any;
			guild: {
				achievements: any;
				permissions: any;
			};
			skyblock: {
				collections: any;
				skills: any;
			};
		};
		/**
		 * Retrieve a list of all possible achievements.
		 * @returns { [key: string]: Achievement } A list of all possible achievements.
		 * @private
		 */
		private resources_achievements;
		/**
		 * Retrieve a list of all possible challenges.
		 * @returns { [key: string]: Challenge[] } A list of all possible challenges.
		 * @private
		 */
		private resources_challenges;
		/**
		 * Retrieve a list of all possible quests.
		 * @returns { [key: string]: Quest[] } A list of all possible quests.
		 * @private
		 */
		private resources_quests;
		/**
		 * Retrieve a list of all possible guild achievements.
		 * @returns { one_time: OneTimeAchievement[], tiered: TieredAchievement[] } A list of all possible guild achievements.
		 * @private
		 */
		private resources_guilds_achievements;
		/**
		 * Retrieve a list of all possible guild permissions.
		 * @returns {{ en_us: GuildPermission }[]} A list of all possible guild permissions.
		 * @private
		 */
		private resources_guilds_permissions;
		/**
		 * Retrieves a list of all Skyblock collections.
		 * @returns {{ [key: string]: { name: string, items: { [key: string]: SkyblockCollection } } }} A list of all Skyblock collections.
		 * @private
		 */
		private resources_skyblock_collections;
		/**
		 * Retrieves a list of all Skyblock skills.
		 * @returns {{ [key: string]: SkyblockSkill }} A list of all Skyblock skills.
		 * @private
		 */
		private resources_skyblock_skills;
		get skyblock(): {
			news: any;
			auction: any;
			auctions: any;
			endedAuctions: any;
			bazaar: any;
			profile: any;
			profiles: any;
		};
		/**
		 * Retrieves a list of Skyblock news.
		 * @returns {SkyblockNews[]} A list of Skyblock news.
		 * @private
		 */
		private skyblock_news;
		/**
		 * Retrieves a list of auctions by player UUID, auction UUID, or profile UUID.
		 * @param {string} uuid The UUID.
		 * @param {'uuid' | 'player' | 'profile'} type The type of UUID to query.
		 * @returns {Auction[]} A list of auctions.
		 * @private
		 */
		private skyblock_auction;
		/**
		 * Retrieves a list of auctions and global auction statistics.
		 * @param {number} page The auction page number.
		 * @returns {{ page: number, totalPages: number, totalAuctions: number, lastUpdated: number, auctions: Auction[] }} A list of auctions and global auction statistics.
		 * @private
		 */
		private skyblock_auctions;
		/**
		 * Retrieves a list of auctions that have ended.
		 * @returns {{ lastUpdated: number, auctions: EndedAuction[] }} A list of auctions that have ended.
		 * @private
		 */
		private skyblock_auctions_ended;
		/**
		 * Retrieves a list of all items listed on the bazaar.
		 * @returns {{ [key: string]: SkyblockBazaar }} A list of all items listed on the bazaar.
		 * @private
		 */
		private skyblock_bazaar;
		/**
		 * Retrieves a Skyblock profile.
		 * @param {string} query A profile UUId.
		 * @returns {SkyblockProfile} A Skyblock profile.
		 * @private
		 */
		private skyblock_profile;
		/**
		 * Retrieves a list of profiles attached to a user.
		 * @param {string} query A UUID or username.
		 * @returns {SkyblockProfile[]} A list of profiles attached to the player.
		 * @private
		 */
		private skyblock_profiles;
		/**
		 * Retrieves a list of active boosters.
		 * @returns {Booster[]} A list of active boosters.
		 */
		boosters(): Booster[];
		/**
		 * Retrieves a list of player count information.
		 * @returns {{ playerCount: number, games: { [key: string], GameCount } }} A list of playercounts per game, along with the total player count.
		 */
		counts(): {
			playerCount: number;
			games: {
				[key: string]: any;
				GameCount: any;
			};
		};
		/**
		 * Retrieves all leaderboards.
		 * @returns {{ [key: string]: Leaderboard[] }} A list of all leaderboards.
		 */
		leaderboards(): {
			[key: string]: Leaderboard[];
		};
		/**
		 * Retrieves current punishment statistics.
		 * @returns {Punishments} Current punishment statistics.
		 */
		punishmentStats(): Punishments;
	}
	export namespace HypixelAPI {
		export { Player, FriendEntry, GameEntry, GuildMember, GuildRank, Guild, OneTimeAchievement, TieredAchievement, Achievement, Challenge, Quest, GuildPermission, SkyblockCollectionTier, SkyblockCollection, SkyblockSkillTier, SkyblockSkill, SkyblockNews, HypixelBinaryData, AuctionBid, Auction, EndedAuction, SkyblockBazaarSummary, SkyblockBazaarQuickStatus, SkyblockBazaar, SkyblockInvitation, SkyblockObjective, SkyblockQuest, SkyblockPet, SkyblockMember, SkyblockBankTransaction, SkyblockCommunityUpgrade, SkyblockProfile, Booster, GameCount, Leaderboard, Punishments };
	}
	type Player = {
		/**
		 * A UUID.
		 */
		uuid: string;
		/**
		 * A username.
		 */
		displayname: string;
		/**
		 * A staff or donator rank.
		 */
		rank: string | null;
		/**
		 * A monthly rank.
		 */
		packageRank: string | null;
		/**
		 * A monthly rank?
		 */
		newPackageRank: string | null;
		/**
		 * The first login in UNIX.
		 */
		firstLogin: number;
		/**
		 * The last login in UNIX.
		 */
		lastLogin: number;
		/**
		 * The last logout in UNIX.
		 */
		lastLogout: number;
		/**
		 * All player statistics.
		 */
		stats: object;
	};
	type FriendEntry = {
		/**
		 * The internal MongoDB document identification number.
		 */
		_id: string;
		/**
		 * The UUID of the player that sent the friend request.
		 */
		uuidSender: string;
		/**
		 * The UUID of the player that received the friend request.
		 */
		uuidReceiver: string;
		/**
		 * A UNIX timestamp of the request time.
		 */
		started: number;
	};
	type GameEntry = {
		/**
		 * A UNIX timestamp of when the game started.
		 */
		date: number;
		/**
		 * A UNIX timestamp of when the game ended.
		 */
		ended: number;
		/**
		 * The game type.
		 */
		gameType: string;
		/**
		 * The game sub-genre.
		 */
		mode: string;
		/**
		 * The map that was played.
		 */
		map: string;
	};
	type Guild = {
		/**
		 * Guild identification key.
		 */
		_id: string;
		/**
		 * The name of the guild.
		 */
		name: string;
		/**
		 * Current number of coins.
		 */
		coins: number;
		/**
		 * Total number of coins attained.
		 */
		coinsEver: number;
		/**
		 * A UNIX timestamp of the guild creation date.
		 */
		created: number;
		/**
		 * A list of guild members.
		 */
		members: GuildMember[];
		/**
		 * ????
		 */
		legacyRanking: number | null;
		/**
		 * Guild experience.
		 */
		exp: number;
		/**
		 * A list of achievements.
		 */
		achievements: {
			[key: string]: number;
		};
		/**
		 * A lowercase version of the guild name.
		 */
		name_lower: string;
		/**
		 * A list of guild ranks.
		 */
		ranks: GuildRank[];
		/**
		 * The guild's description.
		 */
		description: string;
		/**
		 * A list of preferred games.
		 */
		preferredGames: string[];
		/**
		 * The tag colour in the tablist.
		 */
		tagColor: string;
		/**
		 * The tag.
		 */
		tag: string;
		/**
		 * The guild experience received from each game.
		 */
		guildExpByGameType: {
			[key: string]: number;
		};
	};
	type Booster = {
		/**
		 * The MongoDB internal identiciaton key of the document.
		 */
		_id: string;
		/**
		 * The UUID of the player that activated the booster.
		 */
		purchaserUuid: string;
		/**
		 * The booster multiplier.
		 */
		amount: number;
		/**
		 * The length of the booster when it started (in seconds).
		 */
		originalLength: number;
		/**
		 * The remaining time for the booster in seconds.
		 */
		length: number;
		/**
		 * The game that the booster is for.
		 */
		gameType: number;
		/**
		 * A UNIX timestamp of when the booster was activated.
		 */
		dateActivated: number;
		/**
		 * Whether the booster stacked on another one, or the players that have stacked the booster.
		 */
		stacked: string[] | boolean | undefined;
	};
	type GameCount = {
		/**
		 * The number of players playing the game.
		 */
		players: number;
		/**
		 * The number of players in each sub-genre of the game mode.
		 */
		modes: {
			[key: string]: number;
		};
	};
	type Leaderboard = {
		/**
		 * The leaderboard type.
		 */
		path: string;
		/**
		 * The leaderboard timespan.
		 */
		prefix: string;
		/**
		 * The title of the leaderboard.
		 */
		title: string;
		/**
		 * The leaderboard location (X,Y,Z).
		 */
		location: string;
		/**
		 * The number of players on the leaderboard.
		 */
		count: number;
		/**
		 * The player UUIDs on the leaderboard.
		 */
		leaders: string[];
	};
	type Punishments = {
		/**
		 * Watchdog bans in the past minute.
		 */
		watchdog_lastMinute: number;
		/**
		 * Staff bans in the past day.
		 */
		staff_rollingDaily: number;
		/**
		 * Total Watchdog bans.
		 */
		watchdog_total: number;
		/**
		 * Watchdog bans in the past day.
		 */
		watchdog_rollingDaily: number;
		/**
		 * Total staff bans.
		 */
		staff_total: number;
	};
	type GuildMember = {
		/**
		 * A UUID.
		 */
		uuid: string;
		/**
		 * Guild rank.
		 */
		rank: string;
		/**
		 * A UNIX timestamp of when the user joined the guild.
		 */
		joined: number;
		/**
		 * ????
		 */
		questParticipation: number;
		/**
		 * Daily experience history.
		 */
		expHistory: {
			[key: string]: number;
		};
	};
	type GuildRank = {
		/**
		 * The name of the rank.
		 */
		name: string;
		/**
		 * Whether the rank is given by default.
		 */
		default: boolean;
		/**
		 * ????
		 */
		tag: string | null;
		/**
		 * A UNIX timestamp of when the rank was created.
		 */
		created: number;
		/**
		 * The rank's position in the hierarchy.
		 */
		priority: number;
	};
	type OneTimeAchievement = {
		/**
		 * The name of the achievement.
		 */
		name: string;
		/**
		 * The description of the achievement.
		 */
		description: string;
		/**
		 * The number of points received upon completion.
		 */
		points: number;
		/**
		 * The decimal percentage of players that have unlocked the achievement that have also played the game.
		 */
		gamePercentUnlocked: number;
		/**
		 * The decimal percentage of players that have unlocked the achievement globally.
		 */
		globalPercentUnlocked: number;
	};
	type TieredAchievement = {
		/**
		 * The name of the achievement.
		 */
		name: string;
		/**
		 * The description of the achievement.
		 */
		description: string;
		/**
		 * The achievement tiers.
		 */
		tiers: {
			tier: number;
			points: number;
			amount: number;
		}[];
	};
	type Achievement = {
		/**
		 * One-time achievements.
		 */
		one_time: {
			[key: string]: OneTimeAchievement;
		};
		/**
		 * Tiered achievements.
		 */
		tiered: {
			[key: string]: TieredAchievement;
		};
		/**
		 * Total points gained from completing all achievements.
		 */
		total_points: number;
		/**
		 * Total legacy points gained from completing all achievements.
		 */
		total_legacy_points: number;
	};
	type Challenge = {
		/**
		 * The challenge identification key.
		 */
		id: string;
		/**
		 * The name of the challenge.
		 */
		name: string;
		/**
		 * A list of challenge awards.
		 */
		rewards: {
			type: string;
			amount: number;
		}[];
	};
	type Quest = {
		/**
		 * The quest identification key.
		 */
		id: string;
		/**
		 * The name of the quest.
		 */
		name: string;
		/**
		 * The description of the quest.
		 */
		description: string;
		/**
		 * The rewards given after completing the quest.
		 */
		rewards: {
			type: string;
			amount: number;
		}[];
		/**
		 * The quest objectives.
		 */
		objectives: {
			id: string;
			type: string;
			integer: number;
		}[];
		/**
		 * The quest requirements.
		 */
		requirements: {
			type: string;
		}[];
	};
	type GuildPermission = {
		/**
		 * The name of the permission.
		 */
		name: string;
		/**
		 * The description of the permission.
		 */
		description: string;
		/**
		 * The permission item in-game.
		 */
		item: {
			name: string;
		};
	};
	type SkyblockCollectionTier = {
		/**
		 * The tier number.
		 */
		tier: number;
		/**
		 * The required number of a certain item to complete the collection tier.
		 */
		amountRequired: number;
		/**
		 * The rewards for completing the tier.
		 */
		unlocks: string[];
	};
	type SkyblockCollection = {
		/**
		 * The name of the collection.
		 */
		name: string;
		/**
		 * The maximum number of tiers in the collection.
		 */
		maxTiers: number;
		/**
		 * The collection tiers.
		 */
		tiers: SkyblockCollectionTier[];
	};
	type SkyblockSkillTier = {
		/**
		 * The skill level.
		 */
		level: number;
		/**
		 * The experience required to reach the level.
		 */
		totalExpRequired: number;
		/**
		 * The rewards for completing the level.
		 */
		unlocks: string[];
	};
	type SkyblockSkill = {
		/**
		 * The skill name.
		 */
		name: string;
		/**
		 * The skill description.
		 */
		description: string;
		/**
		 * The maximum level of the skill.
		 */
		maxLevel: number;
		/**
		 * The skill levels.
		 */
		levels: SkyblockSkillTier[];
	};
	type SkyblockNews = {
		/**
		 * The item displayed in the Minecraft inventory.
		 */
		item: {
			material: string;
		};
		/**
		 * The link to the news thread.
		 */
		link: string;
		/**
		 * The date of the news.
		 */
		text: string;
		/**
		 * The title of the news.
		 */
		title: string;
	};
	type HypixelBinaryData = {
		/**
		 * The type of data (usually 0).
		 */
		type: number;
		/**
		 * A base64-encoded and gzipped string of data.
		 */
		data: string;
	};
	type AuctionBid = {
		/**
		 * The UUID of the auction.
		 */
		auction_id: string;
		/**
		 * The UUID of the bidder.
		 */
		bidder: string;
		/**
		 * The profile id of the bidder.
		 */
		profile_id: string;
		/**
		 * The bid amount.
		 */
		amount: number;
		/**
		 * A UNIX timestamp of when the bid was placed.
		 */
		timestamp: number;
	};
	type Auction = {
		/**
		 * The internal MongoDB document id.
		 */
		_id: string;
		/**
		 * The auction UUID.
		 */
		uuid: string;
		/**
		 * The UUID of the player that auctioned the item.
		 */
		auctioneer: string;
		/**
		 * The profile UUID of the player that auctioned the item.
		 */
		profile_id: string;
		/**
		 * A UNIX timestamp of when the auction started.
		 */
		start: number;
		/**
		 * A UNIX timestamp of when the auction ends.
		 */
		end: number;
		/**
		 * The name of the item.
		 */
		item_name: string;
		/**
		 * The lore of the item.
		 */
		item_lore: string;
		/**
		 * Extra information about the item.
		 */
		extra: string;
		/**
		 * The category of the auction.
		 */
		category: string;
		/**
		 * The tier of the item.
		 */
		tier: string;
		/**
		 * The starting bidding price.
		 */
		starting_bid: number;
		/**
		 * The item data.
		 */
		item_bytes: HypixelBinaryData;
		/**
		 * Whether the auction has been claimed.
		 */
		claimed: boolean;
		/**
		 * A UUID list of all bidders.
		 */
		claimed_bidders: string[];
		/**
		 * The highest bid.
		 */
		highest_bid_amount: number;
		/**
		 * The auction bids.
		 */
		bids: AuctionBid[];
	};
	type EndedAuction = {
		/**
		 * The UUID of the auction.
		 */
		auction_id: string;
		/**
		 * The UUID of the player that auctioned the item.
		 */
		seller: string;
		/**
		 * The profile UUID of the player that auctioned the item.
		 */
		seller_profile: string;
		/**
		 * The UUID of the buyer.
		 */
		buyer: string;
		/**
		 * A UNIX timestamp of the time that the item was bought.
		 */
		timestamp: number;
		/**
		 * The sell price of the item.
		 */
		price: number;
		/**
		 * Whether the item was purchased through Buy-It-Now.
		 */
		bin: boolean;
		/**
		 * A base64-encoded gzipped string of item data.
		 */
		item_bytes: string;
	};
	type SkyblockBazaarSummary = {
		/**
		 * Number of items.
		 */
		amount: number;
		/**
		 * Price per item.
		 */
		pricePerUnit: number;
		/**
		 * Number of orders.
		 */
		orders: number;
	};
	type SkyblockBazaarQuickStatus = {
		/**
		 * The item ID of the product.
		 */
		productId: string;
		/**
		 * Current sell price based on weighted average of top 2% of orders by volume.
		 */
		sellPrice: number;
		/**
		 * Number of items being sold.
		 */
		sellVolume: number;
		/**
		 * Number of items put up for sale within the past week.
		 */
		sellMovingWeek: number;
		/**
		 * Number of active sell orders.
		 */
		sellOrders: number;
		/**
		 * Current buy price based on weighted average of top 2% of orders by volume.
		 */
		buyPrice: number;
		/**
		 * Number of items being bought.
		 */
		buyVolume: number;
		/**
		 * Number of items bought within the past week.
		 */
		buyMovingWeek: number;
		/**
		 * Number of active buy orders.
		 */
		buyOrders: number;
	};
	type SkyblockBazaar = {
		/**
		 * Item ID of the product.
		 */
		product_id: string;
		/**
		 * A summary of sell orders.
		 */
		sell_summary: SkyblockBazaarSummary[];
		/**
		 * A summary of buy orders.
		 */
		buy_summary: SkyblockBazaarSummary[];
		/**
		 * A summary of the product.
		 */
		quick_status: SkyblockBazaarQuickStatus;
	};
	type SkyblockInvitation = {
		/**
		 * A UNIX timestamp of when the invitation was sent.
		 */
		timestamp: number;
		/**
		 * The UUID of the inviter.
		 */
		invited_by: string;
		/**
		 * Whether the invitation has been confirmed.
		 */
		confirmed: boolean;
		/**
		 * A UNIX timestamp of when the invitation was confirmed.
		 */
		confirmed_timestamp: string;
	};
	type SkyblockObjective = {
		/**
		 * The status of the objective.
		 */
		status: 'ACTIVE' | 'COMPLETE';
		/**
		 * A decimal percent of the progress of the objective.
		 */
		progress: number;
		/**
		 * A UNIX timestamp of when the objective was completed.
		 */
		completed_at: number;
	};
	type SkyblockQuest = {
		/**
		 * The status of the objective.
		 */
		status: 'ACTIVE' | 'COMPLETE';
		/**
		 * A UNIX timestamp of when the objective was started.
		 */
		activated_at: number;
		/**
		 * ????
		 */
		activated_at_sb: number;
		/**
		 * A UNIX timestamp of when the objective was completed.
		 */
		completed_at: number;
		/**
		 * ????
		 */
		completed_at_sb: number;
	};
	type SkyblockPet = {
		/**
		 * The UUID of the pet.
		 */
		uuid: string | null;
		/**
		 * The type of the pet.
		 */
		type: string;
		/**
		 * The amount of pet experience.
		 */
		exp: number;
		/**
		 * Whether the pet is active.
		 */
		active: boolean;
		/**
		 * The pet tier.
		 */
		tier: string;
		/**
		 * The held item by the pet.
		 */
		heldItem: string;
		/**
		 * The amount of candy used by the pet.
		 */
		candyUsed: number;
		/**
		 * The skin of the pet.
		 */
		skin: string | null;
	};
	type SkyblockMember = {
		/**
		 * A UNIX timestamp of the last time that the data was saved.
		 */
		last_save: number;
		/**
		 * The player's armour data.
		 */
		inv_armor: HypixelBinaryData;
		/**
		 * The player's fishing bag data.
		 */
		fishing_bag: HypixelBinaryData;
		/**
		 * The player's quiver data.
		 */
		quiver: HypixelBinaryData;
		/**
		 * The player's ender chest data.
		 */
		ender_chest_contents: HypixelBinaryData;
		/**
		 * The player's wardrobe data.
		 */
		wardrobe_contents: HypixelBinaryData;
		/**
		 * The player's potion bag data.
		 */
		potion_bag: HypixelBinaryData;
		/**
		 * The player's personal vault data.
		 */
		personal_vault_contents: HypixelBinaryData;
		/**
		 * The player's inventory data.
		 */
		inv_contents: HypixelBinaryData;
		/**
		 * The player's talisman bag data.
		 */
		talisman_bag: HypixelBinaryData;
		/**
		 * The player's candy inventory data.
		 */
		candy_inventory_contents: HypixelBinaryData;
		/**
		 * The invitation attached to the member and island.
		 */
		coop_invitation: SkyblockInvitation;
		/**
		 * The first time that the player joined.
		 */
		first_join: number;
		/**
		 * ????
		 */
		first_join_hub: number;
		stats: any;
		/**
		 * A list of active or completed objectives.
		 */
		objectives: {
			[key: string]: SkyblockObjective;
		};
		/**
		 * The components of the tutorial that have been completed.
		 */
		tutorial: string[];
		/**
		 * A list of active or completed quests.
		 */
		quests: {
			[key: string]: SkyblockQuest;
		};
		/**
		 * The amount of money in the player's purse.
		 */
		coin_purse: number;
		/**
		 * A UNIX timestamp representing the time of their last death.
		 */
		last_death: number;
		/**
		 * A list of visited zones.
		 */
		visited_zones: string[];
		/**
		 * The number of fairy souls collected.
		 */
		fairy_souls_collected: number;
		/**
		 * Current fairy soul count.
		 */
		fairy_souls: number;
		/**
		 * The number of fairy exchanges.
		 */
		fairy_exchanges: number;
		slayer_bosses: any;
		/**
		 * The player's pets.
		 */
		pets: SkyblockPet[];
		dungeons: any;
		/**
		 * All crafted generators.
		 */
		crafted_generators: string[];
		/**
		 * The amount of fishing treasure caught.
		 */
		fishing_treasure_caught: number;
		/**
		 * Number of deaths.
		 */
		death_count: number;
		/**
		 * ????
		 */
		achievement_spawned_island_types: string[];
		slayer_quest: any;
		griffin: any;
		jacob2: any;
		experimentation: any;
		/**
		 * Experience gained in the runecrafting skill.
		 */
		experience_skill_runecrafting: number;
		/**
		 * Experience gained in the combat skill.
		 */
		experience_skill_combat: number;
		/**
		 * Experience gained in the mining skill.
		 */
		experience_skill_mining: number;
		/**
		 * Experience gained in the alchemy skill.
		 */
		experience_skill_alchemy: number;
		/**
		 * Experience gained in the farming skill.
		 */
		experience_skill_farming: number;
		/**
		 * Experience gained in the taming skill.
		 */
		experience_skill_taming: number;
		/**
		 * Experience gained in the enchanting skill.
		 */
		experience_skill_enchanting: number;
		/**
		 * Experience gained in the fishing skill.
		 */
		experience_skill_fishing: number;
		/**
		 * Experience gained in the foraging skill.
		 */
		experience_skill_foraging: number;
		/**
		 * Experience gained in the carpentry skill.
		 */
		experience_skill_carpentry: number;
		/**
		 * A list of all unlocked collection tiers.
		 */
		unlocked_coll_tiers: string[];
		/**
		 * The selected wardrobe slot.
		 */
		wardrobe_equipped_slot: number;
		/**
		 * A list of item counts for collections.
		 */
		collection: {
			[key: string]: number;
		};
		sacks_counts: any;
	};
	type SkyblockBankTransaction = {
		/**
		 * The number of coins moved in the transaction.
		 */
		amount: number;
		/**
		 * A UNIX timestamp of when the transaction occurred.
		 */
		timestamp: number;
		/**
		 * The transaction type.
		 */
		action: 'WITHDRAW' | 'DEPOSIT';
		/**
		 * The name of the player (including colour codes).
		 */
		initiator_name: string;
	};
	type SkyblockCommunityUpgrade = {
		/**
		 * The upgrade type.
		 */
		upgrade: string;
		/**
		 * The tier of the upgrade.
		 */
		tier: number;
		/**
		 * A UNIX timestamp of when the upgrade started.
		 */
		started_ms: number;
		/**
		 * The UUID of player that started the upgrade.
		 */
		started_by: string;
		/**
		 * A UNIX timestamp of when the upgrade was claimed.
		 */
		claimed_ms: number;
		/**
		 * The UUID of the player that claimed the upgrade.
		 */
		claimed_by: string;
		/**
		 * Whether the upgrade was fast-tracked.
		 */
		fasttracked: boolean;
	};
	type SkyblockProfile = {
		/**
		 * The profile UUID.
		 */
		profile_id: string;
		/**
		 * A list of island members.
		 */
		members: {
			[key: string]: SkyblockMember;
		};
		/**
		 * The name of the Skyblock realm.
		 */
		cute_name: string;
		/**
		 * A list of bank transactions.
		 */
		transactions: {
			balance: number;
			transactions: SkyblockBankTransaction[];
		};
		/**
		 * A list of community upgrades.
		 */
		community_upgrades: SkyblockCommunityUpgrade[];
		/**
		 * The game mode.
		 */
		game_mode: string;
	};

	class RequestManager {
		/**
		 * @param {string[] | string} keys The API key(s).
		 * @param {*} cacheFor The number of milliseconds to cache results.
		 */
		constructor(keys: string[] | string, cacheFor?: any);
		cache: Cache;
		waiting: Map<any, any>;
		keys: string[];
		nextKey: number;
		axios: any;
		/**
		 * Get the next API key in the list.
		 * @returns {string} A Hypixel API key.
		 * @private
		 */
		private rotate;
		/**
		 * Hide parts of an API key.
		 * @param {string} key The full API key.
		 * @returns {string} A censored API key.
		 * @private
		 */
		private hideKey;
		/**
		 * Send a request to the Hypixel API.
		 * @param {string} url The request URL.
		 * @param {{[key: string]: string}} params The query parameters.
		 * @param {string | boolean} automatic An API key to use.
		 * @returns {Promise<{ data: any, status: number, cached: number }>} The request results.
		 */
		request(url: string, params: {
			[key: string]: string;
		}): Promise<{
			data: any;
			status: number;
			cached: number;
		}>;
	}

	export class Util {
		static sleep(ms: any): Promise<any>;
	}
}