'use strict';

import nodeFetch from 'node-fetch';

export default function fetch() {
    if (process.browser) {
        return fetch.call(this, ...arguments);
    } else {
        return nodeFetch.call(this, ...arguments);
    }
}
