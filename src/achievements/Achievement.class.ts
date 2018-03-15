import { IAwardResponse } from '../awards/Award.class';
import { ICriterionResponse } from '../criteria/Criterion.class';

export interface IAchievementResponse {
    id: string;
    applicationId: string;
    name: string;
    description: string;
    evalTree: IEvalTreeGroup;
    awards: string[];
    meta: {
        // TODO extend existing meta
        icon: string;
    };
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
    condition: string;
    groups: IEvalTreeGroup[];
    criteria: any; // TODO
}
