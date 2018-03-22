import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'apikeys';

/**
 * API Keys module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
// TODO: define type here
export class ApiKeysResource extends Common<any> {

    constructor(context: IResourceContext) {
        super(context, ENDPT);
    }

    /**
     * Get all possible API key scopes
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the requested API key scopes
     */
    public listScopes(userOpts?) {
        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/scopes`
        }, userOpts).then((body) => body.data);
    }
}
