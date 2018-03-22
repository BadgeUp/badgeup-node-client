import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';

const ENDPT = 'criteria';

/**
 * Criterion module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export class criteriaResource(context: IResourceContext) {
    const obj = new Common(context, ENDPT);

    return {
        get: obj.get,
        getIterator: obj.getIterator,
        getAll: obj.getAll,
        create: obj.create,
        update: obj.update,
        remove: obj.remove
    };
}
