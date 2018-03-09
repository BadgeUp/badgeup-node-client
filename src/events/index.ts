import { common } from "../common";
import { ResourceContext } from "../utils/ResourceContext";
import { Event } from "./Event.class";

const ENDPT = 'events';

/**
 * Events module
 * @param {ResourceContext} context The context to make requests in. Basically, `this`
 */
export function eventsResource(context: ResourceContext) {
    const obj = common(context, ENDPT);
    const create = function(object: Event, userOpts) : Promise<Event> {
        return obj.create(object, userOpts) as Promise<Event>
    };
    return {create};
};
