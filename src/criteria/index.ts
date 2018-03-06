import { ResourceContext } from "../utils/ResourceContext";
import { common } from "../common";

const ENDPT = 'criteria';

/**
 * Criterion module
 * @param {ResourceContext} context The context to make requests in. Basically, `this`
 */
export function criteriaResource(context: ResourceContext) {
    const obj = common(context, ENDPT);

    return {
        get: obj.get,
        getIterator: obj.getIterator,
        getAll: obj.getAll,
        create: obj.create,
        update: obj.update,
        remove: obj.remove
    };
};
