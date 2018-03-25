import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IAward } from './Award.class';
/**
 * Awards resource
 * @param {IResourceContext} context The context to make requests as
 */
export declare class AwardsResource extends Common<IAward> {
    constructor(context: IResourceContext);
}
