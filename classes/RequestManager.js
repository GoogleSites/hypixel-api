const axios = require('axios');
const Cache = require('node-cache');

const Util = require('./Util');

const KEY_REGEX = /^[a-z0-9]{8}-[a-z0-9]{4}-4[a-z0-9]{3}-[a-z0-9]{4}-[a-z0-9]{12}$/;

module.exports = class RequestManager {
  /**
   * @param {string[] | string} keys The API key(s).
   * @param {*} cacheFor The number of milliseconds to cache results.
   */
	constructor(keys, cacheFor = 300000) {
		this.cache = new Cache({ stdTTL: cacheFor, checkperiod: 120 });
    this.waiting = new Map();

    this.keys = typeof keys === 'string' ? [ keys ] : keys;
		this.nextKey = -1;

		this.axios = axios.create({
			validateStatus: () => true,
			adapter: async config => {
        const key = `${config.baseURL ?? ''}${config.url}${JSON.stringify(config.params ?? {})}`;
        const active = await this.waiting.get(key);

        if (active) {
          return active;
        }

        if (config.force !== true) {
          const cached = this.cache.get(key);

          if (cached) {
            return cached;
          }
        }

        this.waiting.set(key, axios.default.get(`${config.baseURL ?? ''}${config.url}`, {
          params: config.params,
          headers: config.headers,
          validateStatus: () => true
        }));

        const response = await this.waiting.get(key);

        this.waiting.delete(key);
        this.cache.set(key, { data: response.data, status: response.status, cached: Date.now() });

        return this.cache.get(key);
      }
		});

    if (keys.length === 0)
      throw new Error('No Hypixel API keys provided.');

    for (const key of this.keys) {
      if (KEY_REGEX.test(key) === false)
        throw new Error(`Invalid API key provided: ${key}`);
    }
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
   * @param {{ [key: string]: string }} params The query parameters.
   * @param {string | boolean} automatic An API key to use.
   * @returns {Promise<{ data: any, status: number, cached: number }>} The request results.
   */
  async request(url, params = {}) {
    const key = params?.key === null ? undefined : this.rotate();

    const response = await this.axios.get(url, {
      baseURL: 'https://api.hypixel.net',
      params, headers: {
        'API-Key': key
      },
      validateStatus: () => true
    });

    if (response.status === 403) {
      throw 'Invalid API key provided.';
    }

    if (response.data.success === false) {
      if (response.headers['retry-after'] && typeof params.key !== 'string') {
        await Util.sleep(response.headers['retry-after'] * 1000 + 1000);

        params.key = key;

        return this.request(url, params);
      }

      throw `${this.hideKey(key)}${response.data.cause ?? 'Unknown error'}`;
    }

    return response;
  }
}