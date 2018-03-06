import { common } from "../common";
import { ResourceContext } from "../utils/ResourceContext";

const ENDPT = 'events';

/**
 * Events module
 * @param {ResourceContext} context The context to make requests in. Basically, `this`
 */
export function eventsResource(context: ResourceContext) {
    const obj = common(context, ENDPT);

    return {
        create: obj.create
    };
};
