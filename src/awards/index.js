'use strict';

import common from './../common';

const ENDPT = 'awards';

/**
 * Awards module
 * @param {object} context The context to make requests in. Basically, `this`
 */
export default function awards(context) {
    return common(context, ENDPT);
}
