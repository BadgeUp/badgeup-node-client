import { common } from "../common";
import { ResourceContext } from "../utils/ResourceContext";

const ENDPT = 'apikeys';

/**
 * API Keys module
 * @param {ResourceContext} context The context to make requests in. Basically, `this`
 */
export function apiKeysResource(context: ResourceContext) {
    const obj = common(context, ENDPT);

    /**
     * Get all possible API key scopes
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the requested API key scopes
     */
    function listScopes(userOpts) {
        return context.http.makeRequest({
            url: `/v1/apps/${context.applicationId}/${ENDPT}/scopes`
        }, userOpts).then(function(body) { return body.data; });
    }

    return {
        getAll: obj.getAll,
        getIterator: obj.getIterator,
        create: obj.create,
        remove: obj.remove,
        update: obj.update,
        listScopes
    };
};
