'use strict';

export default function base64Encode(string) {
    if (process.browser) {
        return btoa(string);
    } else {
        return Buffer.from(string, 'ascii').toString('base64');
    }
}
