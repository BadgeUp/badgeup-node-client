export interface ICriterionResponse {
    id: string;
    applicationId: string;
    key: string;
    name: string;
    description: string;
    meta: any;
    evaluation: ICriterionEvaluation;
}
export interface ICriterionEvaluation {
    type: string;
    operator: ICriterionOperator;
    threshold: number;
}
export declare enum ICriterionOperator {
    greater = "@gt",
    greaterOrEqual = "@gte",
    less = "@lt",
    lessOrEqual = "@lte",
    equal = "@eq",
}
