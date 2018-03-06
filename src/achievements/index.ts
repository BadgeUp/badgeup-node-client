'use strict';

import { ResourceContext } from "../utils/ResourceContext";
import { common } from "../common";
import * as check from 'check-types';

const ENDPT = 'achievements';

/**
 * Achievements module
 * @param {ResourceContext} context The context to make requests in. Basically, `this`
 */
export function achievementsResource(context: ResourceContext) {
    const obj = common(context, ENDPT);

    /**
     * Retrieves a list of criteria
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of criteria
     */
    function getAchievementCriteria(id, userOpts) {
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
    function getAchievementAwards(id, userOpts) {
        check.string(id, 'id must be a string');

        return context.http.makeRequest({
            url: `/v1/apps/${context.applicationId}/${ENDPT}/${id}/awards`
        }, userOpts).then(function(body) { return body.data; });
    }

    return Object.assign(obj, { getAchievementCriteria, getAchievementAwards });
};
