import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IAwardResponse } from './Award.class';
/**
 * Awards resource
 * @param {IResourceContext} context The context to make requests as
 */
export declare class AwardsResource extends Common<IAwardResponse> {
    constructor(context: IResourceContext);
}
