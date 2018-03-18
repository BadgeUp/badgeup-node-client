"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const ENDPT = 'achievementicons';
/**
 * Achievement icons module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
function achievementIconsResource(context) {
    const obj = common_1.common(context, ENDPT);
    /**
     * Get all achievement icons
     * @param {object} userOpts option overrides for this request
     * @returns {Promise<object[]>} A promise that resolves to an array of achievement icon identifiers
     */
    function getAll(userOpts) {
        return context.http.makeRequest({
            method: 'GET',
            url: `/v1/apps/${context.applicationId}/${ENDPT}`
        }, userOpts);
    }
    return {
        getAll,
        remove: obj.remove
    };
}
exports.achievementIconsResource = achievementIconsResource;
//# sourceMappingURL=index.js.map