"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'events';
/**
 * Events module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
class EventsResource {
    constructor(context) {
        this.common = new common_1.Common(context, ENDPT);
    }
    create(object, userOpts) {
        return this.common.create(object, userOpts);
    }
}
exports.EventsResource = EventsResource;
//# sourceMappingURL=index.js.map