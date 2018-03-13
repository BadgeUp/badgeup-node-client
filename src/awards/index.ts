import { common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'awards';

/**
 * Awards module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export function awardsResource(context: IResourceContext) {
    return common(context, ENDPT);
}
