"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check = require("check-types");
const lodash_1 = require("lodash");
const achievementIcons_1 = require("./achievementIcons");
const achievements_1 = require("./achievements");
const analytics_1 = require("./analytics");
const apiKeys_1 = require("./apiKeys");
const applications_1 = require("./applications");
const awards_1 = require("./awards");
const criteria_1 = require("./criteria");
const earnedAchievements_1 = require("./earnedAchievements");
const events_1 = require("./events");
const http_1 = require("./http");
const metrics_1 = require("./metrics");
const progress_1 = require("./progress");
class BadgeUp {
    /**
     * Construct an instance of the BadgeUp client.
     * @param {{apiKey: string, token: string, applicationId: string, request: object }} globalOpts - Client and global options
     */
    constructor(globalOpts) {
        this.applicationId = null;
        // these fields are required
        check.assert.object(globalOpts, 'You must provide an options object. Please see the documentation.');
        if (!globalOpts.apiKey && !globalOpts.token) {
            throw new Error('Either globalOpts.apiKey or globalOpts.token must be an string');
        }
        // ensure the request options are an object if not defined
        globalOpts.request = lodash_1.defaultsDeep({}, globalOpts.request);
        globalOpts.request.headers = lodash_1.defaultsDeep({}, globalOpts.request.headers);
        // setup the Authorization header
        if (globalOpts.token) { // JWT bearer token
            check.assert.string(globalOpts.applicationId, 'You must provide your applicationId.');
            // setup the application this client is pointing to
            this.applicationId = globalOpts.applicationId;
            globalOpts.request.headers.authorization = 'Bearer ' + globalOpts.token;
        }
        else if (globalOpts.apiKey) { // BadgeUp APIKey
            let applicationId;
            try {
                applicationId = JSON.parse(Buffer.from(globalOpts.apiKey, 'base64').toString('utf8')).applicationId;
                if (!applicationId) {
                    throw new Error('applicationId not present');
                }
                this.applicationId = applicationId;
            }
            catch (error) {
                throw new Error('Malformed API key');
            }
            globalOpts.request.headers.authorization = 'Basic ' + Buffer.from(globalOpts.apiKey + ':', 'ascii').toString('base64');
        }
        this.http = new http_1.BadgeUpHttp(globalOpts.request);
        this.applications = applications_1.applicationsResource(this);
        this.achievements = achievements_1.achievementsResource(this);
        this._analytics = analytics_1.analyticsResource(this);
        this.apiKeys = apiKeys_1.apiKeysResource(this);
        this.awards = awards_1.awardsResource(this);
        this.criteria = criteria_1.criteriaResource(this);
        this.earnedAchievements = earnedAchievements_1.earnedAchievementsResource(this);
        this.metrics = metrics_1.metricsResource(this);
        this.events = events_1.eventsResource(this);
        this.progress = progress_1.progressResource(this);
        this.achievementIcons = achievementIcons_1.achievementIconsResource(this);
    }
}
exports.BadgeUp = BadgeUp;
//# sourceMappingURL=index.js.map