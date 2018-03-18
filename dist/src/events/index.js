"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'events';
/**
 * Events module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
function eventsResource(context) {
    const obj = common_1.common(context, ENDPT);
    function create(object, userOpts) {
        return obj.create(object, userOpts);
    }
    return { create };
}
exports.eventsResource = eventsResource;
//# sourceMappingURL=index.js.map