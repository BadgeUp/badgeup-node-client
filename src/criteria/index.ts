import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { ICriterionResponse } from './Criterion.class';

const ENDPT = 'criteria';

/**
 * Criterion module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class CriteriaResource extends Common<ICriterionResponse> {
    constructor(context: IResourceContext) {
        super(context, ENDPT);
    }
}
