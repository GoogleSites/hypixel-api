import type nbt from 'prismarine-nbt';

declare module "hypixel-api-v2" {
    /**
     * @property uuid - A UUID.
     * @property displayname - A username.
     * @property rank - A staff or donator rank.
     * @property packageRank - A monthly rank.
     * @property newPackageRank - A monthly rank?
     * @property firstLogin - The first login in UNIX.
     * @property lastLogin - The last login in UNIX.
     * @property lastLogout - The last logout in UNIX.
     * @property stats - All player statistics.
     */
    type Player = {
        uuid: string;
        displayname: string;
        rank: string;
        packageRank: string;
        newPackageRank: string;
        firstLogin: number;
        lastLogin: number;
        lastLogout: number;
        networkExp: number;
        achievementPoints: number;
        stats: any;
        prefix?: string;
        monthlyPackageRank?: string;
        monthlyRankColor?: string;
        rankPlusColor?: string;
    };
    /**
     * @property _id - The internal MongoDB document identification number.
     * @property uuidSender - The UUID of the player that sent the friend request.
     * @property uuidReceiver - The UUID of the player that received the friend request.
     * @property started - A UNIX timestamp of the request time.
     */
    type FriendEntry = {
        _id: string;
        uuidSender: string;
        uuidReceiver: string;
        started: number;
    };
    /**
     * @property date - A UNIX timestamp of when the game started.
     * @property ended - A UNIX timestamp of when the game ended.
     * @property gameType - The game type.
     * @property mode - The game sub-genre.
     * @property map - The map that was played.
     */
    type GameEntry = {
        date: number;
        ended: number;
        gameType: string;
        mode: string;
        map: string;
    };
    /**
     * @property uuid - A UUID.
     * @property rank - Guild rank.
     * @property joined - A UNIX timestamp of when the user joined the guild.
     * @property questParticipation - ????
     * @property expHistory - Daily experience history.
     */
    type GuildMember = {
        uuid: string;
        rank: string;
        joined: number;
        questParticipation: number;
        expHistory: {
            [key: string]: number;
        };
    };
    /**
     * @property name - The name of the rank.
     * @property default - Whether the rank is given by default.
     * @property tag - ????
     * @property created - A UNIX timestamp of when the rank was created.
     * @property priority - The rank's position in the hierarchy.
     */
    type GuildRank = {
        name: string;
        default: boolean;
        tag: string | null;
        created: number;
        priority: number;
    };
    /**
     * @property _id - Guild identification key.
     * @property name - The name of the guild.
     * @property coins - Current number of coins.
     * @property coinsEver - Total number of coins attained.
     * @property created - A UNIX timestamp of the guild creation date.
     * @property members - A list of guild members.
     * @property legacyRanking - ????
     * @property exp - Guild experience.
     * @property achievements - A list of achievements.
     * @property name_lower - A lowercase version of the guild name.
     * @property ranks - A list of guild ranks.
     * @property description - The guild's description.
     * @property preferredGames - A list of preferred games.
     * @property tagColor - The tag colour in the tablist.
     * @property tag - The tag.
     * @property publiclyListed - Whether the guild is listed publicly.
     * @property guildExpByGameType - The guild experience received from each game.
     */
    type Guild = {
        _id: string;
        name: string;
        coins: number;
        coinsEver: number;
        created: number;
        members: GuildMember[];
        legacyRanking: number;
        exp: number;
        achievements: {
            [key: string]: number;
        };
        name_lower: string;
        ranks: GuildRank[];
        description: string;
        preferredGames: string[];
        tagColor: string;
        tag: string;
        publiclyListed: boolean;
        guildExpByGameType: {
            [key: string]: number;
        };
    };
    /**
     * @property name - The name of the achievement.
     * @property description - The description of the achievement.
     * @property points - The number of points received upon completion.
     * @property gamePercentUnlocked - The decimal percentage of players that have unlocked the achievement that have also played the game.
     * @property globalPercentUnlocked - The decimal percentage of players that have unlocked the achievement globally.
     */
    type OneTimeAchievement = {
        name: string;
        description: string;
        points: number;
        gamePercentUnlocked: number;
        globalPercentUnlocked: number;
    };
    /**
     * @property name - The name of the achievement.
     * @property description - The description of the achievement.
     * @property tiers - The achievement tiers.
     */
    type TieredAchievement = {
        name: string;
        description: string;
        tiers: { tier: number; points: number; amount: number; }[];
    };
    /**
     * @property one_time - One-time achievements.
     * @property tiered - Tiered achievements.
     * @property total_points - Total points gained from completing all achievements.
     * @property total_legacy_points - Total legacy points gained from completing all achievements.
     */
    type Achievement = {
        one_time: {
            [key: string]: OneTimeAchievement;
        };
        tiered: {
            [key: string]: TieredAchievement;
        };
        total_points: number;
        total_legacy_points: number;
    };
    /**
     * @property id - The challenge identification key.
     * @property name - The name of the challenge.
     * @property rewards - A list of challenge awards.
     */
    type Challenge = {
        id: string;
        name: string;
        rewards: { type: string; amount: number; }[];
    };
    /**
     * @property id - The quest identification key.
     * @property name - The name of the quest.
     * @property description - The description of the quest.
     * @property rewards - The rewards given after completing the quest.
     * @property objectives - The quest objectives.
     * @property requirements - The quest requirements.
     */
    type Quest = {
        id: string;
        name: string;
        description: string;
        rewards: { type: string; amount: number; }[];
        objectives: { id: string; type: string; integer: number; }[];
        requirements: { type: string; }[];
    };
    /**
     * @property name - The name of the permission.
     * @property description - The description of the permission.
     * @property item - The permission item in-game.
     */
    type GuildPermission = {
        name: string;
        description: string;
        item: any;
    };
    /**
     * @property tier - The tier number.
     * @property amountRequired - The required number of a certain item to complete the collection tier.
     * @property unlocks - The rewards for completing the tier.
     */
    type SkyblockCollectionTier = {
        tier: number;
        amountRequired: number;
        unlocks: string[];
    };
    /**
     * @property name - The name of the collection.
     * @property maxTiers - The maximum number of tiers in the collection.
     * @property tiers - The collection tiers.
     */
    type SkyblockCollection = {
        name: string;
        maxTiers: number;
        tiers: SkyblockCollectionTier[];
    };
    /**
     * @property level - The skill level.
     * @property totalExpRequired - The experience required to reach the level.
     * @property unlocks - The rewards for completing the level.
     */
    type SkyblockSkillTier = {
        level: number;
        totalExpRequired: number;
        unlocks: string[];
    };
    /**
     * @property name - The skill name.
     * @property description - The skill description.
     * @property maxLevel - The maximum level of the skill.
     * @property levels - The skill levels.
     */
    type SkyblockSkill = {
        name: string;
        description: string;
        maxLevel: number;
        levels: SkyblockSkillTier[];
    };
    /**
     * @property item - The item displayed in the Minecraft inventory.
     * @property link - The link to the news thread.
     * @property text - The date of the news.
     * @property title - The title of the news.
     */
    type SkyblockNews = {
        item: any;
        link: string;
        text: string;
        title: string;
    };
    /**
     * @property auction_id - The UUID of the auction.
     * @property bidder - The UUID of the bidder.
     * @property profile_id - The profile id of the bidder.
     * @property amount - The bid amount.
     * @property timestamp - A UNIX timestamp of when the bid was placed.
     */
    type AuctionBid = {
        auction_id: string;
        bidder: string;
        profile_id: string;
        amount: number;
        timestamp: number;
    };
    /**
     * @property _id - The internal MongoDB document id.
     * @property uuid - The auction UUID.
     * @property auctioneer - The UUID of the player that auctioned the item.
     * @property profile_id - The profile UUID of the player that auctioned the item.
     * @property start - A UNIX timestamp of when the auction started.
     * @property end - A UNIX timestamp of when the auction ends.
     * @property item_name - The name of the item.
     * @property item_lore - The lore of the item.
     * @property extra - Extra information about the item.
     * @property category - The category of the auction.
     * @property tier - The tier of the item.
     * @property starting_bid - The starting bidding price.
     * @property item_bytes - The item data.
     * @property claimed - Whether the auction has been claimed.
     * @property claimed_bidders - A UUID list of all bidders.
     * @property highest_bid_amount - The highest bid.
     * @property bids - The auction bids.
     */
    type Auction = {
        _id: string;
        uuid: string;
        auctioneer: string;
        profile_id: string;
        start: number;
        end: number;
        item_name: string;
        item_lore: string;
        extra: string;
        category: string;
        tier: string;
        starting_bid: number;
        item_bytes: string;
        claimed: boolean;
        claimed_bidders: string[];
        highest_bid_amount: number;
        bids: AuctionBid[];
    };
    /**
     * @property auction_id - The UUID of the auction.
     * @property seller - The UUID of the player that auctioned the item.
     * @property seller_profile - The profile UUID of the player that auctioned the item.
     * @property buyer - The UUID of the buyer.
     * @property timestamp - A UNIX timestamp of the time that the item was bought.
     * @property price - The sell price of the item.
     * @property bin - Whether the item was purchased through Buy-It-Now.
     * @property item_bytes - A base64-encoded gzipped string of item data.
     */
    type EndedAuction = {
        auction_id: string;
        seller: string;
        seller_profile: string;
        buyer: string;
        timestamp: number;
        price: number;
        bin: boolean;
        item_bytes: string;
    };
    /**
     * @property amount - Number of items.
     * @property pricePerUnit - Price per item.
     * @property orders - Number of orders.
     */
    type SkyblockBazaarSummary = {
        amount: number;
        pricePerUnit: number;
        orders: number;
    };
    /**
     * @property productId - The item ID of the product.
     * @property sellPrice - Current sell price based on weighted average of top 2% of orders by volume.
     * @property sellVolume - Number of items being sold.
     * @property sellMovingWeek - Number of items put up for sale within the past week.
     * @property sellOrders - Number of active sell orders.
     * @property buyPrice - Current buy price based on weighted average of top 2% of orders by volume.
     * @property buyVolume - Number of items being bought.
     * @property buyMovingWeek - Number of items bought within the past week.
     * @property buyOrders - Number of active buy orders.
     */
    type SkyblockBazaarQuickStatus = {
        productId: string;
        sellPrice: number;
        sellVolume: number;
        sellMovingWeek: number;
        sellOrders: number;
        buyPrice: number;
        buyVolume: number;
        buyMovingWeek: number;
        buyOrders: number;
    };
    /**
     * @property product_id - Item ID of the product.
     * @property sell_summary - A summary of sell orders.
     * @property buy_summary - A summary of buy orders.
     * @property quick_status - A summary of the product.
     */
    type SkyblockBazaar = {
        product_id: string;
        sell_summary: SkyblockBazaarSummary[];
        buy_summary: SkyblockBazaarSummary[];
        quick_status: SkyblockBazaarQuickStatus;
    };
    /**
     * @property timestamp - A UNIX timestamp of when the invitation was sent.
     * @property invited_by - The UUID of the inviter.
     * @property confirmed - Whether the invitation has been confirmed.
     * @property confirmed_timestamp - A UNIX timestamp of when the invitation was confirmed.
     */
    type SkyblockInvitation = {
        timestamp: number;
        invited_by: string;
        confirmed: boolean;
        confirmed_timestamp: string;
    };
    /**
     * @property status - The status of the objective.
     * @property progress - A decimal percent of the progress of the objective.
     * @property completed_at - A UNIX timestamp of when the objective was completed.
     */
    type SkyblockObjective = {
        status: 'ACTIVE' | 'COMPLETE';
        progress: number;
        completed_at: number;
    };
    /**
     * @property status - The status of the objective.
     * @property activated_at - A UNIX timestamp of when the objective was started.
     * @property activated_at_sb - ????
     * @property completed_at - A UNIX timestamp of when the objective was completed.
     * @property completed_at_sb - ????
     */
    type SkyblockQuest = {
        status: 'ACTIVE' | 'COMPLETE';
        activated_at: number;
        activated_at_sb: number;
        completed_at: number;
        completed_at_sb: number;
    };
    /**
     * @property uuid - The UUID of the pet.
     * @property type - The type of the pet.
     * @property exp - The amount of pet experience.
     * @property active - Whether the pet is active.
     * @property tier - The pet tier.
     * @property heldItem - The held item by the pet.
     * @property candyUsed - The amount of candy used by the pet.
     * @property skin - The skin of the pet.
     */
    type SkyblockPet = {
        uuid: string | null;
        type: string;
        exp: number;
        active: boolean;
        tier: string;
        heldItem: string;
        candyUsed: number;
        skin: string | null;
    };
    /**
     * @property last_save - A UNIX timestamp of the last time that the data was saved.
     * @property inv_armor - The player's armour data.
     * @property fishing_bag - The player's fishing bag data.
     * @property quiver - The player's quiver data.
     * @property ender_chest_contents - The player's ender chest data.
     * @property wardrobe_contents - The player's wardrobe data.
     * @property potion_bag - The player's potion bag data.
     * @property personal_vault_contents - The player's personal vault data.
     * @property inv_contents - The player's inventory data.
     * @property talisman_bag - The player's talisman bag data.
     * @property candy_inventory_contents - The player's candy inventory data.
     * @property coop_invitation - The invitation attached to the member and island.
     * @property first_join - The first time that the player joined.
     * @property first_join_hub - ????
     * @property objectives - A list of active or completed objectives.
     * @property tutorial - The components of the tutorial that have been completed.
     * @property quests - A list of active or completed quests.
     * @property coin_purse - The amount of money in the player's purse.
     * @property last_death - A UNIX timestamp representing the time of their last death.
     * @property visited_zones - A list of visited zones.
     * @property fairy_souls_collected - The number of fairy souls collected.
     * @property fairy_souls - Current fairy soul count.
     * @property fairy_exchanges - The number of fairy exchanges.
     * @property pets - The player's pets.
     * @property crafted_generators - All crafted generators.
     * @property fishing_treasure_caught - The amount of fishing treasure caught.
     * @property death_count - Number of deaths.
     * @property achievement_spawned_island_types - ????
     * @property experience_skill_runecrafting - Experience gained in the runecrafting skill.
     * @property experience_skill_combat - Experience gained in the combat skill.
     * @property experience_skill_mining - Experience gained in the mining skill.
     * @property experience_skill_alchemy - Experience gained in the alchemy skill.
     * @property experience_skill_farming - Experience gained in the farming skill.
     * @property experience_skill_taming - Experience gained in the taming skill.
     * @property experience_skill_enchanting - Experience gained in the enchanting skill.
     * @property experience_skill_fishing - Experience gained in the fishing skill.
     * @property experience_skill_foraging - Experience gained in the foraging skill.
     * @property experience_skill_carpentry - Experience gained in the carpentry skill.
     * @property unlocked_coll_tiers - A list of all unlocked collection tiers.
     * @property wardrobe_equipped_slot - The selected wardrobe slot.
     * @property collection - A list of item counts for collections.
     */
    type SkyblockMember = {
        last_save: number;
        inv_armor: HypixelBinaryData;
        fishing_bag: HypixelBinaryData;
        quiver: HypixelBinaryData;
        ender_chest_contents: HypixelBinaryData;
        wardrobe_contents: HypixelBinaryData;
        potion_bag: HypixelBinaryData;
        personal_vault_contents: HypixelBinaryData;
        inv_contents: HypixelBinaryData;
        talisman_bag: HypixelBinaryData;
        candy_inventory_contents: HypixelBinaryData;
        coop_invitation: SkyblockInvitation;
        first_join: number;
        first_join_hub: number;
        stats: any;
        objectives: {
            [key: string]: SkyblockObjective;
        };
        tutorial: string[];
        quests: {
            [key: string]: SkyblockQuest;
        };
        coin_purse: number;
        last_death: number;
        visited_zones: string[];
        fairy_souls_collected: number;
        fairy_souls: number;
        fairy_exchanges: number;
        pets: SkyblockPet[];
        dungeons: any;
        crafted_generators: string[];
        fishing_treasure_caught: number;
        death_count: number;
        achievement_spawned_island_types: string[];
        slayer_quest: any;
        slayer_bosses: any;
        griffin: any;
        jacob2: any;
        experimentation: any;
        experience_skill_runecrafting: number;
        experience_skill_combat: number;
        experience_skill_mining: number;
        experience_skill_alchemy: number;
        experience_skill_farming: number;
        experience_skill_taming: number;
        experience_skill_enchanting: number;
        experience_skill_fishing: number;
        experience_skill_foraging: number;
        experience_skill_carpentry: number;
        unlocked_coll_tiers: string[];
        wardrobe_equipped_slot: number;
        collection: {
            [key: string]: number;
        };
        sacks_counts: any;
    };
    /**
     * @property amount - The number of coins moved in the transaction.
     * @property timestamp - A UNIX timestamp of when the transaction occurred.
     * @property action - The transaction type.
     * @property initiator_name - The name of the player (including colour codes).
     */
    type SkyblockBankTransaction = {
        amount: number;
        timestamp: number;
        action: 'WITHDRAW' | 'DEPOSIT';
        initiator_name: string;
    };
    /**
     * @property upgrade - The upgrade type.
     * @property tier - The tier of the upgrade.
     * @property started_ms - A UNIX timestamp of when the upgrade started.
     * @property started_by - The UUID of player that started the upgrade.
     * @property claimed_ms - A UNIX timestamp of when the upgrade was claimed.
     * @property claimed_by - The UUID of the player that claimed the upgrade.
     * @property fasttracked - Whether the upgrade was fast-tracked.
     */
    type SkyblockCommunityUpgrade = {
        upgrade: string;
        tier: number;
        started_ms: number;
        started_by: string;
        claimed_ms: number;
        claimed_by: string;
        fasttracked: boolean;
    };
    /**
     * @property profile_id - The profile UUID.
     * @property members - A list of island members.
     * @property cute_name - The name of the Skyblock realm.
     * @property transactions - A list of bank transactions.
     * @property community_upgrades - A list of community upgrades.
     * @property game_mode - The game mode.
     */
    type SkyblockProfile = {
        profile_id: string;
        members: {
            [key: string]: SkyblockMember;
        };
        cute_name: string;
        transactions: any;
        community_upgrades: SkyblockCommunityUpgrade[];
        game_mode: string;
    };
    /**
     * @property _id - The MongoDB internal identiciaton key of the document.
     * @property purchaserUuid - The UUID of the player that activated the booster.
     * @property amount - The booster multiplier.
     * @property originalLength - The length of the booster when it started (in seconds).
     * @property length - The remaining time for the booster in seconds.
     * @property gameType - The game that the booster is for.
     * @property dateActivated - A UNIX timestamp of when the booster was activated.
     * @property stacked - Whether the booster stacked on another one, or the players that have stacked the booster.
     */
    type Booster = {
        _id: string;
        purchaserUuid: string;
        amount: number;
        originalLength: number;
        length: number;
        gameType: number;
        dateActivated: number;
        stacked: string[] | boolean | undefined;
    };
    /**
     * @property players - The number of players playing the game.
     * @property modes - The number of players in each sub-genre of the game mode.
     */
    type GameCount = {
        players: number;
        modes: {
            [key: string]: number;
        };
    };
    /**
     * @property path - The leaderboard type.
     * @property prefix - The leaderboard timespan.
     * @property title - The title of the leaderboard.
     * @property location - The leaderboard location (X,Y,Z).
     * @property count - The number of players on the leaderboard.
     * @property leaders - The player UUIDs on the leaderboard.
     */
    type Leaderboard = {
        path: string;
        prefix: string;
        title: string;
        location: string;
        count: number;
        leaders: string[];
    };
    /**
     * @property watchdog_lastMinute - Watchdog bans in the past minute.
     * @property staff_rollingDaily - Staff bans in the past day.
     * @property watchdog_total - Total Watchdog bans.
     * @property watchdog_rollingDaily - Watchdog bans in the past day.
     * @property staff_total - Total staff bans.
     */
    type Punishments = {
        watchdog_lastMinute: number;
        staff_rollingDaily: number;
        watchdog_total: number;
        watchdog_rollingDaily: number;
        staff_total: number;
    };
    /**
     * @param keys - The API key(s).
     * @param cacheFor - The number of milliseconds to cache results.
     */
    class HypixelAPI {
        constructor(keys: string[] | string, cacheFor?: number);
        /**
         * Retrieve a username from a UUID.
         * @param uuid - A player UUID.
         * @returns The username attached to the UUID.
         */
        getUsername(uuid: string): Promise<string>;
        /**
         * Retrieve a UUID from a username.
         * @param username - A player username.
         * @returns The UUID attached to the username.
         */
        getUUID(username: string): Promise<string>;
        /**
         * Retrieve a UUID and username from a UUID or username.
         * @param username - A player username or UUID.
         * @returns A username and UUID.
         */
        getUsernameAndUUID(username: string): Promise<{ uuid: string; username: string; }>;
        /**
         * Retrieve information about an API key.
         * @param key - A Hypixel API key.
         * @returns API key information.
         */
        key(key: string): Promise<{ key: string; owner: string; limit: number; queriesInPastMin: number; totalQueries: number; }>;
        /**
         * Retrieve a player's statistics.
         * @param query - A username or UUID.
         * @returns A player.
         */
        player(query: string): Promise<Player>;
        /**
         * Retrieve a player's friends list.
         * @param query - A username or UUID.
         * @returns The friend list.
         */
        friends(query: string): Promise<FriendEntry[]>;
        /**
         * Retrieve a player's recent games.
         * @param query - A username or UUID.
         * @returns Up to 100 recent games played.
         */
        recentGames(query: string): Promise<GameEntry[]>;
        /**
         * Retrieve information about a player's session.
         * @param query - A username or UUID.
         * @returns The session information.
         */
        status(query: string): Promise<{ online: true; gameType: string; mode: string; map: string; } | { online: false; }>;
        /**
         * Retrieve information about a guild.
         * @param query - The guild id, guild name, or the uuid of a guild member.
         * @returns The guild.
         */
        guild(query: string): Promise<Guild>;
        /**
         * Retrieve a list of all possible achievements.
         * @returns A list of all possible achievements.
         */
        resources_achievements(): Promise<{
            [key: string]: Achievement;
        }>;
        /**
         * Retrieve a list of all possible challenges.
         * @returns A list of all possible challenges.
         */
        resources_challenges(): Promise<{
            [key: string]: Challenge[];
        }>;
        /**
         * Retrieve a list of all possible quests.
         * @returns A list of all possible quests.
         */
        resources_quests(): Promise<{
            [key: string]: Quest[];
        }>;
        /**
         * Retrieve a list of all possible guild achievements.
         * @returns A list of all possible guild achievements.
         */
        resources_guilds_achievements(): Promise<{ one_time: OneTimeAchievement[]; tiered: TieredAchievement[]; }>;
        /**
         * Retrieve a list of all possible guild permissions.
         * @returns A list of all possible guild permissions.
         */
        resources_guilds_permissions(): Promise<{ en_us: GuildPermission; }[]>;
        /**
         * Retrieves a list of all Skyblock collections.
         * @returns A list of all Skyblock collections.
         */
        resources_skyblock_collections(): Promise<{
            [key: string]: { name: string; items: {
                [key: string]: SkyblockCollection;
            }; };
        }>;
        /**
         * Retrieves a list of all Skyblock skills.
         * @returns A list of all Skyblock skills.
         */
        resources_skyblock_skills(): Promise<{
            [key: string]: SkyblockSkill;
        }>;
        /**
         * Retrieves a list of Skyblock news.
         * @returns A list of Skyblock news.
         */
        skyblock_news(): Promise<SkyblockNews[]>;
        /**
         * Retrieves a list of auctions by player UUID, auction UUID, or profile UUID.
         * @param uuid - The UUID.
         * @param type - The type of UUID to query.
         * @returns A list of auctions.
         */
        skyblock_auction(uuid: string, type?: 'uuid' | 'player' | 'profile'): Promise<Auction[]>;
        /**
         * Retrieves a list of auctions and global auction statistics.
         * @param page - The auction page number.
         * @returns A list of auctions and global auction statistics.
         */
        skyblock_auctions(page: number): Promise<{ page: number; totalPages: number; totalAuctions: number; lastUpdated: number; auctions: Auction[]; }>;
        /**
         * Retrieves a list of auctions that have ended.
         * @returns A list of auctions that have ended.
         */
        skyblock_auctions_ended(): Promise<{ lastUpdated: number; auctions: EndedAuction[]; }>;
        /**
         * Retrieves a list of all items listed on the bazaar.
         * @returns A list of all items listed on the bazaar.
         */
        skyblock_bazaar(): Promise<{
            [key: string]: SkyblockBazaar;
        }>;
        /**
         * Retrieves a Skyblock profile.
         * @param query - A profile UUId.
         * @returns A Skyblock profile.
         */
        skyblock_profile(query: string): Promise<SkyblockProfile>;
        /**
         * Retrieves a list of profiles attached to a user.
         * @param query - A UUID or username.
         * @returns A list of profiles attached to the player.
         */
        skyblock_profiles(query: string): Promise<SkyblockProfile[]>;
        /**
         * Retrieves a list of active boosters.
         * @returns A list of active boosters.
         */
        boosters(): Promise<Booster[]>;
        /**
         * Retrieves a list of player count information.
         * @returns A list of playercounts per game, along with the total player count.
         */
        counts(): Promise<{ playerCount: number; games: {
            [key: string]: GameCount;
        }; }>;
        /**
         * Retrieves all leaderboards.
         * @returns A list of all leaderboards.
         */
        leaderboards(): Promise<{
            [key: string]: Leaderboard[];
        }>;
        /**
         * Retrieves current punishment statistics.
         * @returns Current punishment statistics.
         */
        punishmentStats(): Promise<Punishments>;
    }
    /**
     * @param keys - The API key(s).
     * @param cacheFor - The number of milliseconds to cache results.
     */
    class RequestManager {
        constructor(keys: string[] | string, cacheFor?: number);
        /**
         * Send a request to the Hypixel API.
         * @param url - The request URL.
         * @param params - The query parameters.
         * @param automatic - An API key to use.
         * @param skipCache - Whether to skip the cache.
         * @returns The request results.
         */
        request(url: string, params: {
            [key: string]: string;
        }, automatic: string | boolean, skipCache: boolean): Promise<{ data: any; status: number; cached: number; }>;
    }
    /**
     * @property type - The type of data (usually 0).
     * @property data - A base64-encoded and gzipped string of data.
     */
    type HypixelBinaryData = {
        type: number;
        data: string;
    };
    class Util {
        constructor();
        /**
         * Returns a promise that resolves after a certain number of milliseconds.
         * @param ms - Number of milliseconds to sleep.
         * @returns The promise.
         */
        static sleep(ms: number): Promise<true>;
        /**
         * Decompresses the base64-encoded and gzipped data from Hypixel and parses it into NBT.
         * @param data - The data to parse.
         * @returns The parsed NBT data.
         */
        static decompressToNBT(data: HypixelBinaryData): Promise<nbt.NBT>;
        /**
         * Converts catacomb experience into a level.
         * @param experience - The amount of catacomb experience.
         * @returns The catacomb level.
         */
        static calculateCatacombLevel(experience: number): number;
        /**
         * Converts network experience into a network level.
         * @param experience - The amount of network experience.
         * @returns The network level.
         */
        static networkLevel(experience: number): number;
        /**
         * Converts network level into network experience.
         * @param experience - The network level.
         * @returns The network experience required for that level.
         */
        static networkExperience(experience: number): number;
    }
}

