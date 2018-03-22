"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'achievementicons';
/**
 * Achievement icons module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
class AchievementIconsResource {
    constructor(context) {
        this.context = context;
        this.common = new common_1.Common(context, ENDPT);
    }
    /**
     * Get all achievement icons
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} A promise that resolves to an array of achievement icon identifiers
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