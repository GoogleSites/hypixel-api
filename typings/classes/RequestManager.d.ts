export = RequestManager;
declare class RequestManager {
    /**
     * @param {string[] | string} keys The API key(s).
     * @param {number} cacheFor The number of milliseconds to cache results.
     */
    constructor(keys?: string[] | string, cacheFor?: number);
    cache: import("node-cache");
    waiting: Map<any, any>;
    i: number;
    keys: string[];
    nextKey: number;
    axios: any;
    /**
     *
     * @returns {true}
     * @private
     */
    private noop;
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
     * @param {Object.<string, string>} params The query parameters.
     * @param {string | boolean} automatic An API key to use.
     * @param {boolean} skipCache Whether to skip the cache.
     * @returns {Promise<{ data: any, status: number, cached: number }>} The request results.
     */
    request(url: string, params?: {
        [x: string]: string;
    }, skipCache?: boolean): Promise<{
        data: any;
        status: number;
        cached: number;
    }>;
}
