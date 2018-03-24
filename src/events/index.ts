import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IEventRequest, IEventResponseV1 } from './Event.class';

const ENDPT = 'events';

/**
 * Events resource
 */
export class EventsResource {
    private common: Common<IEventResponseV1>;

    /**
     * Construct the Events resource
     * @param context The context to make requests as
     */
    constructor(context: IResourceContext) {
        this.common = new Common(context, ENDPT);
    }

    /** <summary>
     * Send an event to BadgeUp to be processed, returning achievement progress status
     * @param object Sub-resource to event to create
     * @param userOpts option overrides for this request
     * @returns A promise that resolves to the provided event
     * </summary>
     */
    public create(object: IEventRequest, userOpts?): Promise<IEventResponseV1> {
        return this.common.create(object, userOpts);
    }

}
