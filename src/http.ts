const defaults = require('lodash.defaultsdeep');
import { replacer } from './utils/dateStringify';
import fetch from 'node-fetch';

// client library defaults
const requestDefaults = {
    timeout: 15000,
    compress: true, // allow gzip
    follow: 2, // max 2 redirects
    baseUrl: 'https://api.useast1.badgeup.io', // default API endpoint
    headers: {
        'User-Agent': 'badgeup-js-client/0.9.x (https://badgeup.io/)',
        'Accept': 'application/json'
    }
};

export class BadgeUpHttp {

    globalReqOpts;

    /**
     * Constructor for the HTTP stack for BadgeUp
     * @param {object} globalReqOpts Options from the user for BadgeUp as a whole.
     */
    constructor(globalReqOpts) {
        this.globalReqOpts = globalReqOpts || {};
    }

    /**
     * Performs a HTTP request given the collective options
     * @param {object} reqOpts Request options from this library's functions.
     * @param {object} userOpts Option overrides from the user. Highest priority.
     * @return {Promise} Returns a Promise that resolves with the request data
     */
    makeRequest(reqOpts, userOpts): Promise<any> {
        const options = defaults({}, userOpts, reqOpts, this.globalReqOpts, requestDefaults);

        // for internal unit tests
        if (options._validate) {
            options._validate(options);
        }

        // for internal unit tests
        if (options._payload) {
            return Promise.resolve(options._payload(options));
        }

        if (!options.baseUrl && !options.url) {
            throw new TypeError('options.baseUrl or options.url must be provided and must be a string');
        }

        if (options.body && (typeof options.body === 'object' || Array.isArray(options.body))) {

            // set headers
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/json';

            // stringify dates to include timezones
            options.body = JSON.stringify(options.body, replacer);
        }

        // build the URL
        let url = options.url || '';
        url = options.baseUrl ? options.baseUrl + url : url;
        delete options.baseUrl;
        delete options.url;

        return fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            });
    }

}
