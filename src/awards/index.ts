import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IAwardResponse } from './Award.class';

const ENDPT = 'awards';

/**
 * Awards resource
 * @param {IResourceContext} context The context to make requests as
 */
export class AwardsResource extends Common<IAwardResponse> {
    constructor(context: IResourceContext) {
        super(context, ENDPT);
    }
}
