'use strict';

const nodeFetch = require('node-fetch');

module.exports = function fetch() {
    if (process.browser) {
        return fetch.call(this, ...arguments);
    } else {
        return nodeFetch.call(this, ...arguments);
    }
};
