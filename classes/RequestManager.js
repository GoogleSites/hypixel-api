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
			baseURL: 'https://api.hypixel.net',
			validateStatus: () => true,
			adapter: async config => {
        if (config.force !== true) {
          const response = await this.waiting.get(key);

          if (response)
            return response;
        }

        this.waiting.set(key, () => this.request(`${config.baseURL ?? ''}${config.url}`, config.params));

        const response = await this.waiting.get(key);
        delete this.waiting[key];

        return { data: response.data, status: response.status, cached: false };
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
   * @param {{[key: string]: string}} params The query parameters.
   * @param {string | boolean} automatic An API key to use.
   * @returns {Promise<{ data: any, status: number, cached: number }>} The request results.
   */
  async request(url, params) {
    const key = params.key ?? this.rotate();
    const { data, status, headers } = await axios.default.get(url, {
      params, headers: {
        'API-Key': key,
        'User-Agent': '@googlesites/hypixel-api-v2'
      },
      validateStatus: () => true
    });

    if (status === 403) {
      throw 'Invalid API key provided.';
    }

    if (data.success === false) {
      if (headers['retry-after'] && typeof params.key !== 'string') {
        await Util.sleep(headers['retry-after'] * 1000 + 1000);

        params.key = key;

        return this.request(url, params);
      }

      throw `${this.hideKey(key)}${data.cause ?? 'Unknown error'}`;
    }

    return this.cache.set(key, { data, status, cached: Date.now() }).get(key);
  }
}