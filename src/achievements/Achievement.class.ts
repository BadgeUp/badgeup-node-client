import { IAward } from '../awards/Award.class';
import { ICriterion } from '../criteria/Criterion.class';
import { Condition } from '../progress/Progress.class';
import { IMeta } from '../utils/Meta.class';

export interface IAchievement {
    id: string;
    applicationId: string;
    name: string;
    description: string;
    evalTree: IEvalTreeGroup;
    awards: string[];
    meta: IAchievementMeta;
    options: {
        suspended: boolean;
    };
    resources: IAchievementResource;
}

export interface IAchievementResource {
    criteria: ICriterion[];
    awards: IAward[];
}

export interface IEvalTreeGroup {
    type: string;
    condition: Condition;
    groups: IEvalTreeGroup[];
    criteria: ICriterion[];
}

export interface IAchievementMeta extends IMeta {
    icon: string;
}

