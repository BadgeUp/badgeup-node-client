export interface ICriterionResponse {
    id: string;
    applicationId: string;
    key: string;
    name: string;
    description: string;
    // TODO extend existing meta
    meta: any;
    evaluation: ICriterionEvaluation;
}

export interface ICriterionEvaluation {
    type: string;
    operator: ICriterionOperator;
    threshold: number;
}

export enum ICriterionOperator {
    greater = "@gt",
    greaterOrEqual = "@gte",
    less = "@lt",
    lessOrEqual = "@lte",
    equal = "@eq"
}
