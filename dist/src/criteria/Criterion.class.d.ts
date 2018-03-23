import { IMeta } from '../utils/Meta.class';
export interface ICriterionResponse {
    id: string;
    applicationId: string;
    key: string;
    name: string;
    description: string;
    meta: IMeta;
    evaluation: ICriterionEvaluation;
}
export interface ICriterionEvaluation {
    type: string;
    operator: ICriterionOperator;
    threshold: number;
    repeatOptions: any;
    period: any;
    multiplicity: any;
}
export declare enum ICriterionOperator {
    greater = "@gt",
    greaterOrEqual = "@gte",
    less = "@lt",
    lessOrEqual = "@lte",
    equal = "@eq",
}
