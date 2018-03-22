import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IAwardResponse } from './Award.class';
/**
 * Awards module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare class AwardsResource extends Common<IAwardResponse> {
    constructor(context: IResourceContext);
}
