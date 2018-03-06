const pickBy = require('lodash.pickby');
const includes = require('lodash.includes');

export function collectQueryParams(source, keys: string[]) {
    return pickBy(source, function(value, key) {
        // TODO switch to Array.prototype.includes when we drop support for Node v4
        return !!value && includes(keys, key);
    });
};
