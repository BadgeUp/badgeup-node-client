import { IAchievementResponse } from "../achievements/Achievement.class";

export interface IProgress {
    isComplete: boolean;
    percentComplete: number;
    progressTree: IProgressGroup;
    achievementId: string;
    achievement: IAchievementResponse;
    earnedAchievementId: string;
    isNew: boolean;
}

export interface IProgressGroup {
    [key: string]: number;
}
