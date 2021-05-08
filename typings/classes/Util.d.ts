/// <reference types="prismarine-nbt" />
export = Util;
/**
 * @typedef HypixelBinaryData
 * @type {Object}
 * @property {number} type The type of data (usually 0).
 * @property {string} data A base64-encoded and gzipped string of data.
 */
declare class Util {
    /**
     * Returns a promise that resolves after a certain number of milliseconds.
     * @param {number} ms Number of milliseconds to sleep.
     * @returns {Promise<true>} The promise.
     */
    static sleep(ms: number): Promise<true>;
    /**
     * Decompresses the base64-encoded and gzipped data from Hypixel and parses it into NBT.
     * @param {HypixelBinaryData} data The data to parse.
     * @returns {Promise<nbt.NBT>} The parsed NBT data.
     */
    static decompressToNBT({ data, type }: HypixelBinaryData): Promise<import("prismarine-nbt").NBT>;
    /**
     * Converts catacomb experience into a level.
     * @param {number} experience The amount of catacomb experience.
     * @returns {number} The catacomb level.
     */
    static calculateCatacombLevel(experience: number): number;
    /**
     * Converts network experience into a network level.
     * @param {number} experience The amount of network experience.
     * @returns {number} The network level.
     */
    static networkLevel(experience: number): number;
    /**
     * Converts network level into network experience.
     * @param {number} experience The network level.
     * @returns {number} The network experience required for that level.
     */
    static networkExperience(level: any): number;
}
declare namespace Util {
    export { HypixelBinaryData };
}
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
