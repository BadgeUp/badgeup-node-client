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
export declare class BadgeUp {
    applicationId: string | null;
    http: BadgeUpHttp;
    applications: ReturnType<typeof applicationsResource>;
    achievements: ReturnType<typeof achievementsResource>;
    _analytics: ReturnType<typeof analyticsResource>;
    apiKeys: ReturnType<typeof apiKeysResource>;
    awards: ReturnType<typeof awardsResource>;
    criteria: ReturnType<typeof criteriaResource>;
    earnedAchievements: ReturnType<typeof earnedAchievementsResource>;
    metrics: ReturnType<typeof metricsResource>;
    events: ReturnType<typeof eventsResource>;
    progress: ReturnType<typeof progressResource>;
    achievementIcons: ReturnType<typeof achievementIconsResource>;
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
