'use strict';

import common from '../common';

const ENDPT = 'events';

/**
 * Events module
 * @param {object} context The context to make requests in. Basically, `this`
 */
export default function events(context) {
    const obj = common(context, ENDPT);

    return {
        create: obj.create
    };
}
