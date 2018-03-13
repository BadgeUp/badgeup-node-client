import { common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'criteria';

/**
 * Criterion module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export function criteriaResource(context: IResourceContext) {
    const obj = common(context, ENDPT);

    return {
        get: obj.get,
        getIterator: obj.getIterator,
        getAll: obj.getAll,
        create: obj.create,
        update: obj.update,
        remove: obj.remove
    };
}
