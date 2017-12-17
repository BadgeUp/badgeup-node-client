'use strict';

import nodeFetch from 'node-fetch';

export default function fetch() {
    if (process.browser) {
        return fetch(arguments);
    } else {
        return nodeFetch(arguments);
    }
}
