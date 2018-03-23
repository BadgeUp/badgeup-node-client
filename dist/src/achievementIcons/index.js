"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'achievementicons';
/**
 * Achievement icons resource
 */
class AchievementIconsResource {
    /**
     * Construct the achievement icons resource
     * @param context The context to make requests as
     */
    constructor(context) {
        this.context = context;
        this.common = new common_1.Common(context, ENDPT);
    }
    /**
     * Get all achievement icons
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to an array of achievement icon identifiers
     */
    getAll(userOpts) {
        return this.context.http.makeRequest({
            method: 'GET',
            url: `/v1/apps/${this.context.applicationId}/${ENDPT}`
        }, userOpts);
    }
    remove(id, userOpts) {
        return this.common.remove(id, userOpts);
    }
}
exports.AchievementIconsResource = AchievementIconsResource;
//# sourceMappingURL=index.js.map