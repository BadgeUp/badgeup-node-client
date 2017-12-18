'use strict';

const nodeFetch = require('node-fetch');

module.exports = function fetch() {
    if (process.browser) {
        return fetch.apply(this, arguments);
    } else {
        return nodeFetch.apply(this, arguments);
    }
};
