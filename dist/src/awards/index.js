"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'awards';
/**
 * Awards module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
class AwardsResource extends common_1.Common {
    constructor(context) {
        super(context, ENDPT);
    }
}
exports.AwardsResource = AwardsResource;
//# sourceMappingURL=index.js.map