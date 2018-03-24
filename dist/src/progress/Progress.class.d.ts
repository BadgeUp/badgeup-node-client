import { IAchievementResponse } from '../achievements/Achievement.class';
export interface IProgress {
    /**
     * States if the achievement has been earned.
     */
    isComplete: boolean;
    /**
     * Overall completion of the achievement represented as a percentage. A value of 1 indicates that the achievement is 100% complete.
     */
    percentComplete: number;
    /**
     * An object that defines the evaluation logic of associated criteria.
     */
    progressTree: IProgressTree;
    /**
     * A string that uniquely identifies this achievement.
     */
    achievementId: string;
    /**
     * The root achievement document.
     */
    achievement: IAchievementResponse;
    /**
     * A string that uniquely identifies this most recently earned achievement.
     */
    earnedAchievementId: string;
}
export interface IProgressTree {
    criteria: {
        [key: string]: number;
    };
    type: string;
    condition: Condition;
    groups: IProgressTree[];
}
export declare enum Condition {
    and = "AND",
    or = "OR",
}
