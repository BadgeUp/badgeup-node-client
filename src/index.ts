import * as check from 'check-types';
import { defaultsDeep } from 'lodash';
import { AchievementIconsResource } from './achievementIcons';
import { AchievementsResource } from './achievements';
import { AnalyticsResource } from './analytics';
import { ApiKeysResource } from './apiKeys';
import { ApplicationsResource } from './applications';
import { AwardsResource } from './awards';
import { CriteriaResource } from './criteria';
import { EarnedAchievementsResource } from './earnedAchievements';
import { EventsResource } from './events';
import { BadgeUpHttp } from './http';
import { MetricsResource } from './metrics';
import { ProgressResource } from './progress';
import { IResourceContext } from './utils/ResourceContext';

export class BadgeUp implements IResourceContext {

    applicationId: string | null = null;

    // http client
    http: BadgeUpHttp;

    // resources
    public applications: ApplicationsResource;
    public achievements: AchievementsResource;
    public analytics: AnalyticsResource;
    public apiKeys: ApiKeysResource;
    public awards: AwardsResource;
    public criteria: CriteriaResource;
    public earnedAchievements: EarnedAchievementsResource;
    public metrics: MetricsResource;
    public events: EventsResource;
    public progress: ProgressResource;
    public achievementIcons: AchievementIconsResource;

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
        globalOpts.request = defaultsDeep({}, globalOpts.request);
        globalOpts.request!.headers = defaultsDeep({}, globalOpts.request!.headers);

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
                // TODO: test this
                if (error.message !== 'applicationId not present') {
                    throw new Error('Malformed API key');
                } else {
                    throw error;
                }
            }

            globalOpts.request!.headers.authorization = 'Basic ' + Buffer.from(globalOpts.apiKey + ':', 'ascii').toString('base64');
        }

        this.http = new BadgeUpHttp(globalOpts.request);

        this.applications = new ApplicationsResource(this);
        this.achievements = new AchievementsResource(this);
        this.analytics = new AnalyticsResource(this);
        this.apiKeys = new ApiKeysResource(this);
        this.awards = new AwardsResource(this);
        this.criteria = new CriteriaResource(this);
        this.earnedAchievements = new EarnedAchievementsResource(this);
        this.metrics = new MetricsResource(this);
        this.events = new EventsResource(this);
        this.progress = new ProgressResource(this);
        this.achievementIcons = new AchievementIconsResource(this);
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
        baseUrl?: string;
    };
}
