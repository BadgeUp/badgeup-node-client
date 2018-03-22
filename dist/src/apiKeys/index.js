"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'apikeys';
/**
 * API Keys module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
// TODO: define type here
class ApiKeysResource extends common_1.Common {
    constructor(context) {
        super(context, ENDPT);
    }
    /**
     * Get all possible API key scopes
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the requested API key scopes
     */
    listScopes(userOpts) {
        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/scopes`
        }, userOpts).then((body) => body.data);
    }
}
exports.ApiKeysResource = ApiKeysResource;
//# sourceMappingURL=index.js.map