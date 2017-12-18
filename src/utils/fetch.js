'use strict';

const nodeFetch = require('node-fetch');

module.exports = function() {
    if (process.browser) {
        return window.fetch.apply(this, arguments);
    } else {
        return nodeFetch.apply(this, arguments);
    }
};
