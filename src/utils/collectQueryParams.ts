const pickBy = require('lodash.pickby');

export function collectQueryParams(source, keys: string[]) {
    return pickBy(source, function(value, key) {
        return !!value && keys.includes(key);
    });
};
