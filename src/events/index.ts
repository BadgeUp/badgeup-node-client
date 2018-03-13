import { common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { Event } from './Event.class';

const ENDPT = 'events';

/**
 * Events module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export function eventsResource(context: IResourceContext) {
    const obj = common(context, ENDPT);

    function create(object: Event, userOpts): Promise<Event> {
        return obj.create(object, userOpts) as Promise<Event>;
    };

    return { create };
}
