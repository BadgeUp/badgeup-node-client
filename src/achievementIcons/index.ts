import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'achievementicons';

/**
 * Achievement icons module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class achievementIconsResource {
    private common: Common;
    private context: IResourceContext

    constructor(context: IResourceContext) {
        this.context = context;
        this.common = new Common(context, ENDPT);
    }

    /**
     * Get all achievement icons
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} A promise that resolves to an array of achievement icon identifiers
     */
    getAll(userOpts?) {
        return this.context.http.makeRequest({
            method: 'GET',
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}`
        }, userOpts);
    }

    remove(id: string, userOpts?) {
        return this.common.remove(id, userOpts);
    }
}
