import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'awards';

/**
 * Awards module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class awardsResource(context: IResourceContext) {
    return new Common(context, ENDPT);
}
