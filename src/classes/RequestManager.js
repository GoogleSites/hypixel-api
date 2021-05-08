/** @module hypixel-api-v2 */

const axios = require('axios');
const Cache = require('node-cache');

const Util = require('./Util');

const KEY_REGEX = /^[a-z0-9]{8}-[a-z0-9]{4}-4[a-z0-9]{3}-[a-z0-9]{4}-[a-z0-9]{12}$/;

class RequestManager {
  /**
   * @param {string[] | string} keys The API key(s).
   * @param {number} cacheFor The number of milliseconds to cache results.
   */
	constructor(keys = [], cacheFor = 300000) {
		this.cache = new Cache({ stdTTL: Math.ceil(cacheFor / 1000), checkperiod: 120 });
    this.waiting = new Map();
    this.i = 0;

    this.keys = typeof keys === 'string' ? [ keys ] : keys;
		this.nextKey = -1;

		this.axios = axios.create({
			validateStatus: this.noop,
			adapter: async config => {
        const key = `${config.baseURL ?? ''}${config.url}${JSON.stringify(config.params ?? {})}`;

        if (config.force !== true) {
          const cache = this.cache.get(key);

          if (cache)
            return cache;
        }

        const waiting = this.waiting.get(key);
        
        if (waiting) {
          return waiting;
        } else {
          this.waiting.set(key, axios.default.get(`${config.baseURL ?? ''}${config.url}`, {
            params: config.params,
            headers: config.headers,
            validateStatus: this.noop
          }));
        }

        const response = await this.waiting.get(key);
        const set = { data: response.data, headers: response.headers, status: response.status, cached: Date.now() };

        this.waiting.delete(key);

        if (axios.defaults.validateStatus(response.status))
          this.cache.set(key, set);

        return set;
      }
		});

    if (keys.length === 0)
      throw 'No Hypixel API keys provided.';

    for (const key of this.keys) {
      if (KEY_REGEX.test(key) === false)
        throw `Invalid API key provided: ${key}`;
    }
	}

  /**
   * 
   * @returns {true}
   * @private
   */
  noop() {
    return true;
  }

  /**
   * Get the next API key in the list.
   * @returns {string} A Hypixel API key.
   * @private
   */
  rotate() {
    return this.keys[++this.nextKey % this.keys.length];
  }

  /**
   * Hide parts of an API key.
   * @param {string} key The full API key.
   * @returns {string} A censored API key.
   * @private
   */
  hideKey(key) {
    return `********-****-****-****-${key.slice(-12)}`
  }

  /**
   * Send a request to the Hypixel API.
   * @param {string} url The request URL.
   * @param {Object.<string, string>} params The query parameters.
   * @param {string | boolean} automatic An API key to use.
   * @param {boolean} skipCache Whether to skip the cache.
   * @returns {Promise<{ data: any, status: number, cached: number }>} The request results.
   */
  async request(url, params = {}, skipCache = false) {
    if (typeof params.key === 'string' && KEY_REGEX.test(params.key) === false)
      throw 'Invalid API key provided.';

    const key = params.key === null ? undefined : typeof params.key === 'string' ? params.key : this.rotate();

    delete params.key;

    const response = await this.axios.get(url, {
      baseURL: 'https://api.hypixel.net',
      force: skipCache,
      params, headers: key ? {
        'API-Key': key
      } : {}
    });

    if (response.status === 403) {
      throw 'Invalid API key provided.';
    }

    if (response.data.success === false) {
      if (response.headers['retry-after'] || response.status === 429) {
        await Util.sleep((response.headers['retry-after'] ?? 60) * 1000 + 1000);

        params.key = key;

        return this.request(url, params);
      }

      throw `${this.hideKey(key)}: ${response.data.cause}`;
    }

    return response;
  }
}

module.exports = RequestManager;