import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { ICriterionResponse } from './Criterion.class';
/**
 * Criterion module
 * @param {IResourceContext} context The context to make requests as
 */
export declare class CriteriaResource extends Common<ICriterionResponse> {
    constructor(context: IResourceContext);
}
