import { IResourceContext } from '../utils/ResourceContext';
import { Event, IEventResponseV1 } from './Event.class';
/**
 * Events module
 * @param {IResourceContext} context The context to make requests in. Basically, `this`
 */
export declare function eventsResource(context: IResourceContext): {
    create: (object: Event, userOpts?: any) => Promise<IEventResponseV1>;
};
