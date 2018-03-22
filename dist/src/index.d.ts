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
export declare class BadgeUp implements IResourceContext {
    applicationId: string | null;
    http: BadgeUpHttp;
    applications: ApplicationsResource;
    achievements: AchievementsResource;
    _analytics: AnalyticsResource;
    apiKeys: ApiKeysResource;
    awards: AwardsResource;
    criteria: CriteriaResource;
    earnedAchievements: EarnedAchievementsResource;
    metrics: MetricsResource;
    events: EventsResource;
    progress: ProgressResource;
    achievementIcons: AchievementIconsResource;
    /**
     * Construct an instance of the BadgeUp client.
     * @param {{apiKey: string, token: string, applicationId: string, request: object }} globalOpts - Client and global options
     */
    constructor(globalOpts: IGlobalOptions);
}
export interface IGlobalOptions {
    apiKey?: string;
    token?: string;
    applicationId?: string;
    request?: {
        headers: {
            [key: string]: string;
        };
    };
}
