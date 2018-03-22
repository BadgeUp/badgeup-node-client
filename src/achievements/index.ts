import * as check from 'check-types';
import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IAchievementResponse } from './Achievement.class';

const ENDPT = 'achievements';

/**
 * Achievements module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class AchievementsResource extends Common<IAchievementResponse> {

    constructor(context: IResourceContext) {
        super(context, ENDPT);
       // this.common = new Common(context, ENDPT);
        // this.context = context;
    }

    /**
     * Retrieves a list of criteria
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of criteria
     */
    public getAchievementCriteria(id: string, userOpts?) {
        check.string(id, 'id must be a string');

        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/${id}/criteria`
        }, userOpts).then(function(body) { return body.data; });
    }

    /**
     * Retrieves a list of awards
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of awards
     */
    public getAchievementAwards(id: string, userOpts?) {
        check.string(id, 'id must be a string');

        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/${id}/awards`
        }, userOpts).then((body) => body.data);
    }
}
