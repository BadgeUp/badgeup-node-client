import * as check from 'check-types';
import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'achievements';

/**
 * Achievements module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class achievementsResource {

    constructor(context: IResourceContext) {
        const obj = new Common(context, ENDPT);
    }

    /**
     * Retrieves a list of criteria
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of criteria
     */
    getAchievementCriteria(id: string, userOpts?) {
        check.string(id, 'id must be a string');

        return context.http.makeRequest({
            url: `/v1/apps/${context.applicationId}/${ENDPT}/${id}/criteria`
        }, userOpts).then(function(body) { return body.data; });
    }

    /**
     * Retrieves a list of awards
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of awards
     */
    getAchievementAwards(id: string, userOpts?) {
        check.string(id, 'id must be a string');

        return context.http.makeRequest({
            url: `/v1/apps/${context.applicationId}/${ENDPT}/${id}/awards`
        }, userOpts).then((body) => body.data);
    }

    return Object.assign(obj, { getAchievementCriteria, getAchievementAwards });
}
