"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'apikeys';
/**
 * API Keys module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
function apiKeysResource(context) {
    const obj = common_1.common(context, ENDPT);
    /**
     * Get all possible API key scopes
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the requested API key scopes
     */
    function listScopes(userOpts) {
        return context.http.makeRequest({
            url: `/v1/apps/${context.applicationId}/${ENDPT}/scopes`
        }, userOpts).then((body) => body.data);
    }
    return {
        getAll: obj.getAll,
        getIterator: obj.getIterator,
        create: obj.create,
        remove: obj.remove,
        update: obj.update,
        listScopes
    };
}
exports.apiKeysResource = apiKeysResource;
//# sourceMappingURL=index.js.map