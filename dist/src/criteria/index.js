"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'criteria';
/**
 * Criterion module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
function criteriaResource(context) {
    const obj = common_1.common(context, ENDPT);
    return {
        get: obj.get,
        getIterator: obj.getIterator,
        getAll: obj.getAll,
        create: obj.create,
        update: obj.update,
        remove: obj.remove
    };
}
exports.criteriaResource = criteriaResource;
//# sourceMappingURL=index.js.map