import { IAward } from '../awards/Award.class';
import { ICriterion } from '../criteria/Criterion.class';
import { Condition } from '../progress/Progress.class';
import { IMeta } from '../utils/Meta.class';

export interface IAchievementRequest {
    name: string;
    description: string;
    evalTree?: IEvalTreeGroup;
    options?: {
        suspended?: boolean;
        earnLimit?: number;
    };
    meta?: {
        icon: string;
        [x: string]: any;
    }
}

export interface IAchievement extends IAchievementRequest {
    id: string;
    applicationId: string;
    awards: string[];
    evalTree: IEvalTreeGroup;
    resources: IAchievementResource;
    meta: IAchievementMeta;
}

export interface IAchievementResource {
    criteria: ICriterion[];
    awards: IAward[];
}

export interface IEvalTreeGroup {
    type: string;
    condition: Condition;
    groups: IEvalTreeGroup[];
    criteria: string[];
}

export interface IAchievementMeta extends IMeta {
    icon: string;
}

