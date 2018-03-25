import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IAward } from './Award.class';

const ENDPT = 'awards';

/**
 * Awards resource
 * @param {IResourceContext} context The context to make requests as
 */
export class AwardsResource extends Common<IAward> {
    constructor(context: IResourceContext) {
        super(context, ENDPT);
    }
}
