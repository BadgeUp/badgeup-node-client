import { IResourceContext } from '../utils/ResourceContext';
import { Event, IEventResponseV1 } from './Event.class';
/**
 * Events resource
 */
export declare class EventsResource {
    private common;
    /**
     * Construct the Events resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext);
    create(object: Event, userOpts?: any): Promise<IEventResponseV1>;
}
