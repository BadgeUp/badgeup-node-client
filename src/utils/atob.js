'use strict';

export default function base64Decode(string) {
    if (process.browser) {
        return atob(string);
    } else {
        return Buffer.from(string, 'base64').toString('utf8');
    }
}
