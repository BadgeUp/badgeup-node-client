import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IApiKey, IApiKeyScope } from './ApiKey.class';

const ENDPT = 'apikeys';

/**
 * API Keys resource
 */
export class ApiKeysResource {
    private common: Common<IApiKey>;
    private context: IResourceContext;

    /**
     * Construct the API Keys resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext) {
        this.context = context;
        this.common = new Common(context, ENDPT);
    }

    /**
     * Retrieve all objects, returned as an iterator
     * @param userOpts option overrides for this request
     * @return An iterator that returns promises that resolve with the next object
     */
    *getIterator(userOpts?): IterableIterator<Promise<IApiKey>> {
        return this.common.getIterator(userOpts);
    }

    /**
     * Retrieve all API Keys, returned as an array
     * @param userOpts option overrides for this request
     * @returns Promise that resolves to an array of API Keys
     */
    getAll(userOpts?): Promise<IApiKey[]> {
        return this.common.getAll(userOpts);
    }

    /**
     * Updates an API Key by ID
     * @param id ID of the API Key to update
     * @param updates JSON patch updates
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the updated API Key
     */
    update(id: string, updates: any[], userOpts?): Promise<IApiKey> {
        return this.common.update(id, updates, userOpts);
    }

    /**
     * Create an API Key
     * @param apiKey API Key to create
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the API Key
     */
    create(apiKey: IApiKey, userOpts?): Promise<IApiKey> {
        return this.common.create(apiKey, userOpts);
    }

    /**
     * Delete an API Key by ID
     * @param id ID of the API Key to delete
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the deleted API Key
     */
    public remove(id: string, userOpts?): Promise<IApiKey> {
        return this.common.remove(id, userOpts);
    }

    /**
     * Get all possible API key scopes
     * @param userOpts option overrides for this request
     * @returns Promise that resolves with the requested API key scopes
     */
    public listScopes(userOpts?): Promise<IApiKeyScope[]> {
        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/scopes`
        }, userOpts).then((body) => body.data);
    }
}
