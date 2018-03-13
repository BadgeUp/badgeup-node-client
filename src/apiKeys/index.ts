import { common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'apikeys';

/**
 * API Keys module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export function apiKeysResource(context: IResourceContext) {
    const obj = common(context, ENDPT);

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
