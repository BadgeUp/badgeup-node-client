import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'achievementicons';

/**
 * Achievement icons resource
 */
export class AchievementIconsResource {
    private common: Common<any>;
    private context: IResourceContext;

    /**
     * Construct the achievement icons resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext) {
        this.context = context;
        this.common = new Common(context, ENDPT);
    }

    /**
     * Get all achievement icons
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to an array of achievement icon identifiers
     */
    public getAll(userOpts?) {
        return this.context.http.makeRequest({
            method: 'GET',
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}`
        }, userOpts);
    }

    public remove(id: string, userOpts?) {
        return this.common.remove(id, userOpts);
    }
}
