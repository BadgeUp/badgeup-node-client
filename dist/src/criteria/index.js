"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'criteria';
/**
 * Criterion module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
class CriteriaResource extends common_1.Common {
    constructor(context) {
        super(context, ENDPT);
    }
}
exports.CriteriaResource = CriteriaResource;
//# sourceMappingURL=index.js.map