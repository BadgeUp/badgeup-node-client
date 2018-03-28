import { IResourceContext } from '../utils/ResourceContext';
import { IEventRequest, IEventV1, IEventV2Preview } from './Event.class';
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
    /**
     * Send an event to BadgeUp to be processed, returning achievement progress status
     * @param object Sub-resource to event to create
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the provided event
     */
    create(object: IEventRequest, userOpts?: any): Promise<IEventV1>;
    createV2Preview(object: IEventRequest, userOpts?: any): Promise<IEventV2Preview>;
}
