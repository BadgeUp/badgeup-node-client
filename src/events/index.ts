import { defaultsDeep } from 'lodash';
import { Common } from '../common';
import { IResourceContext } from '../utils/ResourceContext';
import { IEventRequest, IEventResponseV1, IEventResponseV2Preview } from './Event.class';

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

    public createV2Preview(object: IEventRequest, userOpts?): Promise<IEventResponseV2Preview> {
        // TODO: test how this works with user-provided headers, should be resolved by defaultsDeep
        userOpts = defaultsDeep(userOpts, { headers: { 'X-V2-PREVIEW': 'true' } });
        return this.common.create<IEventResponseV2Preview>(object, userOpts);
    }

}
