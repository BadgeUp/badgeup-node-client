"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check = require("check-types");
const common_1 = require("../common");
const ENDPT = 'achievements';
/**
 * Achievements module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
class AchievementsResource extends common_1.Common {
    constructor(context) {
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
    getAchievementCriteria(id, userOpts) {
        check.string(id, 'id must be a string');
        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/${id}/criteria`
        }, userOpts).then(function (body) { return body.data; });
    }
    /**
     * Retrieves a list of awards
     * @param id ID of the achievement to retrieve criteria for
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object>} Promise that resolves with the list of awards
     */
    getAchievementAwards(id, userOpts) {
        check.string(id, 'id must be a string');
        return this.context.http.makeRequest({
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}/${id}/awards`
        }, userOpts).then((body) => body.data);
    }
}
exports.AchievementsResource = AchievementsResource;
//# sourceMappingURL=index.js.map