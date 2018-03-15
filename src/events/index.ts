import { common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { Event, IEventResponseV1 } from './Event.class';

const ENDPT = 'events';

/**
 * Events module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export function eventsResource(context: IResourceContext) {
    const obj = common(context, ENDPT);

    function create(object: Event, userOpts?): Promise<IEventResponseV1> {
        return obj.create(object, userOpts) as Promise<IEventResponseV1>;
    }

    return { create };
}
