import { IMeta } from '../utils/Meta.class';

export interface IEarnedAchievementResponse {
    id: string;
    applicationId: string;
    achievementId: string;
    subject: string;
    meta: IMeta;
}
