import { IAwardResponse } from '../awards/Award.class';
import { ICriterionResponse } from '../criteria/Criterion.class';
import { Condition } from '../progress/Progress.class';
import { IMeta } from '../utils/Meta.class';

export interface IAchievementResponse {
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
    criteria: ICriterionResponse[];
    awards: IAwardResponse[];
}

export interface IEvalTreeGroup {
    type: string;
    condition: Condition;
    groups: IEvalTreeGroup[];
    criteria: ICriterionResponse[];
}

export interface IAchievementMeta extends IMeta {
    icon: string;
}

