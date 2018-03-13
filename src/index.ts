const defaults = require('lodash.defaultsdeep');
import * as check from 'check-types';
import { achievementIconsResource } from './achievementIcons';
import { achievementsResource } from './achievements';
import { analyticsResource } from './analytics';
import { apiKeysResource } from './apiKeys';
import { applicationsResource } from './applications';
import { awardsResource } from './awards';
import { criteriaResource } from './criteria';
import { earnedAchievementsResource } from './earnedAchievements';
import { eventsResource } from './events';
import { BadgeUpHttp } from './http';
import { metricsResource } from './metrics';
import { progressResource } from './progress';
import { IResourceContext } from './utils/ResourceContext';

export class BadgeUp {

    applicationId: string | null = null;

    // http client
    http: BadgeUpHttp;

    // resources
    public applications: ReturnType<typeof applicationsResource>;
    public achievements: ReturnType<typeof achievementsResource>;
    public _analytics: ReturnType<typeof analyticsResource>;
    public apiKeys: ReturnType<typeof apiKeysResource>;
    public awards: ReturnType<typeof awardsResource>;
    public criteria: ReturnType<typeof criteriaResource>;
    public earnedAchievements: ReturnType<typeof earnedAchievementsResource>;
    public metrics: ReturnType<typeof metricsResource>;
    public events: ReturnType<typeof eventsResource>;
    public progress: ReturnType<typeof progressResource>;
    public achievementIcons: ReturnType<typeof achievementIconsResource>;

    /**
     * Construct an instance of the BadgeUp client.
     * @param {{apiKey: string, token: string, applicationId: string, request: object }} globalOpts - Client and global options
     */
    constructor(globalOpts: IGlobalOptions) {

        // these fields are required
        check.assert.object(globalOpts, 'You must provide an options object. Please see the documentation.');
        if (!globalOpts.apiKey && !globalOpts.token) {
            throw new Error('Either globalOpts.apiKey or globalOpts.token must be an string');
        }

        // ensure the request options are an object if not defined
        globalOpts.request = defaults({}, globalOpts.request);
        globalOpts.request!.headers = defaults({}, globalOpts.request!.headers);

        // setup the Authorization header
        if (globalOpts.token) { // JWT bearer token
            check.assert.string(globalOpts.applicationId, 'You must provide your applicationId.');
            // setup the application this client is pointing to
            this.applicationId = globalOpts.applicationId!;
            globalOpts.request!.headers.authorization = 'Bearer ' + globalOpts.token;
        } else if (globalOpts.apiKey) { // BadgeUp APIKey
            let applicationId;

            try {
                applicationId = JSON.parse(Buffer.from(globalOpts.apiKey, 'base64').toString('utf8')).applicationId;
                if (!applicationId) {
                    throw new Error('applicationId not present');
                }
                this.applicationId = applicationId;
            } catch (error) {
                throw new Error('Malformed API key');
            }

            globalOpts.request!.headers.authorization = 'Basic ' + Buffer.from(globalOpts.apiKey + ':', 'ascii').toString('base64');
        }

        this.http = new BadgeUpHttp(globalOpts.request);

        this.applications = applicationsResource(this as IResourceContext);
        this.achievements = achievementsResource(this as IResourceContext);
        this._analytics = analyticsResource(this as IResourceContext);
        this.apiKeys = apiKeysResource(this as IResourceContext);
        this.awards = awardsResource(this as IResourceContext);
        this.criteria = criteriaResource(this as IResourceContext);
        this.earnedAchievements = earnedAchievementsResource(this as IResourceContext);
        this.metrics = metricsResource(this as IResourceContext);
        this.events = eventsResource(this as IResourceContext);
        this.progress = progressResource(this as IResourceContext);
        this.achievementIcons = achievementIconsResource(this as IResourceContext);
    }
}

export interface IGlobalOptions {
    apiKey?: string;
    token?: string;
    applicationId?: string;
    request?: {
        headers: {
            [key: string]: string
        };
    };
}
