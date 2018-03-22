import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
/**
 * API Keys module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare class ApiKeysResource extends Common<any> {
    constructor(context: IResourceContext);
    /**
     * Get all possible API key scopes
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the requested API key scopes
     */
    listScopes(userOpts?: any): Promise<any>;
}
