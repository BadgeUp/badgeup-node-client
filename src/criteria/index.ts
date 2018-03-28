import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { ICriterion } from './Criterion.class';

const ENDPT = 'criteria';

/**
 * Criteria resource
 * @param {IResourceContext} context The context to make requests as
 */
export class CriteriaResource extends Common<ICriterion> {
    constructor(context: IResourceContext) {
        super(context, ENDPT);
    }
}
