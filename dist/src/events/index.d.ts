import { IResourceContext } from '../utils/ResourceContext';
import { IEventRequest, IEventResponseV1 } from './Event.class';
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
    /** <summary>
     * Send an event to BadgeUp to be processed, returning achievement progress status
     * @param object Sub-resource to event to create
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the provided event
     * </summary>
     */
    create(object: IEventRequest, userOpts?: any): Promise<IEventResponseV1>;
}
