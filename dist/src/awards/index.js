"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'awards';
/**
 * Awards module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
function awardsResource(context) {
    return common_1.common(context, ENDPT);
}
exports.awardsResource = awardsResource;
//# sourceMappingURL=index.js.map