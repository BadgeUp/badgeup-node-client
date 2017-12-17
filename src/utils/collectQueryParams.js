'use strict';

import pickBy from 'lodash/pickBy';
import includes from 'lodash/includes';

export default function collectQueryParams(source, keys) {
    return pickBy(source, function(value, key) {
        // TODO switch to Array.prototype.includes when we drop support for Node v4
        return !!value && includes(keys, key);
    });
}
