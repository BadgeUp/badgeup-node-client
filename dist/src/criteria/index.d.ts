import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { ICriterion } from './Criterion.class';
/**
 * Criteria resource
 * @param {IResourceContext} context The context to make requests as
 */
export declare class CriteriaResource extends Common<ICriterion> {
    constructor(context: IResourceContext);
}
